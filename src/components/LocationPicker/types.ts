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
  /** The building footprint (from OSM or user-drawn), if any */
  building?: BuildingFootprint;
}

/**
 * The three ways a user can identify their property on the map. All three
 * resolve to a `lat`/`lng` + optional polygon so downstream consumers don't
 * have to care which method was used.
 */
export type Selection =
  | { kind: "building"; building: BuildingFootprint }
  | { kind: "pin"; lat: number; lng: number }
  | { kind: "drawn"; coords: [number, number][]; lat: number; lng: number };

/** Centroid of any selection — used to drive Street View + 3D Aerial recentering. */
export function selectionCentroid(s: Selection): { lat: number; lng: number } {
  if (s.kind === "building") return centroidOf(s.building.coords);
  return { lat: s.lat, lng: s.lng };
}

/** Pull a BuildingFootprint out of any selection (or null for a bare pin). Used
 *  for the optional `building` field in the SelectedLocation handoff. */
export function selectionFootprint(s: Selection): BuildingFootprint | null {
  if (s.kind === "building") return s.building;
  if (s.kind === "drawn") return { id: -1, coords: s.coords, tags: {} };
  return null;
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
