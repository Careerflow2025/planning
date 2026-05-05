export interface BuildingFootprint {
  id: number;
  coords: [number, number][]; // [lat, lng][]
  tags: Record<string, string>;
}

const OVERPASS_API = "https://overpass-api.de/api/interpreter";

/**
 * Fetch building footprints from OpenStreetMap within a radius of a point.
 */
export async function fetchBuildingFootprints(
  lat: number,
  lng: number,
  radius = 150
): Promise<BuildingFootprint[]> {
  const query = `
    [out:json][timeout:10];
    (
      way["building"](around:${radius},${lat},${lng});
    );
    out body geom;
  `;

  const res = await fetch(OVERPASS_API, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `data=${encodeURIComponent(query)}`,
  });

  if (!res.ok) throw new Error(`Overpass API error: ${res.status}`);

  const data = await res.json();

  return (data.elements || [])
    .filter(
      (el: { type: string; geometry?: unknown[] }) =>
        el.type === "way" && el.geometry && el.geometry.length > 0
    )
    .map(
      (el: {
        id: number;
        geometry: { lat: number; lon: number }[];
        tags?: Record<string, string>;
      }) => ({
        id: el.id,
        coords: el.geometry.map(
          (g) => [g.lat, g.lon] as [number, number]
        ),
        tags: el.tags || {},
      })
    );
}

/**
 * Point-in-polygon test (ray casting algorithm).
 */
function pointInPolygon(
  lat: number,
  lng: number,
  polygon: [number, number][]
): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [yi, xi] = polygon[i];
    const [yj, xj] = polygon[j];
    if (yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

/**
 * Distance squared between two points (for nearest-centroid fallback).
 */
function distSq(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  return (lat1 - lat2) ** 2 + (lng1 - lng2) ** 2;
}

/**
 * Find the building the user clicked on.
 * First tries point-in-polygon, then falls back to nearest centroid.
 */
export function findClosestBuilding(
  clickLat: number,
  clickLng: number,
  buildings: BuildingFootprint[]
): BuildingFootprint | null {
  if (buildings.length === 0) return null;

  // Try exact hit first
  for (const b of buildings) {
    if (pointInPolygon(clickLat, clickLng, b.coords)) {
      return b;
    }
  }

  // Fallback: find nearest building by shortest distance to any vertex
  let closest: BuildingFootprint | null = null;
  let minDist = Infinity;

  for (const b of buildings) {
    for (const [pLat, pLng] of b.coords) {
      const d = distSq(clickLat, clickLng, pLat, pLng);
      if (d < minDist) {
        minDist = d;
        closest = b;
      }
    }
  }

  return closest;
}
