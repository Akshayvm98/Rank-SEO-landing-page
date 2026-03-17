const steps = [
  {
    number: "01",
    title: "Connect client websites",
    description: "Set up multiple domains and workspaces inside one account.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-light">
          Domains
        </div>
        <div className="space-y-1.5">
          {[
            { domain: "acme.com", status: "Connected", pages: 142 },
            { domain: "greenleaf.io", status: "Connected", pages: 87 },
            { domain: "startupx.co", status: "Connected", pages: 54 },
          ].map((d) => (
            <div key={d.domain} className="flex items-center justify-between rounded-lg border border-border-light px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-success" />
                <span className="text-[12px] font-medium text-foreground">{d.domain}</span>
              </div>
              <span className="text-[10px] text-muted">{d.pages} pages</span>
            </div>
          ))}
        </div>
        <button className="mt-2.5 flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-border bg-border-light/30 py-2 text-[11px] text-muted transition-colors hover:border-accent hover:text-accent">
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add domain
        </button>
      </div>
    ),
  },
  {
    number: "02",
    title: "Discover opportunities by client",
    description: "Use search data, SERP analysis, and keyword prioritization for each account.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">Keywords</span>
          <div className="flex items-center gap-1 rounded-full bg-accent-bg px-2 py-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[9px] font-medium text-accent">acme.com</span>
            <svg className="h-2.5 w-2.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        <div className="space-y-1">
          <div className="grid grid-cols-[1fr_auto_auto] gap-3 px-2 text-[9px] uppercase tracking-wider text-muted-light">
            <span>Keyword</span>
            <span>Volume</span>
            <span>Priority</span>
          </div>
          {[
            { kw: "project management tips", vol: "4.1K", pri: "High" },
            { kw: "team productivity tools", vol: "2.8K", pri: "High" },
            { kw: "remote work best practices", vol: "5.2K", pri: "Medium" },
          ].map((row) => (
            <div key={row.kw} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-lg bg-border-light/40 px-2 py-1.5 text-[11px]">
              <span className="truncate text-foreground">{row.kw}</span>
              <span className="text-muted">{row.vol}</span>
              <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${row.pri === "High" ? "bg-accent-bg text-accent" : "bg-border-light text-muted"}`}>
                {row.pri}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Generate content at scale",
    description: "Produce optimized drafts in the right tone for each brand or client.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[12px] font-medium text-foreground">Draft Generation</span>
          <div className="flex items-center gap-1 rounded bg-border-light px-2 py-0.5">
            <span className="text-[9px] text-muted">Brand:</span>
            <span className="text-[9px] font-medium text-foreground">Acme</span>
            <svg className="h-2.5 w-2.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-3.5 w-[55%] rounded bg-foreground/12" />
          <div className="mt-2 h-2.5 w-full rounded bg-foreground/6" />
          <div className="h-2.5 w-[90%] rounded bg-foreground/6" />
          <div className="h-2.5 w-[75%] rounded bg-foreground/6" />
          <div className="mt-2 h-3 w-[40%] rounded bg-foreground/10" />
          <div className="h-2.5 w-full rounded bg-foreground/5" />
        </div>
        <div className="mt-3 flex gap-2 border-t border-border-light pt-3">
          <div className="rounded bg-accent-bg px-2 py-0.5 text-[9px] font-medium text-accent">AI Generated</div>
          <div className="rounded bg-border-light px-2 py-0.5 text-[9px] text-muted">1,850 words</div>
          <div className="rounded bg-border-light px-2 py-0.5 text-[9px] text-muted">SEO Score: 92</div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Review and publish",
    description: "Approve content and push to the client's CMS with less manual handoff.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-light">
          Approval Queue
        </div>
        <div className="space-y-2">
          {[
            { title: "Project Management Tips", status: "Approved", action: "Publish", actionColor: "bg-accent text-white" },
            { title: "Team Productivity Tools", status: "In Review", action: "Review", actionColor: "bg-border-light text-foreground" },
            { title: "Remote Work Practices", status: "Draft", action: "Edit", actionColor: "bg-border-light text-muted" },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between rounded-lg bg-border-light/30 px-3 py-2.5">
              <div>
                <span className="text-[11px] font-medium text-foreground">{item.title}</span>
                <p className="text-[9px] text-muted">{item.status}</p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${item.actionColor}`}>
                {item.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "05",
    title: "Monitor results",
    description: "Track rankings, impressions, clicks, and article performance across accounts.",
    link: { href: "/integrations", text: "View integrations" },
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[11px] font-medium text-foreground">All Clients</span>
          <span className="text-[10px] text-muted-light">Last 30 days</span>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { label: "Total Clicks", value: "24.8K", change: "+12%" },
            { label: "Impressions", value: "412K", change: "+8%" },
            { label: "Avg. Position", value: "11.2", change: "-2.1" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg bg-border-light/50 px-2 py-2 text-center">
              <p className="text-[8px] text-muted">{m.label}</p>
              <p className="text-[13px] font-bold text-foreground">{m.value}</p>
              <p className="text-[9px] font-medium text-success">{m.change}</p>
            </div>
          ))}
        </div>
        <div className="flex h-[36px] items-end gap-[2px]">
          {[25, 30, 28, 35, 40, 38, 45, 50, 48, 55, 60, 58, 65, 70, 68].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light/60"
              style={{ height: `${h}%`, opacity: 0.5 + h / 150 }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "06",
    title: "Keep delivery consistent",
    description: "Use shared workflows, team access, and repeatable processes to reduce chaos.",
    visual: (
      <div className="rounded-xl border border-border-light bg-white p-4">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-light">
          Team Workflow
        </div>
        <div className="space-y-2">
          {[
            { name: "Kate R.", role: "Strategist", tasks: 8 },
            { name: "James L.", role: "Writer", tasks: 12 },
            { name: "Amy M.", role: "Editor", tasks: 6 },
          ].map((member) => (
            <div key={member.name} className="flex items-center gap-3 rounded-lg bg-border-light/30 px-3 py-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-medium text-foreground">{member.name}</span>
                <p className="text-[9px] text-muted">{member.role}</p>
              </div>
              <span className="rounded bg-border-light px-1.5 py-0.5 text-[9px] text-muted">{member.tasks} tasks</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2 border-t border-border-light pt-3">
          <div className="rounded bg-success-bg px-2 py-0.5 text-[9px] font-medium text-success">Repeatable</div>
          <div className="rounded bg-accent-bg px-2 py-0.5 text-[9px] font-medium text-accent">Shared Access</div>
          <div className="rounded bg-border-light px-2 py-0.5 text-[9px] text-muted">SOPs Built-in</div>
        </div>
      </div>
    ),
  },
];

export function AgenciesHowItWorks() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          How agencies use RankSEO across client accounts
        </h2>

        {/* Desktop: 3x2 Grid */}
        <div className="reveal reveal-delay-1 mt-14 hidden md:grid md:grid-cols-3 md:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-xl border border-border-light bg-white p-5 transition-all duration-200 hover:border-border hover:shadow-sm`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent bg-white text-[12px] font-bold text-accent shadow-sm shadow-accent/10">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-foreground">{step.title}</h3>
                </div>
              </div>
              <p className="mb-4 text-[13px] leading-relaxed text-muted">{step.description}</p>
              {"link" in step && step.link && (
                <a
                  href={step.link.href}
                  className="mb-3 inline-flex items-center gap-1 text-[12px] font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {step.link.text}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
              <div className="mt-auto">{step.visual}</div>
            </div>
          ))}
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-xl border border-border-light bg-white p-5`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-[12px] font-bold text-accent shadow-sm shadow-accent/10">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-0.5 text-[13px] text-muted">{step.description}</p>
                </div>
              </div>
              {"link" in step && step.link && (
                <a
                  href={step.link.href}
                  className="mb-3 inline-flex items-center gap-1 text-[12px] font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {step.link.text}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
              <div className="mt-3">{step.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
