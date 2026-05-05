"use client";

import { useState } from "react";
import Link from "next/link";
import { REPORTS, TIERS, getDifficultyColor } from "@/data/reports";

export default function ReportBrowser() {
  const [search, setSearch] = useState("");
  const [activeTier, setActiveTier] = useState<string | null>(null);

  const q = search.toLowerCase().trim();

  const filtered = REPORTS.filter((r) => {
    const matchesTier = !activeTier || r.tier === activeTier;
    const matchesSearch =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.code.toLowerCase().includes(q) ||
      r.tier.toLowerCase().includes(q) ||
      r.keywords.some((k) => k.includes(q));
    return matchesTier && matchesSearch;
  });

  const groupedByTier = TIERS.map((tier) => ({
    tier,
    reports: filtered.filter((r) => r.tier === tier),
  })).filter((g) => g.reports.length > 0);

  return (
    <div className="space-y-8">
      {/* Search bar */}
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
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
          placeholder="Search reports... e.g. noise, trees, flood, heritage"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Tier filter pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setActiveTier(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            !activeTier
              ? "bg-primary text-white"
              : "bg-card-bg text-muted hover:text-foreground hover:bg-gray-200"
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
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTier === tier
                  ? "bg-primary text-white"
                  : "bg-card-bg text-muted hover:text-foreground hover:bg-gray-200"
              }`}
            >
              {tier} ({count})
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted text-center">
        Showing {filtered.length} of {REPORTS.length} reports
      </p>

      {/* Reports grouped by tier */}
      {groupedByTier.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted text-lg">
            No reports found for &ldquo;{search}&rdquo;
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveTier(null);
            }}
            className="text-primary font-medium mt-2 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {groupedByTier.map((group) => (
        <div key={group.tier}>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            {group.tier}
            <span className="text-xs bg-card-bg text-muted px-2 py-0.5 rounded-full font-medium">
              {group.reports.length}
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {group.reports.map((report) => (
              <div
                key={report.id}
                className="bg-white border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm leading-snug pr-2">
                    {report.name}
                  </h4>
                  <span className="text-xs text-muted font-mono bg-card-bg px-1.5 py-0.5 rounded flex-shrink-0">
                    {report.code}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${getDifficultyColor(
                      report.difficulty
                    )}`}
                  >
                    {report.difficulty}
                  </span>
                  <span className="text-xs text-muted">
                    {report.credits === 1
                      ? "1 credit"
                      : `${report.credits} credits`}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {report.keywords.slice(0, 4).map((kw) => (
                    <span
                      key={kw}
                      className="text-xs bg-card-bg text-muted px-2 py-0.5 rounded"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <Link
                  href="/start"
                  className="mt-3 block w-full py-2 text-center text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Generate this report
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
