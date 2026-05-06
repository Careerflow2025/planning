"use client";

import { useEffect, useState } from "react";
import { isGoogleMapsConfigured } from "@/lib/google-maps-loader";

interface View3DProps {
  lat: number;
  lng: number;
  /** Address to display in the iframe URL (improves the place card overlay in Embed API) */
  address?: string;
  height?: string;
}

type Mode = "3d" | "streetview";

/**
 * Pane 2 of the LocationPicker.
 *
 * Two iframe-based sub-views the user can flip between:
 * - 3D Aerial: Google Maps Embed in satellite mode at a tilted zoom-21. In areas
 *   with Photorealistic 3D Tile coverage (most UK cities), this renders as a
 *   tilted 3D building shot. In rural areas, it falls back to flat satellite.
 * - Street View: Google Street View Embed pointed at the building. User can
 *   click & drag to look around. If no Street View imagery exists for that
 *   location, Google's iframe shows its own "no imagery" placeholder.
 *
 * If NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set, this pane renders a
 * configuration placeholder so the rest of the picker still works.
 */
export default function View3D({ lat, lng, address, height = "100%" }: View3DProps) {
  const [mode, setMode] = useState<Mode>("3d");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [configured, setConfigured] = useState(false);

  // Check key availability on mount (env vars are baked at build but we want to
  // avoid SSR hydration noise)
  useEffect(() => {
    setConfigured(isGoogleMapsConfigured());
  }, []);

  // Reset loaded flag when the building changes so we show the spinner again
  useEffect(() => {
    setIframeLoaded(false);
  }, [lat, lng, mode]);

  if (!configured) {
    return (
      <div
        className="relative rounded-xl border border-amber-200 bg-amber-50 flex flex-col items-center justify-center p-6 text-center"
        style={{ height }}
      >
        <svg className="w-10 h-10 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <p className="text-sm font-semibold text-amber-900">3D & Street View not configured</p>
        <p className="text-xs text-amber-700 mt-1 max-w-xs">
          Add <code className="bg-amber-100 px-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> to enable photorealistic 3D and Street View confirmation.
        </p>
      </div>
    );
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const place = address ? encodeURIComponent(address) : `${lat},${lng}`;

  // 3D embed: place mode + satellite + zoom 20 ≈ tilted aerial in supported areas
  const embed3dUrl =
    `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${place}&maptype=satellite&zoom=20`;

  // Street View embed
  const embedStreetUrl =
    `https://www.google.com/maps/embed/v1/streetview?key=${apiKey}&location=${lat},${lng}&heading=0&pitch=0&fov=80`;

  const url = mode === "3d" ? embed3dUrl : embedStreetUrl;

  return (
    <div className="relative rounded-xl overflow-hidden border border-border bg-gray-100" style={{ height }}>
      {/* Mode toggle */}
      <div className="absolute top-2 left-2 z-[10] bg-white rounded-lg shadow-md p-0.5 flex">
        <button
          onClick={() => setMode("3d")}
          className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
            mode === "3d" ? "bg-primary text-white" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          🎬 3D Aerial
        </button>
        <button
          onClick={() => setMode("streetview")}
          className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
            mode === "streetview" ? "bg-primary text-white" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          🚶 Street View
        </button>
      </div>

      {!iframeLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <svg className="w-8 h-8 animate-spin text-gray-300" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
          </svg>
        </div>
      )}

      {/* The iframe is keyed by mode + lat/lng so React fully replaces it on swap.
          That guarantees a fresh load and the loading state resets. */}
      <iframe
        key={`${mode}-${lat}-${lng}`}
        src={url}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIframeLoaded(true)}
      />
    </div>
  );
}
