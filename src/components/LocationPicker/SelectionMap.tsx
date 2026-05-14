"use client";

import { useEffect, useRef, useState } from "react";
import type * as MapboxGL from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { isMapboxConfigured, loadMapboxGL } from "@/lib/mapbox-loader";
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

const SRC_ALL = "osm-buildings-all";
const SRC_SELECTED = "osm-buildings-selected";
const SRC_HOVER = "osm-buildings-hover";
const LAYER_ALL_FILL = "osm-buildings-all-fill";
const LAYER_ALL_LINE = "osm-buildings-all-line";
const LAYER_SELECTED_FILL = "osm-buildings-selected-fill";
const LAYER_SELECTED_LINE = "osm-buildings-selected-line";
const LAYER_HOVER_FILL = "osm-buildings-hover-fill";
const LAYER_HOVER_LINE = "osm-buildings-hover-line";

type FC = GeoJSON.FeatureCollection<GeoJSON.Polygon, { id?: number }>;

function emptyFC(): FC {
  return { type: "FeatureCollection", features: [] };
}

function buildingsToFC(buildings: BuildingFootprint[]): FC {
  return {
    type: "FeatureCollection",
    features: buildings.map((b) => ({
      type: "Feature",
      id: b.id, // numeric — used by queryRenderedFeatures lookup
      properties: { id: b.id },
      geometry: {
        type: "Polygon",
        // OSM coords are [lat, lng]; Mapbox needs [lng, lat] and a closed ring.
        coordinates: [closeRing(b.coords.map(([la, lo]) => [lo, la] as [number, number]))],
      },
    })),
  };
}

function buildingToFC(b: BuildingFootprint): FC {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: b.id,
        properties: { id: b.id },
        geometry: {
          type: "Polygon",
          coordinates: [closeRing(b.coords.map(([la, lo]) => [lo, la] as [number, number]))],
        },
      },
    ],
  };
}

function drawnToFC(coords: [number, number][]): FC {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [closeRing(coords.map(([la, lo]) => [lo, la] as [number, number]))],
        },
      },
    ],
  };
}

function closeRing(ring: [number, number][]): [number, number][] {
  if (ring.length === 0) return ring;
  const first = ring[0];
  const last = ring[ring.length - 1];
  if (first[0] !== last[0] || first[1] !== last[1]) return [...ring, first];
  return ring;
}

/**
 * Pane 1 of the LocationPicker — Mapbox satellite with 3 selection modes.
 *
 *   Auto  — click a blue OSM polygon to select it. If no polygon at the click
 *           point, drop a pin and auto-snap to the nearest building within ~15m.
 *   Pin   — explicit. Click anywhere drops/moves a draggable orange pin.
 *   Draw  — user clicks each corner of their property; double-click to close.
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
  const mapRef = useRef<MapboxGL.Map | null>(null);
  const mapLoadedRef = useRef(false);
  const markerRef = useRef<MapboxGL.Marker | null>(null);
  const drawRef = useRef<MapboxDraw | null>(null);
  const drawAttachedRef = useRef(false);
  const mapboxglRef = useRef<typeof MapboxGL | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Refs kept in sync with props/state for async map listeners (no stale closures)
  const buildingsRef = useRef<BuildingFootprint[]>(buildings);
  const selectedRef = useRef<Selection | null>(selected);
  const modeRef = useRef<Mode>("auto");
  const onChangeRef = useRef(onSelectionChanged);

  const [configured] = useState(isMapboxConfigured());
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [mode, setMode] = useState<Mode>("auto");
  // Number of vertices the user has dropped in the in-progress polygon. Drives
  // the floating "Finish drawing" button — visible once we have ≥3 vertices.
  const [vertexCount, setVertexCount] = useState(0);

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

  // Mount the map exactly once
  useEffect(() => {
    if (!configured || !containerRef.current) return;
    let cancelled = false;

    (async () => {
      const mapboxgl = await loadMapboxGL();
      if (cancelled || !mapboxgl || !containerRef.current) {
        if (!cancelled) setStatus("error");
        return;
      }
      mapboxglRef.current = mapboxgl;

      const map = new mapboxgl.Map({
        container: containerRef.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: [lng, lat],
        zoom: 19,
        pitch: 0,
        attributionControl: true,
      });
      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

      // Watch the container for size changes (e.g. the fullscreen modal
      // animating in) and re-tell Mapbox to redraw. Without this, the canvas
      // stays at its initial 0×0 size and shows blank gray.
      const ro = new ResizeObserver(() => {
        try {
          map.resize();
        } catch {
          /* map may already be removed */
        }
      });
      ro.observe(containerRef.current!);
      resizeObserverRef.current = ro;

      map.on("load", () => {
        if (cancelled) return;
        // Belt-and-braces — the modal stepIn animation often finishes before
        // ResizeObserver fires; force one resize now so tiles render.
        map.resize();
        // Sources
        map.addSource(SRC_ALL, { type: "geojson", data: buildingsToFC(buildingsRef.current) });
        map.addSource(SRC_SELECTED, { type: "geojson", data: emptyFC() });
        map.addSource(SRC_HOVER, { type: "geojson", data: emptyFC() });

        // Layers — all buildings (faint blue)
        map.addLayer({
          id: LAYER_ALL_FILL,
          type: "fill",
          source: SRC_ALL,
          paint: { "fill-color": "#3b82f6", "fill-opacity": 0.08 },
        });
        map.addLayer({
          id: LAYER_ALL_LINE,
          type: "line",
          source: SRC_ALL,
          paint: { "line-color": "#3b82f6", "line-width": 1.5, "line-opacity": 0.9 },
        });

        // Hover preview (slightly stronger blue)
        map.addLayer({
          id: LAYER_HOVER_FILL,
          type: "fill",
          source: SRC_HOVER,
          paint: { "fill-color": "#60a5fa", "fill-opacity": 0.2 },
        });
        map.addLayer({
          id: LAYER_HOVER_LINE,
          type: "line",
          source: SRC_HOVER,
          paint: { "line-color": "#60a5fa", "line-width": 2, "line-opacity": 0.9 },
        });

        // Selected (green)
        map.addLayer({
          id: LAYER_SELECTED_FILL,
          type: "fill",
          source: SRC_SELECTED,
          paint: { "fill-color": "#22c55e", "fill-opacity": 0.25 },
        });
        map.addLayer({
          id: LAYER_SELECTED_LINE,
          type: "line",
          source: SRC_SELECTED,
          paint: { "line-color": "#22c55e", "line-width": 3, "line-opacity": 1 },
        });

        // Instantiate MapboxDraw + register draw.create listener now (pre-load),
        // so the first user click after switching to Draw mode is captured
        // immediately.
        drawRef.current = new MapboxDraw({
          displayControlsDefault: false,
          controls: {},
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          styles: drawStyles as any,
        });
        // Track vertex count while drawing so we know when to show the Finish
        // button. `draw.render` fires after every vertex add/move.
        //
        // MapboxDraw's in-progress polygon includes (a) the user-clicked
        // vertices, (b) a "cursor follower" mirrored at the last position,
        // and (c) a duplicated closing vertex that equals vertex 0. Both
        // (b) and (c) must be dropped so "N corners" matches reality.
        map.on("draw.render", () => {
          const all = drawRef.current?.getAll();
          const f = all?.features?.[0];
          if (!f || f.geometry.type !== "Polygon") {
            setVertexCount(0);
            return;
          }
          const ring = (f.geometry.coordinates[0] ?? []) as [number, number][];
          let count = ring.length;
          if (
            count >= 2 &&
            ring[0][0] === ring[count - 1][0] &&
            ring[0][1] === ring[count - 1][1]
          ) {
            count -= 1; // drop the auto-appended closing duplicate
          }
          count = Math.max(0, count - 1); // drop the cursor-follow vertex
          setVertexCount(count);
        });

        map.on("draw.create", (e: { features: GeoJSON.Feature[] }) => {
          const f = e.features?.[0];
          if (!f || f.geometry.type !== "Polygon") return;
          const ring = f.geometry.coordinates[0] as [number, number][];
          // Mapbox returns [lng, lat] pairs; convert to our [lat, lng] convention
          // and drop the duplicated closing vertex.
          const coords: [number, number][] = ring
            .slice(
              0,
              ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]
                ? -1
                : ring.length,
            )
            .map(([lo, la]) => [la, lo]);
          if (coords.length < 3) return;
          const sumLat = coords.reduce((s, [a]) => s + a, 0);
          const sumLng = coords.reduce((s, [, b]) => s + b, 0);
          const cLat = sumLat / coords.length;
          const cLng = sumLng / coords.length;
          // MapboxDraw keeps the polygon visible internally; we render our own
          // green outline from the selection source instead.
          drawRef.current?.deleteAll();
          setVertexCount(0);
          setMode("auto");
          onChangeRef.current({ kind: "drawn", coords, lat: cLat, lng: cLng });
        });

        mapLoadedRef.current = true;

        // Push current selection into the source (if any)
        applySelectionToSources(map, selectedRef.current);

        setStatus("ready");
      });

      // Click handler — dispatches based on current mode
      map.on("click", (e) => {
        const m = modeRef.current;
        if (m === "draw") return; // MapboxDraw owns clicks in draw mode

        const clickLat = e.lngLat.lat;
        const clickLng = e.lngLat.lng;

        if (m === "pin") {
          onChangeRef.current({ kind: "pin", lat: clickLat, lng: clickLng });
          return;
        }

        // Auto mode: prefer a rendered polygon hit first (precise),
        // fall back to nearest-building heuristic for clicks near an outline.
        const hit = map.queryRenderedFeatures(e.point, { layers: [LAYER_ALL_FILL] });
        if (hit.length > 0) {
          const hitId = hit[0].id ?? hit[0].properties?.id;
          const match = buildingsRef.current.find((b) => b.id === hitId);
          if (match) {
            onChangeRef.current({ kind: "building", building: match });
            return;
          }
        }

        const arr = buildingsRef.current;
        if (arr.length > 0) {
          const candidate = findClosestBuilding(clickLat, clickLng, arr);
          if (candidate) {
            const dSq = candidate.coords.reduce((min, [bLat, bLng]) => {
              const dx = bLat - clickLat;
              const dy = bLng - clickLng;
              return Math.min(min, dx * dx + dy * dy);
            }, Infinity);
            // 15m threshold — squared lat/lng degrees ≈ 2e-8 at UK latitudes
            if (dSq < 2e-8) {
              onChangeRef.current({ kind: "building", building: candidate });
              return;
            }
          }
        }

        // No close building: drop a pin
        onChangeRef.current({ kind: "pin", lat: clickLat, lng: clickLng });
      });

      // Hover preview (auto mode only, throttled with rAF)
      let hoverFrame = 0;
      map.on("mousemove", (e) => {
        if (modeRef.current !== "auto") return;
        cancelAnimationFrame(hoverFrame);
        hoverFrame = requestAnimationFrame(() => {
          const hit = map.queryRenderedFeatures(e.point, { layers: [LAYER_ALL_FILL] });
          const src = map.getSource(SRC_HOVER) as MapboxGL.GeoJSONSource | undefined;
          if (!src) return;
          if (hit.length === 0) {
            src.setData(emptyFC());
            return;
          }
          const hitId = hit[0].id ?? hit[0].properties?.id;
          const sel = selectedRef.current;
          if (sel?.kind === "building" && sel.building.id === hitId) {
            src.setData(emptyFC());
            return;
          }
          const match = buildingsRef.current.find((b) => b.id === hitId);
          if (!match) {
            src.setData(emptyFC());
            return;
          }
          src.setData(buildingToFC(match));
        });
      });
      map.on("mouseleave", LAYER_ALL_FILL, () => {
        const src = map.getSource(SRC_HOVER) as MapboxGL.GeoJSONSource | undefined;
        src?.setData(emptyFC());
      });

      mapRef.current = map;
    })();

    return () => {
      cancelled = true;
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      markerRef.current?.remove();
      markerRef.current = null;
      if (drawRef.current && mapRef.current && drawAttachedRef.current) {
        try {
          mapRef.current.removeControl(drawRef.current as unknown as MapboxGL.IControl);
        } catch {
          /* ignore */
        }
      }
      drawRef.current = null;
      drawAttachedRef.current = false;
      mapRef.current?.remove();
      mapRef.current = null;
      mapLoadedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configured]);

  // Recenter when lat/lng changes (e.g. Street View handoff)
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoadedRef.current) return;
    map.flyTo({ center: [lng, lat], zoom: 19, speed: 1.2 });
  }, [lat, lng]);

  // Refresh the "all buildings" source whenever the prop list changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoadedRef.current) return;
    const src = map.getSource(SRC_ALL) as MapboxGL.GeoJSONSource | undefined;
    src?.setData(buildingsToFC(buildings));
  }, [buildings]);

  // Render the selected polygon (green) + orange pin marker reactively
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoadedRef.current) return;
    applySelectionToSources(map, selected);

    const mapboxgl = mapboxglRef.current;
    if (!mapboxgl) return;

    if (selected?.kind === "pin") {
      const pos: [number, number] = [selected.lng, selected.lat];
      if (!markerRef.current) {
        markerRef.current = new mapboxgl.Marker({ draggable: true, color: "#f97316" })
          .setLngLat(pos)
          .addTo(map);
        markerRef.current.on("dragend", () => {
          const ll = markerRef.current?.getLngLat();
          if (ll) onChangeRef.current({ kind: "pin", lat: ll.lat, lng: ll.lng });
        });
      } else {
        markerRef.current.setLngLat(pos);
      }
    } else {
      markerRef.current?.remove();
      markerRef.current = null;
    }
  }, [selected]);

  // Toggle MapboxDraw when entering/leaving Draw mode. The draw control + its
  // draw.create listener are set up once at map load (see the `load` handler
  // above) so the first click after switching to Draw mode is captured
  // immediately — no lazy-import race.
  //
  // Depend on `status` too: a user can hit the Draw button BEFORE the map
  // finishes loading. We bail when not ready, but when status flips to
  // "ready" the effect must re-run so we attach Draw retroactively.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoadedRef.current || !drawRef.current) return;

    if (mode === "draw") {
      if (!drawAttachedRef.current) {
        map.addControl(drawRef.current as unknown as MapboxGL.IControl);
        drawAttachedRef.current = true;
      }
      drawRef.current.changeMode("draw_polygon");
    } else if (drawAttachedRef.current) {
      try {
        map.removeControl(drawRef.current as unknown as MapboxGL.IControl);
      } catch {
        /* ignore */
      }
      drawAttachedRef.current = false;
      setVertexCount(0);
    }
  }, [mode, status]);

  if (!configured) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-sm font-semibold text-amber-900">Map not configured</p>
        <p className="text-xs text-amber-700 mt-1">
          Add <code className="bg-amber-100 px-1 rounded">NEXT_PUBLIC_MAPBOX_TOKEN</code> in Netlify.
        </p>
      </div>
    );
  }

  const helpText =
    mode === "auto"
      ? "Click a building to select it. If yours isn't outlined, click anywhere to drop a pin."
      : mode === "pin"
        ? "Click anywhere on your property. Drag the pin to fine-tune."
        : vertexCount === 0
          ? "Click each corner of your property — tap Finish when ready."
          : `Drawing your property — ${vertexCount} corner${vertexCount === 1 ? "" : "s"} ✏️`;

  const handleFinishDrawing = () => {
    // Committing the in-progress polygon: leaving draw_polygon mode with
    // ≥3 vertices triggers MapboxDraw's draw.create event, which our
    // existing handler converts to a kind="drawn" selection.
    if (vertexCount < 3) return;
    try {
      drawRef.current?.changeMode("simple_select");
    } catch {
      /* ignore — fallback to user double-clicking */
    }
  };

  return (
    <div className="relative h-full overflow-hidden bg-gray-100">
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ cursor: mode === "draw" ? "crosshair" : "default" }}
      />

      {/* Mode toggle + inline Finish CTA */}
      <div className="absolute top-3 left-3 z-[20] flex items-stretch gap-2">
        <div className="bg-white rounded-lg shadow-md p-1 flex gap-1">
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

        {/* Finish drawing CTA — only in Draw mode. Always visible; greyed
            out until the user has ≥3 corners, then bright green. */}
        {mode === "draw" && !selected && (
          <button
            onClick={handleFinishDrawing}
            disabled={vertexCount < 3}
            title={
              vertexCount < 3
                ? "Click at least 3 corners on the map first"
                : "Commit the outlined property"
            }
            className={`px-4 py-2 rounded-lg shadow-md font-semibold text-sm flex items-center gap-1.5 transition-colors ${
              vertexCount < 3
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {vertexCount === 0
              ? "Finish drawing"
              : `Finish drawing (${vertexCount} corner${vertexCount === 1 ? "" : "s"})`}
          </button>
        )}
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
          <p className="text-sm text-muted">Couldn&apos;t load the map.</p>
        </div>
      )}
    </div>
  );
}

/** Push the current `selected` into the GeoJSON sources. Pin selections clear
 *  the selected polygon source — the orange marker is rendered separately. */
function applySelectionToSources(map: MapboxGL.Map, selected: Selection | null): void {
  const src = map.getSource(SRC_SELECTED) as MapboxGL.GeoJSONSource | undefined;
  if (!src) return;
  if (!selected) {
    src.setData(emptyFC());
    return;
  }
  if (selected.kind === "building") {
    src.setData(buildingToFC(selected.building));
  } else if (selected.kind === "drawn") {
    src.setData(drawnToFC(selected.coords));
  } else {
    src.setData(emptyFC());
  }
}

/** Override MapboxDraw default styles so the in-progress polygon is green to
 *  match our final selection outline (and visually distinct from blue OSM). */
const drawStyles = [
  // Fill while drawing
  {
    id: "gl-draw-polygon-fill-inactive",
    type: "fill",
    filter: ["all", ["==", "active", "false"], ["==", "$type", "Polygon"]],
    paint: { "fill-color": "#22c55e", "fill-opacity": 0.2 },
  },
  {
    id: "gl-draw-polygon-fill-active",
    type: "fill",
    filter: ["all", ["==", "active", "true"], ["==", "$type", "Polygon"]],
    paint: { "fill-color": "#22c55e", "fill-opacity": 0.2 },
  },
  // Outline (dashed when in-progress, solid when complete)
  {
    id: "gl-draw-polygon-stroke-inactive",
    type: "line",
    filter: ["all", ["==", "active", "false"], ["==", "$type", "Polygon"]],
    layout: { "line-cap": "round", "line-join": "round" },
    paint: { "line-color": "#22c55e", "line-width": 3 },
  },
  {
    id: "gl-draw-polygon-stroke-active",
    type: "line",
    filter: ["all", ["==", "active", "true"], ["==", "$type", "Polygon"]],
    layout: { "line-cap": "round", "line-join": "round" },
    paint: { "line-color": "#22c55e", "line-width": 2, "line-dasharray": [0.5, 2] },
  },
  // First vertex — drawn LARGE in green so the user can see they can click
  // back on it to close the polygon (MapboxDraw's native close behaviour).
  {
    id: "gl-draw-polygon-first-vertex-halo",
    type: "circle",
    filter: [
      "all",
      ["==", "meta", "vertex"],
      ["==", "$type", "Point"],
      ["==", "vertex_index", 0],
      ["!=", "mode", "static"],
    ],
    paint: {
      "circle-radius": 12,
      "circle-color": "#22c55e",
      "circle-opacity": 0.3,
    },
  },
  {
    id: "gl-draw-polygon-first-vertex-core",
    type: "circle",
    filter: [
      "all",
      ["==", "meta", "vertex"],
      ["==", "$type", "Point"],
      ["==", "vertex_index", 0],
      ["!=", "mode", "static"],
    ],
    paint: {
      "circle-radius": 7,
      "circle-color": "#22c55e",
      "circle-stroke-width": 3,
      "circle-stroke-color": "#fff",
    },
  },
  // Subsequent vertices — small white-on-green dots.
  {
    id: "gl-draw-polygon-and-line-vertex-stroke-inactive",
    type: "circle",
    filter: [
      "all",
      ["==", "meta", "vertex"],
      ["==", "$type", "Point"],
      ["!=", "vertex_index", 0],
      ["!=", "mode", "static"],
    ],
    paint: { "circle-radius": 5, "circle-color": "#fff" },
  },
  {
    id: "gl-draw-polygon-and-line-vertex-inactive",
    type: "circle",
    filter: [
      "all",
      ["==", "meta", "vertex"],
      ["==", "$type", "Point"],
      ["!=", "vertex_index", 0],
      ["!=", "mode", "static"],
    ],
    paint: { "circle-radius": 3, "circle-color": "#22c55e" },
  },
];
