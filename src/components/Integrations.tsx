"use client";

import { Icon, Icons } from "@/components/ui/Icon";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const ENGINE_STAGES = [
  { icon: Icons.search, label: "Discover" },
  { icon: Icons.penLine, label: "Generate" },
  { icon: Icons.sparkles, label: "Optimize" },
  { icon: Icons.upload, label: "Publish" },
  { icon: Icons.barChart, label: "Track" },
];

const DESTINATIONS = [
  {
    name: "WordPress",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#21759B">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.443 12c0-1.174.243-2.29.68-3.306l3.744 10.262A8.574 8.574 0 013.443 12zm8.557 8.557c-.882 0-1.73-.143-2.524-.407l2.68-7.786 2.745 7.524c.018.045.04.087.062.127a8.547 8.547 0 01-2.963.542zm1.2-12.565c.538-.028 1.023-.084 1.023-.084.481-.057.425-.764-.057-.736 0 0-1.448.114-2.381.114-.878 0-2.354-.114-2.354-.114-.482-.028-.538.707-.057.736 0 0 .457.056.94.084l1.396 3.826-1.962 5.882-3.266-9.708c.538-.028 1.023-.084 1.023-.084.481-.057.425-.764-.057-.736 0 0-1.448.114-2.381.114-.167 0-.365-.004-.572-.01A8.546 8.546 0 0112 3.443c2.382 0 4.553.974 6.113 2.548-.039-.003-.076-.009-.116-.009-1.878 0-2.133 1.65-2.133 2.498 0 .737.422 1.36.871 2.098.337.59.731 1.347.731 2.44 0 .756-.29 1.634-.674 2.857l-.884 2.952-3.21-9.539z" />
      </svg>
    ),
  },
  {
    name: "Webflow",
    icon: <img src="/webflow-logo.svg" alt="Webflow" className="h-4 w-auto" />,
  },
  {
    name: "Framer",
    icon: <img src="/framer-logo.svg" alt="Framer" className="h-5 w-auto" />,
  },
  {
    name: "Notion",
    icon: <img src="/notion-logo.svg" alt="Notion" className="h-5 w-5" />,
  },
  {
    name: "API",
    icon: <Icon icon={Icons.code} size="sm" className="text-accent" strokeWidth={1.5} />,
  },
];

const FLOW_STEPS = [
  { icon: Icons.database, label: "Import performance data" },
  { icon: Icons.sparkles, label: "Generate optimized content" },
  { icon: Icons.globe, label: "Publish anywhere" },
  { icon: Icons.trendingUp, label: "Track what improves" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Integrations() {
  return (
    <section className="relative overflow-hidden border-t border-border-light py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-border-light/20 via-background to-accent-bg/10" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />

      <div className="relative mx-auto max-w-[1100px] px-6">
        {/* ── Header ── */}
        <div className="reveal mx-auto mb-12 md:mb-14 max-w-[560px] text-center">
          <p className="inline-block rounded-full bg-accent-bg px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent mb-4">
            Integrations
          </p>
          <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            One engine across research,
            <br className="hidden sm:block" />
            publishing, and performance
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted">
            Connect your data sources. Generate and optimize content.
            Publish to your CMS. Track what grows. All in one system.
          </p>
        </div>

        {/* ── Main showcase card ── */}
        <div className="reveal reveal-delay-1">
          <div className="relative rounded-2xl border border-black/[0.06] bg-gradient-to-b from-white to-surface shadow-[0_2px_12px_-2px_rgba(0,0,0,0.06),0_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Ambient glow inside the card */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-accent/[0.04] blur-[80px]" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[200px] w-[400px] rounded-full bg-violet-400/[0.03] blur-[60px]" />

            {/* Inner grid texture */}
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />

            <div className="relative p-6 md:p-10">
              {/* ── Desktop 3-column layout ── */}
              <div className="hidden md:grid md:grid-cols-[1fr_1.4fr_1fr] md:gap-6 lg:gap-8 items-center">

                {/* Left: Data source */}
                <div className="flex flex-col items-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-light mb-4">
                    Data source
                  </p>
                  <div className="group w-full max-w-[200px] rounded-xl border border-black/[0.06] bg-white p-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_6px_20px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-0.5">
                    <div className="flex items-center gap-3">
                      <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <div>
                        <p className="text-[13px] font-semibold text-foreground">Google Search Console</p>
                        <p className="text-[11px] text-muted">Rankings, clicks, impressions</p>
                      </div>
                    </div>
                  </div>

                  {/* Flow arrow */}
                  <div className="my-3 flex flex-col items-center gap-1">
                    <div className="h-6 w-[1px] bg-gradient-to-b from-transparent to-accent/20" />
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/30" style={{ animation: "pulse-dot 2.5s ease-in-out infinite" }} />
                    <Icon icon={Icons.chevronRight} size="sm" className="text-accent/30 rotate-90 md:hidden" />
                  </div>

                  {/* Arrow pointing right on desktop */}
                  <div className="hidden md:flex items-center absolute left-[calc(33.33%-8px)] top-1/2 -translate-y-1/2 z-10">
                    <div className="h-[1px] w-6 bg-gradient-to-r from-accent/15 to-accent/30" />
                    <Icon icon={Icons.chevronRight} size="sm" className="text-accent/30 -ml-1" />
                  </div>
                </div>

                {/* Center: RankSEO engine */}
                <div className="relative flex flex-col items-center">
                  {/* Glow layers */}
                  <div className="absolute -inset-4 rounded-3xl bg-accent/[0.05] blur-2xl" />
                  <div className="absolute -inset-2 rounded-2xl bg-accent/[0.03] blur-xl" />

                  <div className="relative w-full rounded-2xl border border-accent/20 bg-gradient-to-b from-white via-white to-accent-bg/20 p-6 shadow-[0_4px_32px_-8px_rgba(13,148,136,0.2)]">
                    {/* Breathing border */}
                    <div className="absolute -inset-[1px] rounded-2xl border border-accent/10" style={{ animation: "breathe 3s ease-in-out infinite" }} />

                    {/* Header */}
                    <div className="flex items-center justify-center gap-2.5 mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-light shadow-[0_2px_8px_-2px_rgba(13,148,136,0.4)]">
                        <span className="text-[15px] font-bold leading-none text-white">R</span>
                      </div>
                      <div>
                        <p className="text-[17px] font-bold tracking-[-0.02em] text-foreground">RankSEO</p>
                        <p className="text-[11px] text-muted -mt-0.5">SEO Automation Engine</p>
                      </div>
                    </div>

                    {/* Workflow stages */}
                    <div className="flex items-center justify-center gap-1.5 mb-4">
                      {ENGINE_STAGES.map((stage, i) => (
                        <div key={stage.label} className="flex items-center">
                          <div className="flex items-center gap-1 rounded-lg border border-accent/15 bg-accent-bg/50 px-2.5 py-1.5 transition-colors hover:bg-accent-bg hover:border-accent/25">
                            <Icon icon={stage.icon} size="sm" className="text-accent" />
                            <span className="text-[10px] font-semibold text-accent">{stage.label}</span>
                          </div>
                          {i < ENGINE_STAGES.length - 1 && (
                            <Icon icon={Icons.chevronRight} size="sm" className="text-accent/20 mx-0.5" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Mini UI bar to make it feel product-like */}
                    <div className="rounded-lg border border-black/[0.04] bg-surface/80 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <div className="h-2 w-2 rounded-full bg-emerald-400" />
                          <span className="text-[10px] font-medium text-muted">Active</span>
                        </div>
                        <span className="text-[10px] text-muted-light">Processing continuously</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-border-light overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent" style={{ width: "78%", animation: "bar-grow 2s ease-out" }} />
                      </div>
                    </div>
                  </div>

                  {/* Arrow pointing right on desktop */}
                  <div className="hidden md:flex items-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-10">
                    <Icon icon={Icons.chevronRight} size="sm" className="text-accent/30 -mr-1" />
                    <div className="h-[1px] w-6 bg-gradient-to-r from-accent/30 to-accent/15" />
                  </div>
                </div>

                {/* Right: Destinations */}
                <div className="flex flex-col items-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-light mb-4">
                    Publish to
                  </p>
                  <div className="grid grid-cols-2 gap-2 w-full max-w-[220px]">
                    {DESTINATIONS.map((dest) => (
                      <div
                        key={dest.name}
                        className="group flex items-center gap-2 rounded-lg border border-black/[0.06] bg-white px-3 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:border-accent/20"
                      >
                        <div className="shrink-0">{dest.icon}</div>
                        <span className="text-[12px] font-medium text-foreground truncate">{dest.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Mobile/Tablet stacked layout ── */}
              <div className="md:hidden space-y-5">
                {/* Source */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-light mb-3 text-center">Data source</p>
                  <div className="mx-auto max-w-[240px] rounded-xl border border-black/[0.06] bg-white p-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center gap-3">
                      <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <div>
                        <p className="text-[13px] font-semibold text-foreground">Search Console</p>
                        <p className="text-[11px] text-muted">Rankings, clicks, impressions</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-4 w-[1px] bg-accent/20" />
                    <Icon icon={Icons.chevronDown} size="sm" className="text-accent/30" />
                  </div>
                </div>

                {/* Engine */}
                <div className="relative">
                  <div className="absolute -inset-3 rounded-2xl bg-accent/[0.04] blur-xl" />
                  <div className="relative rounded-2xl border border-accent/20 bg-gradient-to-b from-white to-accent-bg/20 p-5 shadow-[0_4px_24px_-8px_rgba(13,148,136,0.15)]">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light shadow-sm">
                        <span className="text-[14px] font-bold leading-none text-white">R</span>
                      </div>
                      <div>
                        <p className="text-[15px] font-bold tracking-[-0.02em] text-foreground">RankSEO</p>
                        <p className="text-[10px] text-muted">SEO Automation Engine</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                      {ENGINE_STAGES.map((stage) => (
                        <div key={stage.label} className="flex items-center gap-1 rounded-md border border-accent/15 bg-accent-bg/40 px-2 py-1">
                          <Icon icon={stage.icon} size="sm" className="text-accent" />
                          <span className="text-[10px] font-semibold text-accent">{stage.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg border border-black/[0.04] bg-surface/80 p-2.5">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-medium text-muted">Active</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-border-light overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent" style={{ width: "78%", animation: "bar-grow 2s ease-out" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-4 w-[1px] bg-accent/20" />
                    <Icon icon={Icons.chevronDown} size="sm" className="text-accent/30" />
                  </div>
                </div>

                {/* Destinations */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-light mb-3 text-center">Publish to</p>
                  <div className="grid grid-cols-3 gap-2 max-w-[300px] mx-auto">
                    {DESTINATIONS.map((dest) => (
                      <div key={dest.name} className="flex flex-col items-center gap-1.5 rounded-lg border border-black/[0.06] bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all hover:shadow-md hover:-translate-y-0.5">
                        <div className="shrink-0">{dest.icon}</div>
                        <span className="text-[11px] font-medium text-foreground">{dest.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom reinforcement ── */}
        <div className="reveal reveal-delay-2 mt-10 flex flex-wrap justify-center gap-3">
          {FLOW_STEPS.map((step) => (
            <div
              key={step.label}
              className="flex items-center gap-2 rounded-full border border-black/[0.05] bg-white/80 backdrop-blur-sm px-4 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
            >
              <Icon icon={step.icon} size="sm" className="text-accent" />
              <span className="text-[12px] font-medium text-foreground">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes breathe {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.7; }
            }
            @keyframes pulse-dot {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.4); }
            }
            @keyframes bar-grow {
              0% { width: 0%; }
              100% { width: 78%; }
            }
          `,
        }}
      />
    </section>
  );
}
