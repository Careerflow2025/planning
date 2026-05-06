/**
 * Lazy-loaded singleton wrapper around @googlemaps/js-api-loader (v2 functional API).
 *
 * Importing the loader package itself is small (~12kB), but it pulls in the
 * Google Maps JS bundle (~150kB+). We don't want that on the home page hero
 * before the user has confirmed they want to look at a map. So we defer the
 * dynamic import until the first call.
 *
 * Usage:
 *   const maps = await loadMapsLibrary('maps3d');
 *   if (maps) { ... }
 *
 * If NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set, returns null. Callers must
 * handle this and render a "Google Maps not configured" placeholder.
 */

let optionsSet = false;

export function isGoogleMapsConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
}

async function ensureOptions(): Promise<typeof import("@googlemaps/js-api-loader") | null> {
  if (typeof window === "undefined") return null;
  if (!isGoogleMapsConfigured()) return null;

  const mod = await import("@googlemaps/js-api-loader");
  if (!optionsSet) {
    mod.setOptions({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      v: "beta", // 'beta' channel needed for the maps3d library at present
    });
    optionsSet = true;
  }
  return mod;
}

/**
 * Load a single Google Maps library (e.g. 'maps3d', 'streetView', 'maps').
 * Returns null when no API key is configured.
 */
export async function loadMapsLibrary<T extends keyof google.maps.MapsLibrary | "maps3d" | "streetView" | "maps" | "marker" | "places">(
  libraryName: T,
): Promise<unknown | null> {
  const mod = await ensureOptions();
  if (!mod) return null;
  try {
    // Cast through unknown to satisfy the overloaded function types
    return await (mod.importLibrary as (n: string) => Promise<unknown>)(libraryName);
  } catch (err) {
    console.error(`Failed to load Google Maps '${libraryName}' library:`, err);
    return null;
  }
}
