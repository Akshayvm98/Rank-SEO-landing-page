const blocks = [
  {
    title: "Multiple websites and workspaces",
    description: "Manage more than one site cleanly, with separate keyword data and content pipelines per client.",
    visual: (
      <div className="space-y-1.5">
        {[
          { domain: "acme.com", keywords: 142, articles: 28, active: true },
          { domain: "greenleaf.io", keywords: 87, articles: 14, active: false },
          { domain: "startupx.co", keywords: 54, articles: 9, active: false },
        ].map((ws) => (
          <div
            key={ws.domain}
            className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${
              ws.active ? "border border-accent/20 bg-accent-bg/40" : "bg-border-light/40"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${ws.active ? "bg-accent" : "bg-muted-light/40"}`} />
              <span className={`text-[12px] font-medium ${ws.active ? "text-accent" : "text-foreground/70"}`}>
                {ws.domain}
              </span>
            </div>
            <div className="flex gap-3 text-[10px] text-muted">
              <span>{ws.keywords} kw</span>
              <span>{ws.articles} articles</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Team access and collaboration",
    description: "Give editors, strategists, and account managers the right access to shared workflows.",
    visual: (
      <div className="space-y-2">
        {[
          { name: "Kate R.", role: "Strategist", color: "bg-accent" },
          { name: "James L.", role: "Writer", color: "bg-foreground" },
          { name: "Amy M.", role: "Editor", color: "bg-accent-light" },
          { name: "Tom S.", role: "Account Mgr", color: "bg-muted" },
        ].map((member) => (
          <div key={member.name} className="flex items-center gap-3 rounded-lg bg-border-light/30 px-3 py-2">
            <div className={`flex h-7 w-7 items-center justify-center rounded-full ${member.color} text-[9px] font-bold text-white`}>
              {member.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-medium text-foreground">{member.name}</span>
            </div>
            <span className="rounded-full bg-border-light px-2 py-0.5 text-[9px] text-muted">{member.role}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Consistent publishing operations",
    description: "Get content produced and published faster without repeated manual steps across accounts.",
    visual: (
      <div>
        <div className="mb-2 grid grid-cols-3 gap-1.5 text-center">
          {[
            { label: "Draft", count: 8, color: "bg-border-light text-muted" },
            { label: "Review", count: 5, color: "bg-accent-bg text-accent" },
            { label: "Published", count: 24, color: "bg-success-bg text-success" },
          ].map((col) => (
            <div key={col.label} className="rounded-lg bg-border-light/30 py-2">
              <span className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-medium ${col.color}`}>
                {col.label}
              </span>
              <p className="mt-1 text-[16px] font-bold text-foreground">{col.count}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {[
            { title: "SEO Automation Guide", status: "Published", color: "bg-success/10 text-success" },
            { title: "Link Building Tactics", status: "Review", color: "bg-accent-bg text-accent" },
            { title: "Content Strategy 2026", status: "Draft", color: "bg-border-light text-muted" },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between rounded-lg bg-border-light/20 px-3 py-1.5">
              <span className="truncate text-[10px] text-foreground/80">{item.title}</span>
              <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-medium ${item.color}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Centralized visibility",
    description: "See what is in progress, what is published, and what is performing — across all clients.",
    visual: (
      <div>
        <div className="mb-3 grid grid-cols-2 gap-2">
          {[
            { label: "Active Clients", value: "6" },
            { label: "Total Articles", value: "142" },
            { label: "In Progress", value: "18" },
            { label: "Published", value: "124" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-border-light/40 px-3 py-2 text-center">
              <p className="text-[14px] font-bold text-foreground">{stat.value}</p>
              <p className="text-[9px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-[2px] h-[32px]">
          {[20, 25, 22, 30, 35, 32, 40, 45, 42, 50, 55, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light/60"
              style={{ height: `${h}%`, opacity: 0.5 + h / 150 }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[8px] text-muted-light">
          <span>Jan</span>
          <span>Jun</span>
          <span>Dec</span>
        </div>
      </div>
    ),
  },
];

export function AgenciesMultiClient() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[960px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          Built for client delivery, not just single-site SEO
        </h2>

        <div className="reveal reveal-delay-1 mt-10 grid gap-4 sm:grid-cols-2">
          {blocks.map((block, i) => (
            <div
              key={block.title}
              className={`reveal reveal-delay-${(i % 4) + 1} rounded-xl border border-border-light bg-white p-5 transition-all duration-200 hover:border-border hover:shadow-sm`}
            >
              <h3 className="text-[15px] font-semibold text-foreground">{block.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{block.description}</p>
              <div className="mt-4">{block.visual}</div>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-3 mt-8 text-center">
          <a
            href="/features"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Explore all features
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
