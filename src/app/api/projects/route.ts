import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { lookupPostcode } from '@/lib/spatial/lpa-lookup';
import { detectSiteConstraints } from '@/lib/spatial/constraints';
import { isValidPostcode, formatPostcode } from '@/lib/utils/postcode';
import type { DevelopmentType, UseClass } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = request.nextUrl;
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') ?? '20')));
    const offset = (page - 1) * limit;

    const { data: projects, error, count } = await supabase
      .from('projects')
      .select('*', { count: 'exact' })
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }

    return NextResponse.json({
      projects,
      pagination: {
        page,
        limit,
        total: count ?? 0,
        total_pages: Math.ceil((count ?? 0) / limit),
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, site_address, postcode, development_type, development_description, num_units, floor_area_sqm, site_area_hectares, use_class } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Project name is required' }, { status: 400 });
    }

    let lpa_code: string | null = null;
    let lpa_name: string | null = null;
    let site_constraints: Record<string, unknown> = {};

    if (postcode) {
      if (!isValidPostcode(postcode)) {
        return NextResponse.json({ error: 'Invalid UK postcode format' }, { status: 400 });
      }

      const formatted = formatPostcode(postcode);
      const lookup = await lookupPostcode(formatted);

      if (lookup) {
        lpa_code = lookup.lpa_code;
        lpa_name = lookup.lpa_name;

        const constraints = await detectSiteConstraints(
          { latitude: lookup.latitude, longitude: lookup.longitude },
          formatted
        );
        site_constraints = constraints;
      }
    }

    const { data: project, error } = await supabase
      .from('projects')
      .insert({
        user_id: user.id,
        name: name.trim(),
        site_address: site_address?.trim() ?? null,
        postcode: postcode ? formatPostcode(postcode) : null,
        lpa_code,
        lpa_name,
        development_type: (development_type as DevelopmentType) ?? null,
        development_description: development_description?.trim() ?? null,
        num_units: num_units ?? null,
        floor_area_sqm: floor_area_sqm ?? null,
        site_area_hectares: site_area_hectares ?? null,
        use_class: (use_class as UseClass) ?? null,
        status: 'draft',
        site_constraints,
        uploaded_documents: [],
        chat_history: [],
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
    }

    return NextResponse.json({ project }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
