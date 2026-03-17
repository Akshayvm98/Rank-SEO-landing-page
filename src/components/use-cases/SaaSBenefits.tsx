const benefits = [
  {
    title: "Build a more repeatable organic acquisition process",
    description: "Stop starting over each quarter. Create a system that compounds.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M21.5 2v6h-6M2.5 22v-6h6" />
        <path d="M2.5 11.5a10 10 0 0 1 16.84-4.43L21.5 8M21.5 12.5a10 10 0 0 1-16.84 4.43L2.5 16" />
      </svg>
    ),
  },
  {
    title: "Reduce time spent deciding what to create next",
    description: "Let keyword data and opportunity scores guide your content calendar.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
  },
  {
    title: "Publish more consistently without messy coordination",
    description: "One workflow from keyword to published article. Fewer handoffs, fewer delays.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Connect SEO work to actual performance signals",
    description: "See which content drives rankings, impressions, and traffic growth.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M3 3v18h18" />
        <path d="m7 16 4-8 4 5 5-7" />
      </svg>
    ),
  },
  {
    title: "Improve content velocity without sacrificing structure",
    description: "Generate, optimize, and publish faster while maintaining SEO quality.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Create a clearer path from keyword opportunity to traffic growth",
    description: "Every piece of content traces back to a real search opportunity with measurable outcomes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </svg>
    ),
  },
];

export function SaaSBenefits() {
  return (
    <section className="bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          Built for teams that want SEO to become a real growth channel
        </h2>

        {/* Asymmetric layout */}
        <div className="mt-14 space-y-5">
          {/* Row 1: 2 larger cards */}
          <div className="reveal reveal-delay-1 grid gap-5 md:grid-cols-2">
            {benefits.slice(0, 2).map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all duration-200 hover:border-border hover:shadow-md md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-bg">
                  {b.icon}
                </div>
                <h3 className="text-[17px] font-semibold leading-snug text-foreground">{b.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-muted">{b.description}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 3 medium cards */}
          <div className="reveal reveal-delay-2 grid gap-5 md:grid-cols-3">
            {benefits.slice(2, 5).map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border-light bg-white p-5 shadow-sm transition-all duration-200 hover:border-border hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-bg">
                  {b.icon}
                </div>
                <h3 className="text-[15px] font-semibold leading-snug text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.65] text-muted">{b.description}</p>
              </div>
            ))}
          </div>

          {/* Row 3: 1 full-width card */}
          <div className="reveal reveal-delay-3">
            <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all duration-200 hover:border-border hover:shadow-md md:p-8">
              <div className="flex flex-col items-center text-center md:flex-row md:text-left md:gap-6">
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-bg md:mb-0">
                  {benefits[5].icon}
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold leading-snug text-foreground">{benefits[5].title}</h3>
                  <p className="mt-1.5 text-[14px] leading-[1.65] text-muted">
                    {benefits[5].description}{" "}
                    <a
                      href="/features"
                      className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-hover"
                    >
                      See how it works
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
