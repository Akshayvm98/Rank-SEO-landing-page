const stages = [
  {
    label: "Discover",
    desc: "Find high-value topics from real search data",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    label: "Create",
    desc: "Generate SEO-structured drafts in your voice",
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z",
  },
  {
    label: "Optimize",
    desc: "Review SEO score, structure, and readability",
    icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
  },
  {
    label: "Publish",
    desc: "Push directly to your CMS in one click",
    icon: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
  },
];

export function ContentMarketersSolution() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="reveal text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Turn your SEO content workflow into a system
          </h2>

          <p className="reveal reveal-delay-1 mt-5 text-[16px] leading-[1.7] text-muted">
            RankSEO connects search data, topic planning, AI-assisted drafting,
            optimization, and publishing into one flow. Instead of managing content
            in pieces, you get a system that helps your team move from idea to
            published article with less friction.
          </p>

          <p className="reveal reveal-delay-1 mt-3 text-[15px] font-medium text-foreground/70">
            Less juggling. More momentum.
          </p>
        </div>

        {/* Connected 4-stage workflow */}
        <div className="reveal reveal-delay-2 relative mx-auto mt-14 max-w-[900px]">
          {/* Desktop: horizontal */}
          <div className="hidden md:block">
            {/* Connecting line */}
            <div className="absolute top-[52px] right-[calc(12.5%+20px)] left-[calc(12.5%+20px)] h-px bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30" />

            <div className="relative grid grid-cols-4 gap-6">
              {stages.map((stage, i) => (
                <div key={stage.label} className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center`}>
                  {/* Circle node */}
                  <div className="relative z-10 flex h-[104px] w-[104px] items-center justify-center rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg">
                        <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={stage.icon} />
                        </svg>
                      </div>
                      <span className="text-[12px] font-bold text-accent">{stage.label}</span>
                    </div>
                  </div>

                  {/* Arrow between nodes */}
                  {i < stages.length - 1 && (
                    <div className="absolute top-[46px] -right-[18px] z-20">
                      <svg width="12" height="12" viewBox="0 0 12 12" className="text-accent/50">
                        <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  <p className="mt-3 text-[14px] font-medium text-foreground">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical connected */}
          <div className="md:hidden">
            <div className="space-y-0">
              {stages.map((stage, i) => (
                <div key={stage.label} className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex gap-4`}>
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-light bg-white shadow-sm">
                      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={stage.icon} />
                      </svg>
                    </div>
                    {i < stages.length - 1 && (
                      <div className="h-8 w-px bg-accent/20" />
                    )}
                  </div>
                  <div className="pb-6 pt-1">
                    <span className="text-[13px] font-bold text-accent">{stage.label}</span>
                    <p className="mt-0.5 text-[14px] text-muted">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="reveal reveal-delay-3 mt-10 text-center text-[14px] text-muted">
          See how each stage works in detail on our{" "}
          <a href="/features" className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-hover hover:decoration-accent">
            features page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
