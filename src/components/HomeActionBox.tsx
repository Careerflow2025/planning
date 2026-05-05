"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import AddressSearch from "./AddressSearch";
import { fetchBuildingFootprints, type BuildingFootprint } from "@/lib/overpass";

/* Lazy-load the map (Leaflet needs window) */
const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] bg-gray-100 rounded-xl animate-pulse flex items-center justify-center">
      <svg className="w-8 h-8 text-gray-300 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
      </svg>
    </div>
  ),
});

type ActiveOption = "postcode" | "photo" | "documents";
type BuildingStep = "loading" | "prompting" | "selected" | "confirmed" | "unavailable";

interface LocationData {
  lat: number;
  lng: number;
  display: string;
}

export default function HomeActionBox() {
  const router = useRouter();
  const [active, setActive] = useState<ActiveOption>("postcode");

  /* ── Postcode / address state ── */
  const [location, setLocation] = useState<LocationData | null>(null);

  /* ── Building selection state ── */
  const [buildingStep, setBuildingStep] = useState<BuildingStep>("loading");
  const [buildings, setBuildings] = useState<BuildingFootprint[]>([]);
  const [selectedBuilding, setSelectedBuilding] = useState<BuildingFootprint | null>(null);

  /* Fetch building footprints when location is set */
  useEffect(() => {
    if (!location) {
      setBuildings([]);
      setSelectedBuilding(null);
      setBuildingStep("loading");
      return;
    }

    let cancelled = false;
    setBuildingStep("loading");
    setSelectedBuilding(null);

    fetchBuildingFootprints(location.lat, location.lng)
      .then((result) => {
        if (cancelled) return;
        setBuildings(result);
        setBuildingStep(result.length > 0 ? "prompting" : "unavailable");
      })
      .catch(() => {
        if (cancelled) return;
        setBuildings([]);
        setBuildingStep("unavailable");
      });

    return () => { cancelled = true; };
  }, [location?.lat, location?.lng]);

  /* ── Photo state ── */
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoLocation, setPhotoLocation] = useState<LocationData | null>(null);
  const [extractingGps, setExtractingGps] = useState(false);
  const [gpsStatus, setGpsStatus] = useState<"none" | "found" | "not-found">("none");
  const [dragging, setDragging] = useState(false);
  const photoRef = useRef<HTMLInputElement>(null);

  /* ── Documents state ── */
  const [documents, setDocuments] = useState<File[]>([]);
  const [docLocation, setDocLocation] = useState<LocationData | null>(null);
  const docRef = useRef<HTMLInputElement>(null);

  /* ── Photo handler with EXIF extraction ── */
  const handlePhoto = useCallback(async (file: File) => {
    setPhotoPreview(URL.createObjectURL(file));
    setExtractingGps(true);
    setGpsStatus("none");

    try {
      const exifr = (await import("exifr")).default;
      const gps = await exifr.gps(file);
      if (gps && gps.latitude && gps.longitude) {
        // Reverse-geocode for a display name
        let display = `${gps.latitude.toFixed(5)}, ${gps.longitude.toFixed(5)}`;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${gps.latitude}&lon=${gps.longitude}&format=json`,
            { headers: { "User-Agent": "PlanScope/1.0" } }
          );
          const data = await res.json();
          if (data.display_name) {
            display = (data.display_name as string).split(",").slice(0, 3).join(",").trim();
          }
        } catch {
          /* use coords as fallback */
        }
        setPhotoLocation({ lat: gps.latitude, lng: gps.longitude, display });
        setGpsStatus("found");
      } else {
        setGpsStatus("not-found");
      }
    } catch {
      setGpsStatus("not-found");
    }
    setExtractingGps(false);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith("image/")) handlePhoto(file);
    },
    [handlePhoto]
  );

  /* ── Continue handler ── */
  const handleContinue = () => {
    router.push("/start");
  };

  return (
    <div>
      {/* ── Three option tabs ── */}
      <div className="flex rounded-t-2xl overflow-hidden border border-b-0 border-border bg-white">
        <TabButton
          active={active === "postcode"}
          onClick={() => setActive("postcode")}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          label="Enter Location"
        />
        <TabButton
          active={active === "photo"}
          onClick={() => setActive("photo")}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          label="Upload Photo"
        />
        <TabButton
          active={active === "documents"}
          onClick={() => setActive("documents")}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
          label="Upload Documents"
        />
      </div>

      {/* ── Content area ── */}
      <div className="bg-white rounded-b-2xl border border-t-0 border-border shadow-xl shadow-black/5 p-6 md:p-8">

        {/* ═══════════════════════════════════
            POSTCODE / ADDRESS — Google-Maps style
            ═══════════════════════════════════ */}
        {active === "postcode" && (
          <div className="space-y-4 step-enter">
            <AddressSearch
              onSelect={(result) => setLocation(result)}
              placeholder="Search for a place or postcode..."
              autoFocus
            />

            {/* Map + building selection */}
            {location && (
              <div className="space-y-4 step-enter">
                {/* Location found banner */}
                <div className="bg-accent-light border border-accent/30 rounded-xl p-3 flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-accent">Location found</p>
                    <p className="text-sm text-gray-700 truncate">{location.display}</p>
                  </div>
                </div>

                {/* Building step: Loading */}
                {buildingStep === "loading" && (
                  <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
                    <svg className="w-5 h-5 animate-spin text-blue-500" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                    </svg>
                    <span className="text-sm text-blue-700">Loading building outlines...</span>
                  </div>
                )}

                {/* Building step: Prompting — click on your property */}
                {buildingStep === "prompting" && (
                  <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl step-enter">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span className="text-sm text-blue-700 font-medium">Click on your property on the map</span>
                  </div>
                )}

                {/* Building step: Selected — confirm property */}
                {buildingStep === "selected" && selectedBuilding && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 space-y-3 step-enter">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-sm text-green-700 font-medium">Property boundary identified</span>
                    </div>
                    <p className="text-sm text-green-700">Is this your property?</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setBuildingStep("confirmed");
                          try {
                            sessionStorage.setItem(
                              "planscope_building",
                              JSON.stringify(selectedBuilding)
                            );
                          } catch { /* sessionStorage may be unavailable */ }
                        }}
                        className="flex-1 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                      >
                        Yes, that&apos;s correct
                      </button>
                      <button
                        onClick={() => {
                          setSelectedBuilding(null);
                          setBuildingStep("prompting");
                        }}
                        className="flex-1 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                      >
                        No, let me try again
                      </button>
                    </div>
                  </div>
                )}

                {/* Building step: Confirmed — show green banner */}
                {buildingStep === "confirmed" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2 step-enter">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-green-700 font-medium">Property confirmed</span>
                  </div>
                )}

                {/* Map — building select mode when prompting or selected */}
                <LocationMap
                  lat={location.lat}
                  lng={location.lng}
                  onLocationChange={(lat, lng) =>
                    setLocation((prev) => prev ? { ...prev, lat, lng } : null)
                  }
                  buildingSelectMode={buildingStep === "prompting" || buildingStep === "selected" || buildingStep === "confirmed"}
                  buildings={buildings}
                  selectedBuilding={selectedBuilding}
                  onBuildingSelected={(b) => {
                    setSelectedBuilding(b);
                    setBuildingStep("selected");
                  }}
                  draggable={buildingStep === "unavailable"}
                />

                {/* Confirm & Continue — show when confirmed or unavailable (fallback) */}
                {(buildingStep === "confirmed" || buildingStep === "unavailable") && (
                  <button
                    onClick={handleContinue}
                    className="w-full py-3.5 bg-accent text-white rounded-xl font-semibold text-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 step-enter"
                  >
                    Confirm Location &amp; Continue
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                )}
              </div>
            )}

            {!location && (
              <p className="text-xs text-muted text-center">
                Type a postcode or address — we&apos;ll show it on the map so you can confirm the exact location.
              </p>
            )}
          </div>
        )}

        {/* ═══════════════════════════════════
            UPLOAD PHOTO + LOCATION
            ═══════════════════════════════════ */}
        {active === "photo" && (
          <div className="space-y-4 step-enter">
            {/* Upload area */}
            {!photoPreview ? (
              <div
                className={`drop-zone rounded-xl p-10 text-center cursor-pointer ${dragging ? "dragging" : ""}`}
                onClick={() => photoRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
              >
                <input
                  ref={photoRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handlePhoto(file);
                  }}
                />
                <svg className="w-14 h-14 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-semibold text-lg">Take or upload a site photo</p>
                <p className="text-sm text-muted mt-1">Drag and drop, or tap to select</p>
              </div>
            ) : (
              <div className="space-y-3">
                {/* Photo preview */}
                <div className="relative rounded-xl overflow-hidden">
                  <img src={photoPreview} alt="Site photo" className="w-full h-48 object-cover" />
                  <button
                    onClick={() => {
                      if (photoPreview) URL.revokeObjectURL(photoPreview);
                      setPhotoPreview(null);
                      setPhotoLocation(null);
                      setGpsStatus("none");
                    }}
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 shadow"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* EXIF extraction status */}
                {extractingGps && (
                  <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
                    <svg className="w-5 h-5 animate-spin text-blue-500" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                    </svg>
                    <span className="text-sm text-blue-700">Extracting location from photo...</span>
                  </div>
                )}

                {gpsStatus === "found" && photoLocation && (
                  <div className="bg-accent-light border border-accent/30 rounded-xl p-3 flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-accent">Location detected from photo</p>
                      <p className="text-sm text-gray-700 truncate">{photoLocation.display}</p>
                    </div>
                  </div>
                )}

                {gpsStatus === "not-found" && !photoLocation && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-amber-700">No GPS data in photo. Enter the location below.</span>
                    </div>
                    <AddressSearch
                      onSelect={(result) => setPhotoLocation(result)}
                      placeholder="Enter the site address or postcode..."
                      compact
                    />
                  </div>
                )}
              </div>
            )}

            {/* Map (shown if location is known) */}
            {photoLocation && (
              <div className="step-enter">
                <LocationMap
                  lat={photoLocation.lat}
                  lng={photoLocation.lng}
                  onLocationChange={(lat, lng) =>
                    setPhotoLocation((prev) => prev ? { ...prev, lat, lng } : null)
                  }
                />
              </div>
            )}

            {/* Continue button */}
            {photoPreview && photoLocation && (
              <button
                onClick={handleContinue}
                className="w-full py-3.5 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 step-enter"
              >
                Continue with photo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            )}

            <p className="text-xs text-muted text-center">
              Upload a site photo — the AI will try to detect the location automatically from the image data.
            </p>
          </div>
        )}

        {/* ═══════════════════════════════════
            UPLOAD DOCUMENTS
            ═══════════════════════════════════ */}
        {active === "documents" && (
          <div className="space-y-4 step-enter">
            <div
              className="drop-zone rounded-xl p-10 text-center cursor-pointer"
              onClick={() => docRef.current?.click()}
            >
              <input
                ref={docRef}
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.dwg"
                className="hidden"
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  setDocuments((prev) => [...prev, ...files]);
                }}
              />
              <svg className="w-14 h-14 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="font-semibold text-lg">Upload planning documents</p>
              <p className="text-sm text-muted mt-1">
                Drawings, site plans, block plans, previous applications, officer comments
              </p>
              <p className="text-xs text-muted mt-2">PDF, images, Word, DWG files accepted</p>
            </div>

            {/* File list */}
            {documents.length > 0 && (
              <div className="space-y-2">
                {documents.map((f, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-2.5 bg-card-bg rounded-lg">
                    <div className="flex items-center gap-2 min-w-0">
                      <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm truncate">{f.name}</span>
                      <span className="text-xs text-muted flex-shrink-0">
                        ({(f.size / 1024).toFixed(0)} KB)
                      </span>
                    </div>
                    <button
                      onClick={() => setDocuments((d) => d.filter((_, j) => j !== i))}
                      className="text-red-500 hover:text-red-700 text-xs font-medium ml-3 flex-shrink-0"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* AI location detection note */}
                <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-sm text-blue-700">
                    AI will analyse your documents to identify the site location from block plans and drawings.
                  </span>
                </div>

                {/* Manual location fallback */}
                {!docLocation && (
                  <div className="space-y-2">
                    <p className="text-xs text-muted font-medium">Or enter the location manually:</p>
                    <AddressSearch
                      onSelect={(result) => setDocLocation(result)}
                      placeholder="Enter site address or postcode..."
                      compact
                    />
                  </div>
                )}

                {docLocation && (
                  <div className="step-enter space-y-3">
                    <div className="bg-accent-light border border-accent/30 rounded-xl p-3 flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="min-w-0">
                        <p className="font-medium text-sm text-accent">Location set</p>
                        <p className="text-sm text-gray-700 truncate">{docLocation.display}</p>
                      </div>
                    </div>
                    <LocationMap
                      lat={docLocation.lat}
                      lng={docLocation.lng}
                      onLocationChange={(lat, lng) =>
                        setDocLocation((prev) => prev ? { ...prev, lat, lng } : null)
                      }
                      height="240px"
                    />
                  </div>
                )}

                <button
                  onClick={handleContinue}
                  className="w-full py-3.5 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
                >
                  Continue with {documents.length} document{documents.length !== 1 ? "s" : ""}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            )}

            {documents.length === 0 && (
              <p className="text-xs text-muted text-center">
                Upload previous planning applications, architectural drawings, or site photos — AI will extract the site location from block plans and documents.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Tab button sub-component ── */
function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium transition-colors ${
        active
          ? "bg-white text-primary border-b-2 border-primary"
          : "bg-card-bg text-muted hover:text-foreground hover:bg-gray-100"
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
