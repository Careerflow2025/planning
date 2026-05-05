"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getReviewRequestById, PROFESSIONALS } from "@/data/professionals";
import { REPORTS } from "@/data/reports";

export default function ReviewPortalPage() {
  const params = useParams();
  const requestId = params.requestId as string;
  const review = getReviewRequestById(requestId);

  const [fullName, setFullName] = useState("");
  const [hasReviewed, setHasReviewed] = useState(false);
  const [confirmDeclaration, setConfirmDeclaration] = useState(false);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [action, setAction] = useState<"sign-off" | "changes">("sign-off");

  if (!review) {
    return (
      <div className="min-h-screen bg-card-bg flex items-center justify-center">
        <div className="bg-white rounded-2xl border border-border p-8 max-w-md w-full text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">Review Not Found</h1>
          <p className="text-muted text-sm">This review link may have expired or is invalid. Please contact the person who sent you this link.</p>
          <Link href="/" className="text-primary text-sm font-medium hover:underline">
            Go to PlanScope
          </Link>
        </div>
      </div>
    );
  }

  const professional = PROFESSIONALS.find((p) => p.id === review.professionalId);
  const reportData = REPORTS.find((r) => r.id === review.reportId);

  if (submitted) {
    return (
      <div className="min-h-screen bg-card-bg">
        <ReviewHeader />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl border border-border p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {action === "sign-off" ? (
              <>
                <h1 className="text-xl font-bold">Report Signed Off</h1>
                <p className="text-muted text-sm">
                  Thank you, {fullName}. Your professional sign-off has been recorded for the {review.reportName} at {review.siteAddress}.
                </p>
                <p className="text-xs text-muted">
                  The report owner will be notified and the signed-off report will include your credentials.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-xl font-bold">Changes Requested</h1>
                <p className="text-muted text-sm">
                  Your feedback has been sent to the report owner. They will revise the {review.reportName} and may re-submit for your review.
                </p>
              </>
            )}
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted">
                This review was conducted via PlanScope Professional Review Portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isAlreadySignedOff = review.status === "signed-off";

  return (
    <div className="min-h-screen bg-card-bg">
      <ReviewHeader />

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Status banner for already-completed reviews */}
        {isAlreadySignedOff && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
            <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm font-medium text-emerald-800">This report has been signed off</p>
              <p className="text-xs text-emerald-700">
                Signed by {review.signedOffBy} on {review.signedOffAt}
              </p>
            </div>
          </div>
        )}

        {/* Report details */}
        <div className="bg-white rounded-2xl border border-border p-6 space-y-4">
          <h2 className="font-semibold text-lg">Report Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted uppercase tracking-wide">Report Type</p>
              <p className="text-sm font-medium mt-0.5">{review.reportName}</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wide">Report Code</p>
              <p className="text-sm font-medium mt-0.5">{reportData?.code || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wide">Site Address</p>
              <p className="text-sm mt-0.5">{review.siteAddress}</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wide">Request Date</p>
              <p className="text-sm mt-0.5">{review.sentAt || review.createdAt}</p>
            </div>
          </div>

          {review.userMessage && (
            <div className="bg-card-bg rounded-xl p-4">
              <p className="text-xs text-muted uppercase tracking-wide mb-1">Message from applicant</p>
              <p className="text-sm">{review.userMessage}</p>
            </div>
          )}

          {reportData?.professional.legislation && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-start gap-2">
              <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-xs font-medium text-blue-800">Legal requirement</p>
                <p className="text-xs text-blue-700 mt-0.5">{reportData.professional.legislation}</p>
              </div>
            </div>
          )}
        </div>

        {/* AI Report download */}
        <div className="bg-white rounded-2xl border border-border p-6">
          <h2 className="font-semibold text-lg mb-3">AI-Generated Report</h2>
          <div className="bg-card-bg rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">{review.reportName}.pdf</p>
                <p className="text-xs text-muted">AI-generated draft — review required</p>
              </div>
            </div>
            <button className="text-sm text-primary font-medium hover:underline">
              Download
            </button>
          </div>
        </div>

        {/* Sign-off form (only show if not already signed off) */}
        {!isAlreadySignedOff && (
          <div className="bg-white rounded-2xl border border-border p-6 space-y-5">
            <h2 className="font-semibold text-lg">Professional Declaration</h2>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm leading-relaxed">
                I, <strong>{fullName || "[your name]"}</strong>, confirm that I have reviewed the{" "}
                <strong>{review.reportName}</strong> for{" "}
                <strong>{review.siteAddress}</strong>, that it accurately reflects my professional assessment, and that I take professional responsibility for its contents.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Full name and qualifications</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={professional ? `e.g. ${professional.name} ${professional.qualifications[0]}` : "e.g. Dr Sarah Whitfield MCIEEM"}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasReviewed}
                  onChange={(e) => setHasReviewed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm">I have read and reviewed the full report</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmDeclaration}
                  onChange={(e) => setConfirmDeclaration(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm">I confirm the above declaration and take professional responsibility</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Notes or corrections <span className="text-muted font-normal">(optional)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any corrections, observations, or notes for the applicant..."
                className="w-full border border-border rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setAction("sign-off");
                  setSubmitted(true);
                }}
                disabled={!fullName.trim() || !hasReviewed || !confirmDeclaration}
                className="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Sign Off Report
              </button>
              <button
                onClick={() => {
                  setAction("changes");
                  setSubmitted(true);
                }}
                disabled={!fullName.trim() || !notes.trim()}
                className="py-3 px-6 border border-amber-300 text-amber-700 bg-amber-50 rounded-xl font-medium hover:bg-amber-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Request Changes
              </button>
            </div>
          </div>
        )}

        {/* Professional comments (for signed-off reviews) */}
        {isAlreadySignedOff && review.professionalComments && (
          <div className="bg-white rounded-2xl border border-border p-6">
            <h2 className="font-semibold text-lg mb-3">Professional Comments</h2>
            <p className="text-sm text-muted">{review.professionalComments}</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-muted">
            PlanScope Professional Review Portal &middot; This page is securely accessible via unique link only.
          </p>
        </div>
      </div>
    </div>
  );
}

function ReviewHeader() {
  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Plan<span className="text-primary">Scope</span>
          </Link>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
            Professional Review Portal
          </span>
        </div>
      </div>
    </header>
  );
}
