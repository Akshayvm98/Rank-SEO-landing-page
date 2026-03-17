export function BloggersApproach() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div>
            <h2 className="reveal text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              RankSEO helps you write with direction
            </h2>

            <div className="reveal reveal-delay-1 mt-6 space-y-4 text-[16px] leading-[1.7] text-muted">
              <p>
                Instead of picking topics at random, RankSEO uses search data
                and keyword opportunities to show you what your blog can
                realistically grow around.
              </p>
              <p>Then it helps you turn those opportunities into:</p>
              <ul className="space-y-2 pl-1">
                {[
                  "Structured articles",
                  "Better SEO",
                  "More consistent publishing",
                  "Clearer performance tracking",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="reveal reveal-delay-2 mt-6 text-[15px] font-medium text-foreground/80">
              Less guessing. More intentional growth.
            </p>

            <div className="reveal reveal-delay-2 mt-6">
              <a
                href="/features"
                className="text-[14px] font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-hover"
              >
                See all features
              </a>
            </div>
          </div>

          {/* Right: Content Planning Visual */}
          <div className="reveal reveal-delay-2 relative">
            <div className="space-y-3">
              {/* Keyword Opportunities */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">Keyword Opportunities</span>
                  <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">12 found</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { kw: "how to grow a blog", vol: "5.4K", diff: 32 },
                    { kw: "blogging tips for beginners", vol: "3.8K", diff: 28 },
                    { kw: "blog post formatting guide", vol: "1.2K", diff: 18 },
                  ].map((item) => (
                    <div key={item.kw} className="flex items-center justify-between rounded-lg bg-accent-bg/30 px-3 py-1.5">
                      <span className="text-[11px] text-foreground/70">{item.kw}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-light">{item.vol}</span>
                        <span className="text-[10px] font-medium text-success">KD {item.diff}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-border">
                  <path d="M10 4v12M6 12l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Topic Groups */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted-light">Topic Groups</div>
                <div className="space-y-2">
                  {[
                    { group: "Blog Growth", articles: 4, color: "bg-accent-bg text-accent" },
                    { group: "Beginner Guides", articles: 3, color: "bg-accent-bg text-accent" },
                    { group: "Content Formatting", articles: 2, color: "bg-border-light text-muted" },
                  ].map((item) => (
                    <div key={item.group} className="flex items-center justify-between rounded-lg border border-border-light px-3 py-2">
                      <div>
                        <p className="text-[11px] font-medium text-foreground">{item.group}</p>
                        <p className="text-[10px] text-muted-light">{item.articles} articles planned</p>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${item.color}`}>Grouped</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-border">
                  <path d="M10 4v12M6 12l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Article Statuses */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted-light">Article Status</div>
                <div className="space-y-1.5">
                  {[
                    { title: "How to Grow a Blog in 2026", status: "Published", clicks: "320", color: "bg-success-bg text-success" },
                    { title: "Blogging Tips for Beginners", status: "Optimizing", clicks: "--", color: "bg-accent-bg text-accent" },
                    { title: "Blog Post Formatting Guide", status: "Draft", clicks: "--", color: "bg-border-light text-muted" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center justify-between gap-2 rounded-lg bg-accent-bg/20 px-3 py-2">
                      <span className="truncate text-[11px] text-foreground/70">{item.title}</span>
                      <div className="flex shrink-0 items-center gap-2">
                        {item.clicks !== "--" && (
                          <span className="text-[10px] text-muted-light">{item.clicks} clicks</span>
                        )}
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${item.color}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
