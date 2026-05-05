import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Pricing — PlanScope",
  description:
    "Simple pricing for UK planning reports. Free trial, pay per report, or professional monthly plan.",
};

export default function PricingPage() {
  return (
    <>
      <Header />

      <main className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Start free with one branded report. Pay per report or upgrade to
              Professional for unlimited access.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Free */}
            <div className="border border-border rounded-2xl p-8 flex flex-col">
              <h2 className="text-xl font-bold">Free Trial</h2>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">&pound;0</span>
              </div>
              <p className="text-sm text-muted mt-3">
                Try PlanScope with one free AI-generated report.
              </p>

              <ul className="mt-8 space-y-3 text-sm flex-1">
                <Feature text="1 free report" />
                <Feature text="Full guided flow" />
                <Feature text="Photo & document upload" />
                <Feature text="PDF export" />
                <Feature text="PlanScope branding on report" />
                <FeatureNo text="No editing in platform" />
                <FeatureNo text="No saved projects" />
              </ul>

              <Link
                href="/start"
                className="mt-8 block w-full py-3.5 text-center border-2 border-border rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Try Free
              </Link>
            </div>

            {/* Pay per report */}
            <div className="border-2 border-primary rounded-2xl p-8 flex flex-col relative shadow-xl shadow-primary/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                Most Popular
              </div>
              <h2 className="text-xl font-bold">Pay Per Report</h2>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">&pound;50</span>
                <span className="text-muted text-base ml-1">/report</span>
              </div>
              <p className="text-sm text-muted mt-3">
                Generate any report when you need it. No subscription required.
              </p>

              <ul className="mt-8 space-y-3 text-sm flex-1">
                <Feature text="Any report type" />
                <Feature text="Full guided flow" />
                <Feature text="Photo & document upload" />
                <Feature text="Edit in platform" />
                <Feature text="Save & version reports" />
                <Feature text="PDF export" />
                <Feature text="Regenerate sections" />
                <FeatureNo text="PlanScope branding included" />
              </ul>

              <Link
                href="/start"
                className="mt-8 block w-full py-3.5 text-center bg-primary text-white rounded-xl font-semibold hover:bg-primary-hover transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Professional */}
            <div className="border border-border rounded-2xl p-8 flex flex-col">
              <h2 className="text-xl font-bold">Professional</h2>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">&pound;150</span>
                <span className="text-muted text-base ml-1">/month</span>
              </div>
              <p className="text-sm text-muted mt-3">
                For architects, planning agents, and consultants who need
                regular reports.
              </p>

              <ul className="mt-8 space-y-3 text-sm flex-1">
                <Feature text="Unlimited report generation" />
                <Feature text="Full guided flow" />
                <Feature text="Photo & document upload" />
                <Feature text="Edit in platform" />
                <Feature text="Save & version reports" />
                <Feature text="PDF export" />
                <Feature text="Regenerate sections" />
                <Feature text="Remove PlanScope branding" />
                <Feature text="Add your own logo" />
                <Feature text="Priority AI generation" />
                <Feature text="Saved project library" />
              </ul>

              <Link
                href="/start"
                className="mt-8 block w-full py-3.5 text-center border-2 border-border rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Start Professional
              </Link>

              <p className="text-center text-xs text-muted mt-3">
                or &pound;600/year (save &pound;1,200)
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              <FaqItem
                q="What do I get with the free trial?"
                a="One full AI-generated planning report with PlanScope branding. You get the complete guided flow including postcode lookup, photo upload, guided questions, and PDF export."
              />
              <FaqItem
                q="What types of reports can I generate?"
                a="PlanScope covers 66 report types across planning, environmental, transport, energy, heritage, fire safety, landscape, and specialist categories. From simple Planning Statements to complex Environmental Impact Assessments."
              />
              <FaqItem
                q="Are these reports guaranteed to get planning approval?"
                a="No. PlanScope generates AI-assisted draft reports based on your inputs and UK planning policy. Reports should be reviewed before submission. We do not guarantee planning approval or validation. For specialist technical reports, qualified professional input may be required."
              />
              <FaqItem
                q="Can I cancel the Professional plan?"
                a="Yes. Cancel any time. Monthly plans end at the next billing date. Annual plans are non-refundable but you keep access until the end of the year."
              />
              <FaqItem
                q="Do you cover the whole UK?"
                a="Yes. PlanScope covers England, Wales, Scotland and Northern Ireland. Report content references relevant national and local planning policy frameworks."
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <svg
        className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span>{text}</span>
    </li>
  );
}

function FeatureNo({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-muted">
      <svg
        className="w-4 h-4 mt-0.5 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <span>{text}</span>
    </li>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-border rounded-xl">
      <summary className="flex items-center justify-between p-5 cursor-pointer font-medium">
        {q}
        <svg
          className="w-5 h-5 text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
        {a}
      </div>
    </details>
  );
}
