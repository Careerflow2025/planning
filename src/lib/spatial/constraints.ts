import type { SiteConstraints } from '@/types';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export async function detectSiteConstraints(
  coords: Coordinates,
  postcode: string
): Promise<SiteConstraints> {
  const constraints: SiteConstraints = {};

  const results = await Promise.allSettled([
    checkFloodZone(coords),
    checkListedBuildings(coords),
    checkConservationArea(coords),
    checkDesignations(coords),
  ]);

  if (results[0].status === 'fulfilled') {
    constraints.flood_zone = results[0].value;
  }

  if (results[1].status === 'fulfilled' && results[1].value.length > 0) {
    constraints.listed_building = results[1].value;
  }

  if (results[2].status === 'fulfilled') {
    constraints.conservation_area = results[2].value;
  }

  if (results[3].status === 'fulfilled') {
    const designations = results[3].value;
    if (designations.green_belt) constraints.green_belt = true;
    if (designations.aonb) constraints.aonb = true;
    if (designations.sssi) constraints.sssi = true;
  }

  return constraints;
}

async function checkFloodZone(
  coords: Coordinates
): Promise<SiteConstraints['flood_zone']> {
  try {
    // Environment Agency Flood Map for Planning API
    const url = `https://environment.data.gov.uk/flood-monitoring/id/floodAreas?lat=${coords.latitude}&long=${coords.longitude}&dist=0.5`;
    const response = await fetch(url);

    if (!response.ok) return undefined;

    const data = await response.json();
    const areas = data.items ?? [];

    if (areas.length === 0) return '1';

    // Check severity
    for (const area of areas) {
      const notation = area?.notation ?? '';
      if (notation.includes('3b')) return '3b';
      if (notation.includes('3a') || notation.includes('3')) return '3a';
      if (notation.includes('2')) return '2';
    }

    return '1';
  } catch {
    return undefined;
  }
}

interface ListedBuildingResult {
  grade: 'I' | 'II*' | 'II';
  name: string;
  distance_m: number;
}

async function checkListedBuildings(
  coords: Coordinates
): Promise<ListedBuildingResult[]> {
  try {
    // Historic England API
    const url = `https://historicengland.org.uk/api/search?lat=${coords.latitude}&lng=${coords.longitude}&radius=500&type=listed-building`;
    const response = await fetch(url);

    if (!response.ok) return [];

    const data = await response.json();
    const results = data.results ?? data.items ?? [];

    return results.slice(0, 10).map((item: Record<string, unknown>) => ({
      grade: (item.grade as string) ?? 'II',
      name: (item.name as string) ?? 'Unknown',
      distance_m: (item.distance as number) ?? 0,
    }));
  } catch {
    return [];
  }
}

async function checkConservationArea(coords: Coordinates): Promise<boolean> {
  try {
    // Historic England conservation areas
    const url = `https://historicengland.org.uk/api/search?lat=${coords.latitude}&lng=${coords.longitude}&radius=50&type=conservation-area`;
    const response = await fetch(url);

    if (!response.ok) return false;

    const data = await response.json();
    return (data.results?.length ?? 0) > 0;
  } catch {
    return false;
  }
}

interface DesignationResult {
  green_belt: boolean;
  aonb: boolean;
  sssi: boolean;
}

async function checkDesignations(coords: Coordinates): Promise<DesignationResult> {
  // Natural England MAGIC Map WFS queries
  const result: DesignationResult = {
    green_belt: false,
    aonb: false,
    sssi: false,
  };

  try {
    const bbox = `${coords.longitude - 0.001},${coords.latitude - 0.001},${coords.longitude + 0.001},${coords.latitude + 0.001}`;

    // Check SSSI
    const sssiUrl = `https://environment.data.gov.uk/arcgis/rest/services/NE/SitesOfSpecialScientificInterestEngland/FeatureServer/0/query?geometry=${bbox}&geometryType=esriGeometryEnvelope&spatialRel=esriSpatialRelIntersects&outFields=*&returnCountOnly=true&f=json`;
    const sssiResp = await fetch(sssiUrl);
    if (sssiResp.ok) {
      const sssiData = await sssiResp.json();
      result.sssi = (sssiData.count ?? 0) > 0;
    }
  } catch {
    // Spatial queries may fail, constraints remain false
  }

  return result;
}
