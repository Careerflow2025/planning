"use client";

import { useEffect, useRef, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { findClosestBuilding, type BuildingFootprint } from "@/lib/overpass";

const SATELLITE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

interface SelectionMapProps {
  /** Centre of the map (typically the postcode lookup result) */
  lat: number;
  lng: number;
  /** All building footprints fetched from Overpass for this area */
  buildings: BuildingFootprint[];
  /** The user's currently-selected building, if any */
  selectedBuilding: BuildingFootprint | null;
  /** Fired when the user clicks on a building polygon */
  onBuildingSelected: (b: BuildingFootprint) => void;
  /** Optional fixed height (defaults to a flex/aspect container) */
  height?: string;
  /** Show the "Click on your property" hint banner over the top of the map */
  showHint?: boolean;
}

/**
 * Pane 1 of the LocationPicker.
 *
 * Renders a satellite Leaflet map with all the building footprints drawn as
 * blue polygons. Hovering a building gives it a thicker light-blue outline.
 * Clicking selects it; the parent updates `selectedBuilding` and the polygon
 * morphs to green.
 *
 * This component is fully controlled — it owns no selection state of its own.
 */
export default function SelectionMap({
  lat,
  lng,
  buildings,
  selectedBuilding,
  onBuildingSelected,
  height = "100%",
  showHint = true,
}: SelectionMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const buildingLayerRef = useRef<L.LayerGroup | null>(null);
  const hoverLayerRef = useRef<L.Polygon | null>(null);
  const selectedLayerRef = useRef<L.Polygon | null>(null);

  // Initialise the map exactly once.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, { zoomControl: false }).setView([lat, lng], 19);
    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.tileLayer(SATELLITE_URL, { attribution: "&copy; Esri", maxZoom: 21 }).addTo(map);

    buildingLayerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    // Crosshair cursor while the user picks
    if (containerRef.current) containerRef.current.style.cursor = "crosshair";

    // Force a reflow after mount so tiles paint correctly
    setTimeout(() => map.invalidateSize(), 100);

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recenter when lat/lng changes
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], mapRef.current.getZoom() ?? 19);
    }
  }, [lat, lng]);

  // Re-render building outlines whenever the buildings list changes
  useEffect(() => {
    const layer = buildingLayerRef.current;
    if (!layer) return;
    layer.clearLayers();
    buildings.forEach((b) => {
      const polygon = L.polygon(b.coords, {
        color: "#3b82f6",
        weight: 1.5,
        fillColor: "#3b82f6",
        fillOpacity: 0.08,
        interactive: false,
      });
      layer.addLayer(polygon);
    });
  }, [buildings]);

  // Render the selected (green) polygon as its own layer on top
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (selectedLayerRef.current) {
      map.removeLayer(selectedLayerRef.current);
      selectedLayerRef.current = null;
    }
    if (selectedBuilding) {
      const polygon = L.polygon(selectedBuilding.coords, {
        color: "#22c55e",
        weight: 3,
        fillColor: "#22c55e",
        fillOpacity: 0.25,
        interactive: false,
      });
      polygon.addTo(map);
      selectedLayerRef.current = polygon;
    }
  }, [selectedBuilding]);

  // Click → select closest building
  const handleClick = useCallback(
    (e: L.LeafletMouseEvent) => {
      if (buildings.length === 0) return;
      const b = findClosestBuilding(e.latlng.lat, e.latlng.lng, buildings);
      if (b) onBuildingSelected(b);
    },
    [buildings, onBuildingSelected],
  );

  // Hover highlight
  const handleMove = useCallback(
    (e: L.LeafletMouseEvent) => {
      const map = mapRef.current;
      if (!map || buildings.length === 0) return;
      if (hoverLayerRef.current) {
        map.removeLayer(hoverLayerRef.current);
        hoverLayerRef.current = null;
      }
      const b = findClosestBuilding(e.latlng.lat, e.latlng.lng, buildings);
      if (b && (!selectedBuilding || b.id !== selectedBuilding.id)) {
        const polygon = L.polygon(b.coords, {
          color: "#60a5fa",
          weight: 2,
          fillColor: "#60a5fa",
          fillOpacity: 0.2,
          interactive: false,
        });
        polygon.addTo(map);
        hoverLayerRef.current = polygon;
      }
    },
    [buildings, selectedBuilding],
  );

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    map.on("click", handleClick);
    map.on("mousemove", handleMove);
    return () => {
      map.off("click", handleClick);
      map.off("mousemove", handleMove);
    };
  }, [handleClick, handleMove]);

  return (
    <div className="relative rounded-xl overflow-hidden border border-border" style={{ height }}>
      <div ref={containerRef} className="h-full w-full" />

      {showHint && !selectedBuilding && buildings.length > 0 && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[1000] bg-white/95 shadow-md rounded-lg px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 pointer-events-none">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
          </svg>
          Click on your property
        </div>
      )}

      {selectedBuilding && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[1000] bg-green-50 border border-green-200 shadow-md rounded-lg px-3 py-1.5 text-xs font-semibold text-green-800 flex items-center gap-1.5 pointer-events-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Property selected — confirm below
        </div>
      )}
    </div>
  );
}
