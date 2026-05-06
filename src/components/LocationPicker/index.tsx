"use client";

import { useCallback, useEffect, useState } from "react";
import AddressSearch from "@/components/AddressSearch";
import { fetchBuildingFootprints, type BuildingFootprint } from "@/lib/overpass";
import SelectionMap from "./SelectionMap";
import View3D from "./View3D";
import BirdsEyeMap from "./BirdsEyeMap";
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

  // Sizing: variant=hero is fuller, variant=wizard fits inside a wizard step container.
  // mapHeight is a Tailwind class for the wrapper. paneCss is a real CSS value passed to
  // child components that use `style={{ height }}`.
  const mapHeight = variant === "hero" ? "h-[420px]" : "h-[360px]";
  const paneCssHeight = "100%";

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

      {/* ── Mobile tab switcher (only shown after a building is selected) ── */}
      {pinned && selected && (
        <div className="md:hidden flex rounded-lg border border-border overflow-hidden">
          {(["map", "3d", "aerial"] as MobileTab[]).map((t) => (
            <button
              key={t}
              onClick={() => setMobileTab(t)}
              className={`flex-1 py-2 text-xs font-semibold transition-colors ${
                mobileTab === t ? "bg-primary text-white" : "bg-white text-muted hover:bg-gray-50"
              }`}
            >
              {t === "map" && "🗺 Map"}
              {t === "3d" && "🎬 3D"}
              {t === "aerial" && "🛰 Aerial"}
            </button>
          ))}
        </div>
      )}

      {/* ── Pane grid ── */}
      {pinned && (
        <div
          className={`grid gap-3 transition-all duration-300 ${
            selected
              ? "md:grid-cols-2 xl:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {/* Pane 1 — Selection map (always visible) */}
          <div
            className={`${selected ? "" : ""} ${mapHeight} ${
              selected && mobileTab !== "map" ? "hidden md:block" : ""
            }`}
          >
            <SelectionMap
              lat={pinned.lat}
              lng={pinned.lng}
              buildings={buildings}
              selectedBuilding={selected}
              onBuildingSelected={setSelected}
            />
          </div>

          {/* Pane 2 — 3D / Street View (only after selection) */}
          {selected && selectedCentroid && (
            <div
              className={`${mapHeight} animate-[stepIn_0.3s_ease-out] ${
                mobileTab !== "3d" ? "hidden md:block" : ""
              }`}
            >
              <View3D
                lat={selectedCentroid.lat}
                lng={selectedCentroid.lng}
                address={pinned.address}
              />
            </div>
          )}

          {/* Pane 3 — Bird's eye (only after selection) */}
          {selected && (
            <div
              className={`${mapHeight} xl:col-span-1 md:col-span-2 animate-[stepIn_0.3s_ease-out] ${
                mobileTab !== "aerial" ? "hidden md:block" : ""
              }`}
            >
              <BirdsEyeMap building={selected} height={paneCssHeight} />
            </div>
          )}
        </div>
      )}

      {/* ── Confirm bar ── */}
      {pinned && selected && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 space-y-3 animate-[stepIn_0.3s_ease-out]">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <p className="font-semibold text-sm text-green-900">Is this your property?</p>
              <p className="text-xs text-green-700 mt-0.5">
                Walk around in any pane to verify — you can drag inside Street View, or click another building on the map to switch.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleConfirm}
              className="flex-1 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              Yes, this is my property
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={handleReset}
              className="py-3 px-5 border-2 border-border rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              No, try again
            </button>
          </div>
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
    </div>
  );
}
