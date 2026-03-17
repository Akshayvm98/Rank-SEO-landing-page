const beforeStages = [
  { label: "Research", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { label: "Drafts", icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" },
  { label: "Publishing", icon: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" },
  { label: "Reports", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
];

export function AgenciesWorkflowProblem() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[960px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          Client SEO breaks when the process lives in too many places
        </h2>

        <p className="reveal reveal-delay-1 mx-auto mt-4 max-w-[580px] text-center text-[15px] leading-[1.75] text-muted">
          For many agencies, the bottleneck is not expertise. It is fragmentation.
          Keyword research lives in one tool. Drafts live somewhere else. Publishing
          happens manually. Reporting is pulled together later. RankSEO helps bring
          that workflow into one system.
        </p>

        <p className="reveal reveal-delay-2 mx-auto mt-3 max-w-[480px] text-center text-[14px] text-accent font-medium">
          More consistency for your team. A smoother experience for your clients.
        </p>

        {/* Before / After Visual */}
        <div className="reveal reveal-delay-2 mt-12 grid gap-6 sm:grid-cols-2">
          {/* Before */}
          <div className="rounded-xl border border-red-100 bg-white p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50">
                <svg className="h-3.5 w-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-foreground">Before: Fragmented</span>
            </div>

            <div className="space-y-3">
              {beforeStages.map((stage, i) => (
                <div key={stage.label}>
                  <div className="flex items-center gap-3 rounded-lg border border-border-light/80 bg-border-light/20 px-4 py-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50">
                      <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={stage.icon} />
                      </svg>
                    </div>
                    <span className="text-[13px] font-medium text-foreground">{stage.label}</span>
                    <div className="ml-auto rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-medium text-red-400">
                      Separate tool
                    </div>
                  </div>
                  {i < beforeStages.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <div className="flex items-center gap-2">
                        <div className="h-px w-3 bg-red-200" />
                        <svg className="h-3 w-3 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l2.828 2.818L15 12" />
                        </svg>
                        <div className="h-px w-3 bg-red-200" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-[11px] text-muted-light">
              Disconnected. Manual handoffs at every step.
            </p>
          </div>

          {/* After */}
          <div className="rounded-xl border border-accent/20 bg-accent-bg/20 p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent">
                <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-foreground">After: Connected with RankSEO</span>
            </div>

            <div className="relative">
              {/* Central hub line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-accent/40" />

              <div className="space-y-3">
                {beforeStages.map((stage, i) => (
                  <div key={stage.label} className="relative flex items-center gap-3">
                    {/* Connection dot */}
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
                      <div className="absolute h-3 w-3 rounded-full bg-accent/20" />
                      <div className="relative h-2 w-2 rounded-full bg-accent" />
                    </div>

                    {/* Arrow */}
                    <svg className="h-3 w-5 shrink-0 text-accent/40" fill="none" viewBox="0 0 20 12" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1 6h16m0 0l-4-4m4 4l-4 4" />
                    </svg>

                    {/* Stage card */}
                    <div className="flex flex-1 items-center gap-3 rounded-lg border border-accent/15 bg-white px-4 py-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                        <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={stage.icon} />
                        </svg>
                      </div>
                      <span className="text-[13px] font-medium text-foreground">{stage.label}</span>
                      <div className="ml-auto rounded-full bg-accent-bg px-2 py-0.5 text-[9px] font-medium text-accent">
                        {i === 0 ? "Automated" : i === 1 ? "AI-assisted" : i === 2 ? "One-click" : "Real-time"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-accent">
                <span className="text-[9px] font-bold text-white">R</span>
              </div>
              <span className="text-[11px] font-medium text-accent">
                All stages connected through one workflow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
