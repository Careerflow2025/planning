import { classifyWithHaiku, generateText } from './claude';
import { createServiceRoleClient } from '@/lib/supabase/server';
import type { GeneratedDocument, QualityScores } from '@/types';

interface ValidationParams {
  assessmentTypeName: string;
  templateSections: { name: string; required: boolean; min_words: number; max_words: number }[];
  projectData: {
    site_address: string;
    postcode: string;
    site_constraints: Record<string, unknown>;
  };
}

export async function validateDocument(
  document: GeneratedDocument,
  params: ValidationParams
): Promise<QualityScores> {
  const [structureScore, policyScore, factualScore, professionalScore] =
    await Promise.all([
      validateStructure(document, params),
      validatePolicyReferences(document),
      validateFactualConsistency(document, params),
      validateProfessionalQuality(document, params),
    ]);

  const overall =
    structureScore * 0.2 +
    policyScore * 0.3 +
    factualScore * 0.2 +
    professionalScore * 0.3;

  return {
    structure_score: structureScore,
    policy_accuracy_score: policyScore,
    factual_score: factualScore,
    professional_score: professionalScore,
    overall_score: Math.round(overall),
  };
}

async function validateStructure(
  document: GeneratedDocument,
  params: ValidationParams
): Promise<number> {
  const requiredSections = params.templateSections.filter((s) => s.required);
  const presentSections = document.sections.map((s) => s.name.toLowerCase());

  let score = 100;
  let issues = 0;

  for (const required of requiredSections) {
    const found = presentSections.some(
      (ps) =>
        ps.includes(required.name.toLowerCase()) ||
        required.name.toLowerCase().includes(ps)
    );
    if (!found) {
      issues++;
      score -= 15;
    }
  }

  // Check word counts
  for (const section of document.sections) {
    const template = params.templateSections.find(
      (ts) => ts.name.toLowerCase() === section.name.toLowerCase()
    );
    if (template) {
      if (section.word_count < template.min_words * 0.7) score -= 5;
      if (section.word_count > template.max_words * 1.5) score -= 3;
    }
  }

  return Math.max(0, Math.min(100, score));
}

async function validatePolicyReferences(
  document: GeneratedDocument
): Promise<number> {
  const allRefs = document.sections.flatMap((s) => s.policy_refs);
  if (allRefs.length === 0) return 50; // No refs is bad

  const supabase = await createServiceRoleClient();

  let validCount = 0;
  let checkedCount = 0;

  // Batch check NPPF references
  const nppfRefs = allRefs.filter((r) => r.toLowerCase().includes('nppf'));
  if (nppfRefs.length > 0) {
    const nppfParas = nppfRefs
      .map((r) => {
        const match = r.match(/\d+/);
        return match ? parseInt(match[0]) : null;
      })
      .filter(Boolean);

    const { data } = await supabase
      .from('policy_documents')
      .select('reference')
      .eq('source', 'nppf')
      .in('reference', nppfRefs);

    validCount += data?.length ?? 0;
    checkedCount += nppfParas.length;
  }

  // Check local policy references
  const localRefs = allRefs.filter((r) => r.toLowerCase().startsWith('policy'));
  if (localRefs.length > 0) {
    const { data } = await supabase
      .from('policy_documents')
      .select('reference')
      .eq('source', 'local_plan')
      .in('reference', localRefs);

    validCount += data?.length ?? 0;
    checkedCount += localRefs.length;
  }

  if (checkedCount === 0) return 70;
  return Math.round((validCount / checkedCount) * 100);
}

async function validateFactualConsistency(
  document: GeneratedDocument,
  params: ValidationParams
): Promise<number> {
  const fullText = document.sections.map((s) => s.content).join('\n\n');
  const truncated = fullText.slice(0, 3000);

  const prompt = `Review this planning assessment extract for factual consistency.

KNOWN FACTS:
- Site address: ${params.projectData.site_address}
- Postcode: ${params.projectData.postcode}
- Site constraints: ${JSON.stringify(params.projectData.site_constraints)}

DOCUMENT EXTRACT:
${truncated}

Check for:
1. Does the document mention the correct site address and postcode?
2. Are site constraints accurately described?
3. Are there any internal contradictions between sections?
4. Are there any invented statistics or fabricated data?

Score out of 100. Return ONLY the number.`;

  const result = await classifyWithHaiku(
    'You are a planning document quality reviewer. Return only a numeric score 0-100.',
    prompt
  );

  const score = parseInt(result.trim());
  return isNaN(score) ? 70 : Math.min(100, Math.max(0, score));
}

async function validateProfessionalQuality(
  document: GeneratedDocument,
  params: ValidationParams
): Promise<number> {
  const sampleSections = document.sections.slice(0, 3);
  const sampleText = sampleSections
    .map((s) => `## ${s.name}\n${s.content.slice(0, 500)}`)
    .join('\n\n');

  const prompt = `You are a senior planning consultant with 20 years experience reviewing a ${params.assessmentTypeName}.

Review this document extract for professional quality:

${sampleText}

Score 0-100 on:
- Clarity and readability (25%)
- Appropriate planning terminology (25%)
- Evidence-based conclusions (25%)
- Professional tone and structure (25%)

Return ONLY the numeric score.`;

  const result = await generateText({
    systemPrompt: 'You are a senior UK planning consultant. Return only a numeric score.',
    userPrompt: prompt,
    model: 'claude-haiku-4-5-20251001',
    maxTokens: 10,
  });

  const score = parseInt(result.trim());
  return isNaN(score) ? 70 : Math.min(100, Math.max(0, score));
}
