"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PROFESSIONALS } from "@/data/professionals";

const CATEGORIES = [
  "All",
  "Ecology",
  "Fire Engineering",
  "Structural",
  "Contaminated Land",
  "Acoustics",
  "Transport",
  "Archaeology / Heritage",
  "Sustainability",
  "Arboriculture",
];

export default function ProfessionalsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return PROFESSIONALS.filter((pro) => {
      const matchesSearch =
        !search ||
        pro.name.toLowerCase().includes(search.toLowerCase()) ||
        pro.firm.toLowerCase().includes(search.toLowerCase()) ||
        pro.specialties.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
        pro.qualifications.some((q) => q.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory =
        category === "All" ||
        pro.specialties.some((s) => s.toLowerCase().includes(category.toLowerCase())) ||
        pro.title.toLowerCase().includes(category.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-card-bg">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Plan<span className="text-primary">Scope</span>
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-primary font-medium hover:underline"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Professional Directory</h1>
          <p className="text-muted text-sm mt-1">
            Browse qualified professionals who can review and sign off your AI-generated planning reports.
          </p>
        </div>

        {/* Search & filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, firm, or specialty..."
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
            />
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                category === cat
                  ? "bg-primary text-white"
                  : "bg-white border border-border text-muted hover:text-foreground hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted mb-4">
          {filtered.length} professional{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Professionals grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((pro) => (
            <div key={pro.id} className="bg-white border border-border rounded-xl p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center flex-shrink-0">
                  {pro.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{pro.name}</h3>
                    {pro.availability === "available" && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Available</span>
                    )}
                    {pro.availability === "busy" && (
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Busy</span>
                    )}
                    {pro.availability === "unavailable" && (
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Unavailable</span>
                    )}
                  </div>
                  <p className="text-sm text-muted">{pro.title}</p>
                  <p className="text-xs text-muted">{pro.firm} &middot; {pro.location}</p>
                </div>
              </div>

              <p className="text-sm text-muted">{pro.bio}</p>

              <div className="flex flex-wrap gap-1">
                {pro.qualifications.map((q) => (
                  <span key={q} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                    {q}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1">
                {pro.specialties.map((s) => (
                  <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-muted pt-2 border-t border-border">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {pro.rating} ({pro.reviewCount} reviews)
                </span>
                <span>~{pro.averageReviewDays} day turnaround</span>
                <span>&pound;{pro.priceRange.min}–{pro.priceRange.max}</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No professionals found matching your criteria.</p>
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="text-primary text-sm font-medium hover:underline mt-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
