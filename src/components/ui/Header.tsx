"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import PlanningLawBanner from "./PlanningLawBanner";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createClient();
    let active = true;
    supabase.auth.getUser().then(({ data }) => {
      if (active) setIsAuthed(!!data.user);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthed(!!session?.user);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setMenuOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <>
      <PlanningLawBanner />
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="text-xl font-bold tracking-tight">PlanScope</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/planning-law"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Planning Law
              </Link>
              <Link
                href="/planning-documents"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Planning Documents
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Pricing
              </Link>

              {isAuthed === null ? (
                <span className="w-20 h-8" />
              ) : isAuthed ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/register"
                    className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-border py-4 space-y-3">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-muted hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/planning-law"
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-muted hover:text-foreground"
              >
                Planning Law
              </Link>
              <Link
                href="/planning-documents"
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-muted hover:text-foreground"
              >
                Planning Documents
              </Link>
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-muted hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-muted hover:text-foreground"
              >
                Pricing
              </Link>

              {isAuthed ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="block px-2 py-2 text-sm font-medium text-muted hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block px-2 py-2 text-sm font-medium text-muted hover:text-foreground"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
