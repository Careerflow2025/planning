import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { generateText } from '@/lib/ai/claude';
import { retrieveContext } from '@/lib/ai/rag';
import type { GeneratedDocument, GeneratedSection, Project, AssessmentType } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { project_assessment_id, section_id, instructions } = body;

    if (!project_assessment_id || !section_id || !instructions) {
      return NextResponse.json({
        error: 'project_assessment_id, section_id, and instructions are required',
      }, { status: 400 });
    }

    if (typeof instructions !== 'string' || instructions.trim().length === 0) {
      return NextResponse.json({ error: 'Instructions must be a non-empty string' }, { status: 400 });
    }

    // Get project assessment with related data
    const { data: projectAssessment, error: paError } = await supabase
      .from('project_assessments')
      .select('*, projects(*), assessment_types(*)')
      .eq('id', project_assessment_id)
      .single();

    if (paError || !projectAssessment) {
      return NextResponse.json({ error: 'Project assessment not found' }, { status: 404 });
    }

    const project = projectAssessment.projects as unknown as Project;
    const assessmentType = projectAssessment.assessment_types as unknown as AssessmentType;

    if (project.user_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const document = projectAssessment.generated_document as GeneratedDocument | null;
    if (!document) {
      return NextResponse.json({ error: 'No generated document found to revise' }, { status: 400 });
    }

    // Find the target section
    const sectionIndex = document.sections.findIndex((s) => s.id === section_id);
    if (sectionIndex === -1) {
      return NextResponse.json({ error: 'Section not found in document' }, { status: 404 });
    }

    const existingSection = document.sections[sectionIndex];

    // Get relevant context for the revision
    const context = await retrieveContext({
      query: `${assessmentType.name} ${existingSection.name} ${instructions}`,
      assessment_type: assessmentType.id,
      lpa_code: project.lpa_code ?? undefined,
      top_k: 5,
    });

    const policyContext = context.policies
      .slice(0, 3)
      .map((p) => `[${p.source}]: ${p.content}`)
      .join('\n\n');

    // Build surrounding context from other sections
    const surroundingContext = document.sections
      .filter((_, i) => i !== sectionIndex)
      .map((s) => `## ${s.name}\n${s.content.slice(0, 200)}...`)
      .join('\n\n');

    const revisedContent = await generateText({
      systemPrompt: `You are a senior UK planning consultant revising a section of a ${assessmentType.name}. Maintain professional planning language and reference specific policies. Keep the section consistent with the rest of the document.`,
      userPrompt: `Revise the "${existingSection.name}" section of this planning assessment.

CURRENT SECTION CONTENT:
${existingSection.content}

USER INSTRUCTIONS FOR REVISION:
${instructions}

PROJECT CONTEXT:
- Site: ${project.site_address ?? 'N/A'} (${project.postcode ?? 'N/A'})
- LPA: ${project.lpa_name ?? 'N/A'}
- Development: ${project.development_description ?? project.development_type ?? 'N/A'}
- Constraints: ${JSON.stringify(project.site_constraints ?? {})}

RELEVANT POLICIES:
${policyContext}

OTHER DOCUMENT SECTIONS (for consistency):
${surroundingContext}

Rewrite the section incorporating the user's instructions. Maintain professional quality and policy references.`,
      maxTokens: 4096,
      temperature: 0.3,
    });

    // Extract policy refs from revised content
    const policyRefPatterns = [
      /NPPF\s+(?:para(?:graph)?\.?\s*)?(\d+)/gi,
      /Policy\s+([A-Z]{1,3}\d{1,3})/gi,
      /PPG\s+(?:para(?:graph)?\.?\s*)?(\d+)/gi,
    ];
    const policyRefs = new Set<string>();
    for (const pattern of policyRefPatterns) {
      let match;
      while ((match = pattern.exec(revisedContent)) !== null) {
        policyRefs.add(match[0].trim());
      }
    }

    // Build updated section
    const updatedSection: GeneratedSection = {
      id: existingSection.id,
      name: existingSection.name,
      content: revisedContent,
      word_count: revisedContent.split(/\s+/).length,
      quality_score: null,
      policy_refs: Array.from(policyRefs),
      version: existingSection.version + 1,
    };

    // Update the document
    document.sections[sectionIndex] = updatedSection;
    const newVersion = (projectAssessment.document_version ?? 0) + 1;

    const { error: updateError } = await supabase
      .from('project_assessments')
      .update({
        generated_document: document,
        document_version: newVersion,
        updated_at: new Date().toISOString(),
      })
      .eq('id', project_assessment_id);

    if (updateError) {
      return NextResponse.json({ error: 'Failed to save revised document' }, { status: 500 });
    }

    // Create document version record
    await supabase
      .from('document_versions')
      .insert({
        project_assessment_id,
        version: newVersion,
        content: document,
        quality_scores: document.metadata.quality_scores,
        change_summary: `Revised section: ${existingSection.name}`,
      });

    return NextResponse.json({
      section: updatedSection,
      document_version: newVersion,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
