"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { BuildingFootprint } from "@/lib/overpass";

const SATELLITE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

interface BirdsEyeMapProps {
  building: BuildingFootprint;
  height?: string;
}

/**
 * Pane 3 of the LocationPicker.
 *
 * A tightly-zoomed satellite shot of just the selected building footprint,
 * with a green polygon outline. No interaction — purely visual confirmation
 * from a different angle (top-down, vs. the 3D in Pane 2).
 *
 * Re-fits its bounds whenever the building changes, with a smooth flyToBounds.
 */
export default function BirdsEyeMap({ building, height = "100%" }: BirdsEyeMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const polygonRef = useRef<L.Polygon | null>(null);

  // Initialise once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      keyboard: false,
      boxZoom: false,
      attributionControl: false,
    });

    L.tileLayer(SATELLITE_URL, { maxZoom: 21 }).addTo(map);
    mapRef.current = map;

    setTimeout(() => map.invalidateSize(), 100);

    return () => {
      map.remove();
      mapRef.current = null;
      polygonRef.current = null;
    };
  }, []);

  // Render the building polygon and fit bounds tightly
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (polygonRef.current) {
      map.removeLayer(polygonRef.current);
      polygonRef.current = null;
    }

    const polygon = L.polygon(building.coords, {
      color: "#22c55e",
      weight: 3,
      fillColor: "#22c55e",
      fillOpacity: 0.25,
      interactive: false,
    });
    polygon.addTo(map);
    polygonRef.current = polygon;

    map.flyToBounds(polygon.getBounds(), {
      padding: [16, 16],
      duration: 0.6,
    });
  }, [building]);

  return (
    <div className="relative rounded-xl overflow-hidden border border-border bg-gray-100" style={{ height }}>
      <div ref={containerRef} className="h-full w-full" />
      <div className="absolute top-2 left-2 z-[1000] bg-black/70 text-white rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase pointer-events-none">
        🛰 Bird's-eye
      </div>
      <div className="absolute top-2 right-2 z-[1000] bg-white/90 rounded-full w-6 h-6 flex items-center justify-center text-[10px] font-bold pointer-events-none">
        N↑
      </div>
    </div>
  );
}
