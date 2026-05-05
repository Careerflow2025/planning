import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HomeActionBox from "@/components/HomeActionBox";

const REPORT_LIST = [
  { cat: "Core Planning", items: ["Planning Statement", "Design & Access Statement", "Heritage Statement", "Statement of Community Involvement", "Covering Letter"] },
  { cat: "Environmental", items: ["Ecological Impact Assessment", "Noise Impact Assessment", "Air Quality Assessment", "Contaminated Land Assessment", "Environmental Impact Assessment", "Arboricultural Impact Assessment", "Biodiversity Net Gain", "Odour Assessment", "Vibration Assessment", "Dust Management Plan", "Daylight & Sunlight Assessment"] },
  { cat: "Flood & Drainage", items: ["Flood Risk Assessment", "Drainage Strategy", "SuDS Strategy", "Foul Sewage Assessment", "Water Framework Directive", "Hydrology Report"] },
  { cat: "Transport", items: ["Transport Assessment", "Travel Plan", "Parking Survey", "Delivery & Servicing Plan", "Road Safety Audit"] },
  { cat: "Energy & Sustainability", items: ["Energy Statement", "Sustainability Statement", "BREEAM Pre-Assessment", "Overheating Assessment", "Whole Life Carbon Assessment", "Circular Economy Statement"] },
  { cat: "Heritage & Archaeology", items: ["Archaeological Desk-Based Assessment", "Historic Building Recording", "Conservation Management Plan", "Townscape & Visual Impact"] },
  { cat: "Fire & Structural", items: ["Fire Statement", "Fire Strategy Report", "Structural Survey", "Basement Impact Assessment", "Party Wall Assessment"] },
  { cat: "Landscape & Visual", items: ["LVIA", "Landscape Strategy", "Green Infrastructure Plan"] },
  { cat: "Specialist", items: ["Construction Management Plan", "Waste Management Strategy", "Lighting Assessment", "Health Impact Assessment", "Ventilation & Extraction", "Telecommunications Statement", "Retail Impact Assessment", "Agricultural Land Classification", "Equalities Impact Assessment", "Wind & Microclimate", "Economic Statement", "Land Stability Report", "Aviation Safeguarding"] },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ── Hero — split layout ── */}
      <section className="relative overflow-hidden min-h-[calc(100vh-64px)]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        {/* Gradient overlay — heavier on title area, lighter elsewhere so buildings show */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/50" />
        {/* Extra fade just on the left title area for readability */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 pt-8 pb-16 md:pt-12 md:pb-20">

            {/* ── LEFT — Title + Subtitle + Action Box ── */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                UK Planning reports
                <br />
                <span className="text-primary">in minutes, not weeks</span>
              </h1>

              <p className="text-base md:text-lg font-semibold text-gray-700">
                Enter your postcode, upload a photo or your planning documents.
              </p>

              {/* Action box — full width within left column */}
              <HomeActionBox />
            </div>

            {/* ── RIGHT — Report showcase ── */}
            <div className="hidden md:flex flex-col">
              {/* Spacer to align with "UK Planning reports" title */}
              <div className="pt-3" />
              {/* Heading */}
              <div className="mb-4">
                <h2 className="text-xl lg:text-2xl font-extrabold text-gray-900">Any Report for Any Development</h2>
                <p className="text-sm font-semibold text-gray-600 mt-0.5">66 reports available · Fully compliant UK legislation</p>
              </div>

              {/* Report product grid — 4 per row, blue + black only */}
              <div className="grid grid-cols-4 gap-2.5 flex-1">
                {[
                  "Flood Risk Assessment",
                  "Bat Survey",
                  "Tree Survey",
                  "Planning Statement",
                  "Design & Access",
                  "Ecological Appraisal",
                  "Heritage Statement",
                  "Noise Assessment",
                  "Biodiversity Net Gain",
                  "Drainage Strategy",
                  "Transport Assessment",
                  "Contaminated Land",
                  "Air Quality",
                  "Daylight & Sunlight",
                  "Energy Statement",
                  "Construction Plan",
                ].map((name) => (
                  <Link
                    key={name}
                    href={`/example/${name.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")}`}
                    className="group relative bg-white rounded-xl border border-gray-200 p-2.5 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all cursor-pointer"
                  >
                    {/* Hover overlay — "View Example" */}
                    <div className="absolute inset-0 bg-primary/90 rounded-xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <svg className="w-5 h-5 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-[9px] font-bold text-white tracking-wide uppercase">View Example</span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-2 mb-2">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-4 h-4 rounded bg-primary flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-primary/10 ml-auto" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="h-[3px] bg-primary/15 rounded-full w-full" />
                        <div className="h-[3px] bg-primary/10 rounded-full w-3/4" />
                        <div className="h-[3px] bg-primary/8 rounded-full w-5/6" />
                      </div>
                    </div>
                    <p className="text-[10px] font-semibold text-gray-900 leading-tight line-clamp-2">{name}</p>
                  </Link>
                ))}
              </div>

              {/* Browse all link */}
              <div className="mt-4 flex items-center justify-end">
                <Link
                  href="/planning-documents"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  View all
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile-only report categories (hidden on desktop since shown in hero) ── */}
      <section className="py-12 bg-card-bg md:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6">Planning Reports</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {REPORT_LIST.map((group) => (
              <div
                key={group.cat}
                className="bg-white rounded-xl p-4 border border-border"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-semibold text-sm">{group.cat}</h3>
                  <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full font-medium">
                    {group.items.length}
                  </span>
                </div>
                <p className="text-xs text-muted">{group.items.slice(0, 3).join(", ")}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/reports" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
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

