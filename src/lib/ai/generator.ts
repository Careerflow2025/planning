import { generateText, type ClaudeModel } from './claude';
import { retrieveContext } from './rag';
import type {
  GeneratedDocument,
  GeneratedSection,
  QualityScores,
  AssessmentSection,
} from '@/types';
import { validateDocument } from './validator';

interface GenerateAssessmentParams {
  assessmentTypeId: string;
  assessmentTypeName: string;
  projectData: {
    name: string;
    site_address: string;
    postcode: string;
    lpa_name: string;
    development_type: string;
    development_description: string;
    num_units?: number;
    floor_area_sqm?: number;
    site_area_hectares?: number;
    use_class?: string;
    site_constraints: Record<string, unknown>;
  };
  lpaCode?: string;
  templateSections: AssessmentSection[];
  systemPrompt: string;
}

export async function generateAssessment(
  params: GenerateAssessmentParams
): Promise<GeneratedDocument> {
  // Step 1: Retrieve context
  const context = await retrieveContext({
    query: `${params.assessmentTypeName} for ${params.projectData.development_type} development at ${params.projectData.site_address}`,
    assessment_type: params.assessmentTypeId,
    lpa_code: params.lpaCode,
  });

  // Step 2: Generate outline
  const outline = await generateOutline(params, context);

  // Step 3: Generate sections
  let runningSummary = '';
  const sections: GeneratedSection[] = [];

  for (let i = 0; i < outline.length; i++) {
    const section = outline[i];
    const model = selectModelForSection(section);

    const sectionContent = await generateSection({
      section,
      projectData: params.projectData,
      context,
      runningSummary,
      systemPrompt: params.systemPrompt,
      model,
    });

    sections.push(sectionContent);

    // Update running summary for coherence
    runningSummary += `\n${section.name}: ${summarizeSection(sectionContent.content)}`;
  }

  // Step 4: Assemble document
  const document: GeneratedDocument = {
    title: `${params.assessmentTypeName} - ${params.projectData.site_address}`,
    sections,
    metadata: {
      generated_at: new Date().toISOString(),
      model_used: 'claude-sonnet-4-6',
      total_tokens: 0,
      quality_scores: {
        structure_score: 0,
        policy_accuracy_score: 0,
        factual_score: 0,
        professional_score: 0,
        overall_score: 0,
      },
    },
  };

  // Step 5: Quality assurance
  const qualityScores = await validateDocument(document, params);
  document.metadata.quality_scores = qualityScores;

  // Step 6: Targeted regeneration for low-scoring sections
  await regenerateLowScoringSections(document, params, context, runningSummary);

  return document;
}

async function generateOutline(
  params: GenerateAssessmentParams,
  context: Awaited<ReturnType<typeof retrieveContext>>
): Promise<AssessmentSection[]> {
  const templateSections = params.templateSections;

  if (templateSections.length > 0) return templateSections;

  const prompt = `Generate a section outline for a ${params.assessmentTypeName} for the following project:
Site: ${params.projectData.site_address} (${params.projectData.postcode})
LPA: ${params.projectData.lpa_name}
Development: ${params.projectData.development_description}
Type: ${params.projectData.development_type}

Return a JSON array of sections with: name, description, required (boolean), min_words, max_words, guidance.`;

  const result = await generateText({
    systemPrompt: params.systemPrompt,
    userPrompt: prompt,
    model: 'claude-sonnet-4-6',
    maxTokens: 2048,
  });

  try {
    const jsonMatch = result.match(/\[[\s\S]*\]/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : templateSections;
  } catch {
    return templateSections;
  }
}

function selectModelForSection(section: AssessmentSection): ClaudeModel {
  const complexSections = [
    'policy analysis',
    'impact assessment',
    'site analysis',
    'design rationale',
    'heritage significance',
    'flood risk',
  ];

  const sectionNameLower = section.name.toLowerCase();
  const isComplex = complexSections.some((cs) => sectionNameLower.includes(cs));

  if (isComplex && section.max_words > 1000) return 'claude-sonnet-4-6';
  if (section.max_words < 300) return 'claude-haiku-4-5-20251001';
  return 'claude-sonnet-4-6';
}

interface GenerateSectionParams {
  section: AssessmentSection;
  projectData: GenerateAssessmentParams['projectData'];
  context: Awaited<ReturnType<typeof retrieveContext>>;
  runningSummary: string;
  systemPrompt: string;
  model: ClaudeModel;
}

async function generateSection(
  params: GenerateSectionParams
): Promise<GeneratedSection> {
  const { section, projectData, context, runningSummary, systemPrompt, model } = params;

  const policyContext = context.policies
    .slice(0, 5)
    .map((p) => `[${p.source}]: ${p.content}`)
    .join('\n\n');

  const exampleContext = context.examples
    .slice(0, 3)
    .map((e) => `[Example]: ${e.content}`)
    .join('\n\n');

  const prompt = `Write the "${section.name}" section of this ${projectData.development_type} planning assessment.

PROJECT DETAILS:
- Site: ${projectData.site_address} (${projectData.postcode})
- Development: ${projectData.development_description}
- Constraints: ${JSON.stringify(projectData.site_constraints)}

SECTION GUIDANCE:
${section.guidance}
Target: ${section.min_words}-${section.max_words} words.

RELEVANT POLICIES:
${policyContext}

EXAMPLE CONTENT:
${exampleContext}

DOCUMENT CONTEXT SO FAR:
${runningSummary || 'This is the first section.'}

Write professionally. Reference specific policy numbers. Do not invent policies or statistics.`;

  const content = await generateText({
    systemPrompt,
    userPrompt: prompt,
    model,
    maxTokens: Math.min(section.max_words * 2, 4096),
    temperature: 0.3,
  });

  const policyRefs = extractPolicyRefs(content);

  return {
    id: crypto.randomUUID(),
    name: section.name,
    content,
    word_count: content.split(/\s+/).length,
    quality_score: null,
    policy_refs: policyRefs,
    version: 1,
  };
}

function extractPolicyRefs(text: string): string[] {
  const patterns = [
    /NPPF\s+(?:para(?:graph)?\.?\s*)?(\d+)/gi,
    /Policy\s+([A-Z]{1,3}\d{1,3})/gi,
    /PPG\s+(?:para(?:graph)?\.?\s*)?(\d+)/gi,
    /(?:Section|Part)\s+(\d+[A-Z]?)\s+of\s+the/gi,
  ];

  const refs = new Set<string>();
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      refs.add(match[0].trim());
    }
  }

  return Array.from(refs);
}

function summarizeSection(content: string): string {
  const sentences = content.split(/[.!?]+/).filter(Boolean);
  return sentences.slice(0, 2).join('. ').slice(0, 200);
}

async function regenerateLowScoringSections(
  document: GeneratedDocument,
  params: GenerateAssessmentParams,
  context: Awaited<ReturnType<typeof retrieveContext>>,
  runningSummary: string,
  maxAttempts = 2
): Promise<void> {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const lowSections = document.sections.filter(
      (s) => s.quality_score !== null && s.quality_score < 7
    );

    if (lowSections.length === 0) break;

    for (const section of lowSections) {
      const templateSection = params.templateSections.find(
        (ts) => ts.name === section.name
      );
      if (!templateSection) continue;

      const regenerated = await generateSection({
        section: templateSection,
        projectData: params.projectData,
        context,
        runningSummary,
        systemPrompt: params.systemPrompt + '\nIMPORTANT: The previous version scored low on quality. Improve accuracy, policy citations, and professional tone.',
        model: 'claude-sonnet-4-6',
      });

      const idx = document.sections.findIndex((s) => s.name === section.name);
      if (idx !== -1) {
        document.sections[idx] = {
          ...regenerated,
          version: section.version + 1,
        };
      }
    }

    const newScores = await validateDocument(document, params);
    document.metadata.quality_scores = newScores;
  }
}
