/**
 * Lazy-loaded wrapper around mapillary-js + a coverage probe against the
 * Mapillary Graph API. Replaces Google's StreetViewService + StreetViewPanorama.
 *
 * mapillary-js is ~400kB; we only want it when the Street View pane mounts.
 *
 * Usage:
 *   const m = await loadMapillary();
 *   if (!m) { ...not configured; render placeholder... }
 *   const viewer = new m.Viewer({ container, imageId, accessToken });
 */

import type * as Mapillary from "mapillary-js";

export function isMapillaryConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_MAPILLARY_TOKEN;
}

export async function loadMapillary(): Promise<typeof Mapillary | null> {
  if (typeof window === "undefined") return null;
  if (!isMapillaryConfigured()) return null;
  const mod = await import("mapillary-js");
  return mod as typeof Mapillary;
}

export interface NearestMapillaryImage {
  id: string;
  lat: number;
  lng: number;
  /** Camera bearing (compass angle, 0-360) at capture time, if available. */
  bearing: number | null;
}

/** Approximate distance between two lat/lng points in metres. Good for small
 *  scales (< 1 km) — uses a local equirectangular projection. */
function distanceM(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const M_PER_DEG_LAT = 111_320;
  const meanLat = ((aLat + bLat) / 2) * (Math.PI / 180);
  const mPerDegLng = 111_320 * Math.cos(meanLat);
  const dLat = (aLat - bLat) * M_PER_DEG_LAT;
  const dLng = (aLng - bLng) * mPerDegLng;
  return Math.hypot(dLat, dLng);
}

/** Bearing from point A to point B, in degrees clockwise from north (0–360). */
function bearingTo(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const φ1 = (aLat * Math.PI) / 180;
  const φ2 = (bLat * Math.PI) / 180;
  const Δλ = ((bLng - aLng) * Math.PI) / 180;
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x =
    Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  const θ = Math.atan2(y, x);
  return ((θ * 180) / Math.PI + 360) % 360;
}

/**
 * Find the best Mapillary image to show for a property pin.
 *
 * Hits the Mapillary Graph API for up to 10 nearby images (within `radius`
 * metres, max 50). If `target` is supplied, picks the image whose camera was
 * most facing `target` at capture time — so the viewer opens looking AT the
 * property, not at the opposite side of the street. If `target` is null,
 * falls back to the nearest image.
 *
 *   score = |bearing(image → target) − compass_angle(image)| + distance_m * 0.5
 *
 * Returns null when no coverage exists within `radius`.
 */
export async function findBestMapillaryImage(
  lat: number,
  lng: number,
  target?: { lat: number; lng: number } | null,
  radius = 50,
): Promise<NearestMapillaryImage | null> {
  const token = process.env.NEXT_PUBLIC_MAPILLARY_TOKEN;
  if (!token) return null;

  const url = new URL("https://graph.mapillary.com/images");
  url.searchParams.set("fields", "id,geometry,compass_angle");
  url.searchParams.set("lat", String(lat));
  url.searchParams.set("lng", String(lng));
  url.searchParams.set("radius", String(Math.min(radius, 50)));
  url.searchParams.set("limit", "10");

  const res = await fetch(url.toString(), {
    headers: { Authorization: `OAuth ${token}` },
  });
  if (!res.ok) return null;

  const json = (await res.json()) as {
    data?: Array<{
      id: string;
      geometry?: { type: "Point"; coordinates: [number, number] };
      compass_angle?: number;
    }>;
  };
  const candidates = (json.data ?? [])
    .filter((d) => d.geometry?.coordinates)
    .map((d) => {
      const [imgLng, imgLat] = d.geometry!.coordinates;
      return {
        id: d.id,
        lat: imgLat,
        lng: imgLng,
        bearing: typeof d.compass_angle === "number" ? d.compass_angle : null,
      };
    });
  if (candidates.length === 0) return null;

  // If no target supplied, return the closest image (existing behaviour).
  if (!target) {
    return candidates.reduce<NearestMapillaryImage>((best, c) =>
      distanceM(c.lat, c.lng, lat, lng) < distanceM(best.lat, best.lng, lat, lng) ? c : best,
    candidates[0]);
  }

  // Otherwise score by how well the camera was facing `target` at capture
  // time, with a small distance penalty so we don't prefer a perfectly-facing
  // image far away over a close-enough one nearby.
  let best: NearestMapillaryImage = candidates[0];
  let bestScore = Infinity;
  for (const c of candidates) {
    const dM = distanceM(c.lat, c.lng, lat, lng);
    let score = dM * 0.5;
    if (c.bearing !== null) {
      const desired = bearingTo(c.lat, c.lng, target.lat, target.lng);
      const diff = Math.abs(((desired - c.bearing + 540) % 360) - 180);
      score += diff;
    } else {
      // No compass info — treat as worst-case 90° off so distance dominates.
      score += 90;
    }
    if (score < bestScore) {
      best = c;
      bestScore = score;
    }
  }
  return best;
}

/** @deprecated Use {@link findBestMapillaryImage}. Kept temporarily so any
 *  external callers don't break. */
export const findNearestMapillaryImage = (
  lat: number,
  lng: number,
  radius = 50,
) => findBestMapillaryImage(lat, lng, null, radius);
