const clients = [
  { domain: "acme.com", active: true },
  { domain: "greenleaf.io", active: false },
  { domain: "startupx.co", active: false },
];

const articles = [
  { title: "Complete Guide to Local SEO", status: "Published", color: "bg-success/10 text-success" },
  { title: "E-commerce SEO Checklist", status: "Review", color: "bg-accent-bg text-accent" },
  { title: "Link Building Strategies", status: "Draft", color: "bg-border-light text-muted" },
  { title: "Technical SEO Audit Guide", status: "Published", color: "bg-success/10 text-success" },
  { title: "Content Gap Analysis", status: "Draft", color: "bg-border-light text-muted" },
];

const teamAvatars = [
  { initials: "KR", bg: "bg-accent" },
  { initials: "JL", bg: "bg-foreground" },
  { initials: "AM", bg: "bg-accent-light" },
  { initials: "TS", bg: "bg-muted" },
];

export function AgenciesHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1100px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          {/* Left: Text */}
          <div>
            <h1 className="reveal text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[3rem]">
              SEO for agencies that need to scale{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                without scaling chaos
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-5 max-w-[460px] text-[16px] leading-[1.7] text-muted">
              RankSEO helps agencies manage keyword research, content generation,
              publishing, and performance tracking across multiple clients — from
              one cleaner workflow.
            </p>

            <div className="reveal reveal-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
              >
                Start $1 Trial
              </a>
              <a
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-white px-7 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/20 hover:shadow-sm"
              >
                View Pricing
              </a>
            </div>

            <p className="reveal reveal-delay-3 mt-5 text-[14px] text-muted-light">
              More client output. Less operational overhead.
            </p>
          </div>

          {/* Right: Multi-workspace Dashboard Visual */}
          <div className="reveal reveal-delay-2 relative">
            <div className="space-y-3">
              {/* Workspace Switcher */}
              <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                    Workspaces
                  </span>
                  <div className="flex items-center gap-1.5">
                    {teamAvatars.map((a) => (
                      <div
                        key={a.initials}
                        className={`flex h-5 w-5 items-center justify-center rounded-full ${a.bg} text-[8px] font-bold text-white`}
                      >
                        {a.initials}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  {clients.map((client) => (
                    <div
                      key={client.domain}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-[12px] ${
                        client.active
                          ? "border border-accent/20 bg-accent-bg/50"
                          : "bg-border-light/40"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${client.active ? "bg-accent" : "bg-muted-light/50"}`} />
                        <span className={`font-medium ${client.active ? "text-accent" : "text-foreground/70"}`}>
                          {client.domain}
                        </span>
                      </div>
                      {client.active && (
                        <span className="text-[9px] font-medium text-accent">Active</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Article Pipeline */}
                <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                      Pipeline
                    </span>
                    <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">
                      5 articles
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {articles.map((article) => (
                      <div key={article.title} className="flex items-center justify-between gap-2">
                        <span className="truncate text-[10px] text-foreground/80">{article.title}</span>
                        <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-medium ${article.color}`}>
                          {article.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Keyword + Performance Metrics */}
                <div className="space-y-3">
                  <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                      Opportunities
                    </span>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-[1.5rem] font-bold text-foreground">142</span>
                      <span className="text-[10px] text-muted">keywords</span>
                    </div>
                    <div className="mt-1 flex gap-1.5">
                      <span className="rounded bg-success-bg px-1.5 py-0.5 text-[9px] font-medium text-success">+18 new</span>
                      <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[9px] font-medium text-accent">24 high priority</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                      Performance
                    </span>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-[14px] font-bold text-foreground">8.4K</p>
                        <p className="text-[9px] text-muted">Clicks</p>
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-foreground">124K</p>
                        <p className="text-[9px] text-muted">Impressions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
