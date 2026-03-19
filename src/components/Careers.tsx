import { Icon, Icons } from "@/components/ui/Icon";

const PRINCIPLES = [
  {
    icon: Icons.target,
    title: "Small team, high ownership",
    description:
      "Everyone shapes the product directly. No layers. No waiting for permission. You own the outcome end to end.",
  },
  {
    icon: Icons.lightbulb,
    title: "Product-first thinking",
    description:
      "We build what users need, not what sounds impressive. Every feature earns its place through real usage.",
  },
  {
    icon: Icons.clock,
    title: "Calm execution",
    description:
      "We move fast but we do not rush. Sustainable pace, clear priorities, and room to think. No burnout culture.",
  },
  {
    icon: Icons.trendingUp,
    title: "Focus on real outcomes",
    description:
      "Traffic, rankings, time saved. We measure what matters and build toward results, not vanity metrics.",
  },
  {
    icon: Icons.star,
    title: "Taste matters",
    description:
      "Details add up. Clean code, clear copy, polished UI. We care about the craft behind the product.",
  },
];

const BUILDING = [
  {
    icon: Icons.sparkles,
    title: "AI-powered content engine",
    description: "Automated keyword research, content generation, and optimization that produces real rankings.",
  },
  {
    icon: Icons.route,
    title: "SEO growth system",
    description: "A connected platform that turns manual SEO checks into a self-improving growth loop.",
  },
  {
    icon: Icons.barChart,
    title: "Analytics feedback loops",
    description: "Real-time performance tracking that surfaces what is working and what needs attention.",
  },
  {
    icon: Icons.zap,
    title: "Publishing workflows",
    description: "From keyword to published, optimized article in a fraction of the time it takes manually.",
  },
];

const FUTURE_AREAS = [
  "Engineering",
  "Product Design",
  "Growth & Content",
  "SEO Systems",
  "Data & Analytics",
];

export function Careers() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative mx-auto max-w-[720px] px-6 text-center">
          <p className="animate-hero inline-block rounded-full bg-accent-bg px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
            Careers
          </p>
          <h1 className="animate-hero-delay-1 mt-5 text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[3rem]">
            Build the future of
            <br />
            SEO automation
          </h1>
          <p className="animate-hero-delay-2 mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.75] text-muted">
            We are building a smarter way for businesses to grow organic traffic.
            Small team, big ambition, and a product that is already helping real
            users rank better.
          </p>
        </div>
      </section>

      {/* ── No openings panel ── */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-[680px] px-6">
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-bg/40 to-white p-8 md:p-10 text-center">
            {/* Subtle glow accent */}
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-bg border border-accent/10">
                <Icon icon={Icons.sparkles} size="lg" className="text-accent" />
              </div>

              <h2 className="mt-5 text-[1.375rem] font-bold text-foreground md:text-[1.5rem]">
                No open roles right now
              </h2>
              <p className="mt-3 mx-auto max-w-[440px] text-[14px] leading-[1.7] text-muted">
                We are a small, focused team building intentionally. There are no
                open positions at the moment, but that will change as the product
                grows.
              </p>
              <p className="mt-4 mx-auto max-w-[440px] text-[14px] leading-[1.7] text-muted">
                If this kind of work excites you, keep an eye on RankSEO.
                New roles will appear here when the time is right.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="/"
                  className="rounded-xl bg-accent px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md"
                >
                  Explore the product
                </a>
                <a
                  href="/about"
                  className="rounded-xl border border-accent/20 bg-white px-6 py-3 text-[13px] font-semibold text-accent transition-colors hover:bg-accent-bg/50"
                >
                  About the company
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[880px] px-6">
          <div className="text-center mb-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
              How we work
            </p>
            <h2 className="mt-3 text-[1.5rem] font-bold text-foreground md:text-[1.75rem]">
              Principles that shape how we build
            </h2>
            <p className="mt-2 mx-auto max-w-[460px] text-[14px] leading-[1.7] text-muted">
              Even without open roles, this is how we think about work.
              If these resonate with you, we might be a good fit someday.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg transition-colors group-hover:bg-accent/10">
                  <Icon icon={p.icon} size="md" className="text-accent" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-muted">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we are building ── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[880px] px-6">
          <div className="text-center mb-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
              What we are building
            </p>
            <h2 className="mt-3 text-[1.5rem] font-bold text-foreground md:text-[1.75rem]">
              A complete SEO automation platform
            </h2>
            <p className="mt-2 mx-auto max-w-[480px] text-[14px] leading-[1.7] text-muted">
              RankSEO connects keyword research, content creation, optimization,
              and performance tracking into one system that grows traffic
              consistently.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {BUILDING.map((b) => (
              <div
                key={b.title}
                className="group flex gap-4 rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-bg transition-colors group-hover:bg-accent/10">
                  <Icon icon={b.icon} size="md" className="text-accent" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-muted">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Future opportunities ── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
            Future opportunities
          </p>
          <h2 className="mt-3 text-[1.5rem] font-bold text-foreground md:text-[1.75rem]">
            Areas we may hire for next
          </h2>
          <p className="mt-2 mx-auto max-w-[440px] text-[14px] leading-[1.7] text-muted">
            No roles are open today, but as RankSEO grows, these are the areas
            where we will likely need talented people.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {FUTURE_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-black/[0.06] bg-white px-5 py-2.5 text-[13px] font-medium text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[680px] px-6">
          <div className="rounded-2xl border border-border-light bg-surface p-8 md:p-10 text-center">
            <h2 className="text-[1.25rem] font-bold text-foreground md:text-[1.375rem]">
              We are not hiring right now, but we are building something meaningful.
            </h2>
            <p className="mt-3 mx-auto max-w-[440px] text-[14px] leading-[1.7] text-muted">
              If the kind of work described on this page excites you, keep an
              eye on RankSEO. When we open roles, this is where they will appear.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/features"
                className="rounded-xl bg-accent px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md"
              >
                See what we are building
              </a>
              <a
                href="/tools"
                className="rounded-xl border border-accent/20 bg-white px-6 py-3 text-[13px] font-semibold text-accent transition-colors hover:bg-accent-bg/50"
              >
                Try our free tools
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
