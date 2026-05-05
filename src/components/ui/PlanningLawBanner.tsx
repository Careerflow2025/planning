"use client";

import { useState } from "react";
import { PLANNING_LAW_UPDATES } from "@/data/mock-dashboard";

export default function PlanningLawBanner() {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const newest = PLANNING_LAW_UPDATES[0];
  const newCount = PLANNING_LAW_UPDATES.filter((u) => u.isNew).length;

  if (dismissed) return null;

  return (
    <>
      {/* Top ticker bar */}
      <div className="bg-[#0f172a] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-10 gap-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 min-w-0 flex-1 hover:opacity-80 transition-opacity"
          >
            <span className="flex items-center gap-1.5 flex-shrink-0">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-semibold text-amber-400">UK Planning Law</span>
            </span>
            <span className="truncate text-gray-300">
              {newest.title}
            </span>
            {newCount > 0 && (
              <span className="flex-shrink-0 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {newCount} new
              </span>
            )}
            <svg
              className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-gray-500 hover:text-gray-300 flex-shrink-0 p-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded law updates panel */}
      {expanded && (
        <div className="bg-[#1e293b] border-b border-gray-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold text-sm">Recent UK Planning Law Updates</h3>
              <span className="text-gray-400 text-xs">Auto-tracked by PlanScope AI</span>
            </div>
            <div className="space-y-3 max-h-72 overflow-y-auto">
              {PLANNING_LAW_UPDATES.map((update) => (
                <div
                  key={update.id}
                  className={`p-3 rounded-lg ${update.isNew ? "bg-amber-500/10 border border-amber-500/30" : "bg-white/5"}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {update.isNew && (
                          <span className="bg-amber-500 text-black text-xs font-bold px-1.5 py-0.5 rounded">NEW</span>
                        )}
                        <span className="text-white text-sm font-medium">{update.title}</span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">{update.summary}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-gray-500 text-xs">{update.date}</span>
                        <span className="text-gray-500 text-xs">{update.source}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {update.relevantTo.map((tag) => (
                          <span key={tag} className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
