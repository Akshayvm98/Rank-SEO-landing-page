export function SaaSGrowthProblem() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div>
            <h2 className="reveal text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              SEO is valuable for SaaS. It is also easy to deprioritize.
            </h2>

            <div className="reveal reveal-delay-1 mt-5 space-y-4 text-[15px] leading-[1.7] text-muted">
              <p>
                For many SaaS teams, SEO starts with good intentions and stalls
                somewhere in execution. Usually because:
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  "Paid channels are easier to measure in the short term",
                  "Content production is slow",
                  "Keyword strategy feels unclear",
                  "Publishing becomes inconsistent",
                  "SEO work gets split across too many people and tools",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                So SEO stays important, but never fully operational.
              </p>
            </div>
          </div>

          {/* Right: Stalled Growth Workflow Visual */}
          <div className="reveal reveal-delay-2 relative">
            <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="text-[13px] font-semibold text-foreground/60">SEO Workflow</span>
                <span className="ml-auto rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-500">Fragmented</span>
              </div>

              <div className="space-y-3">
                {/* Step 1: Keyword Research */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-lg border border-border-light bg-accent-bg/30 px-3 py-2">
                    <span className="text-[12px] font-medium text-foreground/70">Keyword Research</span>
                  </div>
                  <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">Done</span>
                </div>

                {/* Broken connector */}
                <div className="flex justify-center">
                  <div className="h-4 w-px border-l border-dashed border-border" />
                </div>

                {/* Step 2: Content Brief */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg/50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent/60">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M8 7h8M8 12h6M8 17h4" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-lg border border-border-light bg-border-light/30 px-3 py-2">
                    <span className="text-[12px] font-medium text-foreground/50">Content Brief</span>
                  </div>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600">Delayed</span>
                </div>

                {/* Broken connector */}
                <div className="flex justify-center">
                  <div className="h-4 w-px border-l border-dashed border-border-light/60" />
                </div>

                {/* Step 3: Draft */}
                <div className="flex items-center gap-3 opacity-60">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-border-light/50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-light">
                      <path d="M12 20h9" />
                      <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855Z" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-lg border border-border-light/50 bg-border-light/20 px-3 py-2">
                    <span className="text-[12px] font-medium text-foreground/40">Draft</span>
                  </div>
                  <span className="rounded-full bg-border-light px-2 py-0.5 text-[10px] font-medium text-muted-light">Stalled</span>
                </div>

                {/* Broken connector */}
                <div className="flex justify-center">
                  <div className="h-4 w-px border-l border-dashed border-border-light/40" />
                </div>

                {/* Step 4: SEO Review */}
                <div className="flex items-center gap-3 opacity-40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-border-light/30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-light">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-lg border border-border-light/30 bg-border-light/10 px-3 py-2">
                    <span className="text-[12px] font-medium text-foreground/30">SEO Review</span>
                  </div>
                  <span className="rounded-full bg-border-light/60 px-2 py-0.5 text-[10px] font-medium text-muted-light/60">Blocked</span>
                </div>

                {/* Broken connector */}
                <div className="flex justify-center">
                  <div className="h-4 w-px border-l border-dashed border-border-light/30" />
                </div>

                {/* Step 5: Publish */}
                <div className="flex items-center gap-3 opacity-30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-border-light/20">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-light">
                      <path d="M12 3v12M7.5 10.5 12 6l4.5 4.5" />
                      <path d="M4 16v2.5a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5V16" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-lg border border-border-light/20 bg-border-light/5 px-3 py-2">
                    <span className="text-[12px] font-medium text-foreground/20">Publish</span>
                  </div>
                  <span className="rounded-full bg-border-light/40 px-2 py-0.5 text-[10px] font-medium text-muted-light/40">Waiting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
