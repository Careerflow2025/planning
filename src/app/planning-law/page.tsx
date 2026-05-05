"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { PLANNING_LAW_UPDATES } from "@/data/mock-dashboard";

const ALL_TOPICS = Array.from(
  new Set(PLANNING_LAW_UPDATES.flatMap((u) => u.relevantTo))
).sort();

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PlanningLawPage() {
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [showNewOnly, setShowNewOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PLANNING_LAW_UPDATES.filter((u) => {
      const matchesSearch =
        !q ||
        u.title.toLowerCase().includes(q) ||
        u.summary.toLowerCase().includes(q) ||
        u.source.toLowerCase().includes(q) ||
        u.relevantTo.some((t) => t.toLowerCase().includes(q));
      const matchesTopic = !activeTopic || u.relevantTo.includes(activeTopic);
      const matchesNew = !showNewOnly || u.isNew;
      return matchesSearch && matchesTopic && matchesNew;
    });
  }, [search, activeTopic, showNewOnly]);

  const newCount = PLANNING_LAW_UPDATES.filter((u) => u.isNew).length;

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-primary-light/20 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {newCount} new update{newCount === 1 ? "" : "s"} this month
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            UK Planning Law Updates
          </h1>
          <p className="text-muted text-lg mt-2 max-w-2xl">
            Stay up to date with the latest changes to UK planning policy, regulations and case law that affect your applications.
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
              placeholder="Search updates... e.g. BNG, NPPF, extension"
              className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          {/* Filters */}
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setActiveTopic(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                !activeTopic
                  ? "bg-primary text-white"
                  : "bg-white border border-border text-muted hover:border-primary hover:text-primary"
              }`}
            >
              All topics ({PLANNING_LAW_UPDATES.length})
            </button>
            {ALL_TOPICS.map((topic) => {
              const count = PLANNING_LAW_UPDATES.filter((u) =>
                u.relevantTo.includes(topic)
              ).length;
              return (
                <button
                  key={topic}
                  onClick={() =>
                    setActiveTopic(activeTopic === topic ? null : topic)
                  }
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors capitalize ${
                    activeTopic === topic
                      ? "bg-primary text-white"
                      : "bg-white border border-border text-muted hover:border-primary hover:text-primary"
                  }`}
                >
                  {topic} ({count})
                </button>
              );
            })}
            <label className="ml-auto inline-flex items-center gap-2 text-xs font-semibold text-muted cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showNewOnly}
                onChange={(e) => setShowNewOnly(e.target.checked)}
                className="rounded border-border text-primary focus:ring-primary/30"
              />
              New only
            </label>
          </div>
        </div>
      </section>

      {/* Updates list */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted text-lg">No updates match your filters.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveTopic(null);
                  setShowNewOnly(false);
                }}
                className="mt-3 text-primary font-semibold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <ol className="relative border-l-2 border-border ml-3 space-y-8">
              {filtered.map((update) => (
                <li key={update.id} className="ml-6">
                  <span
                    className={`absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full ring-4 ring-white ${
                      update.isNew ? "bg-amber-500" : "bg-primary"
                    }`}
                  />
                  <article className="bg-white border border-border rounded-xl p-5 md:p-6 hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <time className="text-xs font-semibold text-muted">
                        {formatDate(update.date)}
                      </time>
                      {update.isNew && (
                        <span className="text-[10px] font-bold uppercase tracking-wide text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded">
                          New
                        </span>
                      )}
                    </div>

                    <h2 className="font-bold text-lg leading-snug mb-2">
                      {update.title}
                    </h2>

                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {update.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {update.relevantTo.map((topic) => (
                        <button
                          key={topic}
                          onClick={() => setActiveTopic(topic)}
                          className="text-[11px] px-2 py-0.5 bg-primary-light text-primary rounded font-medium capitalize hover:bg-primary hover:text-white transition-colors"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-border/50 flex items-center justify-between gap-3">
                      <span className="text-xs text-muted">
                        <span className="font-semibold text-foreground">Source:</span>{" "}
                        {update.source}
                      </span>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Want updates tailored to your projects?
          </h2>
          <p className="text-primary-light">
            PlanScope tracks planning law changes that affect your live applications and flags them automatically.
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
