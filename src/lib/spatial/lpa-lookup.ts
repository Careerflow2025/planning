import { createServiceRoleClient } from '@/lib/supabase/server';

interface PostcodeLookupResult {
  postcode: string;
  lpa_code: string;
  lpa_name: string;
  region: string;
  latitude: number;
  longitude: number;
}

export async function lookupPostcode(postcode: string): Promise<PostcodeLookupResult | null> {
  const cleaned = postcode.replace(/\s+/g, '').toUpperCase();
  const formatted = cleaned.length > 3
    ? `${cleaned.slice(0, -3)} ${cleaned.slice(-3)}`
    : cleaned;

  try {
    const response = await fetch(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(formatted)}`
    );

    if (!response.ok) return null;

    const data = await response.json();
    if (data.status !== 200 || !data.result) return null;

    const result = data.result;
    return {
      postcode: result.postcode,
      lpa_code: result.codes?.admin_district ?? result.admin_district,
      lpa_name: result.admin_district,
      region: result.region ?? result.european_electoral_region ?? '',
      latitude: result.latitude,
      longitude: result.longitude,
    };
  } catch {
    return null;
  }
}

export async function getLpaProfile(lpaCode: string) {
  const supabase = await createServiceRoleClient();

  const { data } = await supabase
    .from('lpa_profiles')
    .select('*')
    .eq('lpa_code', lpaCode)
    .single();

  return data;
}

export async function getOrCreateLpaProfile(postcode: string) {
  const lookup = await lookupPostcode(postcode);
  if (!lookup) return null;

  const existing = await getLpaProfile(lookup.lpa_code);
  if (existing) return existing;

  // Create a stub profile
  const supabase = await createServiceRoleClient();
  const { data } = await supabase
    .from('lpa_profiles')
    .insert({
      lpa_code: lookup.lpa_code,
      lpa_name: lookup.lpa_name,
      region: lookup.region,
      country: 'England',
    })
    .select()
    .single();

  return data;
}
