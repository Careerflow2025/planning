"use client";

import { useCallback, useEffect, useState } from "react";
import AddressSearch from "@/components/AddressSearch";
import { fetchBuildingFootprints, type BuildingFootprint } from "@/lib/overpass";
import SelectionMap from "./SelectionMap";
import StreetViewPane from "./StreetViewPane";
import Aerial3DPane from "./Aerial3DPane";
import { centroidOf, SESSION_KEY, type SelectedLocation } from "./types";

interface LocationPickerProps {
  /** Restore from sessionStorage (or pass directly) so users don't repeat themselves */
  initial?: SelectedLocation;
  /** Fired when the user clicks "Yes, this is my property" */
  onConfirm: (loc: SelectedLocation) => void;
  /** Affects sizing — hero (taller, more prominent) vs wizard (compact) */
  variant?: "hero" | "wizard";
}

type MobileTab = "map" | "3d" | "aerial";

export default function LocationPicker({ initial, onConfirm, variant = "hero" }: LocationPickerProps) {
  const [pinned, setPinned] = useState<{ lat: number; lng: number; address: string; postcode: string } | null>(
    initial ? { lat: initial.lat, lng: initial.lng, address: initial.address, postcode: initial.postcode } : null,
  );
  const [buildings, setBuildings] = useState<BuildingFootprint[]>([]);
  const [buildingsLoading, setBuildingsLoading] = useState(false);
  const [buildingsError, setBuildingsError] = useState<string | null>(null);
  const [selected, setSelected] = useState<BuildingFootprint | null>(initial?.building ?? null);
  const [mobileTab, setMobileTab] = useState<MobileTab>("map");

  // Whenever the pinned location changes, fetch building footprints
  useEffect(() => {
    if (!pinned) {
      setBuildings([]);
      setSelected(null);
      return;
    }
    let cancelled = false;
    setBuildingsLoading(true);
    setBuildingsError(null);
    setSelected(null);

    fetchBuildingFootprints(pinned.lat, pinned.lng)
      .then((b) => {
        if (cancelled) return;
        setBuildings(b);
      })
      .catch(() => {
        if (cancelled) return;
        setBuildings([]);
        setBuildingsError("Couldn't load building outlines for this area. Try a more specific address.");
      })
      .finally(() => {
        if (!cancelled) setBuildingsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [pinned?.lat, pinned?.lng]);

  // Try to extract a postcode from an arbitrary address string. UK postcode pattern.
  const extractPostcode = useCallback((s: string): string => {
    const m = s.match(/\b[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}\b/i);
    return m ? m[0].toUpperCase().replace(/\s+/g, " ").trim() : "";
  }, []);

  const handleAddressSelected = useCallback(
    (r: { lat: number; lng: number; display: string }) => {
      setPinned({
        lat: r.lat,
        lng: r.lng,
        address: r.display,
        postcode: extractPostcode(r.display),
      });
    },
    [extractPostcode],
  );

  const handleConfirm = () => {
    if (!pinned || !selected) return;
    const c = centroidOf(selected.coords);
    const loc: SelectedLocation = {
      address: pinned.address,
      postcode: pinned.postcode,
      lat: c.lat,
      lng: c.lng,
      building: selected,
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

  // Sizing for the inline (pre-modal) state — Tailwind class on the wrapper.
  const mapHeight = variant === "hero" ? "h-[420px]" : "h-[360px]";

  // Compute the centre point we feed into the 3D + bird's-eye panes
  const selectedCentroid = selected ? centroidOf(selected.coords) : null;

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

      {/* ── Inline selection map (only when no building selected yet) ── */}
      {pinned && !selected && (
        <div className={mapHeight}>
          <SelectionMap
            lat={pinned.lat}
            lng={pinned.lng}
            buildings={buildings}
            selectedBuilding={null}
            onBuildingSelected={setSelected}
          />
        </div>
      )}

      {/* Footer help text when nothing is picked yet */}
      {!pinned && (
        <p className="text-xs text-muted text-center">
          Type a postcode or address — we'll show buildings on a map so you can pick the exact one.
        </p>
      )}
      {pinned && !selected && !buildingsLoading && buildings.length === 0 && !buildingsError && (
        <p className="text-xs text-muted text-center">
          No building outlines for this area. Try a postcode for a built-up area.
        </p>
      )}

      {/* ═══════════════════════════════════════════════════════════
          FULLSCREEN MODAL — opens automatically when a building is selected.
          3 big panes side-by-side on desktop, swipeable tabs on mobile.
          ═══════════════════════════════════════════════════════════ */}
      {pinned && selected && selectedCentroid && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-stretch justify-center p-2 md:p-4">
          <div className="bg-white w-full max-w-7xl rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[stepIn_0.25s_ease-out]">
            {/* Modal header */}
            <header className="flex items-center justify-between gap-3 px-5 py-3 border-b border-border bg-white">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm">Confirm your property</p>
                  <p className="text-xs text-muted truncate">{pinned.address}</p>
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

            {/* Mobile tab bar (only on small screens) */}
            <div className="md:hidden flex border-b border-border">
              {(["map", "3d", "aerial"] as MobileTab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setMobileTab(t)}
                  className={`flex-1 py-2.5 text-xs font-semibold transition-colors ${
                    mobileTab === t ? "bg-primary text-white" : "bg-white text-muted hover:bg-gray-50"
                  }`}
                >
                  {t === "map" && "🗺 Map"}
                  {t === "3d" && "🚶 Street View"}
                  {t === "aerial" && "🛰 3D Aerial"}
                </button>
              ))}
            </div>

            {/* Pane grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 p-2 md:p-3 min-h-0">
              <div className={`${mobileTab !== "map" ? "hidden md:block" : ""} min-h-0`}>
                <SelectionMap
                  lat={pinned.lat}
                  lng={pinned.lng}
                  buildings={buildings}
                  selectedBuilding={selected}
                  onBuildingSelected={setSelected}
                />
              </div>
              <div className={`${mobileTab !== "3d" ? "hidden md:block" : ""} min-h-0`}>
                <StreetViewPane
                  lat={selectedCentroid.lat}
                  lng={selectedCentroid.lng}
                  buildings={buildings}
                  onBuildingSelected={setSelected}
                />
              </div>
              <div className={`${mobileTab !== "aerial" ? "hidden md:block" : ""} min-h-0`}>
                <Aerial3DPane
                  lat={selectedCentroid.lat}
                  lng={selectedCentroid.lng}
                  address={pinned.address}
                />
              </div>
            </div>

            {/* Footer / confirm bar */}
            <footer className="border-t border-border bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <p className="text-sm text-green-900 flex-1 min-w-0">
                <span className="font-semibold">Is this your property?</span>{" "}
                <span className="text-green-700">
                  Click a building on the map, or navigate Street View and tap &quot;My property is here&quot;.
                </span>
              </p>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 border border-border rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Try again
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-6 py-2.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 shadow-md text-sm"
                >
                  Yes, this is my property
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
