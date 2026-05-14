"use client";

import { useEffect, useRef, useState } from "react";
import type * as Mapillary from "mapillary-js";
import "mapillary-js/dist/mapillary.css";
import {
  findBestMapillaryImage,
  isMapillaryConfigured,
  loadMapillary,
} from "@/lib/mapillary-loader";

interface StreetViewPaneProps {
  /** Current pano lat/lng — where to start searching for nearby imagery. */
  lat: number;
  lng: number;
  /** The property the camera should be looking AT. When set, the image whose
   *  capture bearing is closest to "facing the target" is preferred over the
   *  raw nearest image, so the pano opens facing the property rather than the
   *  opposite side of the street. Defaults to {lat, lng}. */
  target?: { lat: number; lng: number } | null;
  /** Called when the user navigates to a different image and clicks
   *  "My property is here". The pano position is on the STREET, but the user is
   *  facing their property — so we also pass the camera bearing. The parent
   *  applies a heading-direction offset to find the building IN FRONT of the
   *  user, not the building they're standing on. */
  onLocationConfirmed: (pos: { lat: number; lng: number; heading: number }) => void;
}

/** Bearing from point A to point B (degrees clockwise from north, 0–360). */
function bearingTo(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const φ1 = (aLat * Math.PI) / 180;
  const φ2 = (bLat * Math.PI) / 180;
  const Δλ = ((bLng - aLng) * Math.PI) / 180;
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x =
    Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

/**
 * Pane 2 of the LocationPicker — interactive Mapillary Street View.
 *
 * Mapillary is the free, open alternative to Google Street View (owned by Meta,
 * crowdsourced imagery). The Viewer SDK gives us the same pano-navigation UX:
 * arrows to walk forward/back, drag to look around, plus a `getBearing()` method
 * we use for the heading offset trick that finds the building IN FRONT of the
 * camera (rather than the building the camera is standing on top of).
 */
export default function StreetViewPane({
  lat,
  lng,
  target,
  onLocationConfirmed,
}: StreetViewPaneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Mapillary.Viewer | null>(null);
  const currentPosRef = useRef<{ lat: number; lng: number }>({ lat, lng });
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const targetRef = useRef<{ lat: number; lng: number } | null>(target ?? { lat, lng });

  const [configured] = useState(isMapillaryConfigured());
  const [status, setStatus] = useState<"loading" | "ready" | "no-imagery" | "error">("loading");
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    targetRef.current = target ?? { lat, lng };
  }, [target, lat, lng]);

  // (Re)mount the viewer whenever the centroid props change. We keep the
  // dependency on lat/lng so a fresh Street View search from the parent
  // resyncs the pane. Inside, we tear down + rebuild rather than `moveTo`
  // because the public Mapillary moveTo API requires an imageId we'd have to
  // re-derive anyway.
  useEffect(() => {
    if (!configured || !containerRef.current) return;
    let cancelled = false;
    setStatus("loading");

    (async () => {
      try {
        const facingTarget = targetRef.current ?? { lat, lng };
        const nearest = await findBestMapillaryImage(lat, lng, facingTarget, 50);
        if (cancelled) return;
        if (!nearest) {
          setStatus("no-imagery");
          return;
        }
        const mly = await loadMapillary();
        if (cancelled || !mly || !containerRef.current) {
          if (!cancelled) setStatus("error");
          return;
        }
        // Tear down any previous viewer
        viewerRef.current?.remove();
        const viewer = new mly.Viewer({
          container: containerRef.current,
          accessToken: process.env.NEXT_PUBLIC_MAPILLARY_TOKEN!,
          imageId: nearest.id,
          component: {
            cover: false,
            // Hide Mapillary branding + image date label
            attribution: false,
            // Navigation chrome
            direction: true,
            sequence: true,
            zoom: true,
            // Arrow-key navigation + preload neighbours so walking feels smooth
            keyboard: true,
            cache: true,
          },
        });
        currentPosRef.current = { lat: nearest.lat, lng: nearest.lng };

        // For spherical images, pan to face the target. For perspective
        // images this is best-effort (Mapillary will clamp).
        const tryFaceTarget = () => {
          const t = targetRef.current;
          if (!t || nearest.bearing == null) return;
          const desired = bearingTo(nearest.lat, nearest.lng, t.lat, t.lng);
          // Spherical-image yaw convention: basic X 0..1 wraps 360°. Image
          // centre (X=0.5) is the original capture bearing.
          const delta = ((desired - nearest.bearing + 540) % 360) - 180; // [-180, 180]
          const basicX = (0.5 + delta / 360 + 1) % 1;
          try {
            viewer.setCenter([basicX, 0.5]);
          } catch {
            /* perspective images may reject — ignore */
          }
        };

        let firstImage = true;
        viewer.on("image", async () => {
          try {
            const pos = await viewer.getPosition();
            currentPosRef.current = { lat: pos.lat, lng: pos.lng };
            if (firstImage) {
              firstImage = false;
              tryFaceTarget();
            }
          } catch {
            /* viewer is being torn down — ignore */
          }
        });
        // Auto-fade the navigation hint as soon as the user interacts.
        const dismissHint = () => setShowHint(false);
        viewer.on("pov", dismissHint);
        viewerRef.current = viewer;
        setStatus("ready");
        // The fullscreen modal animates in; the Mapillary viewer was likely
        // sized before the animation ended. Force one resize once tiles can
        // start drawing.
        const ro = new ResizeObserver(() => {
          try {
            viewer.resize();
          } catch {
            /* viewer may be removed */
          }
        });
        ro.observe(containerRef.current!);
        viewer.resize();
        resizeObserverRef.current = ro;
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      viewerRef.current?.remove();
      viewerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configured, lat, lng]);

  const handleSelectHere = async () => {
    const viewer = viewerRef.current;
    if (!viewer) {
      onLocationConfirmed({ ...currentPosRef.current, heading: 0 });
      return;
    }
    try {
      const [pos, heading] = await Promise.all([viewer.getPosition(), viewer.getBearing()]);
      onLocationConfirmed({ lat: pos.lat, lng: pos.lng, heading });
    } catch {
      onLocationConfirmed({ ...currentPosRef.current, heading: 0 });
    }
  };

  if (!configured) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-sm font-semibold text-amber-900">Street View not configured</p>
        <p className="text-xs text-amber-700 mt-1">
          Add <code className="bg-amber-100 px-1 rounded">NEXT_PUBLIC_MAPILLARY_TOKEN</code> in Netlify.
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full rounded-xl overflow-hidden border border-border bg-gray-100">
      {/* Viewer mount point — always rendered so the ref is available before mount */}
      <div ref={containerRef} className="w-full h-full" />

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

      {/* Navigation hint (auto-fades on first interaction) */}
      {status === "ready" && showHint && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[10] bg-black/75 text-white text-xs rounded-full px-3 py-1.5 pointer-events-none animate-pulse">
          Drag to look around · Click side arrows or use ← → keys to walk
        </div>
      )}

      {/* "My property is here" — uses the user's current pano position + bearing */}
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
