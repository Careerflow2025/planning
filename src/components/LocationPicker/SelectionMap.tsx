"use client";

import { useEffect, useRef, useState } from "react";
import { isGoogleMapsConfigured, loadMapsLibrary } from "@/lib/google-maps-loader";
import { findClosestBuilding, type BuildingFootprint } from "@/lib/overpass";
import type { Selection } from "./types";

type Mode = "auto" | "pin" | "draw";

interface SelectionMapProps {
  /** Centre of the map (typically the postcode lookup result or selection centroid). */
  lat: number;
  lng: number;
  /** All OSM building footprints we know about — drawn as faint blue outlines. */
  buildings: BuildingFootprint[];
  /** Current selection (clicked building, dropped pin, or drawn polygon). */
  selected: Selection | null;
  /** Fired when the user picks a property (via any of the three modes). */
  onSelectionChanged: (s: Selection) => void;
  /** Show the floating "Click on your property" hint banner above the map. */
  showHint?: boolean;
}

/**
 * Pane 1 of the LocationPicker — Google Maps satellite with 3 selection modes.
 *
 *   Auto  — click a blue OSM polygon to select it. If no polygon at the click
 *           point, drop a pin and auto-snap to the nearest building within 10m.
 *   Pin   — explicit. Click anywhere drops/moves a draggable orange pin. No snap.
 *   Draw  — user clicks each corner of their property; double-click to close.
 *           Resulting polygon becomes the selection.
 *
 * Use this when OSM has the building outline (Auto), when OSM misses it (Pin),
 * or when the user wants their exact property boundary (Draw).
 */
export default function SelectionMap({
  lat,
  lng,
  buildings,
  selected,
  onSelectionChanged,
  showHint = true,
}: SelectionMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  // Layers we own
  const polygonsRef = useRef<google.maps.Polygon[]>([]);       // all OSM polygons (faint blue)
  const selectedPolygonRef = useRef<google.maps.Polygon | null>(null); // green selection polygon
  const hoverPolygonRef = useRef<google.maps.Polygon | null>(null);    // light-blue hover preview
  const markerRef = useRef<google.maps.Marker | null>(null);   // orange pin
  const drawingManagerRef = useRef<google.maps.drawing.DrawingManager | null>(null);

  // Refs that stay current for async map listeners (avoid stale closures)
  const buildingsRef = useRef<BuildingFootprint[]>(buildings);
  const selectedRef = useRef<Selection | null>(selected);
  const modeRef = useRef<Mode>("auto");
  const onChangeRef = useRef(onSelectionChanged);

  const [configured] = useState(isGoogleMapsConfigured());
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [mode, setMode] = useState<Mode>("auto");

  // Sync refs whenever props/state change
  useEffect(() => {
    buildingsRef.current = buildings;
  }, [buildings]);
  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);
  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);
  useEffect(() => {
    onChangeRef.current = onSelectionChanged;
  }, [onSelectionChanged]);

  // Mount Google Map exactly once
  useEffect(() => {
    if (!configured || !containerRef.current) return;
    let cancelled = false;

    (async () => {
      // Load core maps + drawing libraries in parallel
      const [mapsLib, drawingLib] = await Promise.all([
        loadMapsLibrary("maps"),
        loadMapsLibrary("drawing"),
      ]);
      if (cancelled || !mapsLib || !containerRef.current) {
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

      // Listener: handle clicks based on current mode
      map.addListener("click", (e: google.maps.MapMouseEvent) => {
        const ll = e.latLng;
        if (!ll) return;
        const m = modeRef.current;
        if (m === "draw") return; // drawing manager owns the clicks
        const clickLat = ll.lat();
        const clickLng = ll.lng();

        if (m === "pin") {
          // Pin mode: drop a pin, no auto-snap
          onChangeRef.current({ kind: "pin", lat: clickLat, lng: clickLng });
          return;
        }

        // Auto mode: try to find a building near the click. nearestVertexBuilding
        // gives us the closest building polygon. We use a simple distance threshold
        // (~15m) to decide whether the click landed on a building vs empty space.
        const arr = buildingsRef.current;
        if (arr.length > 0) {
          const candidate = findClosestBuilding(clickLat, clickLng, arr);
          if (candidate) {
            // Compute the squared distance from click to the nearest vertex
            // of that candidate's polygon. Threshold ~15m in degrees ≈ 1.35e-8.
            // (15m at UK latitudes is ~1.35e-4° lat * ~1.35e-4° lng → squared ≈ 1.8e-8)
            const dSq = candidate.coords.reduce((min, [bLat, bLng]) => {
              const dx = bLat - clickLat;
              const dy = bLng - clickLng;
              return Math.min(min, dx * dx + dy * dy);
            }, Infinity);
            // 15m threshold — squared lat/lng degrees
            if (dSq < 2e-8) {
              onChangeRef.current({ kind: "building", building: candidate });
              return;
            }
          }
        }

        // No close building: drop a pin
        onChangeRef.current({ kind: "pin", lat: clickLat, lng: clickLng });
      });

      // Hover preview only in auto mode
      let hoverFrame = 0;
      map.addListener("mousemove", (e: google.maps.MapMouseEvent) => {
        if (modeRef.current !== "auto") return;
        const ll = e.latLng;
        const arr = buildingsRef.current;
        if (!ll || arr.length === 0) return;
        cancelAnimationFrame(hoverFrame);
        hoverFrame = requestAnimationFrame(() => {
          const candidate = findClosestBuilding(ll.lat(), ll.lng(), arr);
          if (hoverPolygonRef.current) {
            hoverPolygonRef.current.setMap(null);
            hoverPolygonRef.current = null;
          }
          if (!candidate) return;
          const sel = selectedRef.current;
          if (sel?.kind === "building" && sel.building.id === candidate.id) return;
          hoverPolygonRef.current = new google.maps.Polygon({
            paths: candidate.coords.map(([la, lo]) => ({ lat: la, lng: lo })),
            strokeColor: "#60a5fa",
            strokeWeight: 2,
            strokeOpacity: 0.9,
            fillColor: "#60a5fa",
            fillOpacity: 0.2,
            clickable: false,
            map,
          });
        });
      });

      // Set up the drawing manager (idle by default)
      if (drawingLib && google.maps.drawing) {
        const dm = new google.maps.drawing.DrawingManager({
          drawingMode: null, // off until user picks Draw mode
          drawingControl: false,
          polygonOptions: {
            strokeColor: "#22c55e",
            strokeWeight: 3,
            strokeOpacity: 1,
            fillColor: "#22c55e",
            fillOpacity: 0.25,
            editable: true,
            clickable: false,
            zIndex: 100,
          },
        });
        dm.setMap(map);
        drawingManagerRef.current = dm;

        google.maps.event.addListener(
          dm,
          "polygoncomplete",
          (polygon: google.maps.Polygon) => {
            const path = polygon.getPath();
            const coords: [number, number][] = [];
            for (let i = 0; i < path.getLength(); i++) {
              const p = path.getAt(i);
              coords.push([p.lat(), p.lng()]);
            }
            // Compute simple centroid
            const sumLat = coords.reduce((s, [a]) => s + a, 0);
            const sumLng = coords.reduce((s, [, b]) => s + b, 0);
            const cLat = sumLat / coords.length;
            const cLng = sumLng / coords.length;
            // The drawing manager has placed its own polygon; we'll remove it
            // because the selectedPolygon useEffect renders the green outline
            // from the new selection.
            polygon.setMap(null);
            // Switch out of draw mode and commit
            dm.setDrawingMode(null);
            setMode("auto");
            onChangeRef.current({ kind: "drawn", coords, lat: cLat, lng: cLng });
          },
        );
      }

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
      markerRef.current?.setMap(null);
      markerRef.current = null;
      drawingManagerRef.current?.setMap(null);
      drawingManagerRef.current = null;
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configured]);

  // Toggle drawing manager mode when local `mode` changes
  useEffect(() => {
    const dm = drawingManagerRef.current;
    if (!dm) return;
    if (mode === "draw" && google.maps.drawing) {
      dm.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
    } else {
      dm.setDrawingMode(null);
    }
  }, [mode]);

  // Recenter when lat/lng changes (e.g. Street View handoff)
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
    }
  }, [lat, lng]);

  // Render all OSM building outlines (faint blue) when the buildings list changes
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

  // Render the selected polygon (green) when kind is building or drawn
  useEffect(() => {
    const map = mapRef.current;
    selectedPolygonRef.current?.setMap(null);
    selectedPolygonRef.current = null;
    if (!map || !selected) return;

    if (selected.kind === "building") {
      selectedPolygonRef.current = new google.maps.Polygon({
        paths: selected.building.coords.map(([la, lo]) => ({ lat: la, lng: lo })),
        strokeColor: "#22c55e",
        strokeWeight: 3,
        strokeOpacity: 1,
        fillColor: "#22c55e",
        fillOpacity: 0.25,
        clickable: false,
        map,
      });
    } else if (selected.kind === "drawn") {
      selectedPolygonRef.current = new google.maps.Polygon({
        paths: selected.coords.map(([la, lo]) => ({ lat: la, lng: lo })),
        strokeColor: "#22c55e",
        strokeWeight: 3,
        strokeOpacity: 1,
        fillColor: "#22c55e",
        fillOpacity: 0.25,
        strokePosition: google.maps.StrokePosition.OUTSIDE,
        clickable: false,
        map,
      });
    }
  }, [selected]);

  // Render the orange pin marker when the selection is a pin (or supplementary
  // for a kind=building snap from a click on empty space — we omit that for
  // simplicity here; pin only shows for kind=pin)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (selected?.kind === "pin") {
      const pos = { lat: selected.lat, lng: selected.lng };
      if (!markerRef.current) {
        markerRef.current = new google.maps.Marker({
          position: pos,
          map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          title: "Your property",
        });
        markerRef.current.addListener("dragend", () => {
          const p = markerRef.current?.getPosition();
          if (p) onChangeRef.current({ kind: "pin", lat: p.lat(), lng: p.lng() });
        });
      } else {
        markerRef.current.setPosition(pos);
        markerRef.current.setMap(map);
      }
    } else {
      markerRef.current?.setMap(null);
    }
  }, [selected]);

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

  const helpText =
    mode === "auto"
      ? "Click a building to select it. If yours isn't outlined, click anywhere to drop a pin."
      : mode === "pin"
        ? "Click anywhere on your property. Drag the pin to fine-tune."
        : "Click each corner of your property. Double-click to finish.";

  return (
    <div className="relative h-full overflow-hidden bg-gray-100">
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ cursor: mode === "draw" ? "crosshair" : "default" }}
      />

      {/* Mode toggle */}
      <div className="absolute top-3 left-3 z-[20] bg-white rounded-lg shadow-md p-1 flex gap-1">
        {(["auto", "pin", "draw"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-md transition-colors flex items-center gap-1 ${
              mode === m ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            title={
              m === "auto"
                ? "Auto — click an outlined building, or click empty space for a pin"
                : m === "pin"
                  ? "Pin — drop or drag a pin anywhere"
                  : "Draw — outline your own property boundary"
            }
          >
            {m === "auto" && <>🎯 Auto</>}
            {m === "pin" && <>📍 Pin</>}
            {m === "draw" && <>✏️ Draw</>}
          </button>
        ))}
      </div>

      {/* Contextual help text */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[10] bg-white/95 shadow-md rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 pointer-events-none max-w-md text-center">
        {showHint && helpText}
      </div>

      {/* Selection confirmation badge */}
      {selected && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[10] bg-green-50 border border-green-200 shadow-md rounded-lg px-3 py-1.5 text-xs font-semibold text-green-800 flex items-center gap-1.5 pointer-events-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {selected.kind === "building" && "Building selected"}
          {selected.kind === "pin" && "Pin placed — drag to fine-tune"}
          {selected.kind === "drawn" && "Custom outline saved"}
        </div>
      )}

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
    </div>
  );
}
