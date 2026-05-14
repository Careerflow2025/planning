/**
 * Lazy-loaded singleton wrapper around mapbox-gl.
 *
 * The mapbox-gl bundle is ~250kB gzipped — we don't want it on every page load,
 * so we defer the dynamic import until a map actually needs to render.
 *
 * Usage:
 *   const mapboxgl = await loadMapboxGL();
 *   if (mapboxgl) { ... }
 *
 * If NEXT_PUBLIC_MAPBOX_TOKEN is not set, returns null. Callers must handle
 * this and render a configuration placeholder.
 */

import type * as MapboxGL from "mapbox-gl";

let tokenSet = false;

export function isMapboxConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
}

/**
 * Dynamically import mapbox-gl and set the access token once. Returns the
 * module namespace (or null when no token is configured / on the server).
 */
export async function loadMapboxGL(): Promise<typeof MapboxGL | null> {
  if (typeof window === "undefined") return null;
  if (!isMapboxConfigured()) return null;

  const mod = await import("mapbox-gl");
  const mapboxgl = ((mod as unknown as { default?: typeof MapboxGL }).default ??
    (mod as unknown as typeof MapboxGL)) as typeof MapboxGL;
  if (!tokenSet) {
    // accessToken lives on the namespace object at runtime but isn't reliably
    // surfaced on `typeof MapboxGL` across versions — narrow with a cast.
    (mapboxgl as unknown as { accessToken: string }).accessToken =
      process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
    tokenSet = true;
  }
  return mapboxgl;
}
