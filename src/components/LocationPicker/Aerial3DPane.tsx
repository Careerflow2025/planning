"use client";

import { useEffect, useState } from "react";
import { isGoogleMapsConfigured } from "@/lib/google-maps-loader";

interface Aerial3DPaneProps {
  lat: number;
  lng: number;
  /** Address to feed into the Embed API for a richer place card. */
  address?: string;
}

/**
 * Pane 3 of the LocationPicker — Google satellite/aerial view via the Embed API.
 *
 * Visually distinct from the Leaflet selection map (Pane 1) because:
 *  - It uses Google's polished UI (their place pin, controls, attribution).
 *  - In cities it auto-tilts into a photorealistic 3D angle.
 *  - The place card overlays the address + place type.
 *
 * No interaction needed — this pane is purely for visual confirmation.
 */
export default function Aerial3DPane({ lat, lng, address }: Aerial3DPaneProps) {
  const [configured] = useState(isGoogleMapsConfigured());
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    setIframeLoaded(false);
  }, [lat, lng]);

  if (!configured) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-sm font-semibold text-amber-900">3D Aerial not configured</p>
        <p className="text-xs text-amber-700 mt-1">Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in Netlify.</p>
      </div>
    );
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // Use `place` mode with the address (or coords) and satellite type. In supported areas
  // (most UK cities including London, Manchester, Birmingham), Google renders this as a
  // photorealistic 3D tilted aerial. In rural areas it falls back to flat satellite.
  const q = address ? encodeURIComponent(address) : `${lat},${lng}`;
  const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${q}&maptype=satellite&zoom=20`;

  return (
    <div className="relative h-full rounded-xl overflow-hidden border border-border bg-gray-100">
      {!iframeLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-[5]">
          <svg className="w-8 h-8 animate-spin text-gray-300" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
          </svg>
        </div>
      )}
      <iframe
        key={`${lat}-${lng}`}
        src={url}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIframeLoaded(true)}
      />
      <div className="absolute top-2 left-2 z-[10] bg-black/70 text-white rounded-lg px-2.5 py-1 text-[11px] font-bold tracking-wide pointer-events-none flex items-center gap-1.5">
        🛰 3D Aerial
      </div>
    </div>
  );
}
