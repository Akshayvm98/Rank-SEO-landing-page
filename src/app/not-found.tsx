import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "404 | Page Not Found — RankSEO",
  description:
    "The page you're looking for doesn't exist. Explore RankSEO to grow your organic traffic.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

        <div className="relative w-full max-w-[480px] text-center">
          {/* Floating 404 */}
          <div className="animate-hero mb-8">
            <div className="animate-float-slow mx-auto flex items-center justify-center">
              <span className="select-none text-[8rem] font-bold leading-none tracking-[-0.06em] text-border md:text-[10rem]">
                404
              </span>
            </div>
          </div>

          {/* Copy */}
          <h1 className="animate-hero-delay-1 text-[1.75rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            This page couldn&rsquo;t be found
          </h1>
          <p className="animate-hero-delay-2 mx-auto mt-4 max-w-[360px] text-[15px] leading-[1.7] text-muted">
            It may have been moved or no longer exists. Let&rsquo;s help you
            find something useful instead.
          </p>

          {/* CTAs */}
          <div className="animate-hero-delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/"
              className="inline-flex h-11 items-center rounded-xl bg-foreground px-7 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              Go to Home
            </a>
            <a
              href="/seo-guide"
              className="inline-flex h-11 items-center rounded-xl border border-border px-5 text-[13px] font-medium text-foreground transition-all duration-300 hover:border-muted-light hover:bg-white hover:shadow-sm"
            >
              Explore SEO Guide
            </a>
            <a
              href="/pricing"
              className="inline-flex h-11 items-center rounded-xl border border-border px-5 text-[13px] font-medium text-muted transition-all duration-300 hover:border-muted-light hover:bg-white hover:text-foreground hover:shadow-sm"
            >
              View Pricing
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
