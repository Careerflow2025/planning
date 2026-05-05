import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HomeActionBox from "@/components/HomeActionBox";

export default function Home() {
  return (
    <>
      <Header />

      {/* ── Hero with Action Box ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-accent-light opacity-60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Planning reports
              <br />
              <span className="text-primary">in minutes, not weeks</span>
            </h1>
            <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
              Enter your postcode, upload a photo or your planning documents
              — and get a professional AI-drafted report.
            </p>
          </div>

          {/* The main action box */}
          <HomeActionBox />
        </div>
      </section>

      {/* ── Planning Reports ── */}
      <section className="py-16 md:py-24 bg-card-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Planning Reports
            </h2>
            <p className="text-muted mt-3 text-lg">
              From planning statements to specialist assessments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { tier: "Core Planning", examples: "Planning Statement, Design & Access, Heritage", count: 5 },
              { tier: "Environmental", examples: "Ecology, Noise, Air Quality, Contamination", count: 11 },
              { tier: "Flood & Drainage", examples: "Flood Risk, Drainage Strategy, Sewage", count: 6 },
              { tier: "Transport", examples: "Transport Assessment, Travel Plan, Parking Survey", count: 5 },
              { tier: "Energy & Sustainability", examples: "Energy Statement, BREEAM, Carbon Assessment", count: 6 },
              { tier: "Heritage & Archaeology", examples: "Archaeological, Historic Building, Townscape", count: 4 },
              { tier: "Fire & Structural", examples: "Fire Statement, Structural Survey, Basement", count: 5 },
              { tier: "Landscape & Visual", examples: "LVIA, Landscape Strategy, Green Infrastructure", count: 3 },
              { tier: "Specialist", examples: "Construction Management, Waste, Lighting, Health", count: 13 },
            ].map((cat) => (
              <div
                key={cat.tier}
                className="bg-white rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{cat.tier}</h3>
                  <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full font-medium">
                    {cat.count} reports
                  </span>
                </div>
                <p className="text-sm text-muted">{cat.examples}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/reports" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Browse all reports
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pricing preview ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Simple pricing</h2>
            <p className="text-muted mt-3 text-lg">Try free. Pay per report or go professional.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-border rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-lg">Free Trial</h3>
              <div className="text-3xl font-extrabold">&pound;0</div>
              <p className="text-sm text-muted">One free branded report to try the platform.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckIcon /> 1 free report</li>
                <li className="flex items-center gap-2"><CheckIcon /> PDF export</li>
              </ul>
              <Link href="/start" className="block w-full py-3 text-center border-2 border-border rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors">
                Try Free
              </Link>
            </div>

            <div className="border-2 border-primary rounded-2xl p-6 space-y-4 relative shadow-lg shadow-primary/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-white text-xs font-semibold rounded-full">Popular</div>
              <h3 className="font-bold text-lg">Pay Per Report</h3>
              <div className="text-3xl font-extrabold">&pound;50<span className="text-base font-normal text-muted">/report</span></div>
              <p className="text-sm text-muted">Generate any report on demand.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckIcon /> Any report type</li>
                <li className="flex items-center gap-2"><CheckIcon /> Edit in platform</li>
                <li className="flex items-center gap-2"><CheckIcon /> PDF export</li>
              </ul>
              <Link href="/start" className="block w-full py-3 text-center bg-primary text-white rounded-xl font-semibold hover:bg-primary-hover transition-colors">
                Get Started
              </Link>
            </div>

            <div className="border border-border rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-lg">Professional</h3>
              <div className="text-3xl font-extrabold">&pound;150<span className="text-base font-normal text-muted">/month</span></div>
              <p className="text-sm text-muted">For architects, agents and consultants.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckIcon /> Unlimited reports</li>
                <li className="flex items-center gap-2"><CheckIcon /> Remove branding</li>
                <li className="flex items-center gap-2"><CheckIcon /> Add your logo</li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 text-center border-2 border-border rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to generate your planning report?
          </h2>
          <p className="text-primary-light text-lg">
            Enter your postcode and get started in seconds.
          </p>
          <Link href="/start" className="inline-block px-10 py-4 bg-white text-primary text-lg font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
            Start Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
