"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PLANNING_LAW_UPDATES } from "@/data/mock-dashboard";
import type { Site, Application, ApplicationReport } from "@/data/mock-dashboard";
import { REPORTS } from "@/data/reports";
import {
  MOCK_REVIEW_REQUESTS,
  REVIEW_STATUS_STYLES,
  REVIEW_STATUS_LABELS,
} from "@/data/professionals";
import type { ReviewRequest } from "@/data/professionals";
import { createClient } from "@/lib/supabase/client";
import { useAssessmentGeneration } from "@/lib/hooks/useAssessmentGeneration";
import ReviewRequestModal from "./ReviewRequestModal";

/* ─── Backend row shapes (subset of what /api/projects returns) ─── */
interface ProjectRow {
  id: string;
  user_id: string;
  name: string;
  site_address: string | null;
  postcode: string | null;
  lpa_code: string | null;
  lpa_name: string | null;
  development_type: string | null;
  development_description: string | null;
  status: string;
  site_constraints: Record<string, unknown> | null;
  uploaded_documents: unknown[] | null;
  created_at: string;
  updated_at: string;
}
interface AssessmentRow {
  id: string;
  project_id: string;
  status: string;
  assessment_type: { id: string; name: string; short_name: string; credit_cost: number } | null;
}

/* ─── Map a ProjectAssessment status to the visual status used by the UI ─── */
function mapAssessmentStatus(s: string): ApplicationReport["status"] {
  switch (s) {
    case "completed":
      return "exported";
    case "generated":
      return "generated";
    case "edited":
      return "edited";
    case "review-pending":
      return "review-pending";
    case "under-review":
      return "review-pending";
    case "signed-off":
      return "signed-off";
    case "pending":
    default:
      return "draft";
  }
}

/* ─── Group projects into Site[] by postcode ─── */
function groupProjectsBySite(
  projects: ProjectRow[],
  assessmentsByProject: Map<string, AssessmentRow[]>,
): Site[] {
  const byPostcode = new Map<string, Site>();
  for (const p of projects) {
    const key = (p.postcode ?? "(no postcode)").toUpperCase();
    let site = byPostcode.get(key);
    if (!site) {
      site = {
        id: `site-${key}`,
        address: p.site_address ?? key,
        postcode: p.postcode ?? "",
        lat: 0,
        lng: 0,
        council: p.lpa_name ?? "",
        councilWebsite: "",
        applications: [],
        createdAt: p.created_at,
        notes: "",
      };
      byPostcode.set(key, site);
    }

    const reports: ApplicationReport[] = (assessmentsByProject.get(p.id) ?? []).map((a) => ({
      reportId: 0, // backend uses UUIDs; the planscope numeric id isn't reliable here
      reportName: a.assessment_type?.name ?? "Assessment",
      status: mapAssessmentStatus(a.status),
      assessmentRowId: a.id,
      shortName: a.assessment_type?.short_name,
    }));

    const application: Application = {
      id: p.id,
      siteId: site.id,
      name: p.name,
      type: p.development_type ?? "other",
      status: (p.status as Application["status"]) ?? "draft",
      reports,
      createdAt: p.created_at,
      updatedAt: p.updated_at,
      aiInsights: [],
      notes: p.development_description ?? "",
    };
    site.applications.push(application);
  }
  return Array.from(byPostcode.values());
}

const STATUS_STYLES: Record<string, string> = {
  draft: "bg-gray-100 text-gray-700",
  submitted: "bg-blue-100 text-blue-800",
  "under-review": "bg-amber-100 text-amber-800",
  approved: "bg-green-100 text-green-800",
  refused: "bg-red-100 text-red-800",
  appealed: "bg-purple-100 text-purple-800",
  generated: "bg-blue-100 text-blue-700",
  edited: "bg-amber-100 text-amber-700",
  exported: "bg-green-100 text-green-700",
  "review-pending": "bg-yellow-100 text-yellow-800",
  "signed-off": "bg-emerald-100 text-emerald-800",
};

export default function DashboardView() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string>("there");
  const [credits, setCredits] = useState<number>(0);
  const [sites, setSites] = useState<Site[]>([]);
  const [expandedSite, setExpandedSite] = useState<string | null>(null);
  const [expandedApp, setExpandedApp] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"sites" | "insights" | "reviews">("sites");
  const [reviewModal, setReviewModal] = useState<{
    open: boolean;
    report: ApplicationReport | null;
    applicationId: string;
    siteAddress: string;
  }>({ open: false, report: null, applicationId: "", siteAddress: "" });

  // Per-row generation state, keyed by project_assessments.id
  const [genState, setGenState] = useState<Record<string, { message: string; error: string | null }>>({});
  const generation = useAssessmentGeneration();

  const load = useCallback(async () => {
    try {
      setError(null);
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setDisplayName(
          (user.user_metadata?.full_name as string | undefined) ??
            user.email?.split("@")[0] ??
            "there",
        );
        const { data: profile } = await supabase
          .from("profiles")
          .select("credits_remaining")
          .eq("id", user.id)
          .maybeSingle();
        if (profile?.credits_remaining != null) setCredits(profile.credits_remaining);
      }

      const projRes = await fetch("/api/projects?limit=100");
      if (!projRes.ok) throw new Error(`Failed to load projects (${projRes.status})`);
      const { projects } = (await projRes.json()) as { projects: ProjectRow[] };

      const assessmentsByProject = new Map<string, AssessmentRow[]>();
      await Promise.all(
        projects.map(async (p) => {
          const r = await fetch(`/api/projects/${p.id}/assessments`);
          if (!r.ok) return;
          const { assessments } = (await r.json()) as { assessments: AssessmentRow[] };
          assessmentsByProject.set(p.id, assessments);
        }),
      );

      const grouped = groupProjectsBySite(projects, assessmentsByProject);
      setSites(grouped);
      setExpandedSite((cur) => cur ?? grouped[0]?.id ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load dashboard");
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    load().finally(() => {
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [load]);

  const handleGenerateAssessment = useCallback(
    (assessmentRowId: string) => {
      setGenState((s) => ({ ...s, [assessmentRowId]: { message: "Starting...", error: null } }));
      generation.start(assessmentRowId, {
        onStatus: (msg) => {
          setGenState((s) => ({ ...s, [assessmentRowId]: { message: msg, error: null } }));
        },
        onComplete: () => {
          setGenState((s) => {
            const copy = { ...s };
            delete copy[assessmentRowId];
            return copy;
          });
          load(); // refresh project_assessments
        },
        onError: (msg) => {
          setGenState((s) => ({ ...s, [assessmentRowId]: { message: "", error: msg } }));
        },
      });
    },
    [generation, load],
  );

  const allApps = useMemo(() => sites.flatMap((s) => s.applications), [sites]);
  const allInsights = useMemo(
    () =>
      allApps.flatMap((a) =>
        a.aiInsights.map((insight) => ({
          insight,
          appName: a.name,
          siteName: sites.find((s) => s.id === a.siteId)?.address || "",
        })),
      ),
    [allApps, sites],
  );

  const allReviewRequests = MOCK_REVIEW_REQUESTS;
  const activeReviews = allReviewRequests.filter(
    (r) => !["signed-off", "rejected", "expired"].includes(r.status),
  );

  // Match law updates to user's projects
  const relevantLaws = PLANNING_LAW_UPDATES.filter((law) =>
    allApps.some((app) =>
      law.relevantTo.some(
        (tag) =>
          app.type.includes(tag) ||
          app.name.toLowerCase().includes(tag) ||
          app.reports.some((r) => r.reportName.toLowerCase().includes(tag)),
      ),
    ),
  );

  return (
    <main className="py-8 md:py-12 bg-card-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Welcome header ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome back, {displayName.split(" ")[0]}
            </h1>
            <p className="text-muted text-sm mt-1">
              {sites.length} site{sites.length !== 1 ? "s" : ""} &middot;{" "}
              {allApps.length} application{allApps.length !== 1 ? "s" : ""} &middot;{" "}
              {credits} credits remaining
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/start"
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors"
            >
              + New Site
            </Link>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {loading && (
          <div className="mb-6 rounded-xl border border-border bg-white p-8 text-center text-muted">
            Loading your projects...
          </div>
        )}

        {!loading && !error && sites.length === 0 && (
          <div className="mb-6 rounded-xl border border-border bg-white p-8 text-center">
            <p className="text-lg font-medium mb-2">No projects yet</p>
            <p className="text-muted text-sm mb-4">
              Start a new planning report to see it here.
            </p>
            <Link
              href="/start"
              className="inline-block px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors"
            >
              + Start your first report
            </Link>
          </div>
        )}

        {/* ── Stats cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Sites" value={sites.length} />
          <StatCard label="Applications" value={allApps.length} />
          <StatCard
            label="Under Review"
            value={allApps.filter((a) => a.status === "under-review").length}
            accent
          />
          <StatCard
            label="AI Insights"
            value={allInsights.length}
            highlight
          />
        </div>

        {/* ── AI Insights Banner ── */}
        {allInsights.length > 0 && (
          <div className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="font-semibold text-amber-900">AI Insights for Your Projects</h3>
              <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full ml-auto">
                {allInsights.length}
              </span>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {allInsights.slice(0, 4).map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">&#9679;</span>
                  <div>
                    <span className="text-amber-900">{item.insight}</span>
                    <span className="text-amber-600 text-xs block mt-0.5">
                      {item.appName} &middot; {item.siteName}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {allInsights.length > 4 && (
              <button
                onClick={() => setActiveTab("insights")}
                className="text-amber-700 text-sm font-medium mt-3 hover:underline"
              >
                View all {allInsights.length} insights
              </button>
            )}
          </div>
        )}

        {/* ── Relevant Law Updates ── */}
        {relevantLaws.filter((l) => l.isNew).length > 0 && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="font-semibold text-blue-900">New Planning Laws Affecting Your Projects</h3>
            </div>
            {relevantLaws.filter((l) => l.isNew).map((law) => (
              <div key={law.id} className="mb-2 last:mb-0">
                <p className="text-sm font-medium text-blue-900">{law.title}</p>
                <p className="text-xs text-blue-700 mt-0.5">{law.summary}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {law.relevantTo.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Tab switcher ── */}
        <div className="flex gap-1 mb-6 bg-white rounded-lg p-1 border border-border w-fit">
          <button
            onClick={() => setActiveTab("sites")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "sites" ? "bg-primary text-white" : "text-muted hover:text-foreground"
            }`}
          >
            My Sites & Applications
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
              activeTab === "reviews" ? "bg-primary text-white" : "text-muted hover:text-foreground"
            }`}
          >
            Reviews
            {activeReviews.length > 0 && (
              <span className={`ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${
                activeTab === "reviews" ? "bg-white/20 text-white" : "bg-amber-500 text-white"
              }`}>
                {activeReviews.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("insights")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "insights" ? "bg-primary text-white" : "text-muted hover:text-foreground"
            }`}
          >
            All AI Insights ({allInsights.length})
          </button>
        </div>

        {/* ── SITES TAB ── */}
        {activeTab === "sites" && (
          <div className="space-y-4">
            {sites.map((site) => (
              <SiteCard
                key={site.id}
                site={site}
                expanded={expandedSite === site.id}
                onToggle={() => setExpandedSite(expandedSite === site.id ? null : site.id)}
                expandedApp={expandedApp}
                onToggleApp={(id) => setExpandedApp(expandedApp === id ? null : id)}
                onRequestReview={(report, appId, siteAddr) =>
                  setReviewModal({ open: true, report, applicationId: appId, siteAddress: siteAddr })
                }
                onGenerate={handleGenerateAssessment}
                genState={genState}
              />
            ))}
          </div>
        )}

        {/* ── REVIEWS TAB ── */}
        {activeTab === "reviews" && (
          <ReviewsTab reviews={allReviewRequests} />
        )}

        {/* ── INSIGHTS TAB ── */}
        {activeTab === "insights" && (
          <div className="space-y-3">
            {allInsights.map((item, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">{item.insight}</p>
                    <p className="text-xs text-muted mt-1">
                      {item.appName} &middot; {item.siteName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Review Request Modal ── */}
      {reviewModal.open && reviewModal.report && (
        <ReviewRequestModal
          report={reviewModal.report}
          applicationId={reviewModal.applicationId}
          siteAddress={reviewModal.siteAddress}
          onClose={() => setReviewModal({ open: false, report: null, applicationId: "", siteAddress: "" })}
          onSend={() => {
            setReviewModal({ open: false, report: null, applicationId: "", siteAddress: "" });
          }}
        />
      )}
    </main>
  );
}

/* ─── Sub-components ─── */

function StatCard({ label, value, accent, highlight }: { label: string; value: number; accent?: boolean; highlight?: boolean }) {
  return (
    <div className={`bg-white rounded-xl border p-4 ${accent ? "border-amber-200" : highlight ? "border-primary/30" : "border-border"}`}>
      <p className="text-xs text-muted uppercase tracking-wide">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${accent ? "text-amber-600" : highlight ? "text-primary" : ""}`}>
        {value}
      </p>
    </div>
  );
}

function SiteCard({
  site,
  expanded,
  onToggle,
  expandedApp,
  onToggleApp,
  onRequestReview,
  onGenerate,
  genState,
}: {
  site: Site;
  expanded: boolean;
  onToggle: () => void;
  expandedApp: string | null;
  onToggleApp: (id: string) => void;
  onRequestReview: (report: ApplicationReport, applicationId: string, siteAddress: string) => void;
  onGenerate: (assessmentRowId: string) => void;
  genState: Record<string, { message: string; error: string | null }>;
}) {
  const statusCounts = {
    active: site.applications.filter((a) => ["submitted", "under-review"].includes(a.status)).length,
    drafts: site.applications.filter((a) => a.status === "draft").length,
    decided: site.applications.filter((a) => ["approved", "refused"].includes(a.status)).length,
  };

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      {/* Site header */}
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold truncate">{site.address}</h3>
            <p className="text-xs text-muted mt-0.5">
              {site.postcode} &middot; {site.council}
            </p>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-xs text-muted">
                {site.applications.length} application{site.applications.length !== 1 ? "s" : ""}
              </span>
              {statusCounts.active > 0 && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                  {statusCounts.active} active
                </span>
              )}
              {statusCounts.drafts > 0 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                  {statusCounts.drafts} draft{statusCounts.drafts !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded site content */}
      {expanded && (
        <div className="border-t border-border">
          {/* Site notes */}
          {site.notes && (
            <div className="px-5 py-3 bg-card-bg text-sm text-muted border-b border-border">
              {site.notes}
            </div>
          )}

          {/* Council link */}
          <div className="px-5 py-2 bg-card-bg border-b border-border flex items-center gap-2">
            <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="text-xs text-primary font-medium">{site.council} Planning Portal</span>
          </div>

          {/* Applications */}
          <div className="divide-y divide-border">
            {site.applications.map((app) => (
              <ApplicationCard
                key={app.id}
                app={app}
                siteAddress={site.address}
                expanded={expandedApp === app.id}
                onToggle={() => onToggleApp(app.id)}
                onRequestReview={onRequestReview}
                onGenerate={onGenerate}
                genState={genState}
              />
            ))}
          </div>

          {/* Add application button */}
          <div className="px-5 py-3 border-t border-border">
            <Link
              href="/start"
              className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add new application to this site
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function ApplicationCard({
  app,
  siteAddress,
  expanded,
  onToggle,
  onRequestReview,
  onGenerate,
  genState,
}: {
  app: Application;
  siteAddress: string;
  expanded: boolean;
  onToggle: () => void;
  onRequestReview: (report: ApplicationReport, applicationId: string, siteAddress: string) => void;
  onGenerate: (assessmentRowId: string) => void;
  genState: Record<string, { message: string; error: string | null }>;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full px-5 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm truncate">{app.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${STATUS_STYLES[app.status] || ""}`}>
                {app.status.replace("-", " ")}
              </span>
            </div>
            {app.councilRef && (
              <span className="text-xs text-muted">Ref: {app.councilRef}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted">{app.reports.length} reports</span>
          <svg
            className={`w-4 h-4 text-muted transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-4 space-y-4">
          {/* Notes */}
          {app.notes && (
            <p className="text-sm text-muted bg-card-bg rounded-lg p-3">{app.notes}</p>
          )}

          {/* Council portal link */}
          {app.councilPortalUrl && (
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-primary font-medium">View on council portal — {app.councilRef}</span>
            </div>
          )}

          {/* AI Insights for this app */}
          {app.aiInsights.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 uppercase tracking-wide">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                AI Insights
              </div>
              {app.aiInsights.map((insight, i) => (
                <p key={i} className="text-xs text-amber-900 flex items-start gap-1.5">
                  <span className="text-amber-400 mt-0.5">&#9679;</span>
                  {insight}
                </p>
              ))}
            </div>
          )}

          {/* Reports table */}
          <div>
            <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
              Reports
            </h4>
            <div className="space-y-1.5">
              {app.reports.map((r, idx) => {
                // Look up by short_name (preferred) or fall back to legacy numeric id
                const reportData =
                  (r.shortName && REPORTS.find((rp) => rp.code === r.shortName)) ||
                  REPORTS.find((rp) => rp.id === r.reportId);
                const needsPro = reportData && reportData.professional.level !== "none";
                const canRequestReview =
                  needsPro && (r.status === "generated" || r.status === "edited");
                const rowGen = r.assessmentRowId ? genState[r.assessmentRowId] : undefined;
                const isGenerating = !!rowGen && !rowGen.error;

                return (
                  <div
                    key={r.assessmentRowId ?? `${r.reportId}-${idx}`}
                    className="flex flex-col gap-1.5 bg-card-bg rounded-lg px-3 py-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-sm">{r.reportName}</span>
                        {r.signedOffBy && (
                          <span className="text-xs text-emerald-600 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {r.signedOffBy}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize whitespace-nowrap ${STATUS_STYLES[r.status] || ""}`}>
                          {isGenerating ? "generating" : r.status.replace(/-/g, " ")}
                        </span>
                        {canRequestReview ? (
                          <button
                            onClick={() => onRequestReview(r, app.id, siteAddress)}
                            className="text-xs bg-primary text-white px-2.5 py-1 rounded-md font-medium hover:bg-primary-hover transition-colors whitespace-nowrap"
                          >
                            Request Review
                          </button>
                        ) : r.status === "draft" && r.assessmentRowId ? (
                          <button
                            onClick={() => onGenerate(r.assessmentRowId!)}
                            disabled={isGenerating}
                            className="text-xs bg-primary text-white px-2.5 py-1 rounded-md font-medium hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                          >
                            {isGenerating ? "Generating..." : "Generate"}
                          </button>
                        ) : (
                          <button className="text-xs text-primary font-medium hover:underline whitespace-nowrap">
                            View
                          </button>
                        )}
                      </div>
                    </div>
                    {rowGen?.message && (
                      <p className="text-xs text-blue-700">{rowGen.message}</p>
                    )}
                    {rowGen?.error && (
                      <p className="text-xs text-red-600">{rowGen.error}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <Link
              href="/start"
              className="text-xs text-primary font-medium hover:underline mt-2 inline-block"
            >
              + Add report
            </Link>
          </div>

          {/* Updated timestamp */}
          <p className="text-xs text-muted">
            Last updated: {app.updatedAt}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Reviews Tab ─── */
function ReviewsTab({ reviews }: { reviews: ReviewRequest[] }) {
  const sorted = [...reviews].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className="space-y-3">
      {sorted.length === 0 ? (
        <div className="bg-white border border-border rounded-xl p-8 text-center">
          <p className="text-muted">No review requests yet.</p>
          <p className="text-xs text-muted mt-1">
            Generate reports and request professional reviews from your applications.
          </p>
        </div>
      ) : (
        sorted.map((review) => (
          <div key={review.id} className="bg-white border border-border rounded-xl p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-medium text-sm">{review.reportName}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${REVIEW_STATUS_STYLES[review.status]}`}>
                    {REVIEW_STATUS_LABELS[review.status]}
                  </span>
                </div>
                <p className="text-xs text-muted mt-1">{review.siteAddress}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {review.professionalName}
                  </span>
                  {review.sentAt && (
                    <span>Sent: {review.sentAt}</span>
                  )}
                  {review.signedOffAt && (
                    <span className="text-emerald-600 font-medium">Signed off: {review.signedOffAt}</span>
                  )}
                </div>
                {review.professionalComments && (
                  <div className="mt-2 bg-card-bg rounded-lg p-2.5 text-xs text-muted">
                    <span className="font-medium text-foreground">Professional notes: </span>
                    {review.professionalComments}
                  </div>
                )}
              </div>
              <Link
                href={`/review/${review.id}`}
                className="text-xs text-primary font-medium hover:underline whitespace-nowrap flex-shrink-0"
              >
                View
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
