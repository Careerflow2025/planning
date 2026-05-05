import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { lookupPostcode, getOrCreateLpaProfile } from '@/lib/spatial/lpa-lookup';
import { detectSiteConstraints } from '@/lib/spatial/constraints';
import { isValidPostcode, formatPostcode } from '@/lib/utils/postcode';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { postcode, project_id } = body;

    // Determine the postcode to use
    let targetPostcode: string | null = postcode ?? null;

    if (!targetPostcode && project_id) {
      const { data: project } = await supabase
        .from('projects')
        .select('postcode')
        .eq('id', project_id)
        .eq('user_id', user.id)
        .single();

      targetPostcode = project?.postcode ?? null;
    }

    if (!targetPostcode) {
      return NextResponse.json({ error: 'postcode or project_id with an existing postcode is required' }, { status: 400 });
    }

    if (!isValidPostcode(targetPostcode)) {
      return NextResponse.json({ error: 'Invalid UK postcode format' }, { status: 400 });
    }

    const formatted = formatPostcode(targetPostcode);

    // Lookup postcode for coordinates and LPA
    const lookup = await lookupPostcode(formatted);
    if (!lookup) {
      return NextResponse.json({ error: 'Postcode not found' }, { status: 404 });
    }

    // Run constraint detection and LPA profile lookup in parallel
    const [constraints, lpaProfile] = await Promise.all([
      detectSiteConstraints(
        { latitude: lookup.latitude, longitude: lookup.longitude },
        formatted
      ),
      getOrCreateLpaProfile(formatted),
    ]);

    const result = {
      postcode: formatted,
      lpa_code: lookup.lpa_code,
      lpa_name: lookup.lpa_name,
      region: lookup.region,
      coordinates: {
        latitude: lookup.latitude,
        longitude: lookup.longitude,
      },
      constraints,
      lpa_profile: lpaProfile,
    };

    // If project_id provided, update the project with detected data
    if (project_id) {
      const { error: updateError } = await supabase
        .from('projects')
        .update({
          postcode: formatted,
          lpa_code: lookup.lpa_code,
          lpa_name: lookup.lpa_name,
          site_constraints: constraints,
          updated_at: new Date().toISOString(),
        })
        .eq('id', project_id)
        .eq('user_id', user.id);

      if (updateError) {
        return NextResponse.json({
          ...result,
          warning: 'Site analysis succeeded but failed to update project',
        });
      }
    }

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
