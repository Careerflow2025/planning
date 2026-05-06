import type { BuildingFootprint } from "@/lib/overpass";

export type { BuildingFootprint };

/** Result of a confirmed property selection — what gets handed back to the parent. */
export interface SelectedLocation {
  /** Human-readable display name (e.g. "14 Oakwood Drive, Richmond, TW9 4HE") */
  address: string;
  /** Cleaned UK postcode (uppercase, no extra spacing). May be empty if user searched by address only. */
  postcode: string;
  /** Latitude of the building centroid (or address pin if no building was selected) */
  lat: number;
  /** Longitude of the building centroid (or address pin if no building was selected) */
  lng: number;
  /** The OSM building footprint the user clicked on, if any */
  building?: BuildingFootprint;
}

/** Internal stage of the picker UI */
export type PickerStage =
  | "empty"          // before any address input
  | "geocoding"      // postcode/address lookup in flight
  | "loading_buildings" // address resolved, fetching footprints
  | "selecting"      // map showing blue outlines, awaiting user click
  | "selected"       // a building is selected, 3 panes are showing
  | "no_buildings";  // address resolved but Overpass returned 0 buildings

/** sessionStorage key used to persist the picked location between pages */
export const SESSION_KEY = "planscope_location";

/** Centroid of a list of [lat, lng] tuples (used to position 3D / Street View on a building) */
export function centroidOf(coords: [number, number][]): { lat: number; lng: number } {
  if (coords.length === 0) return { lat: 0, lng: 0 };
  let lat = 0;
  let lng = 0;
  for (const [a, b] of coords) {
    lat += a;
    lng += b;
  }
  return { lat: lat / coords.length, lng: lng / coords.length };
}
