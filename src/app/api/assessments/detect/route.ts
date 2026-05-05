import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { generateText } from '@/lib/ai/claude';
import { detectRequiredAssessments } from '@/lib/ai/assessment-detector';
import type { SiteConstraints, AssessmentType, DevelopmentType } from '@/types';

interface DetectedAssessment {
  assessment_type_id: string;
  name: string;
  confidence_score: number;
  reason: string;
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { project_id } = body;

    if (!project_id) {
      return NextResponse.json({ error: 'project_id is required' }, { status: 400 });
    }

    // Get project data
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('*')
      .eq('id', project_id)
      .eq('user_id', user.id)
      .single();

    if (projectError || !project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Get all active assessment types
    const { data: assessmentTypes, error: typesError } = await supabase
      .from('assessment_types')
      .select('*')
      .eq('active', true);

    if (typesError || !assessmentTypes) {
      return NextResponse.json({ error: 'Failed to load assessment types' }, { status: 500 });
    }

    const siteConstraints = (project.site_constraints ?? {}) as SiteConstraints;

    // Step 1: Comprehensive rule-based detection using the assessment detector engine
    const ruleResults = detectRequiredAssessments(
      {
        developmentType: (project.development_type as DevelopmentType) ?? null,
        numUnits: project.num_units ?? null,
        floorAreaSqm: project.floor_area_sqm ?? null,
        siteAreaHectares: project.site_area_hectares ?? null,
        useClass: project.use_class ?? null,
        constraints: siteConstraints,
        lpaCode: project.lpa_code ?? null,
      },
      assessmentTypes as AssessmentType[]
    );

    const detected: DetectedAssessment[] = ruleResults.map((r) => ({
      assessment_type_id: r.assessment_type_id,
      name: r.name,
      confidence_score: r.confidence_score,
      reason: r.reason,
    }));
    const detectedTypeIds = new Set(ruleResults.map((r) => r.assessment_type_id));

    // Step 2: AI-based analysis for assessments not caught by rules
    const remainingTypes = assessmentTypes
      .filter((at: AssessmentType) => !detectedTypeIds.has(at.id))
      .map((at: AssessmentType) => ({ id: at.id, name: at.name, description: at.description }));

    if (remainingTypes.length > 0 && project.development_type) {
      const aiPrompt = `You are a UK planning consultant. Analyze which of the following assessment types are required for this development project.

PROJECT:
- Address: ${project.site_address ?? 'Not specified'}
- Postcode: ${project.postcode ?? 'Not specified'}
- LPA: ${project.lpa_name ?? 'Not specified'}
- Development type: ${project.development_type}
- Description: ${project.development_description ?? 'Not specified'}
- Units: ${project.num_units ?? 'N/A'}
- Floor area: ${project.floor_area_sqm ?? 'N/A'} sqm
- Site area: ${project.site_area_hectares ?? 'N/A'} hectares
- Use class: ${project.use_class ?? 'N/A'}
- Site constraints: ${JSON.stringify(siteConstraints)}

ASSESSMENT TYPES TO EVALUATE:
${remainingTypes.map((t) => `- ${t.id}: ${t.name} (${t.description ?? 'no description'})`).join('\n')}

For each assessment type that IS required, return a JSON array of objects with: assessment_type_id, name, confidence_score (0.0-1.0), reason.
Only include assessments with confidence >= 0.6.
Return ONLY the JSON array, no other text.`;

      const aiResult = await generateText({
        systemPrompt: 'You are a senior UK planning consultant specializing in planning application requirements. Return only valid JSON arrays.',
        userPrompt: aiPrompt,
        maxTokens: 2048,
        temperature: 0.1,
      });

      try {
        const jsonMatch = aiResult.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const aiDetected: DetectedAssessment[] = JSON.parse(jsonMatch[0]);
          for (const item of aiDetected) {
            if (item.confidence_score >= 0.6 && !detectedTypeIds.has(item.assessment_type_id)) {
              detectedTypeIds.add(item.assessment_type_id);
              detected.push(item);
            }
          }
        }
      } catch {
        // AI response wasn't valid JSON; proceed with rule-based results
      }
    }

    // Sort by confidence descending
    detected.sort((a, b) => b.confidence_score - a.confidence_score);

    // Create project_assessment records
    const records = detected.map((d) => ({
      project_id,
      assessment_type_id: d.assessment_type_id,
      status: 'pending' as const,
      confidence_score: d.confidence_score,
      quality_score: null,
      generated_document: null,
      document_version: 0,
      credits_used: 0,
    }));

    if (records.length > 0) {
      const { error: insertError } = await supabase
        .from('project_assessments')
        .upsert(records, { onConflict: 'project_id,assessment_type_id' });

      if (insertError) {
        return NextResponse.json({ error: 'Failed to save detected assessments' }, { status: 500 });
      }
    }

    return NextResponse.json({
      project_id,
      detected_assessments: detected,
      total: detected.length,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
