"use client";

import { useEffect, useState } from "react";
import type { Selection } from "./types";

interface PropertyDataCardProps {
  /** Current selection — building, pin, or drawn polygon. `null` while the user
   *  is still picking; the card renders a placeholder until then. */
  selection: Selection | null;
  /** The displayed address from the postcode/address search. */
  address: string;
  /** The displayed postcode (may be empty if user searched by address only). */
  postcode: string;
  /** Centroid lat/lng for display. */
  lat: number;
  lng: number;
}

interface LpaInfo {
  name: string | null;
  region: string | null;
  country: string | null;
}

/**
 * Pane 3 of the LocationPicker — Property Data Card.
 *
 * Visually distinct from the Map (Pane 1) and Street View (Pane 2). Pure
 * information that the user is going to put into their planning report:
 *  - Address + postcode
 *  - Building footprint area (calculated from the polygon, not from APIs)
 *  - Building type, floors, height (when OSM has them tagged)
 *  - Coordinates
 *  - Local Planning Authority (looked up from postcodes.io)
 */
export default function PropertyDataCard({
  selection,
  address,
  postcode,
  lat,
  lng,
}: PropertyDataCardProps) {
  const [lpa, setLpa] = useState<LpaInfo>({ name: null, region: null, country: null });

  // OSM-tagged building data is only available when the selection is a real
  // OSM polygon. For pin or drawn selections, OSM tags don't apply.
  const osmBuilding = selection?.kind === "building" ? selection.building : null;

  // Polygon-based footprint area: works for OSM-tagged buildings AND user-
  // drawn outlines. Bare pins (no polygon) report "—".
  const polygon =
    selection?.kind === "building"
      ? selection.building.coords
      : selection?.kind === "drawn"
        ? selection.coords
        : null;

  // Reverse-lookup the LPA via postcodes.io. Free, no key needed.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const url = postcode
          ? `https://api.postcodes.io/postcodes/${encodeURIComponent(postcode)}`
          : `https://api.postcodes.io/postcodes?lon=${lng}&lat=${lat}&limit=1`;
        const res = await fetch(url);
        if (!res.ok) return;
        const data = await res.json();
        const r = postcode ? data?.result : data?.result?.[0];
        if (!r || cancelled) return;
        setLpa({
          name: r.admin_district ?? null,
          region: r.region ?? null,
          country: r.country ?? null,
        });
      } catch {
        /* postcodes.io occasionally rate limits; non-critical */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [postcode, lat, lng]);

  // Footprint area is available when we have a polygon (OSM-tagged building or
  // user-drawn outline). Bare pins have no polygon → "—".
  const footprintM2 = polygon ? computePolygonAreaM2(polygon) : null;
  const tags = osmBuilding?.tags ?? {};

  // Pretty-print the building type tag. OSM uses values like "yes", "house",
  // "residential", "commercial". Map the common ones to nicer labels.
  const buildingType = osmBuilding ? humaniseBuildingType(tags.building) : "—";

  // Floors: OSM tags "building:levels" with an integer. Often missing.
  const floors = osmBuilding ? tags["building:levels"] : undefined;

  // Estimated height: prefer "height" tag if present (in metres), else compute
  // from levels (~3m per level) if available.
  const height = tags.height
    ? `${tags.height} m`
    : floors
      ? `~${(parseInt(floors, 10) * 3).toFixed(1)} m (est)`
      : null;

  // Address line built from OSM tags if present, fallback to the user's search address.
  const street = osmBuilding
    ? [tags["addr:housenumber"], tags["addr:street"]].filter(Boolean).join(" ").trim()
    : "";
  const osmAddress = street ? `${street}${tags["addr:city"] ? ", " + tags["addr:city"] : ""}` : null;

  // Source label — what the user did to identify the property
  const sourceLabel = !selection
    ? "Waiting for selection"
    : selection.kind === "building"
      ? "Selected from outline"
      : selection.kind === "pin"
        ? "Pin dropped"
        : "Custom outline drawn";

  return (
    <div className="h-full overflow-y-auto bg-white">
      {/* Header band */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm font-bold tracking-tight">Property Details</p>
        </div>
      </div>

      <div className="px-5 py-4 space-y-5 text-sm">
        {!selection && (
          <div className="rounded-xl border border-blue-200 bg-blue-50 text-blue-900 text-xs px-3 py-2 flex items-start gap-2">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Click a building on the map, drop a pin, or draw your outline to fill these details.</span>
          </div>
        )}
        {/* Address */}
        <Section label="Address">
          <p className="font-medium leading-tight">{osmAddress ?? truncateAddress(address)}</p>
          {postcode && <p className="text-xs text-muted mt-0.5">{postcode}</p>}
        </Section>

        {/* Footprint */}
        <Section label="Building footprint">
          {footprintM2 !== null ? (
            <>
              <div className="flex items-baseline gap-1.5">
                <span className="inline-block w-3 h-3 rounded-sm bg-green-500 align-middle" />
                <span className="text-2xl font-bold leading-none">{footprintM2.toLocaleString()}</span>
                <span className="text-sm font-semibold text-muted">m²</span>
              </div>
              <p className="text-xs text-muted mt-0.5">
                {selection?.kind === "drawn"
                  ? "Calculated from your drawn outline"
                  : "Calculated from the building outline"}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-muted">—</p>
              <p className="text-xs text-muted mt-0.5">
                Switch to <strong>Draw</strong> mode on the map to outline your property for an area.
              </p>
            </>
          )}
        </Section>

        {/* Source */}
        <Section label="Source">
          <p className="text-xs">{sourceLabel}</p>
        </Section>

        {/* OSM-derived facts */}
        <Section label="Building details">
          <Row k="Building type" v={buildingType} />
          <Row k="Floors" v={floors ?? "—"} />
          <Row k="Height" v={height ?? "—"} />
        </Section>

        {/* Coordinates */}
        <Section label="Coordinates">
          <p className="font-mono text-xs">{lat.toFixed(5)}, {lng.toFixed(5)}</p>
        </Section>

        {/* LPA */}
        <Section label="Local Planning Authority">
          {lpa.name ? (
            <>
              <p className="font-medium leading-tight">{lpa.name}</p>
              {(lpa.region || lpa.country) && (
                <p className="text-xs text-muted mt-0.5">
                  {[lpa.region, lpa.country].filter(Boolean).join(" · ")}
                </p>
              )}
            </>
          ) : (
            <p className="text-xs text-muted italic">Looking up…</p>
          )}
        </Section>

        <div className="text-xs text-muted pt-2 border-t border-border">
          This data feeds into your planning report. You can edit it later if anything is wrong.
        </div>
      </div>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">{label}</p>
      {children}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between py-0.5">
      <span className="text-xs text-muted">{k}</span>
      <span className="text-xs font-medium">{v}</span>
    </div>
  );
}

function truncateAddress(s: string): string {
  // Keep the first 3 comma-separated parts, drop the long ", United Kingdom" tail.
  const parts = s.split(",").slice(0, 3).join(",").trim();
  return parts.length > 60 ? parts.slice(0, 57) + "…" : parts;
}

function humaniseBuildingType(tag: string | undefined): string {
  if (!tag || tag === "yes") return "Building";
  const map: Record<string, string> = {
    house: "Residential — House",
    detached: "Detached house",
    semidetached_house: "Semi-detached house",
    terrace: "Terraced house",
    apartments: "Flats / Apartments",
    residential: "Residential",
    commercial: "Commercial",
    retail: "Retail",
    office: "Office",
    industrial: "Industrial",
    warehouse: "Warehouse",
    school: "School",
    hospital: "Hospital",
    church: "Church",
    garage: "Garage",
    shed: "Shed / Outbuilding",
    barn: "Barn",
  };
  return map[tag] ?? tag.charAt(0).toUpperCase() + tag.slice(1).replace(/_/g, " ");
}

/**
 * Compute polygon area in square metres from a list of [lat, lng] vertices.
 * Uses the shoelace formula with a local equirectangular projection — accurate
 * to within ~1% for buildings (which are tiny compared to the Earth's curvature).
 */
function computePolygonAreaM2(coords: [number, number][]): number {
  if (coords.length < 3) return 0;
  const meanLat = coords.reduce((sum, [lat]) => sum + lat, 0) / coords.length;
  const cosLat = Math.cos((meanLat * Math.PI) / 180);
  // 1 degree of latitude ≈ 111,320 m. Longitude scales by cos(lat).
  const M_PER_DEG_LAT = 111_320;
  const M_PER_DEG_LNG = 111_320 * cosLat;

  let area = 0;
  for (let i = 0; i < coords.length; i++) {
    const [lat1, lng1] = coords[i];
    const [lat2, lng2] = coords[(i + 1) % coords.length];
    const x1 = lng1 * M_PER_DEG_LNG;
    const y1 = lat1 * M_PER_DEG_LAT;
    const x2 = lng2 * M_PER_DEG_LNG;
    const y2 = lat2 * M_PER_DEG_LAT;
    area += x1 * y2 - x2 * y1;
  }
  return Math.round(Math.abs(area) / 2);
}
