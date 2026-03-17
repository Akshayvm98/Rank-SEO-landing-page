"use client";

import { useState } from "react";
/* ────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */

const planFeatures = [
  "Generate up to 30 SEO articles per month",
  "Automatic keyword research (Search Console + Google Ads + SERP)",
  "AI articles in your brand voice",
  "SEO optimization and scoring",
  "Internal linking + metadata generation",
  "Direct publishing (WordPress, Webflow, Framer, Notion)",
  "AI featured images + 100+ languages",
  "Performance analytics (rankings, clicks, impressions)",
  "Multi-site + team support",
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
    items: ["AI content in your voice", "SEO optimization", "Internal linking"],
  },
  {
    title: "Grow",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    items: ["Publish to CMS", "Track performance", "Improve over time"],
  },
];

const trialSteps = [
  {
    number: "1",
    title: "Start your trial",
    description: "Sign up and add payment details",
  },
  {
    number: "2",
    title: "Set up your site",
    description: "Connect Search Console and define your brand",
  },
  {
    number: "3",
    title: "Start generating content",
    description: "Get your strategy and publish your first article",
  },
];

const billingFaqs = [
  {
    question: "When will I be charged?",
    answer:
      "You pay $1 today. After 3 days, the subscription renews at $69/month.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel before the trial ends and you won't be charged.",
  },
  {
    question: "What happens if I cancel during the trial?",
    answer:
      "Your trial ends immediately and you won't be billed further.",
  },
  {
    question: "Do I get full access during the trial?",
    answer:
      "Yes. You can use all features including article generation and publishing.",
  },
  {
    question: "What happens after I cancel a subscription?",
    answer:
      "You keep access until the billing period ends. After that, your account becomes limited.",
  },
];

/* ────────────────────────────────────────────
   Page
   ──────────────────────────────────────────── */

export function PricingPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* ── 1. Hero ── */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <h1 className="reveal text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[3rem]">
            Simple pricing.{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Real growth.
            </span>
          </h1>
          <p className="reveal reveal-delay-1 mt-4 text-[17px] leading-[1.65] text-muted">
            Start with a $1 trial. Full access. Cancel anytime.
          </p>
          <p className="reveal reveal-delay-2 mt-3 text-[13px] text-muted-light">
            No hidden fees. No long-term commitment.
          </p>
        </div>
      </section>

      {/* ── 2. Pricing Card ── */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[500px] px-6">
          <div className="reveal relative rounded-2xl border border-accent/20 bg-white p-8 shadow-[0_8px_48px_-12px_rgba(13,148,136,0.14)] md:p-10">
            {/* Trial badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-accent px-4 py-1.5 text-[13px] font-semibold text-white shadow-sm">
                $1 for 3 days
              </span>
            </div>

            {/* Plan + price */}
            <div className="mt-3 text-center">
              <h2 className="text-[18px] font-semibold text-foreground">Starter</h2>
              <div className="mt-4 flex items-baseline justify-center gap-1.5">
                <span className="text-[3.25rem] font-bold tracking-tight text-foreground">$69</span>
                <span className="text-[15px] text-muted">/ month</span>
              </div>
            </div>

            <div className="my-7 h-px bg-border-light" />

            {/* Features */}
            <ul className="space-y-3.5">
              {planFeatures.map((f) => (
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
              Start $1 Trial
            </a>

            <p className="mt-3 text-center text-[13px] text-muted-light">
              Try for $1 for 3 days. Then $69/month. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Value Breakdown ── */}
      <section className="border-t border-border-light bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="reveal mb-14 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[1.875rem]">
            Everything you need to grow organic traffic
          </h2>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {valueGroups.map((group, i) => (
              <div key={group.title} className={`reveal reveal-delay-${i + 1}`}>
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-accent">
                    {group.icon}
                  </div>
                  <h3 className="text-[16px] font-semibold text-foreground">{group.title}</h3>
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
      </section>

      {/* ── 4. Trial Explanation ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="reveal mb-14 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[1.875rem]">
            How the $1 trial works
          </h2>

          <div className="reveal reveal-delay-1 relative grid gap-8 md:grid-cols-3 md:gap-6">
            {/* Connecting line (desktop) */}
            <div className="pointer-events-none absolute top-6 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] hidden h-px bg-border md:block" />

            {trialSteps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-white text-[16px] font-bold text-accent">
                  {step.number}
                </div>
                <h3 className="mb-1.5 text-[15px] font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-[240px] text-[13px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-2 mx-auto mt-12 max-w-[480px] rounded-xl border border-border-light bg-white px-6 py-5 text-center">
            <p className="text-[14px] leading-[1.7] text-muted">
              You&apos;re charged <span className="font-medium text-foreground">$1 today</span> for a 3-day trial.
              After that, the plan renews at <span className="font-medium text-foreground">$69/month</span> unless canceled.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
        <div className="mx-auto max-w-[720px] px-6">
          <h2 className="reveal mb-12 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[1.875rem]">
            Questions about pricing
          </h2>

          <div className="reveal reveal-delay-1 space-y-2">
            {billingFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Final CTA ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-light/10" />

            <div className="relative">
              <h2 className="mx-auto max-w-[500px] text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[2.25rem]">
                Start your first article in minutes
              </h2>
              <p className="mx-auto mt-4 max-w-[400px] text-[15px] leading-relaxed text-white/60">
                No SEO expertise needed. Just connect your site and begin.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex h-12 items-center rounded-lg bg-white px-8 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
              >
                Start $1 Trial
              </a>
              <p className="mt-4 text-[13px] text-white/40">
                Cancel anytime. No commitment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────────────────────────────────────
   FAQ Accordion Item
   ──────────────────────────────────────────── */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border-light bg-white transition-colors hover:border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-foreground">{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-[14px] leading-[1.7] text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}
