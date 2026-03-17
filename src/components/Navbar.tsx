"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const useCases = [
  { label: "Founders", desc: "Grow traffic without hiring an SEO team", href: "/use-cases/founders" },
  { label: "Content Marketers", desc: "Scale content without manual workflows", href: "/use-cases/content-marketers" },
  { label: "SEO Professionals", desc: "Automate execution, keep control", href: "/use-cases/seo-professionals" },
  { label: "Agencies", desc: "Manage SEO across multiple clients", href: "/use-cases/agencies" },
  { label: "Bloggers", desc: "Stop guessing what to write", href: "/use-cases/bloggers" },
  { label: "SaaS Teams", desc: "Build a predictable growth engine", href: "/use-cases/saas" },
];

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Use Cases", href: "#", dropdown: true },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout>>(null);
  const canHover = useRef(false);

  useEffect(() => {
    canHover.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const openDropdown = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light">
            <span className="text-[16px] font-bold leading-none text-white">R</span>
          </div>
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-foreground">
            Rank SEO
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => canHover.current && openDropdown()}
                onMouseLeave={() => canHover.current && closeDropdown()}
                onFocusCapture={openDropdown}
                onBlurCapture={(e) => {
                  if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
                    setDropdownOpen(false);
                  }
                }}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-[14px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Mega menu — outer wrapper with invisible hover bridge */}
                <div
                  className={`absolute left-1/2 top-full z-50 w-[480px] -translate-x-1/2 pt-3 transition-all duration-200 origin-top ${
                    dropdownOpen
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-[0.97] -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="rounded-2xl border border-border-light bg-white p-2 shadow-xl shadow-black/[0.06]">
                  <div className="grid grid-cols-2 gap-0.5">
                    {useCases.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="group rounded-xl px-4 py-3.5 transition-colors duration-150 hover:bg-border-light/60"
                      >
                        <span className="block text-[14px] font-semibold text-foreground">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-[13px] leading-[1.5] text-muted-light transition-colors duration-150 group-hover:text-muted">
                          {item.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-1 border-t border-border-light pt-1">
                    <a
                      href="/use-cases"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-medium text-muted transition-colors duration-150 hover:bg-border-light/60 hover:text-foreground"
                    >
                      View all use cases
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/pricing"
            className="rounded-lg bg-foreground px-4 py-2 text-[14px] font-medium text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-md"
          >
            Start $1 Trial
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-border-light md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4L14 14M14 4L4 14" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 5H16M2 9H16M2 13H16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium text-muted transition-colors hover:bg-border-light hover:text-foreground"
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${mobileUseCasesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {mobileUseCasesOpen && (
                    <div className="ml-1 mt-1 space-y-0.5 border-l border-border-light pl-3">
                      {useCases.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileUseCasesOpen(false);
                          }}
                          className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-border-light"
                        >
                          <span className="block text-[14px] font-medium text-foreground">
                            {item.label}
                          </span>
                          <span className="block text-[12px] leading-[1.5] text-muted-light">
                            {item.desc}
                          </span>
                        </a>
                      ))}
                      <a
                        href="/use-cases"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileUseCasesOpen(false);
                        }}
                        className="flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium text-muted transition-colors hover:text-foreground"
                      >
                        View all use cases
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-muted transition-colors hover:bg-border-light hover:text-foreground"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-foreground px-3 py-2.5 text-center text-[15px] font-medium text-white"
            >
              Start $1 Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
