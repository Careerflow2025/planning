import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { retrieveContext } from '@/lib/ai/rag';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { query, assessment_type, lpa_code, collections, top_k } = body;

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return NextResponse.json({ error: 'query is required and must be a non-empty string' }, { status: 400 });
    }

    if (top_k !== undefined && (typeof top_k !== 'number' || top_k < 1 || top_k > 50)) {
      return NextResponse.json({ error: 'top_k must be a number between 1 and 50' }, { status: 400 });
    }

    const validCollections = ['policies', 'examples', 'templates', 'technical'] as const;
    if (collections) {
      if (!Array.isArray(collections) || !collections.every((c: string) => validCollections.includes(c as typeof validCollections[number]))) {
        return NextResponse.json({
          error: `collections must be an array of: ${validCollections.join(', ')}`,
        }, { status: 400 });
      }
    }

    const context = await retrieveContext({
      query: query.trim(),
      assessment_type: assessment_type ?? undefined,
      lpa_code: lpa_code ?? undefined,
      collections: collections ?? undefined,
      top_k: top_k ?? 10,
    });

    return NextResponse.json({
      results: {
        policies: context.policies,
        examples: context.examples,
        technical: context.technical,
      },
      template: context.template,
      council_config: context.councilConfig,
      total: context.policies.length + context.examples.length + context.technical.length,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
