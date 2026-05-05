"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { findClosestBuilding, type BuildingFootprint } from "@/lib/overpass";

/* Fix default marker icons (webpack strips the asset paths) */
const pinIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface LocationMapProps {
  lat: number;
  lng: number;
  onLocationChange?: (lat: number, lng: number) => void;
  height?: string;
  draggable?: boolean;
  /* Building select mode */
  buildingSelectMode?: boolean;
  buildings?: BuildingFootprint[];
  selectedBuilding?: BuildingFootprint | null;
  onBuildingSelected?: (building: BuildingFootprint) => void;
}

const STREET_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const SATELLITE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

export default function LocationMap({
  lat,
  lng,
  onLocationChange,
  height = "320px",
  draggable = true,
  buildingSelectMode = false,
  buildings = [],
  selectedBuilding = null,
  onBuildingSelected,
}: LocationMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const streetRef = useRef<L.TileLayer | null>(null);
  const satRef = useRef<L.TileLayer | null>(null);
  const buildingLayerRef = useRef<L.LayerGroup | null>(null);
  const selectedLayerRef = useRef<L.Polygon | null>(null);
  const hoverLayerRef = useRef<L.Polygon | null>(null);
  const [isSatellite, setIsSatellite] = useState(false);

  /* Initialise map */
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: false,
    }).setView([lat, lng], 18);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    const street = L.tileLayer(STREET_URL, {
      attribution: "&copy; OpenStreetMap",
      maxZoom: 19,
    });

    const sat = L.tileLayer(SATELLITE_URL, {
      attribution: "&copy; Esri",
      maxZoom: 19,
    });

    street.addTo(map);

    const marker = L.marker([lat, lng], {
      icon: pinIcon,
      draggable,
    }).addTo(map);

    if (draggable) {
      marker.on("dragend", () => {
        const pos = marker.getLatLng();
        onLocationChange?.(pos.lat, pos.lng);
      });
    }

    mapRef.current = map;
    markerRef.current = marker;
    streetRef.current = street;
    satRef.current = sat;
    buildingLayerRef.current = L.layerGroup().addTo(map);

    /* Invalidate size after mount (fixes grey tiles) */
    setTimeout(() => map.invalidateSize(), 100);

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Re-centre on coordinate changes */
  useEffect(() => {
    if (mapRef.current && markerRef.current) {
      mapRef.current.setView([lat, lng], mapRef.current.getZoom());
      markerRef.current.setLatLng([lat, lng]);
    }
  }, [lat, lng]);

  /* Render building outlines */
  useEffect(() => {
    const layer = buildingLayerRef.current;
    if (!layer || !buildingSelectMode) return;

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
  }, [buildings, buildingSelectMode]);

  /* Render selected building highlight */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove previous selection
    if (selectedLayerRef.current) {
      map.removeLayer(selectedLayerRef.current);
      selectedLayerRef.current = null;
    }

    if (selectedBuilding && buildingSelectMode) {
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
  }, [selectedBuilding, buildingSelectMode]);

  /* Handle map click for building selection */
  const handleMapClick = useCallback(
    (e: L.LeafletMouseEvent) => {
      if (!buildingSelectMode || !onBuildingSelected || buildings.length === 0) return;

      const building = findClosestBuilding(e.latlng.lat, e.latlng.lng, buildings);
      if (building) {
        onBuildingSelected(building);
      }
    },
    [buildingSelectMode, buildings, onBuildingSelected]
  );

  /* Handle hover for building highlight */
  const handleMapMouseMove = useCallback(
    (e: L.LeafletMouseEvent) => {
      if (!buildingSelectMode || buildings.length === 0) return;
      const map = mapRef.current;
      if (!map) return;

      const building = findClosestBuilding(e.latlng.lat, e.latlng.lng, buildings);

      // Remove previous hover
      if (hoverLayerRef.current) {
        map.removeLayer(hoverLayerRef.current);
        hoverLayerRef.current = null;
      }

      if (building && (!selectedBuilding || building.id !== selectedBuilding.id)) {
        const polygon = L.polygon(building.coords, {
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
    [buildingSelectMode, buildings, selectedBuilding]
  );

  /* Attach/detach click and hover handlers */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (buildingSelectMode) {
      map.on("click", handleMapClick);
      map.on("mousemove", handleMapMouseMove);
    }

    return () => {
      map.off("click", handleMapClick);
      map.off("mousemove", handleMapMouseMove);
    };
  }, [buildingSelectMode, handleMapClick, handleMapMouseMove]);

  /* React to buildingSelectMode changes — switch to satellite, hide marker */
  useEffect(() => {
    const map = mapRef.current;
    const marker = markerRef.current;
    const street = streetRef.current;
    const sat = satRef.current;
    const container = containerRef.current;
    if (!map || !marker || !street || !sat) return;

    if (buildingSelectMode) {
      // Switch to satellite automatically for building selection
      if (map.hasLayer(street)) {
        map.removeLayer(street);
        sat.addTo(map);
        setIsSatellite(true);
      }
      // Hide marker
      marker.setOpacity(0);
      marker.dragging?.disable();
      const el = marker.getElement();
      if (el) el.style.pointerEvents = "none";
      // Crosshair cursor
      if (container) container.style.cursor = "crosshair";
    } else {
      // Switch back to street map
      if (map.hasLayer(sat)) {
        map.removeLayer(sat);
        if (!map.hasLayer(street)) street.addTo(map);
        setIsSatellite(false);
      }
      // Show marker
      marker.setOpacity(1);
      if (draggable) marker.dragging?.enable();
      const el = marker.getElement();
      if (el) el.style.pointerEvents = "";
      if (container) container.style.cursor = "";
    }
  }, [buildingSelectMode, draggable]);

  const openStreetView = () => {
    window.open(
      `https://www.google.com/maps?layer=c&cbll=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <div className="space-y-3">
      <div
        className="relative rounded-xl overflow-hidden border border-border"
        style={{ height }}
      >
        <div ref={containerRef} className="h-full w-full" />

        {/* Map mode label — only in street mode (non-building-select) */}
        {!buildingSelectMode && (
          <div className="absolute top-3 left-3 z-[1000] bg-white/95 shadow-md rounded-lg px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 pointer-events-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Map
          </div>
        )}

        {/* Satellite label — only when in building select mode */}
        {buildingSelectMode && (
          <div className="absolute top-3 left-3 z-[1000] bg-black/70 text-white shadow-md rounded-lg px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 pointer-events-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Satellite
          </div>
        )}

        {draggable && !buildingSelectMode && (
          <div className="absolute bottom-3 left-3 z-[1000] bg-white/95 shadow rounded-lg px-3 py-1.5 text-xs text-muted">
            Drag the pin to adjust location
          </div>
        )}
      </div>

      {/* ── Street View prompt — below the map, prominent ── */}
      {!buildingSelectMode && (
        <button
          onClick={openStreetView}
          className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold text-blue-900">View in Street View</p>
            <p className="text-xs text-blue-700">See your property from the street to verify the exact location</p>
          </div>
          <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-600 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      )}
    </div>
  );
}
