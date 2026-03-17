"use client";

import { useReveal } from "@/hooks/useReveal";

const features = [
  "Generate up to 30 SEO articles per month",
  "Automatic keyword research (Search Console + Google Ads + SERP)",
  "AI-written articles in your brand voice",
  "Direct publishing (WordPress, Webflow, Framer, Notion)",
  "SEO score + optimization suggestions",
  "Internal linking + metadata generation",
  "AI featured images + 100+ languages",
  "Analytics for rankings, clicks, impressions",
  "Multi-site + team access",
];

const valueGroups = [
  {
    title: "Discover",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    items: ["Keyword opportunities", "SERP analysis", "Competitor insights"],
  },
  {
    title: "Create",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
      </svg>
    ),
    items: ["AI articles in your voice", "SEO optimization", "Internal linking"],
  },
  {
    title: "Grow",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    items: ["Publish to CMS", "Track rankings", "Performance analytics"],
  },
];

const howItWorks = [
  {
    number: "1",
    title: "Connect your site",
    description: "Link your domain and Google Search Console in a few clicks",
  },
  {
    number: "2",
    title: "Set your brand voice",
    description: "Define your tone, add writing samples, and set content guidelines",
  },
  {
    number: "3",
    title: "Start growing",
    description: "Get keyword opportunities and publish your first optimized article",
  },
];

const trustSignals = [
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    text: "No hidden fees",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    text: "Cancel anytime",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    text: "Full feature access",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    text: "Secure payments (Stripe)",
  },
];

export function Pricing() {
  const ref = useReveal();

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* ── Header ── */}
        <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Simple pricing. Real results.
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            One plan. Full access. Cancel anytime.
          </p>
        </div>

        {/* ── Pricing Card ── */}
        <div className="reveal mx-auto max-w-[480px]">
          <div className="relative rounded-2xl border border-accent/20 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(13,148,136,0.12)] md:p-10">
            {/* Plan name + price */}
            <div className="text-center">
              <h3 className="text-[18px] font-semibold text-foreground">Starter</h3>
              <div className="mt-4 flex items-baseline justify-center gap-1.5">
                <span className="text-[3rem] font-bold tracking-tight text-foreground">$69</span>
                <span className="text-[15px] text-muted">/ month</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-border-light" />

            {/* Features */}
            <ul className="space-y-3.5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] leading-snug text-foreground/80">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="mt-8 flex h-12 items-center justify-center rounded-lg bg-foreground text-[15px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
            >
              Get Started
            </a>

            <p className="mt-3 text-center text-[13px] text-muted-light">
              $69/month. Cancel anytime.
            </p>
          </div>
        </div>

        {/* ── Value Breakdown ── */}
        <div className="mt-24 md:mt-28">
          <h3 className="reveal mb-12 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[1.75rem]">
            Everything you need to grow organic traffic
          </h3>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {valueGroups.map((group, i) => (
              <div key={group.title} className={`reveal reveal-delay-${i + 1}`}>
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-accent">
                    {group.icon}
                  </div>
                  <h4 className="text-[16px] font-semibold text-foreground">{group.title}</h4>
                </div>
                <ul className="space-y-2.5 pl-[46px]">
                  {group.items.map((item) => (
                    <li key={item} className="text-[14px] leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── How It Works ── */}
        <div className="mt-24 md:mt-28">
          <h3 className="reveal mb-12 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[1.75rem]">
            How it works
          </h3>

          <div className="reveal reveal-delay-1 relative grid gap-8 md:grid-cols-3 md:gap-6">
            {/* Connecting line (desktop) */}
            <div className="pointer-events-none absolute top-6 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] hidden h-px bg-border md:block" />

            {howItWorks.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-white text-[16px] font-bold text-accent">
                  {step.number}
                </div>
                <h4 className="mb-1.5 text-[15px] font-semibold text-foreground">
                  {step.title}
                </h4>
                <p className="mx-auto max-w-[240px] text-[13px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Block ── */}
        <div className="mt-24 md:mt-28">
          <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-light/10" />

            <div className="relative">
              <h3 className="mx-auto max-w-[500px] text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[2.25rem]">
                Start your first article in minutes
              </h3>
              <p className="mx-auto mt-4 max-w-[400px] text-[15px] leading-relaxed text-white/60">
                No setup friction. No SEO expertise needed.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex h-12 items-center rounded-lg bg-white px-8 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
              >
                Get Started
              </a>
              <p className="mt-4 text-[13px] text-white/40">
                Cancel anytime. No commitments.
              </p>
            </div>
          </div>
        </div>

        {/* ── Trust Signals ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustSignals.map((signal) => (
            <div key={signal.text} className="flex items-center gap-2 text-[13px] text-muted-light">
              <span className="text-muted-light">{signal.icon}</span>
              {signal.text}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[13px] text-muted-light/70">
          Used by growing teams and founders.
        </p>
      </div>
    </section>
  );
}
