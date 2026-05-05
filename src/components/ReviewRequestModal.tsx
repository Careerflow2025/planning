"use client";

import { useState } from "react";
import Link from "next/link";
import { REPORTS } from "@/data/reports";
import { getProfessionalsForReport } from "@/data/professionals";
import type { Professional } from "@/data/professionals";
import type { ApplicationReport } from "@/data/mock-dashboard";

interface Props {
  report: ApplicationReport;
  applicationId: string;
  siteAddress: string;
  onClose: () => void;
  onSend: () => void;
}

type ModalStep = "confirm" | "select" | "send";

export default function ReviewRequestModal({ report, applicationId, siteAddress, onClose, onSend }: Props) {
  const [step, setStep] = useState<ModalStep>("confirm");
  const [selectedPro, setSelectedPro] = useState<Professional | null>(null);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const reportData = REPORTS.find((r) => r.id === report.reportId);
  const professionals = getProfessionalsForReport(report.reportId);

  if (!reportData) return null;

  const handleSend = () => {
    setSent(true);
    setTimeout(() => {
      onSend();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-lg h-full bg-white shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="font-semibold text-lg">Request Professional Review</h2>
            <p className="text-xs text-muted mt-0.5">
              {step === "confirm" && "Step 1 of 3 — Confirm report"}
              {step === "select" && "Step 2 of 3 — Select professional"}
              {step === "send" && "Step 3 of 3 — Send request"}
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Step progress */}
        <div className="px-6 pt-4">
          <div className="flex gap-1">
            {["confirm", "select", "send"].map((s, i) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full ${
                  (step === "confirm" && i === 0) ||
                  (step === "select" && i <= 1) ||
                  (step === "send" && i <= 2)
                    ? "bg-primary"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="px-6 py-6">
          {/* ── STEP 1: Confirm ── */}
          {step === "confirm" && (
            <div className="space-y-6">
              <div className="bg-card-bg rounded-xl p-4 space-y-3">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide">Report</p>
                  <p className="font-medium">{report.reportName}</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide">Site</p>
                  <p className="text-sm">{siteAddress}</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide">Professional type needed</p>
                  <p className="text-sm font-medium">{reportData.professional.professionalType}</p>
                </div>
              </div>

              <div className={`border rounded-xl p-4 ${
                reportData.professional.level === "required"
                  ? "border-red-200 bg-red-50"
                  : "border-amber-200 bg-amber-50"
              }`}>
                <div className="flex items-start gap-2">
                  <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    reportData.professional.level === "required" ? "text-red-600" : "text-amber-600"
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className={`text-sm font-medium ${
                      reportData.professional.level === "required" ? "text-red-800" : "text-amber-800"
                    }`}>
                      {reportData.professional.level === "required"
                        ? "Professional sign-off legally required"
                        : "Professional review recommended"}
                    </p>
                    <p className={`text-xs mt-1 ${
                      reportData.professional.level === "required" ? "text-red-700" : "text-amber-700"
                    }`}>
                      {reportData.professional.reason}
                    </p>
                    {reportData.professional.legislation && (
                      <p className={`text-xs mt-1 font-medium ${
                        reportData.professional.level === "required" ? "text-red-600" : "text-amber-600"
                      }`}>
                        {reportData.professional.legislation}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted">
                Your AI-generated report will be sent to the professional for review. They will check accuracy, make corrections if needed, and provide their professional sign-off.
              </p>

              <button
                onClick={() => setStep("select")}
                className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-hover transition-colors"
              >
                Select a Professional
              </button>
            </div>
          )}

          {/* ── STEP 2: Select Professional ── */}
          {step === "select" && (
            <div className="space-y-4">
              <p className="text-sm text-muted">
                {professionals.length} professional{professionals.length !== 1 ? "s" : ""} available for {reportData.professional.professionalType} reviews.
              </p>

              <div className="space-y-3">
                {professionals.map((pro) => (
                  <button
                    key={pro.id}
                    onClick={() => {
                      setSelectedPro(pro);
                      setStep("send");
                    }}
                    className={`w-full text-left border-2 rounded-xl p-4 transition-colors hover:border-primary/50 ${
                      selectedPro?.id === pro.id ? "border-primary bg-primary-light" : "border-border"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center flex-shrink-0">
                        {pro.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{pro.name}</span>
                          {pro.availability === "available" && (
                            <span className="w-2 h-2 rounded-full bg-green-500" title="Available" />
                          )}
                          {pro.availability === "busy" && (
                            <span className="w-2 h-2 rounded-full bg-amber-500" title="Busy" />
                          )}
                        </div>
                        <p className="text-xs text-muted">{pro.title} &middot; {pro.firm}</p>
                        <p className="text-xs text-muted mt-0.5">{pro.location}</p>

                        <div className="flex flex-wrap gap-1 mt-2">
                          {pro.qualifications.slice(0, 3).map((q) => (
                            <span key={q} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                              {q}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 mt-2 text-xs text-muted">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {pro.rating} ({pro.reviewCount})
                          </span>
                          <span>~{pro.averageReviewDays} day turnaround</span>
                          <span>&pound;{pro.priceRange.min}–{pro.priceRange.max}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <Link
                href="/professionals"
                className="text-sm text-primary font-medium hover:underline block text-center"
              >
                Browse all professionals
              </Link>

              <button
                onClick={() => setStep("confirm")}
                className="w-full py-3 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            </div>
          )}

          {/* ── STEP 3: Send ── */}
          {step === "send" && selectedPro && !sent && (
            <div className="space-y-6">
              <div className="bg-card-bg rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center flex-shrink-0">
                    {selectedPro.initials}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{selectedPro.name}</p>
                    <p className="text-xs text-muted">{selectedPro.title} &middot; {selectedPro.firm}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card-bg rounded-xl p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Report</span>
                  <span className="font-medium">{report.reportName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Site</span>
                  <span className="text-right">{siteAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Est. turnaround</span>
                  <span>~{selectedPro.averageReviewDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Est. cost</span>
                  <span>&pound;{selectedPro.priceRange.min}–{selectedPro.priceRange.max}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Message to professional <span className="text-muted font-normal">(optional)</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any specific areas you'd like them to focus on..."
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  rows={3}
                />
              </div>

              <button
                onClick={handleSend}
                className="w-full py-3 bg-accent text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                Send Review Request
              </button>

              <button
                onClick={() => setStep("select")}
                className="w-full py-3 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            </div>
          )}

          {/* ── Sent confirmation ── */}
          {sent && selectedPro && (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Review Request Sent</h3>
              <p className="text-sm text-muted">
                Your {report.reportName} has been sent to {selectedPro.name} for review. Expected turnaround: ~{selectedPro.averageReviewDays} days.
              </p>
              <p className="text-xs text-muted">
                You can track the status in your Reviews tab.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
