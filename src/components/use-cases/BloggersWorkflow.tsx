const steps = [
  {
    number: "01",
    title: "Find blog topics with potential",
    description: "Use keyword and search data to uncover topics worth targeting.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build a realistic content plan",
    description: "Prioritize ideas you can actually publish and rank for.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 7h8M8 12h6M8 17h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Generate optimized drafts",
    description: "Create articles with structure, headings, and SEO support already in place.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Improve before you publish",
    description: "Review your SEO score, internal links, and metadata.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09z" />
        <path d="M18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 0 0 2.456-2.456z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Publish and keep going",
    description: (
      <span>
        Send posts to your CMS and build momentum over time. See all{" "}
        <a href="/integrations" className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-hover">
          integrations
        </a>
        .
      </span>
    ),
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M12 3v12M7.5 10.5 12 6l4.5 4.5" />
        <path d="M4 16v2.5a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5V16" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "See what performs",
    description: "Track impressions, clicks, rankings, and article performance.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M3 3v18h18" />
        <path d="m7 16 4-8 4 5 5-7" />
      </svg>
    ),
  },
];

export function BloggersWorkflow() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          How bloggers use RankSEO
        </h2>
        <p className="reveal reveal-delay-1 mx-auto mt-3 max-w-[480px] text-center text-[15px] text-muted">
          Six steps from topic research to measurable traffic growth.
        </p>

        {/* Desktop: 3x2 grid */}
        <div className="reveal reveal-delay-2 mt-14 hidden lg:block">
          <div className="grid grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-border-light bg-white p-5 transition-all duration-200 hover:border-border hover:shadow-sm`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                    {step.number}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg/50">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-[15px] font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Stacked cards */}
        <div className="reveal reveal-delay-2 mt-10 space-y-4 lg:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-border-light bg-white p-5`}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-0.5 text-[13px] text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
