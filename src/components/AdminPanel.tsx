"use client";

import { useState } from "react";
import { ADMIN_STATS, PLANNING_LAW_UPDATES } from "@/data/mock-dashboard";
import { REPORTS } from "@/data/reports";

type AdminTab = "overview" | "users" | "reports" | "laws" | "settings";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const stats = ADMIN_STATS;

  return (
    <main className="min-h-screen bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Admin Panel</h1>
            <p className="text-muted text-sm mt-1">Platform management and analytics</p>
          </div>
          <div className="px-3 py-1.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
            Admin Access
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-white rounded-lg p-1 border border-border overflow-x-auto">
          {(
            [
              { key: "overview", label: "Overview" },
              { key: "users", label: "Users" },
              { key: "reports", label: "Report Types" },
              { key: "laws", label: "Law Updates" },
              { key: "settings", label: "Settings" },
            ] as { key: AdminTab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? "bg-primary text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ════════ OVERVIEW ════════ */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* KPI cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <KpiCard label="Total Users" value={stats.totalUsers.toLocaleString()} />
              <KpiCard label="Active Subscriptions" value={stats.activeSubscriptions.toString()} />
              <KpiCard label="Reports Generated" value={stats.totalReportsGenerated.toLocaleString()} />
              <KpiCard label="Reports This Month" value={stats.reportsThisMonth.toString()} accent />
            </div>

            {/* Revenue */}
            <div className="grid md:grid-cols-3 gap-4">
              <RevenueCard label="Revenue This Month" amount={stats.revenue.thisMonth} />
              <RevenueCard label="Revenue Last Month" amount={stats.revenue.lastMonth} />
              <RevenueCard label="Total Revenue" amount={stats.revenue.total} highlight />
            </div>

            {/* Top reports + Recent users side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Top reports */}
              <div className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-semibold mb-4">Top Generated Reports</h3>
                <div className="space-y-3">
                  {stats.topReports.map((r, i) => (
                    <div key={r.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted w-4">{i + 1}.</span>
                        <span className="text-sm">{r.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${(r.count / stats.topReports[0].count) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted w-8 text-right">{r.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent users */}
              <div className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-semibold mb-4">Recent Users</h3>
                <div className="space-y-3">
                  {stats.recentUsers.map((u) => (
                    <div key={u.email} className="flex items-center justify-between">
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{u.name}</p>
                        <p className="text-xs text-muted truncate">{u.email}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                          u.plan === "professional"
                            ? "bg-primary-light text-primary"
                            : u.plan === "pay-per-report"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-gray-100 text-gray-600"
                        }`}>
                          {u.plan.replace("-", " ")}
                        </span>
                        <span className="text-xs text-muted">{u.reports} reports</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════ USERS ════════ */}
        {activeTab === "users" && (
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold">All Users</h3>
              <input
                type="text"
                placeholder="Search users..."
                className="px-3 py-1.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary w-60"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-card-bg text-left">
                    <th className="px-5 py-3 font-medium text-muted">Name</th>
                    <th className="px-5 py-3 font-medium text-muted">Email</th>
                    <th className="px-5 py-3 font-medium text-muted">Plan</th>
                    <th className="px-5 py-3 font-medium text-muted">Sites</th>
                    <th className="px-5 py-3 font-medium text-muted">Reports</th>
                    <th className="px-5 py-3 font-medium text-muted">Joined</th>
                    <th className="px-5 py-3 font-medium text-muted">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {stats.recentUsers.map((u) => (
                    <tr key={u.email} className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-medium">{u.name}</td>
                      <td className="px-5 py-3 text-muted">{u.email}</td>
                      <td className="px-5 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                          u.plan === "professional"
                            ? "bg-primary-light text-primary"
                            : u.plan === "pay-per-report"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-gray-100 text-gray-600"
                        }`}>
                          {u.plan.replace("-", " ")}
                        </span>
                      </td>
                      <td className="px-5 py-3">{u.sites}</td>
                      <td className="px-5 py-3">{u.reports}</td>
                      <td className="px-5 py-3 text-muted">{u.joined}</td>
                      <td className="px-5 py-3">
                        <button className="text-primary text-xs font-medium hover:underline">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ════════ REPORT TYPES ════════ */}
        {activeTab === "reports" && (
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold">Report Catalogue ({REPORTS.length} types)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-card-bg text-left">
                    <th className="px-5 py-3 font-medium text-muted">ID</th>
                    <th className="px-5 py-3 font-medium text-muted">Name</th>
                    <th className="px-5 py-3 font-medium text-muted">Code</th>
                    <th className="px-5 py-3 font-medium text-muted">Tier</th>
                    <th className="px-5 py-3 font-medium text-muted">Difficulty</th>
                    <th className="px-5 py-3 font-medium text-muted">Credits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {REPORTS.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50">
                      <td className="px-5 py-3 text-muted">{r.id}</td>
                      <td className="px-5 py-3 font-medium">{r.name}</td>
                      <td className="px-5 py-3 font-mono text-muted">{r.code}</td>
                      <td className="px-5 py-3 text-muted">{r.tier}</td>
                      <td className="px-5 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                          r.difficulty === "easy"
                            ? "bg-green-100 text-green-700"
                            : r.difficulty === "medium"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-700"
                        }`}>
                          {r.difficulty}
                        </span>
                      </td>
                      <td className="px-5 py-3">{r.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ════════ LAW UPDATES ════════ */}
        {activeTab === "laws" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Planning Law Updates ({PLANNING_LAW_UPDATES.length})</h3>
              <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                + Add Update
              </button>
            </div>
            {PLANNING_LAW_UPDATES.map((law) => (
              <div key={law.id} className="bg-white rounded-xl border border-border p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {law.isNew && (
                        <span className="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">NEW</span>
                      )}
                      <h4 className="font-semibold text-sm">{law.title}</h4>
                    </div>
                    <p className="text-sm text-muted mt-1">{law.summary}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-muted">{law.date}</span>
                      <span className="text-xs text-muted">{law.source}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {law.relevantTo.map((tag) => (
                        <span key={tag} className="text-xs bg-card-bg text-muted px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button className="text-xs text-primary font-medium hover:underline">Edit</button>
                    <button className="text-xs text-red-500 font-medium hover:underline">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ════════ SETTINGS ════════ */}
        {activeTab === "settings" && (
          <div className="max-w-2xl space-y-6">
            <div className="bg-white rounded-xl border border-border p-6 space-y-4">
              <h3 className="font-semibold">Platform Settings</h3>
              <div className="space-y-4">
                <SettingsField label="Platform Name" value="PlanScope" />
                <SettingsField label="Support Email" value="support@planscope.co.uk" />
                <SettingsField label="Default Credits (Free)" value="1" />
                <SettingsField label="Pay Per Report Price" value="50" prefix="£" />
                <SettingsField label="Professional Monthly" value="150" prefix="£" />
                <SettingsField label="Professional Annual" value="600" prefix="£" />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-6 space-y-4">
              <h3 className="font-semibold">AI Settings</h3>
              <div className="space-y-4">
                <SettingsField label="AI Model" value="Claude Opus 4.6" />
                <SettingsField label="Max Report Length" value="15000" suffix="words" />
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Auto-track Planning Laws</label>
                  <div className="w-10 h-5 bg-primary rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">AI Insights Enabled</label>
                  <div className="w-10 h-5 bg-primary rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-6 space-y-4">
              <h3 className="font-semibold">Disclaimer Text</h3>
              <textarea
                rows={4}
                defaultValue="This document has been generated using structured planning data and AI assistance. It should be reviewed before submission where appropriate. PlanScope does not guarantee planning approval or validation. For specialist technical reports, qualified professional input may be required."
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

/* ─── Sub-components ─── */

function KpiCard({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`bg-white rounded-xl border p-5 ${accent ? "border-primary/30" : "border-border"}`}>
      <p className="text-xs text-muted uppercase tracking-wide">{label}</p>
      <p className={`text-3xl font-bold mt-1 ${accent ? "text-primary" : ""}`}>{value}</p>
    </div>
  );
}

function RevenueCard({ label, amount, highlight }: { label: string; amount: number; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-5 ${highlight ? "bg-accent-light border-accent/30" : "bg-white border-border"}`}>
      <p className="text-xs text-muted uppercase tracking-wide">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${highlight ? "text-accent" : ""}`}>
        &pound;{amount.toLocaleString()}
      </p>
    </div>
  );
}

function SettingsField({ label, value, prefix, suffix }: { label: string; value: string; prefix?: string; suffix?: string }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-1">{label}</label>
      <div className="flex items-center gap-1">
        {prefix && <span className="text-sm text-muted">{prefix}</span>}
        <input
          type="text"
          defaultValue={value}
          className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {suffix && <span className="text-sm text-muted ml-1">{suffix}</span>}
      </div>
    </div>
  );
}
