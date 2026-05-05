import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { generateAssessment } from '@/lib/ai/generator';
import { getAssessmentPromptConfig } from '@/lib/ai/prompts/assessments';
import { getUserCredits, deductCredits, getAssessmentCreditCost } from '@/lib/utils/credits';
import type { AssessmentSection, AssessmentType, Project } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { project_assessment_id } = body;

    if (!project_assessment_id) {
      return NextResponse.json({ error: 'project_assessment_id is required' }, { status: 400 });
    }

    // Get project assessment with project and assessment type data
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

    if (!project || !assessmentType) {
      return NextResponse.json({ error: 'Invalid project assessment data' }, { status: 400 });
    }

    // Verify user owns this project
    if (project.user_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Check credits
    const creditCost = getAssessmentCreditCost(assessmentType.ai_difficulty, assessmentType.credit_cost);
    const currentCredits = await getUserCredits(user.id);

    if (currentCredits < creditCost) {
      return NextResponse.json({
        error: 'Insufficient credits',
        credits_required: creditCost,
        credits_available: currentCredits,
      }, { status: 402 });
    }

    // Update status to generating
    await supabase
      .from('project_assessments')
      .update({ status: 'generating' })
      .eq('id', project_assessment_id);

    // Build template sections — prefer prompt registry (code-defined), fall back to DB template
    const promptConfig = getAssessmentPromptConfig(assessmentType.short_name);
    const dbTemplate = assessmentType.template;

    const templateSections: AssessmentSection[] =
      promptConfig?.sections ?? dbTemplate?.sections ?? [];
    const systemPrompt =
      promptConfig?.systemPrompt ?? dbTemplate?.system_prompt ??
      `You are a senior UK planning consultant producing a professional ${assessmentType.name}. Write in formal planning language. Reference specific NPPF paragraphs and local plan policies. Be thorough and evidence-based.`;

    // Use streaming to return progress updates
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const sendEvent = (event: string, data: unknown) => {
          controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
        };

        try {
          sendEvent('status', { status: 'generating', message: 'Starting assessment generation...' });

          // Deduct credits
          const deducted = await deductCredits(user.id, creditCost, project_assessment_id);
          if (!deducted) {
            sendEvent('error', { error: 'Failed to deduct credits' });
            controller.close();
            return;
          }

          sendEvent('status', { status: 'generating', message: 'Credits deducted. Retrieving context and generating...' });

          // Generate the assessment
          const document = await generateAssessment({
            assessmentTypeId: assessmentType.id,
            assessmentTypeName: assessmentType.name,
            projectData: {
              name: project.name,
              site_address: project.site_address ?? '',
              postcode: project.postcode ?? '',
              lpa_name: project.lpa_name ?? '',
              development_type: project.development_type ?? 'other',
              development_description: project.development_description ?? '',
              num_units: project.num_units ?? undefined,
              floor_area_sqm: project.floor_area_sqm ?? undefined,
              site_area_hectares: project.site_area_hectares ?? undefined,
              use_class: project.use_class ?? undefined,
              site_constraints: project.site_constraints ?? {},
            },
            lpaCode: project.lpa_code ?? undefined,
            templateSections,
            systemPrompt,
          });

          sendEvent('status', { status: 'saving', message: 'Saving generated document...' });

          // Update project_assessment with generated document
          const newVersion = (projectAssessment.document_version ?? 0) + 1;
          const { error: updateError } = await supabase
            .from('project_assessments')
            .update({
              status: 'draft',
              generated_document: document,
              quality_score: document.metadata.quality_scores.overall_score,
              document_version: newVersion,
              credits_used: (projectAssessment.credits_used ?? 0) + creditCost,
              updated_at: new Date().toISOString(),
            })
            .eq('id', project_assessment_id);

          if (updateError) {
            sendEvent('error', { error: 'Failed to save document' });
            controller.close();
            return;
          }

          // Create document_version record
          await supabase
            .from('document_versions')
            .insert({
              project_assessment_id,
              version: newVersion,
              content: document,
              quality_scores: document.metadata.quality_scores,
              change_summary: `Generated v${newVersion}`,
            });

          sendEvent('complete', {
            status: 'draft',
            document,
            quality_scores: document.metadata.quality_scores,
            version: newVersion,
            credits_used: creditCost,
          });

          controller.close();
        } catch (err) {
          // Attempt to revert status on failure
          await supabase
            .from('project_assessments')
            .update({ status: 'pending' })
            .eq('id', project_assessment_id);

          sendEvent('error', {
            error: err instanceof Error ? err.message : 'Generation failed',
          });
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
