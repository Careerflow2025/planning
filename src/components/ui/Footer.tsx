import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs">PS</span>
              </div>
              <span className="font-bold">PlanScope</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              AI-assisted UK planning reports. Simple, fast, professional.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/start"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Generate Report
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Browse Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/planning-documents"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Planning Documents
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted">How It Works</span>
              </li>
              <li>
                <span className="text-sm text-muted">FAQ</span>
              </li>
              <li>
                <span className="text-sm text-muted">Contact</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted">Terms of Service</span>
              </li>
              <li>
                <span className="text-sm text-muted">Privacy Policy</span>
              </li>
              <li>
                <span className="text-sm text-muted">Disclaimer</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} PlanScope. All rights reserved.
          </p>
          <p className="text-xs text-muted text-center">
            PlanScope provides AI-assisted draft reports for planning
            applications. Reports should be reviewed before submission. We do not
            guarantee planning approval.
          </p>
        </div>
      </div>
    </footer>
  );
}
