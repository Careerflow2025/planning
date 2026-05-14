"use client";

import { useCallback, useEffect, useState } from "react";
import AddressSearch from "@/components/AddressSearch";
import { fetchBuildingFootprints, type BuildingFootprint } from "@/lib/overpass";
import SelectionMap from "./SelectionMap";
import StreetViewPane from "./StreetViewPane";
import PropertyDataCard from "./PropertyDataCard";
import {
  SESSION_KEY,
  selectionCentroid,
  selectionFootprint,
  type SelectedLocation,
  type Selection,
} from "./types";

/**
 * Move a lat/lng forward in a heading direction by a given distance in metres.
 * Used to estimate the building IN FRONT of a Street View pano, since the pano
 * is positioned on the street and the user is facing their property.
 *
 * 12 m is a sensible default for UK residential streets — the road is ~6-8m
 * wide and front gardens are ~3-5m, so 12m lands roughly on the building wall.
 */
function offsetByHeading(
  lat: number,
  lng: number,
  headingDeg: number,
  distanceM: number,
): { lat: number; lng: number } {
  const R = 6_378_137; // Earth radius in metres
  const headingRad = (headingDeg * Math.PI) / 180;
  const dLat = ((distanceM * Math.cos(headingRad)) / R) * (180 / Math.PI);
  const dLng =
    ((distanceM * Math.sin(headingRad)) / (R * Math.cos((lat * Math.PI) / 180))) *
    (180 / Math.PI);
  return { lat: lat + dLat, lng: lng + dLng };
}

/** Pure heuristic: nearest building (by closest vertex) to a target lat/lng. */
function nearestBuildingTo(
  lat: number,
  lng: number,
  buildings: BuildingFootprint[],
): BuildingFootprint | null {
  if (buildings.length === 0) return null;
  let best: BuildingFootprint | null = null;
  let bestDist = Infinity;
  for (const b of buildings) {
    let minDist = Infinity;
    for (const [bLat, bLng] of b.coords) {
      const dx = bLat - lat;
      const dy = bLng - lng;
      const d = dx * dx + dy * dy;
      if (d < minDist) minDist = d;
    }
    if (minDist < bestDist) {
      bestDist = minDist;
      best = b;
    }
  }
  return best;
}

interface LocationPickerProps {
  /** Restore from sessionStorage (or pass directly) so users don't repeat themselves */
  initial?: SelectedLocation;
  /** Fired when the user clicks "Yes, this is my property" */
  onConfirm: (loc: SelectedLocation) => void;
  /** Affects sizing — hero (taller, more prominent) vs wizard (compact) */
  variant?: "hero" | "wizard";
}

export default function LocationPicker({ initial, onConfirm, variant = "hero" }: LocationPickerProps) {
  const [pinned, setPinned] = useState<{ lat: number; lng: number; address: string; postcode: string } | null>(
    initial ? { lat: initial.lat, lng: initial.lng, address: initial.address, postcode: initial.postcode } : null,
  );
  const [buildings, setBuildings] = useState<BuildingFootprint[]>([]);
  const [buildingsLoading, setBuildingsLoading] = useState(false);
  const [buildingsError, setBuildingsError] = useState<string | null>(null);
  // Selection is now a discriminated union: a clicked OSM building, a dropped
  // pin, or a user-drawn polygon. All three resolve to lat/lng + optional
  // polygon for the downstream SelectedLocation.
  const [selected, setSelected] = useState<Selection | null>(
    initial?.building ? { kind: "building", building: initial.building } : null,
  );

  /** Fetch buildings around a point and update local state. Centralised so every
   *  caller (address search, Street View re-pick, initial preload) shares behaviour. */
  const loadBuildings = useCallback(async (lat: number, lng: number): Promise<BuildingFootprint[]> => {
    setBuildingsLoading(true);
    setBuildingsError(null);
    try {
      const fresh = await fetchBuildingFootprints(lat, lng);
      setBuildings(fresh);
      return fresh;
    } catch {
      setBuildings([]);
      setBuildingsError("Couldn't load building outlines for this area.");
      return [];
    } finally {
      setBuildingsLoading(false);
    }
  }, []);

  // One-time preload from the `initial` prop (e.g. sessionStorage hand-off from
  // the home page). All other fetches are explicit, in handlers below.
  useEffect(() => {
    if (initial) {
      void loadBuildings(initial.lat, initial.lng);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Try to extract a postcode from an arbitrary address string. UK postcode pattern.
  const extractPostcode = useCallback((s: string): string => {
    const m = s.match(/\b[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}\b/i);
    return m ? m[0].toUpperCase().replace(/\s+/g, " ").trim() : "";
  }, []);

  const handleAddressSelected = useCallback(
    async (r: { lat: number; lng: number; display: string }) => {
      // Set pinned + reset selection synchronously so the UI shows "Location found"
      // immediately, then fetch buildings explicitly.
      setPinned({
        lat: r.lat,
        lng: r.lng,
        address: r.display,
        postcode: extractPostcode(r.display),
      });
      setSelected(null);
      await loadBuildings(r.lat, r.lng);
    },
    [extractPostcode, loadBuildings],
  );

  const handleConfirm = () => {
    if (!pinned || !selected) return;
    const c = selectionCentroid(selected);
    const footprint = selectionFootprint(selected);
    const loc: SelectedLocation = {
      address: pinned.address,
      postcode: pinned.postcode,
      lat: c.lat,
      lng: c.lng,
      building: footprint ?? undefined,
    };
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(loc));
    } catch {
      /* sessionStorage may be blocked in private mode — non-critical */
    }
    onConfirm(loc);
  };

  const handleReset = () => {
    setSelected(null);
  };

  /**
   * Called when the user navigates Street View to a different location and clicks
   * "My property is here". The pano position can be far from the original postcode
   * (200m+ down the road) — outside the original Overpass fetch radius. So we
   * re-fetch building footprints around the new position, then commit pinned +
   * selected together so the modal stays open and all three panes re-sync.
   *
   * No useEffect-on-pinned exists anymore, so there's nothing to clobber the
   * selection mid-flight.
   */
  const handleStreetViewLocation = useCallback(
    async ({
      lat: panoLat,
      lng: panoLng,
      heading,
    }: {
      lat: number;
      lng: number;
      heading: number;
    }) => {
      // The pano position is on the street. The user is facing their property.
      // Project 12m in the heading direction to estimate where their property
      // actually sits, then look for the closest building to THAT point.
      const target = offsetByHeading(panoLat, panoLng, heading, 12);

      // Fetch buildings around the offset target (Overpass radius is 500m so this
      // catches everything within walking distance).
      const fresh = await loadBuildings(target.lat, target.lng);
      const closest = nearestBuildingTo(target.lat, target.lng, fresh);

      // Smart sync: if there's an OSM building near the offset target (within
      // ~15m), select it. Otherwise drop a pin at the offset point — no more
      // wrong-neighbour bug because we don't force a building selection when
      // OSM doesn't have the user's actual house.
      // Threshold ~15m squared in degrees ≈ 2e-8 at UK latitudes.
      const SNAP_THRESHOLD_SQ_DEG = 2e-8;
      let useBuilding = false;
      if (closest) {
        const dSq = closest.coords.reduce((min, [bLat, bLng]) => {
          const dx = bLat - target.lat;
          const dy = bLng - target.lng;
          return Math.min(min, dx * dx + dy * dy);
        }, Infinity);
        useBuilding = dSq < SNAP_THRESHOLD_SQ_DEG;
      }

      // Commit pinned (so the SelectionMap recentres) + selected together.
      setPinned((p) => (p ? { ...p, lat: target.lat, lng: target.lng } : null));
      if (useBuilding && closest) {
        setSelected({ kind: "building", building: closest });
      } else {
        setSelected({ kind: "pin", lat: target.lat, lng: target.lng });
      }
    },
    [loadBuildings],
  );

  // Centroid to drive Street View + data-card panes. Until the user picks a
  // building/pin/drawn outline, fall back to the postcode-lookup point so the
  // 3-pane modal can open immediately after the address is chosen.
  const effectiveCentroid = selected
    ? selectionCentroid(selected)
    : pinned
      ? { lat: pinned.lat, lng: pinned.lng }
      : null;
  void variant; // sizing now driven by the fullscreen modal — variant unused

  return (
    <div className="space-y-3">
      {/* ── Address search ── */}
      <AddressSearch
        onSelect={handleAddressSelected}
        placeholder="Search for a postcode or address..."
        autoFocus={!pinned}
      />

      {/* ── Status banners ── */}
      {pinned && (
        <div className="bg-accent-light border border-accent/30 rounded-xl p-3 flex items-center gap-3">
          <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div className="min-w-0 flex-1">
            <p className="font-medium text-sm text-accent">Location found</p>
            <p className="text-sm text-gray-700 truncate">{pinned.address}</p>
          </div>
          <button
            onClick={() => {
              setPinned(null);
              setSelected(null);
              setBuildings([]);
            }}
            className="text-xs font-medium text-gray-500 hover:text-gray-700"
          >
            Change
          </button>
        </div>
      )}

      {pinned && buildingsLoading && (
        <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
          <svg className="w-5 h-5 animate-spin text-blue-500" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
          </svg>
          <span className="text-sm text-blue-700">Loading building outlines...</span>
        </div>
      )}

      {buildingsError && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          {buildingsError}
        </div>
      )}

      {/* Footer help text when nothing is picked yet */}
      {!pinned && (
        <p className="text-xs text-muted text-center">
          Type a postcode or address — we&apos;ll open the property picker directly.
        </p>
      )}

      {/* ═══════════════════════════════════════════════════════════
          FULLSCREEN MODAL — all three panes visible at once, no scroll.
          Layout: Map full-width on top, Street View + 3D Aerial split
          50/50 on the bottom. The whole thing fits in 100vh.
          ═══════════════════════════════════════════════════════════ */}
      {pinned && effectiveCentroid && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-[stepIn_0.25s_ease-out]">
          {/* Top bar */}
          <header className="flex-shrink-0 flex items-center justify-between gap-3 px-5 py-2.5 border-b border-border bg-white shadow-sm">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm leading-tight">Confirm your property</p>
                <p className="text-xs text-muted truncate leading-tight">{pinned.address}</p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          {/* Body — three panes always visible. Top = Map (full width).
              Bottom = Street View + 3D Aerial split 50/50. */}
          <div className="flex-1 min-h-0 flex flex-col">
            {/* Top half — Map */}
            <section className="relative w-full h-1/2 border-b border-border">
              <div className="absolute top-3 left-3 z-[15] bg-white rounded-lg shadow-md px-3 py-1.5 text-xs font-bold pointer-events-none flex items-center gap-1.5">
                🗺 Map — click any building to select it
              </div>
              <SelectionMap
                lat={pinned.lat}
                lng={pinned.lng}
                buildings={buildings}
                selected={selected}
                onSelectionChanged={setSelected}
                showHint={true}
              />
            </section>

            {/* Bottom half — Street View + 3D Aerial side by side */}
            <section className="relative w-full h-1/2 grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-0 border-r border-border">
                <StreetViewPane
                  lat={effectiveCentroid.lat}
                  lng={effectiveCentroid.lng}
                  onLocationConfirmed={handleStreetViewLocation}
                />
              </div>
              <div className="relative min-h-0 border-t md:border-t-0 border-border">
                <PropertyDataCard
                  selection={selected}
                  address={pinned.address}
                  postcode={pinned.postcode}
                  lat={effectiveCentroid.lat}
                  lng={effectiveCentroid.lng}
                />
              </div>
            </section>

            {buildingsLoading && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] bg-blue-100 border border-blue-300 text-blue-800 text-xs font-semibold rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                </svg>
                Updating to new location…
              </div>
            )}
          </div>

          {/* Bottom confirm bar — fixed height, always visible */}
          <footer className="flex-shrink-0 border-t border-border bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-2.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
            <p className="text-xs text-green-800 flex-1 min-w-0 hidden sm:block">
              <span className="font-semibold">Is this your property?</span>{" "}
              <span className="text-green-700">
                Click another building on the map, or use &quot;My property is here&quot; in Street View.
              </span>
            </p>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={handleReset}
                className="px-4 py-2 border border-border rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm"
              >
                Try again
              </button>
              <button
                onClick={handleConfirm}
                disabled={!selected}
                className="px-5 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-colors flex items-center justify-center gap-1.5 shadow-md text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {selected ? "Yes, this is my property" : "Pick your property first"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
