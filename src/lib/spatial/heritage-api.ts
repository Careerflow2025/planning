interface HeritageAsset {
  name: string;
  list_entry: string;
  grade: 'I' | 'II*' | 'II';
  type: 'listed_building' | 'scheduled_monument' | 'registered_park' | 'battlefield';
  distance_m: number;
  latitude: number;
  longitude: number;
}

interface ConservationAreaResult {
  name: string;
  designation_date: string | null;
  local_authority: string;
}

export async function searchHeritageAssets(
  latitude: number,
  longitude: number,
  radiusMetres: number = 500
): Promise<HeritageAsset[]> {
  try {
    const url = `https://historicengland.org.uk/api/search?lat=${latitude}&lng=${longitude}&radius=${radiusMetres}`;
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) return [];

    const data = await response.json();
    const items = data.results ?? data.items ?? [];

    return items.map((item: Record<string, unknown>) => ({
      name: (item.name as string) ?? 'Unknown',
      list_entry: (item.listEntry as string) ?? '',
      grade: ((item.grade as string) ?? 'II') as HeritageAsset['grade'],
      type: mapAssetType(item.type as string),
      distance_m: (item.distance as number) ?? 0,
      latitude: (item.latitude as number) ?? latitude,
      longitude: (item.longitude as number) ?? longitude,
    }));
  } catch {
    return [];
  }
}

export async function getConservationAreas(
  latitude: number,
  longitude: number
): Promise<ConservationAreaResult[]> {
  try {
    const url = `https://historicengland.org.uk/api/search?lat=${latitude}&lng=${longitude}&radius=100&type=conservation-area`;
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) return [];

    const data = await response.json();
    const items = data.results ?? data.items ?? [];

    return items.map((item: Record<string, unknown>) => ({
      name: (item.name as string) ?? 'Unknown',
      designation_date: (item.designationDate as string) ?? null,
      local_authority: (item.localAuthority as string) ?? '',
    }));
  } catch {
    return [];
  }
}

function mapAssetType(type: string | undefined): HeritageAsset['type'] {
  if (!type) return 'listed_building';
  const lower = type.toLowerCase();
  if (lower.includes('scheduled')) return 'scheduled_monument';
  if (lower.includes('park') || lower.includes('garden')) return 'registered_park';
  if (lower.includes('battlefield')) return 'battlefield';
  return 'listed_building';
}
