export function SaaSWhyStalls() {
  return (
    <section className="bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto max-w-[640px] text-center">
          <h2 className="text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            The issue usually is not belief. It is process.
          </h2>
          <p className="reveal reveal-delay-1 mt-5 text-[15px] leading-[1.7] text-muted">
            Most SaaS teams already know organic growth matters. The bigger
            problem is that SEO rarely has a clean operating system behind it.
            Research happens in one place. Drafts happen somewhere else.
            Optimization gets delayed. Publishing slips. Performance review
            happens too late.{" "}
            <a
              href="/features"
              className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-hover"
            >
              RankSEO helps connect those steps
            </a>{" "}
            into one system.
          </p>
          <p className="reveal reveal-delay-2 mt-4 text-[14px] font-medium text-muted-light">
            A better growth channel starts with a better workflow.
          </p>
        </div>

        {/* Before / After */}
        <div className="reveal reveal-delay-2 mt-14 grid gap-6 md:grid-cols-2">
          {/* Before: Fragmented */}
          <div className="rounded-2xl border border-red-200/60 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="text-[14px] font-semibold text-foreground">Before</span>
              <span className="ml-auto rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-medium text-red-500">Fragmented</span>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: "Unclear priorities",
                  detail: "No system to rank keyword opportunities",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  ),
                },
                {
                  label: "Slow publishing",
                  detail: "Weeks between draft and live article",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                },
                {
                  label: "Disconnected tools",
                  detail: "Research, writing, and publishing in different places",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  ),
                },
                {
                  label: "No feedback loop",
                  detail: "Content goes live but performance is never reviewed",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                      <path d="M3 12a9 9 0 1 1 9 9" />
                      <path d="M3 21v-9h9" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-red-50/50 px-3 py-2.5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-100/60">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[12px] font-semibold text-foreground/70">{item.label}</span>
                    <p className="text-[11px] text-muted-light">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After: Connected */}
          <div className="rounded-2xl border border-success/30 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-success" />
              <span className="text-[14px] font-semibold text-foreground">After</span>
              <span className="ml-auto rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-medium text-success">Connected</span>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: "Prioritized opportunities",
                  detail: "Keywords ranked by relevance, demand, and difficulty",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Repeatable publishing",
                  detail: "From keyword to live article in a single workflow",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  ),
                },
                {
                  label: "Performance data",
                  detail: "See which topics drive rankings and traffic",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                      <path d="M3 3v18h18" />
                      <path d="m7 16 4-8 4 5 5-7" />
                    </svg>
                  ),
                },
                {
                  label: "One system",
                  detail: "Research, create, optimize, publish, measure — all connected",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-success-bg/50 px-3 py-2.5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-success-bg">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[12px] font-semibold text-foreground/70">{item.label}</span>
                    <p className="text-[11px] text-muted-light">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
