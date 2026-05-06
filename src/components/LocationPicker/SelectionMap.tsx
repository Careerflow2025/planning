"use client";

import { useEffect, useRef, useState } from "react";
import { isGoogleMapsConfigured, loadMapsLibrary } from "@/lib/google-maps-loader";
import { findClosestBuilding, type BuildingFootprint } from "@/lib/overpass";

interface SelectionMapProps {
  /** Centre of the map (typically the postcode lookup result or a centroid). */
  lat: number;
  lng: number;
  /** All known building footprints, drawn as blue polygons. */
  buildings: BuildingFootprint[];
  /** Currently-selected building, drawn as a green polygon on top. */
  selectedBuilding: BuildingFootprint | null;
  /** Click handler — receives the closest building to where the user clicked. */
  onBuildingSelected: (b: BuildingFootprint) => void;
  /** Show the floating "Click on your property" hint banner above the map. */
  showHint?: boolean;
}

/**
 * Pane 1 of the LocationPicker — Google Maps satellite with overlaid building footprints.
 *
 * Why Google Maps + Overpass (and not just Google): Google Maps doesn't expose
 * individual building polygons via its API. So we draw blue outlines from the
 * Overpass building footprints we already fetched. The base imagery, controls,
 * attribution and zoom UI are 100% Google — only the polygon overlays are ours.
 */
export default function SelectionMap({
  lat,
  lng,
  buildings,
  selectedBuilding,
  onBuildingSelected,
  showHint = true,
}: SelectionMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const polygonsRef = useRef<google.maps.Polygon[]>([]);
  const selectedPolygonRef = useRef<google.maps.Polygon | null>(null);
  const hoverPolygonRef = useRef<google.maps.Polygon | null>(null);
  const buildingsRef = useRef<BuildingFootprint[]>(buildings);
  const selectedRef = useRef<BuildingFootprint | null>(selectedBuilding);
  const [configured] = useState(isGoogleMapsConfigured());
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  // Keep refs in sync so async map listeners always see the latest state.
  useEffect(() => {
    buildingsRef.current = buildings;
  }, [buildings]);
  useEffect(() => {
    selectedRef.current = selectedBuilding;
  }, [selectedBuilding]);

  // Mount Google Map exactly once
  useEffect(() => {
    if (!configured || !containerRef.current) return;
    let cancelled = false;

    (async () => {
      const lib = await loadMapsLibrary("maps");
      if (cancelled || !lib || !containerRef.current) {
        if (!cancelled) setStatus("error");
        return;
      }

      const map = new google.maps.Map(containerRef.current, {
        center: { lat, lng },
        zoom: 19,
        mapTypeId: "satellite",
        tilt: 0,
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        rotateControl: false,
        scaleControl: false,
      });

      // Click → select closest building
      map.addListener("click", (e: google.maps.MapMouseEvent) => {
        const ll = e.latLng;
        const arr = buildingsRef.current;
        if (!ll || arr.length === 0) return;
        const b = findClosestBuilding(ll.lat(), ll.lng(), arr);
        if (b) onBuildingSelected(b);
      });

      // Hover → ghost outline (light blue)
      let hoverFrame = 0;
      map.addListener("mousemove", (e: google.maps.MapMouseEvent) => {
        const ll = e.latLng;
        const arr = buildingsRef.current;
        if (!ll || arr.length === 0) return;
        // Throttle to one render frame to keep things smooth
        cancelAnimationFrame(hoverFrame);
        hoverFrame = requestAnimationFrame(() => {
          const b = findClosestBuilding(ll.lat(), ll.lng(), arr);
          if (hoverPolygonRef.current) hoverPolygonRef.current.setMap(null);
          hoverPolygonRef.current = null;
          if (b && (!selectedRef.current || b.id !== selectedRef.current.id)) {
            hoverPolygonRef.current = new google.maps.Polygon({
              paths: b.coords.map(([la, lo]) => ({ lat: la, lng: lo })),
              strokeColor: "#60a5fa",
              strokeWeight: 2,
              strokeOpacity: 0.9,
              fillColor: "#60a5fa",
              fillOpacity: 0.2,
              clickable: false,
              map,
            });
          }
        });
      });

      mapRef.current = map;
      setStatus("ready");
    })();

    return () => {
      cancelled = true;
      polygonsRef.current.forEach((p) => p.setMap(null));
      polygonsRef.current = [];
      selectedPolygonRef.current?.setMap(null);
      selectedPolygonRef.current = null;
      hoverPolygonRef.current?.setMap(null);
      hoverPolygonRef.current = null;
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configured]);

  // Recenter when lat/lng changes (e.g. user picked a new property in Street View)
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
    }
  }, [lat, lng]);

  // Draw / redraw all building outlines (blue) when the buildings array changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    polygonsRef.current.forEach((p) => p.setMap(null));
    polygonsRef.current = buildings.map(
      (b) =>
        new google.maps.Polygon({
          paths: b.coords.map(([la, lo]) => ({ lat: la, lng: lo })),
          strokeColor: "#3b82f6",
          strokeWeight: 1.5,
          strokeOpacity: 0.9,
          fillColor: "#3b82f6",
          fillOpacity: 0.08,
          clickable: false,
          map,
        }),
    );
  }, [buildings]);

  // Draw / redraw the selected (green) polygon on top
  useEffect(() => {
    const map = mapRef.current;
    selectedPolygonRef.current?.setMap(null);
    selectedPolygonRef.current = null;
    if (!map || !selectedBuilding) return;
    selectedPolygonRef.current = new google.maps.Polygon({
      paths: selectedBuilding.coords.map(([la, lo]) => ({ lat: la, lng: lo })),
      strokeColor: "#22c55e",
      strokeWeight: 3,
      strokeOpacity: 1,
      fillColor: "#22c55e",
      fillOpacity: 0.25,
      clickable: false,
      map,
    });
  }, [selectedBuilding]);

  if (!configured) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-sm font-semibold text-amber-900">Google Maps not configured</p>
        <p className="text-xs text-amber-700 mt-1">
          Add <code className="bg-amber-100 px-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> in Netlify.
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden bg-gray-100">
      <div ref={containerRef} className="absolute inset-0" style={{ cursor: "crosshair" }} />

      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-[5]">
          <svg className="w-8 h-8 animate-spin text-gray-300" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
          </svg>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-[5] p-6 text-center">
          <p className="text-sm text-muted">Couldn&apos;t load Google Maps.</p>
        </div>
      )}

      {showHint && status === "ready" && !selectedBuilding && buildings.length > 0 && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[10] bg-white/95 shadow-md rounded-lg px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 pointer-events-none">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
          </svg>
          Click on your property
        </div>
      )}

      {selectedBuilding && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[10] bg-green-50 border border-green-200 shadow-md rounded-lg px-3 py-1.5 text-xs font-semibold text-green-800 flex items-center gap-1.5 pointer-events-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Property selected — confirm below
        </div>
      )}
    </div>
  );
}
