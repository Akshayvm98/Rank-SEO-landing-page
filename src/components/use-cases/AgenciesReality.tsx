const clientCards = [
  {
    domain: "acme.com",
    status: "Behind schedule",
    statusColor: "bg-red-50 text-red-400",
    due: "Mar 12",
    articles: 3,
    tools: ["GSC", "WP", "Sheets"],
    offset: "rotate-[-3deg] translate-y-0",
  },
  {
    domain: "greenleaf.io",
    status: "On track",
    statusColor: "bg-success-bg text-success",
    due: "Mar 18",
    articles: 5,
    tools: ["Ahrefs", "Webflow", "Notion"],
    offset: "rotate-[1deg] translate-y-2",
  },
  {
    domain: "startupx.co",
    status: "Needs review",
    statusColor: "bg-accent-bg text-accent",
    due: "Mar 15",
    articles: 2,
    tools: ["GSC", "Ghost", "Docs"],
    offset: "rotate-[2deg] -translate-y-1",
  },
  {
    domain: "boldhr.com",
    status: "Behind schedule",
    statusColor: "bg-red-50 text-red-400",
    due: "Mar 10",
    articles: 4,
    tools: ["Semrush", "WP", "Slack"],
    offset: "rotate-[-1deg] translate-y-3",
  },
];

export function AgenciesReality() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16 md:items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="reveal text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
              The work grows faster than the workflow
            </h2>

            <div className="reveal reveal-delay-1 mt-5 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                Agencies do not just manage SEO. They manage complexity. That
                usually means: multiple clients, different websites and CMS setups,
                overlapping deadlines, repeated content workflows, constant
                coordination between strategy, writing, publishing, and reporting.
              </p>
              <p>
                The more clients you take on, the easier it becomes for quality and
                consistency to slip.
              </p>
            </div>

            <div className="reveal reveal-delay-2 mt-6">
              <a
                href="/features"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent transition-colors hover:text-accent-hover"
              >
                See how RankSEO simplifies this
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Multi-client chaos visual */}
          <div className="reveal reveal-delay-2">
            <div className="relative rounded-xl border border-border-light bg-white p-5">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                Multi-client reality
              </p>

              <div className="relative space-y-2">
                {clientCards.map((card, i) => (
                  <div
                    key={card.domain}
                    className={`rounded-lg border border-border-light/80 bg-border-light/20 px-4 py-3 transition-transform ${card.offset}`}
                    style={{ zIndex: clientCards.length - i }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-foreground/20" />
                        <span className="text-[12px] font-medium text-foreground">{card.domain}</span>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${card.statusColor}`}>
                        {card.status}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-[10px] text-muted">
                      <span>Due: {card.due}</span>
                      <span>{card.articles} articles</span>
                      <div className="ml-auto flex gap-1">
                        {card.tools.map((tool) => (
                          <span key={tool} className="rounded bg-border-light px-1.5 py-0.5 text-[8px] text-muted-light">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-[11px] text-muted-light">
                Scattered deadlines. Disconnected tools. Growing complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
