import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { generateEmbedding } from '@/lib/ai/embeddings';
import type { PolicySource } from '@/types';

const VALID_SOURCES: PolicySource[] = ['nppf', 'ppg', 'local_plan', 'spd', 'building_regs', 'legislation'];
const MAX_CONTENT_LENGTH = 100_000;

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check admin role
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (!profile || profile.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden: admin access required' }, { status: 403 });
    }

    const body = await request.json();
    const { source, lpa_code, title, reference, content, effective_date, collection } = body;

    // Validate required fields
    if (!source || !title || !content) {
      return NextResponse.json({ error: 'source, title, and content are required' }, { status: 400 });
    }

    if (!VALID_SOURCES.includes(source as PolicySource) && source !== 'example') {
      return NextResponse.json({
        error: `source must be one of: ${VALID_SOURCES.join(', ')}, example`,
      }, { status: 400 });
    }

    if (typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json({ error: 'content must be a non-empty string' }, { status: 400 });
    }

    if (content.length > MAX_CONTENT_LENGTH) {
      return NextResponse.json({
        error: `content exceeds maximum length of ${MAX_CONTENT_LENGTH} characters`,
      }, { status: 400 });
    }

    // Generate embedding for the content
    const embedding = await generateEmbedding(content);

    // Determine target table
    const targetTable = (collection === 'examples' || source === 'example')
      ? 'example_assessments'
      : 'policy_documents';

    if (targetTable === 'policy_documents') {
      const { data: record, error: insertError } = await supabase
        .from('policy_documents')
        .insert({
          source,
          lpa_code: lpa_code ?? null,
          title,
          reference: reference ?? null,
          content: content.trim(),
          effective_date: effective_date ?? null,
          embedding,
          metadata: {
            ingested_by: user.id,
            ingested_at: new Date().toISOString(),
          },
        })
        .select('id, source, title, reference, created_at')
        .single();

      if (insertError) {
        return NextResponse.json({ error: 'Failed to ingest document' }, { status: 500 });
      }

      return NextResponse.json({ document: record, table: 'policy_documents' }, { status: 201 });
    } else {
      const { data: record, error: insertError } = await supabase
        .from('example_assessments')
        .insert({
          lpa_code: lpa_code ?? null,
          content: content.trim(),
          embedding,
          metadata: {
            title,
            reference: reference ?? null,
            source,
            effective_date: effective_date ?? null,
            ingested_by: user.id,
            ingested_at: new Date().toISOString(),
          },
        })
        .select('id, created_at')
        .single();

      if (insertError) {
        return NextResponse.json({ error: 'Failed to ingest example' }, { status: 500 });
      }

      return NextResponse.json({ document: record, table: 'example_assessments' }, { status: 201 });
    }
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
