"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  REPORTS,
  searchReports,
  getRecommendedReports,
  getDifficultyColor,
} from "@/data/reports";
import type { Report, ProRequirement } from "@/data/reports";
import {
  mapWorkType,
  mapBuildingType,
  deriveProjectName,
} from "@/lib/utils/guided-flow-mapper";
import { SESSION_KEY, type SelectedLocation } from "@/components/LocationPicker/types";

/* Lazy-load LocationPicker (Leaflet needs window) */
const LocationPicker = dynamic(() => import("@/components/LocationPicker"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] bg-gray-100 rounded-xl animate-pulse flex items-center justify-center">
      <svg className="w-8 h-8 text-gray-300 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
      </svg>
    </div>
  ),
});

/* ───── Types ───── */
interface ProjectData {
  // Location
  postcode: string;
  address: string;
  lat: number | null;
  lng: number | null;
  // Photo
  photoFile: File | null;
  photoPreview: string | null;
  // Questions
  projectDescription: string;
  buildingType: string;
  workType: string;
  issues: string[];
  knownReport: boolean | null;
  // Report
  selectedReports: number[];
  // Documents
  documents: File[];
}

const INITIAL: ProjectData = {
  postcode: "",
  address: "",
  lat: null,
  lng: null,
  photoFile: null,
  photoPreview: null,
  projectDescription: "",
  buildingType: "",
  workType: "",
  issues: [],
  knownReport: null,
  selectedReports: [],
  documents: [],
};

const STEPS = [
  "location",
  "q-project",
  "q-building",
  "q-work",
  "q-issues",
  "q-known",
  "documents",
  "reports",
  "summary",
] as const;
type Step = (typeof STEPS)[number];

/* ───── Postcodes.io helper ───── */
async function lookupPostcode(
  pc: string
): Promise<{
  addresses: { address: string; lat: number; lng: number }[];
} | null> {
  try {
    const res = await fetch(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(pc)}`
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== 200 || !data.result) return null;
    const r = data.result;
    return {
      addresses: [
        {
          address: [r.admin_ward, r.admin_district, r.region, pc.toUpperCase()]
            .filter(Boolean)
            .join(", "),
          lat: r.latitude,
          lng: r.longitude,
        },
      ],
    };
  } catch {
    return null;
  }
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function GuidedFlow() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("location");
  const [data, setData] = useState<ProjectData>(INITIAL);
  const [postcodeLoading, setPostcodeLoading] = useState(false);
  const [postcodeError, setPostcodeError] = useState("");
  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [reportSearch, setReportSearch] = useState("");
  const [showAllReports, setShowAllReports] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);

  /* Preload from sessionStorage if user picked their location on the home page hero */
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const cached = sessionStorage.getItem(SESSION_KEY);
      if (!cached) return;
      const parsed: SelectedLocation = JSON.parse(cached);
      if (typeof parsed.lat !== "number" || typeof parsed.lng !== "number") return;
      setData((d) => ({
        ...d,
        address: parsed.address ?? d.address,
        postcode: parsed.postcode ?? d.postcode,
        lat: parsed.lat,
        lng: parsed.lng,
      }));
      setAddressConfirmed(true);
      // Auto-skip the location step
      setStep("q-project");
    } catch {
      /* ignore parse errors */
    }
  }, []);

  const stepIndex = STEPS.indexOf(step);
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  /* ───── Navigation ───── */
  const next = useCallback(() => {
    const i = STEPS.indexOf(step);
    if (i < STEPS.length - 1) setStep(STEPS[i + 1]);
  }, [step]);

  const back = useCallback(() => {
    const i = STEPS.indexOf(step);
    if (i > 0) setStep(STEPS[i - 1]);
  }, [step]);

  const goTo = useCallback((s: Step) => setStep(s), []);

  /* ───── Postcode lookup ───── */
  const handlePostcodeLookup = useCallback(async () => {
    const pc = data.postcode.trim();
    if (!pc) return;
    setPostcodeLoading(true);
    setPostcodeError("");
    const result = await lookupPostcode(pc);
    setPostcodeLoading(false);
    if (result && result.addresses.length > 0) {
      const a = result.addresses[0];
      setData((d) => ({ ...d, address: a.address, lat: a.lat, lng: a.lng }));
    } else {
      setPostcodeError("Postcode not found. Please check and try again.");
    }
  }, [data.postcode]);

  /* ───── Photo handling ───── */
  const handlePhoto = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setData((d) => ({ ...d, photoFile: file, photoPreview: url }));
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

  /* ───── Report helpers ───── */
  const recommended = getRecommendedReports({
    projectType: data.projectDescription,
    buildingType: data.buildingType,
    workType: data.workType,
    issues: data.issues,
  });

  const searchResults = reportSearch ? searchReports(reportSearch) : [];

  const toggleReport = (id: number) => {
    setData((d) => ({
      ...d,
      selectedReports: d.selectedReports.includes(id)
        ? d.selectedReports.filter((r) => r !== id)
        : [...d.selectedReports, id],
    }));
  };

  /* ───── Real submit: create project + upload files + queue assessments ───── */
  const handleGenerate = useCallback(async () => {
    if (data.selectedReports.length === 0) return;
    setSubmitting(true);
    setSubmitError(null);

    try {
      // 1. Create the project
      const projectRes = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: deriveProjectName({
            workType: data.workType,
            buildingType: data.buildingType,
            address: data.address,
            projectDescription: data.projectDescription,
          }),
          site_address: data.address,
          postcode: data.postcode,
          development_type: mapWorkType(data.workType, data.buildingType),
          development_description: data.projectDescription,
          use_class: mapBuildingType(data.buildingType),
        }),
      });
      if (!projectRes.ok) {
        const errBody = await projectRes.json().catch(() => ({}));
        throw new Error(errBody.error || `Failed to create project (${projectRes.status})`);
      }
      const { project } = (await projectRes.json()) as { project: { id: string } };

      // 2. Upload photo + documents (best-effort — don't block on failures)
      const allFiles = [data.photoFile, ...data.documents].filter((f): f is File => !!f);
      await Promise.all(
        allFiles.map(async (file) => {
          const fd = new FormData();
          fd.append("file", file);
          fd.append("project_id", project.id);
          try {
            await fetch("/api/documents/upload", { method: "POST", body: fd });
          } catch {
            /* swallow individual upload errors so the rest of the flow proceeds */
          }
        }),
      );

      // 3. Queue the selected assessments (frontend numeric IDs → backend short_names)
      const shortNames = data.selectedReports
        .map((id) => REPORTS.find((r) => r.id === id)?.code)
        .filter((c): c is string => !!c);

      if (shortNames.length > 0) {
        const assRes = await fetch(`/api/projects/${project.id}/assessments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ short_names: shortNames }),
        });
        if (!assRes.ok) {
          const errBody = await assRes.json().catch(() => ({}));
          throw new Error(errBody.error || `Failed to queue assessments (${assRes.status})`);
        }
      }

      // 4. Off to the dashboard
      router.push(`/dashboard?new=${project.id}`);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong");
      setSubmitting(false);
    }
  }, [data, router]);

  /* ═══════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ── Top bar ── */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xs">PS</span>
          </div>
          <span className="text-lg font-bold tracking-tight">PlanScope</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted hidden sm:inline">
            Step {stepIndex + 1} of {STEPS.length}
          </span>
          <div className="flex gap-1">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i <= stepIndex ? "bg-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* ── Site breadcrumb (only when address is confirmed and we're past the location step) ── */}
      {addressConfirmed && data.address && step !== "location" && (
        <div className="bg-green-50 border-b border-green-200 px-6 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs text-green-800 truncate">
              <span className="font-semibold">Site:</span> {data.address}
            </span>
          </div>
          <button
            onClick={() => {
              try { sessionStorage.removeItem(SESSION_KEY); } catch { /* ignore */ }
              setAddressConfirmed(false);
              setStep("location");
            }}
            className="text-xs text-green-700 hover:underline flex-shrink-0 font-medium"
          >
            Edit
          </button>
        </div>
      )}

      {/* ── Progress bar ── */}
      <div className="h-1 bg-gray-100">
        <div
          className="h-full bg-primary progress-fill rounded-r"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Main content ── */}
      <main className="flex-1 flex items-start justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-xl step-enter" key={step}>
          {/* ════════════ STEP: LOCATION ════════════ */}
          {step === "location" && (
            <div className="space-y-6 max-w-5xl mx-auto w-full">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Where is your site?
                </h1>
                <p className="text-muted">
                  Search for your postcode, then click your property on the map.
                </p>
              </div>

              <LocationPicker
                variant="wizard"
                onConfirm={(loc) => {
                  setData((d) => ({
                    ...d,
                    address: loc.address,
                    postcode: loc.postcode,
                    lat: loc.lat,
                    lng: loc.lng,
                  }));
                  setAddressConfirmed(true);
                  next();
                }}
              />
            </div>
          )}

          {/* Photo capture lives on the landing page (HomeActionBox), not in this wizard. */}

          {/* ════════════ STEP: Q-PROJECT ════════════ */}
          {step === "q-project" && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  What are you trying to do?
                </h1>
                <p className="text-muted">
                  Describe your project in a sentence or two.
                </p>
              </div>

              <textarea
                value={data.projectDescription}
                onChange={(e) =>
                  setData((d) => ({
                    ...d,
                    projectDescription: e.target.value,
                  }))
                }
                placeholder="e.g. I want to build a rear extension on my terraced house..."
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                autoFocus
              />

              <div className="flex gap-3">
                <button
                  onClick={back}
                  className="px-6 py-4 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={next}
                  disabled={!data.projectDescription.trim()}
                  className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ════════════ STEP: Q-BUILDING ════════════ */}
          {step === "q-building" && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  What type of property is it?
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "house", label: "House", icon: "🏠" },
                  { value: "flat", label: "Flat / Apartment", icon: "🏢" },
                  { value: "commercial", label: "Commercial", icon: "🏪" },
                  { value: "land", label: "Land", icon: "🌿" },
                  { value: "mixed", label: "Mixed Use", icon: "🏗️" },
                  { value: "other", label: "Other", icon: "📋" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      setData((d) => ({ ...d, buildingType: opt.value }))
                    }
                    className={`option-card border-2 rounded-xl p-5 text-left ${
                      data.buildingType === opt.value
                        ? "selected"
                        : "border-border"
                    }`}
                  >
                    <span className="text-2xl block mb-2">{opt.icon}</span>
                    <span className="font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={back}
                  className="px-6 py-4 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={next}
                  disabled={!data.buildingType}
                  className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ════════════ STEP: Q-WORK ════════════ */}
          {step === "q-work" && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  What type of work?
                </h1>
              </div>

              <div className="space-y-3">
                {[
                  { value: "extension", label: "Extension" },
                  { value: "conversion", label: "Conversion" },
                  { value: "new-build", label: "New Build" },
                  { value: "change-of-use", label: "Change of Use" },
                  { value: "demolition", label: "Demolition" },
                  { value: "renovation", label: "Renovation / Refurbishment" },
                  { value: "other", label: "Something else" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      setData((d) => ({ ...d, workType: opt.value }))
                    }
                    className={`option-card w-full border-2 rounded-xl px-5 py-4 text-left font-medium ${
                      data.workType === opt.value
                        ? "selected"
                        : "border-border"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={back}
                  className="px-6 py-4 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={next}
                  disabled={!data.workType}
                  className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ════════════ STEP: Q-ISSUES ════════════ */}
          {step === "q-issues" && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Any known issues?
                </h1>
                <p className="text-muted">Select all that apply, or skip.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "trees", label: "Trees nearby" },
                  { value: "listed", label: "Listed building" },
                  { value: "conservation", label: "Conservation area" },
                  { value: "flooding", label: "Flood risk" },
                  { value: "neighbours", label: "Neighbour concerns" },
                  { value: "noise", label: "Noise issues" },
                  { value: "access", label: "Access / highways" },
                  { value: "contamination", label: "Land contamination" },
                ].map((opt) => {
                  const selected = data.issues.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      onClick={() =>
                        setData((d) => ({
                          ...d,
                          issues: selected
                            ? d.issues.filter((i) => i !== opt.value)
                            : [...d.issues, opt.value],
                        }))
                      }
                      className={`option-card border-2 rounded-xl px-4 py-3 text-left font-medium text-sm ${
                        selected ? "selected" : "border-border"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            selected
                              ? "bg-primary border-primary"
                              : "border-gray-300"
                          }`}
                        >
                          {selected && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </span>
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={back}
                  className="px-6 py-4 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={next}
                  className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-hover transition-colors"
                >
                  {data.issues.length > 0 ? "Continue" : "No issues — skip"}
                </button>
              </div>
            </div>
          )}

          {/* ════════════ STEP: Q-KNOWN ════════════ */}
          {step === "q-known" && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Do you know which report you need?
                </h1>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    setData((d) => ({ ...d, knownReport: true }));
                    goTo("reports");
                  }}
                  className="option-card w-full border-2 border-border rounded-xl px-5 py-4 text-left font-medium"
                >
                  Yes, I know what I need
                </button>
                <button
                  onClick={() => {
                    setData((d) => ({ ...d, knownReport: false }));
                    next();
                  }}
                  className="option-card w-full border-2 border-border rounded-xl px-5 py-4 text-left font-medium"
                >
                  No, help me find the right reports
                </button>
              </div>

              <button
                onClick={back}
                className="w-full py-3 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            </div>
          )}

          {/* ════════════ STEP: DOCUMENTS ════════════ */}
          {step === "documents" && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Upload supporting documents
                </h1>
                <p className="text-muted">
                  Plans, drawings, previous applications — anything that helps.
                  You can skip this.
                </p>
              </div>

              <div
                className="drop-zone rounded-xl p-8 text-center cursor-pointer"
                onClick={() => docInputRef.current?.click()}
              >
                <input
                  ref={docInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    setData((d) => ({
                      ...d,
                      documents: [...d.documents, ...files],
                    }));
                  }}
                />
                <svg
                  className="w-12 h-12 mx-auto mb-3 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="font-medium">Tap to upload documents</p>
                <p className="text-sm text-muted mt-1">
                  PDF, images, Word documents
                </p>
              </div>

              {data.documents.length > 0 && (
                <div className="space-y-2">
                  {data.documents.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-card-bg rounded-lg"
                    >
                      <span className="text-sm truncate">{f.name}</span>
                      <button
                        onClick={() =>
                          setData((d) => ({
                            ...d,
                            documents: d.documents.filter((_, j) => j !== i),
                          }))
                        }
                        className="text-red-500 hover:text-red-700 text-sm ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={back}
                  className="px-6 py-4 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={next}
                  className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-hover transition-colors"
                >
                  {data.documents.length > 0
                    ? "Continue"
                    : "Skip for now"}
                </button>
              </div>
            </div>
          )}

          {/* ════════════ STEP: REPORTS ════════════ */}
          {step === "reports" && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Choose your reports
                </h1>
                <p className="text-muted">
                  {data.knownReport
                    ? "Search or browse to find the report you need."
                    : "Based on your answers, we recommend these reports."}
                </p>
              </div>

              {/* Search */}
              <input
                type="text"
                placeholder="Search reports... e.g. noise, trees, flood"
                value={reportSearch}
                onChange={(e) => setReportSearch(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Search results */}
              {reportSearch && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted uppercase tracking-wide">
                    Search results ({searchResults.length})
                  </h3>
                  {searchResults.length === 0 && (
                    <p className="text-sm text-muted py-4 text-center">
                      No reports found for &ldquo;{reportSearch}&rdquo;
                    </p>
                  )}
                  {searchResults.map((r) => (
                    <ReportCard
                      key={r.id}
                      report={r}
                      selected={data.selectedReports.includes(r.id)}
                      onToggle={() => toggleReport(r.id)}
                    />
                  ))}
                </div>
              )}

              {/* Recommended */}
              {!reportSearch && recommended.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted uppercase tracking-wide">
                    Recommended for your project
                  </h3>
                  {recommended.map((r) => (
                    <ReportCard
                      key={r.id}
                      report={r}
                      selected={data.selectedReports.includes(r.id)}
                      onToggle={() => toggleReport(r.id)}
                    />
                  ))}
                </div>
              )}

              {/* Browse all */}
              {!reportSearch && (
                <div>
                  <button
                    onClick={() => setShowAllReports((v) => !v)}
                    className="text-primary font-medium text-sm hover:underline"
                  >
                    {showAllReports
                      ? "Hide all reports"
                      : `Browse all ${REPORTS.length} reports`}
                  </button>
                  {showAllReports && (
                    <div className="mt-3 space-y-2 max-h-96 overflow-y-auto">
                      {REPORTS.map((r) => (
                        <ReportCard
                          key={r.id}
                          report={r}
                          selected={data.selectedReports.includes(r.id)}
                          onToggle={() => toggleReport(r.id)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {data.selectedReports.length > 0 && (
                <div className="p-3 bg-primary-light rounded-lg text-sm">
                  <span className="font-medium text-primary">
                    {data.selectedReports.length} report
                    {data.selectedReports.length !== 1 ? "s" : ""} selected
                  </span>
                  {" — "}
                  {REPORTS.filter((r) => data.selectedReports.includes(r.id))
                    .map((r) => r.code)
                    .join(", ")}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => goTo("q-known")}
                  className="px-6 py-4 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => goTo("summary")}
                  disabled={data.selectedReports.length === 0}
                  className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ════════════ STEP: SUMMARY ════════════ */}
          {step === "summary" && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Your project summary
                </h1>
                <p className="text-muted">
                  Review your details before generating reports.
                </p>
              </div>

              <div className="space-y-4">
                <SummaryRow
                  label="Site"
                  value={data.address}
                  onEdit={() => goTo("location")}
                />
                <SummaryRow
                  label="Project"
                  value={data.projectDescription}
                  onEdit={() => goTo("q-project")}
                />
                <SummaryRow
                  label="Property type"
                  value={data.buildingType}
                  onEdit={() => goTo("q-building")}
                />
                <SummaryRow
                  label="Work type"
                  value={data.workType}
                  onEdit={() => goTo("q-work")}
                />
                <SummaryRow
                  label="Known issues"
                  value={
                    data.issues.length > 0
                      ? data.issues.join(", ")
                      : "None selected"
                  }
                  onEdit={() => goTo("q-issues")}
                />
                <SummaryRow
                  label="Documents"
                  value={
                    data.documents.length > 0
                      ? `${data.documents.length} file(s)`
                      : "None uploaded"
                  }
                  onEdit={() => goTo("documents")}
                />

                <div className="border border-border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted">
                      Selected reports
                    </span>
                    <button
                      onClick={() => goTo("reports")}
                      className="text-primary text-sm hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="space-y-1">
                    {REPORTS.filter((r) =>
                      data.selectedReports.includes(r.id)
                    ).map((r) => (
                      <div
                        key={r.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <span>{r.name}</span>
                        <span className="text-muted">
                          {r.credits > 1 ? `${r.credits} credits` : "1 credit"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-2 flex items-center justify-between font-medium">
                    <span>Total</span>
                    <span>
                      {REPORTS.filter((r) =>
                        data.selectedReports.includes(r.id)
                      ).reduce((sum, r) => sum + r.credits, 0)}{" "}
                      credits
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Professional Review Notice ── */}
              {(() => {
                const selectedReportObjects = REPORTS.filter((r) => data.selectedReports.includes(r.id));
                const required = selectedReportObjects.filter((r) => r.professional.level === "required");
                const recommended = selectedReportObjects.filter((r) => r.professional.level === "recommended");
                if (required.length === 0 && recommended.length === 0) return null;
                return (
                  <div className="border border-amber-300 bg-amber-50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                      </svg>
                      <h3 className="font-semibold text-amber-900 text-sm">Professional Review</h3>
                    </div>
                    {required.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-1">Legally Required</p>
                        {required.map((r) => (
                          <div key={r.id} className="flex items-center gap-2 text-sm text-red-800 py-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                            <span>{r.name}</span>
                            <span className="text-xs text-red-600">— {r.professional.professionalType}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {recommended.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Professional Review Recommended</p>
                        {recommended.map((r) => (
                          <div key={r.id} className="flex items-center gap-2 text-sm text-amber-800 py-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                            <span>{r.name}</span>
                            <span className="text-xs text-amber-600">— {r.professional.professionalType}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-amber-700">
                      These reports will be AI-generated first. You&apos;ll be prompted to send them for professional review once ready.
                    </p>
                  </div>
                );
              })()}

              {submitError && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={submitting || data.selectedReports.length === 0}
                className="w-full py-4 bg-accent text-white rounded-xl font-semibold text-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? "Creating your project..." : "Generate Reports"}
              </button>

              <p className="text-xs text-center text-muted">
                This document has been generated using structured planning data
                and AI assistance. It should be reviewed before submission where
                appropriate. PlanScope does not guarantee planning approval.
              </p>

              <button
                onClick={back}
                className="w-full py-3 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

/* ───── Sub-components ───── */

function ProBadge({ level, reason }: { level: ProRequirement; reason: string }) {
  if (level === "none") return null;
  const isRequired = level === "required";
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-full cursor-help ${
        isRequired ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
      }`}
      title={reason}
    >
      <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
      </svg>
      {isRequired ? "Pro required" : "Pro advised"}
    </span>
  );
}

function ReportCard({
  report,
  selected,
  onToggle,
}: {
  report: Report;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`option-card w-full border-2 rounded-lg p-3 text-left flex items-center justify-between ${
        selected ? "selected" : "border-border"
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-sm">{report.name}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(
              report.difficulty
            )}`}
          >
            {report.difficulty}
          </span>
          <ProBadge level={report.professional.level} reason={report.professional.reason} />
        </div>
        <div className="text-xs text-muted mt-0.5">
          {report.tier} &middot; {report.code} &middot;{" "}
          {report.credits === 1 ? "1 credit" : `${report.credits} credits`}
        </div>
      </div>
      <div
        className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ml-3 ${
          selected ? "bg-primary border-primary" : "border-gray-300"
        }`}
      >
        {selected && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </button>
  );
}

function SummaryRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit: () => void;
}) {
  return (
    <div className="flex items-start justify-between p-3 bg-card-bg rounded-lg">
      <div className="min-w-0">
        <p className="text-xs text-muted uppercase tracking-wide">{label}</p>
        <p className="text-sm mt-0.5 break-words">{value}</p>
      </div>
      <button
        onClick={onEdit}
        className="text-primary text-sm hover:underline ml-3 flex-shrink-0"
      >
        Edit
      </button>
    </div>
  );
}
