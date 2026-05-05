import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';

/**
 * GET  /api/projects/[id]/assessments
 *   → { assessments: [...] } joined with assessment_types
 *
 * POST /api/projects/[id]/assessments
 *   Body: { short_names: string[] }   e.g. ["PS","DAS","AIA"]
 *   Creates a project_assessments row in 'pending' status for each short_name.
 *   Idempotent: skips rows that already exist for this (project_id, assessment_type_id).
 */

async function assertProjectOwner(
  supabase: Awaited<ReturnType<typeof createServerSupabaseClient>>,
  projectId: string,
  userId: string,
) {
  const { data: project, error } = await supabase
    .from('projects')
    .select('id, user_id')
    .eq('id', projectId)
    .single();

  if (error || !project) return { ok: false as const, status: 404, message: 'Project not found' };
  if (project.user_id !== userId) return { ok: false as const, status: 403, message: 'Forbidden' };
  return { ok: true as const };
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id: projectId } = await context.params;

  const supabase = await createServerSupabaseClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const ownerCheck = await assertProjectOwner(supabase, projectId, user.id);
  if (!ownerCheck.ok) {
    return NextResponse.json({ error: ownerCheck.message }, { status: ownerCheck.status });
  }

  const { data: assessments, error } = await supabase
    .from('project_assessments')
    .select(`
      *,
      assessment_type:assessment_types (
        id, name, short_name, category, ai_difficulty, credit_cost
      )
    `)
    .eq('project_id', projectId)
    .order('created_at', { ascending: true });

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch assessments' }, { status: 500 });
  }

  return NextResponse.json({ assessments: assessments ?? [] });
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id: projectId } = await context.params;

  const supabase = await createServerSupabaseClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const ownerCheck = await assertProjectOwner(supabase, projectId, user.id);
  if (!ownerCheck.ok) {
    return NextResponse.json({ error: ownerCheck.message }, { status: ownerCheck.status });
  }

  const body = await request.json().catch(() => null);
  const shortNames: unknown = body?.short_names;
  if (
    !Array.isArray(shortNames) ||
    shortNames.length === 0 ||
    !shortNames.every((s) => typeof s === 'string' && s.length > 0)
  ) {
    return NextResponse.json(
      { error: 'short_names must be a non-empty array of strings, e.g. ["PS","DAS"]' },
      { status: 400 },
    );
  }

  // Resolve short_names → assessment_types.id (UUID)
  const { data: types, error: typeErr } = await supabase
    .from('assessment_types')
    .select('id, short_name, name, credit_cost')
    .in('short_name', shortNames as string[]);

  if (typeErr) {
    return NextResponse.json({ error: 'Failed to look up assessment types' }, { status: 500 });
  }

  const found = new Set((types ?? []).map((t) => t.short_name));
  const unknown = (shortNames as string[]).filter((s) => !found.has(s));
  if (unknown.length > 0) {
    return NextResponse.json(
      { error: `Unknown short_names: ${unknown.join(', ')}` },
      { status: 400 },
    );
  }

  // Skip ones already created for this project
  const { data: existing } = await supabase
    .from('project_assessments')
    .select('assessment_type_id')
    .eq('project_id', projectId);

  const existingIds = new Set((existing ?? []).map((r) => r.assessment_type_id));
  const toInsert = (types ?? [])
    .filter((t) => !existingIds.has(t.id))
    .map((t) => ({
      project_id: projectId,
      assessment_type_id: t.id,
      status: 'pending',
    }));

  if (toInsert.length === 0) {
    return NextResponse.json({ created: [], skipped: types ?? [] });
  }

  const { data: created, error: insertErr } = await supabase
    .from('project_assessments')
    .insert(toInsert)
    .select(`
      *,
      assessment_type:assessment_types (id, name, short_name, credit_cost)
    `);

  if (insertErr) {
    return NextResponse.json({ error: 'Failed to create assessments' }, { status: 500 });
  }

  return NextResponse.json({ created: created ?? [], skipped: [] }, { status: 201 });
}
