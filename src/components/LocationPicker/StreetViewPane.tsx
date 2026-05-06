"use client";

import { useEffect, useRef, useState } from "react";
import { isGoogleMapsConfigured, loadMapsLibrary } from "@/lib/google-maps-loader";

interface StreetViewPaneProps {
  /** Current target lat/lng (centroid of the selected building). The pano starts here. */
  lat: number;
  lng: number;
  /** Called when the user navigates Street View elsewhere and clicks
   *  "My property is here". The pano position is on the STREET, but the user is
   *  facing their property — so we also pass the camera heading. The parent
   *  applies a heading-direction offset to find the building IN FRONT of the
   *  user, not the building they're standing on (which is usually a neighbour). */
  onLocationConfirmed: (pos: { lat: number; lng: number; heading: number }) => void;
}

/**
 * Pane 2 of the LocationPicker — interactive Google Street View.
 *
 * Why the SDK and not an iframe: with the SDK we can listen for `position_changed` to
 * track where the user has panned to. The user can then click "My property is here"
 * and we reverse-lookup the closest OSM building footprint, which becomes the new
 * selection. All three panes update.
 */
export default function StreetViewPane({
  lat,
  lng,
  onLocationConfirmed,
}: StreetViewPaneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panoRef = useRef<google.maps.StreetViewPanorama | null>(null);
  const currentPosRef = useRef<{ lat: number; lng: number }>({ lat, lng });
  const [configured] = useState(isGoogleMapsConfigured());
  const [status, setStatus] = useState<"loading" | "ready" | "no-imagery" | "error">("loading");

  // Mount the panorama once
  useEffect(() => {
    if (!configured || !containerRef.current) return;
    let cancelled = false;

    (async () => {
      const lib = await loadMapsLibrary("streetView");
      if (cancelled || !lib || !containerRef.current) {
        if (!cancelled) setStatus("error");
        return;
      }

      // Probe coverage first — Street View doesn't exist for every lat/lng
      const sv = new google.maps.StreetViewService();
      sv.getPanorama(
        { location: { lat, lng }, radius: 100 },
        (data, svStatus) => {
          if (cancelled) return;
          if (svStatus !== google.maps.StreetViewStatus.OK || !data?.location?.latLng) {
            setStatus("no-imagery");
            return;
          }
          const pano = new google.maps.StreetViewPanorama(containerRef.current!, {
            position: data.location.latLng,
            pov: { heading: 0, pitch: 0 },
            zoom: 1,
            addressControl: false,
            fullscreenControl: false,
            enableCloseButton: false,
            motionTracking: false,
            motionTrackingControl: false,
          });
          pano.addListener("position_changed", () => {
            const p = pano.getPosition();
            if (p) currentPosRef.current = { lat: p.lat(), lng: p.lng() };
          });
          panoRef.current = pano;
          setStatus("ready");
        },
      );
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configured]);

  // When a different building is selected from another pane, recenter the pano
  useEffect(() => {
    if (!panoRef.current) return;
    panoRef.current.setPosition({ lat, lng });
    currentPosRef.current = { lat, lng };
  }, [lat, lng]);

  const handleSelectHere = () => {
    const heading = panoRef.current?.getPov().heading ?? 0;
    onLocationConfirmed({ ...currentPosRef.current, heading });
  };

  if (!configured) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-sm font-semibold text-amber-900">Street View not configured</p>
        <p className="text-xs text-amber-700 mt-1">
          Add <code className="bg-amber-100 px-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> in Netlify.
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full rounded-xl overflow-hidden border border-border bg-gray-100">
      {/* Panorama mount point */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* Status overlays */}
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-[5]">
          <svg className="w-8 h-8 animate-spin text-gray-300" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
          </svg>
        </div>
      )}

      {status === "no-imagery" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-[5] p-6 text-center">
          <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <p className="text-sm font-semibold text-gray-700">No Street View here</p>
          <p className="text-xs text-muted mt-1">Try a different building or use the Map pane on the left.</p>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-[5] p-6 text-center">
          <p className="text-sm text-muted">Couldn&apos;t load Street View.</p>
        </div>
      )}

      {/* Header label */}
      <div className="absolute top-2 left-2 z-[10] bg-white rounded-lg shadow-md px-3 py-1.5 text-xs font-bold pointer-events-none flex items-center gap-1.5">
        🚶 Street View
      </div>

      {/* "My property is here" — uses the user's current pano position */}
      {status === "ready" && (
        <button
          onClick={handleSelectHere}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[10] bg-accent text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg hover:bg-accent-hover transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          My property is here
        </button>
      )}
    </div>
  );
}
