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

/**
 * Find the closest Mapillary image to a lat/lng within `radius` metres.
 *
 * Hits the Mapillary Graph API:
 *   https://graph.mapillary.com/images?fields=id,geometry,compass_angle&closeto=LNG,LAT&radius=R
 *
 * Returns the closest image (or null if no coverage). Used by StreetViewPane
 * to (1) decide whether to render the viewer at all, and (2) pick the initial
 * image to display.
 */
export async function findNearestMapillaryImage(
  lat: number,
  lng: number,
  radius = 50,
): Promise<NearestMapillaryImage | null> {
  const token = process.env.NEXT_PUBLIC_MAPILLARY_TOKEN;
  if (!token) return null;

  const url = new URL("https://graph.mapillary.com/images");
  url.searchParams.set("fields", "id,geometry,compass_angle");
  // Graph API expects separate lat + lng + radius (max 50m).
  // `closeto=lng,lat` is silently accepted but returns empty data.
  url.searchParams.set("lat", String(lat));
  url.searchParams.set("lng", String(lng));
  url.searchParams.set("radius", String(Math.min(radius, 50)));
  url.searchParams.set("limit", "1");

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
  const first = json.data?.[0];
  if (!first?.geometry) return null;
  const [imgLng, imgLat] = first.geometry.coordinates;
  return {
    id: first.id,
    lat: imgLat,
    lng: imgLng,
    bearing: typeof first.compass_angle === "number" ? first.compass_angle : null,
  };
}
