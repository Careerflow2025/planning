"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { REPORTS, TIERS, getDifficultyColor } from "@/data/reports";

// Map report names to URL slugs — special cases first, then generic kebab-case
const SLUG_OVERRIDES: Record<number, string> = {
  8: "bat-survey",
  10: "tree-survey",
  13: "contaminated-land-assessment",
  14: "contaminated-land-assessment",
  58: "ventilation-and-extraction-statement",
};

function reportSlug(report: { id: number; name: string }): string {
  if (SLUG_OVERRIDES[report.id]) return SLUG_OVERRIDES[report.id];
  return report.name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/\s*\/\s*/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function PlanningDocumentsPage() {
  const [search, setSearch] = useState("");
  const [activeTier, setActiveTier] = useState<string | null>(null);

  const filtered = REPORTS.filter((r) => {
    const matchesSearch =
      !search ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.code.toLowerCase().includes(search.toLowerCase()) ||
      r.keywords.some((k) => k.toLowerCase().includes(search.toLowerCase()));
    const matchesTier = !activeTier || r.tier === activeTier;
    return matchesSearch && matchesTier;
  });

  const grouped = TIERS.filter((t) => !activeTier || t === activeTier).map(
    (tier) => ({
      tier,
      reports: filtered.filter((r) => r.tier === tier),
    })
  ).filter((g) => g.reports.length > 0);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-primary-light/20 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Planning Documents
          </h1>
          <p className="text-muted text-lg mt-2 max-w-2xl">
            Every report and statement you may need for your UK planning application — explained simply.
          </p>

          {/* Search */}
          <div className="mt-6 max-w-xl relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search documents... e.g. flood, trees, noise"
              className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          {/* Category filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTier(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                !activeTier
                  ? "bg-primary text-white"
                  : "bg-white border border-border text-muted hover:border-primary hover:text-primary"
              }`}
            >
              All ({REPORTS.length})
            </button>
            {TIERS.map((tier) => {
              const count = REPORTS.filter((r) => r.tier === tier).length;
              return (
                <button
                  key={tier}
                  onClick={() => setActiveTier(activeTier === tier ? null : tier)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    activeTier === tier
                      ? "bg-primary text-white"
                      : "bg-white border border-border text-muted hover:border-primary hover:text-primary"
                  }`}
                >
                  {tier} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Document grid */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {grouped.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted text-lg">No documents match your search.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveTier(null);
                }}
                className="mt-3 text-primary font-semibold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          <div className="space-y-10">
            {grouped.map(({ tier, reports }) => (
              <div key={tier}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg font-bold">{tier}</h2>
                  <span className="text-xs bg-primary-light text-primary px-2.5 py-0.5 rounded-full font-semibold">
                    {reports.length} {reports.length === 1 ? "document" : "documents"}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {reports.map((report) => (
                    <Link
                      key={report.id}
                      href={`/planning-documents/${reportSlug(report)}`}
                      className="group bg-white border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all block"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-bold text-primary bg-primary-light px-2 py-0.5 rounded">
                          {report.code}
                        </span>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded ${getDifficultyColor(
                            report.difficulty
                          )}`}
                        >
                          {report.difficulty === "easy"
                            ? "Straightforward"
                            : report.difficulty === "medium"
                            ? "Moderate"
                            : "Complex"}
                        </span>
                      </div>

                      <h3 className="font-semibold text-sm leading-snug mb-2">
                        {report.name}
                      </h3>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {report.keywords.slice(0, 4).map((kw) => (
                          <span
                            key={kw}
                            className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <span className="text-xs text-muted">
                          {report.credits} {report.credits === 1 ? "credit" : "credits"}
                        </span>
                        <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more &rarr;
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Not sure which documents you need?
          </h2>
          <p className="text-primary-light">
            Enter your postcode and our AI will recommend the right reports for your project.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
