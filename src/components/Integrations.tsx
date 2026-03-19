"use client";

import { Icon, Icons } from "@/components/ui/Icon";

// ---------------------------------------------------------------------------
// Integration nodes
// ---------------------------------------------------------------------------

const INPUT_NODES = [
  {
    name: "Google Search Console",
    tag: "Performance data",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
];

const OUTPUT_NODES = [
  {
    name: "WordPress",
    tag: "Publish",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#21759B">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.443 12c0-1.174.243-2.29.68-3.306l3.744 10.262A8.574 8.574 0 013.443 12zm8.557 8.557c-.882 0-1.73-.143-2.524-.407l2.68-7.786 2.745 7.524c.018.045.04.087.062.127a8.547 8.547 0 01-2.963.542zm1.2-12.565c.538-.028 1.023-.084 1.023-.084.481-.057.425-.764-.057-.736 0 0-1.448.114-2.381.114-.878 0-2.354-.114-2.354-.114-.482-.028-.538.707-.057.736 0 0 .457.056.94.084l1.396 3.826-1.962 5.882-3.266-9.708c.538-.028 1.023-.084 1.023-.084.481-.057.425-.764-.057-.736 0 0-1.448.114-2.381.114-.167 0-.365-.004-.572-.01A8.546 8.546 0 0112 3.443c2.382 0 4.553.974 6.113 2.548-.039-.003-.076-.009-.116-.009-1.878 0-2.133 1.65-2.133 2.498 0 .737.422 1.36.871 2.098.337.59.731 1.347.731 2.44 0 .756-.29 1.634-.674 2.857l-.884 2.952-3.21-9.539z" />
      </svg>
    ),
  },
  {
    name: "Webflow",
    tag: "Publish",
    icon: <img src="/webflow-logo.svg" alt="Webflow" className="h-4 w-auto" />,
  },
  {
    name: "Framer",
    tag: "Publish",
    icon: <img src="/framer-logo.svg" alt="Framer" className="h-6 w-auto" />,
  },
  {
    name: "Notion",
    tag: "Draft",
    icon: <img src="/notion-logo.svg" alt="Notion" className="h-6 w-6" />,
  },
  {
    name: "Custom API",
    tag: "Connect",
    icon: <Icon icon={Icons.code} size="md" className="text-accent" strokeWidth={1.5} />,
  },
];

const ENGINE_CAPABILITIES = [
  { icon: Icons.search, label: "Discover" },
  { icon: Icons.penLine, label: "Generate" },
  { icon: Icons.sparkles, label: "Optimize" },
  { icon: Icons.upload, label: "Publish" },
  { icon: Icons.barChart, label: "Track" },
];

// ---------------------------------------------------------------------------
// Node component
// ---------------------------------------------------------------------------

function IntegrationNode({
  name,
  tag,
  icon,
  delay,
  side,
}: {
  name: string;
  tag: string;
  icon: React.ReactNode;
  delay: number;
  side: "input" | "output";
}) {
  return (
    <div className={`reveal reveal-delay-${delay} group`}>
      <div className="relative flex items-center gap-3 rounded-xl border border-black/[0.05] bg-white/80 backdrop-blur-sm px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_6px_20px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:border-accent/20">
        {/* Connector dot */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors ${
            side === "input" ? "-right-1" : "-left-1"
          } hidden lg:block`}
        />
        <div className="shrink-0">{icon}</div>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-foreground truncate">{name}</p>
          <p className="text-[11px] text-muted">{tag}</p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function Integrations() {
  return (
    <section className="relative overflow-hidden border-t border-border-light py-20 md:py-28">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-border-light/20 via-transparent to-accent-bg/10" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-[1100px] px-6">
        {/* ── Header ── */}
        <div className="reveal mx-auto mb-14 md:mb-16 max-w-[560px] text-center">
          <p className="inline-block rounded-full bg-accent-bg px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent mb-4">
            Integrations
          </p>
          <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Connect your stack. Let RankSEO
            <br className="hidden sm:block" />
            run the workflow.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted">
            Bring performance data in. Generate and optimize content. Publish to
            your CMS. Track what improves. RankSEO turns disconnected tools into
            one continuous SEO system.
          </p>
        </div>

        {/* ── Orchestration layout ── */}

        {/* Desktop: hub-and-spoke */}
        <div className="reveal reveal-delay-1 hidden lg:block">
          <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-6">

            {/* Left: Input source */}
            <div className="flex flex-col items-end gap-4">
              <div className="text-right mb-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Data in
                </p>
              </div>
              {INPUT_NODES.map((node, i) => (
                <IntegrationNode key={node.name} {...node} delay={1} side="input" />
              ))}
            </div>

            {/* Center: RankSEO engine */}
            <div className="relative flex flex-col items-center">
              {/* Glow ring */}
              <div className="absolute inset-0 -m-4 rounded-3xl bg-accent/[0.06] blur-2xl" />
              <div className="absolute inset-0 -m-2 rounded-3xl bg-accent/[0.03] blur-lg" />

              <div className="relative rounded-2xl border border-accent/25 bg-gradient-to-b from-white to-accent-bg/30 p-6 shadow-[0_4px_24px_-4px_rgba(13,148,136,0.15)] w-[260px]">
                {/* Logo */}
                <div className="flex items-center justify-center gap-2.5 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light">
                    <span className="text-[14px] font-bold leading-none text-white">R</span>
                  </div>
                  <span className="text-[16px] font-bold tracking-[-0.02em] text-foreground">
                    RankSEO
                  </span>
                </div>

                {/* Engine capabilities */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {ENGINE_CAPABILITIES.map((cap) => (
                    <div
                      key={cap.label}
                      className="flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent-bg/40 px-2.5 py-1"
                    >
                      <Icon icon={cap.icon} size="sm" className="text-accent" />
                      <span className="text-[10px] font-semibold text-accent">{cap.label}</span>
                    </div>
                  ))}
                </div>

                {/* Breathing pulse ring */}
                <div
                  className="absolute -inset-[1px] rounded-2xl border border-accent/10"
                  style={{ animation: "breathe 3s ease-in-out infinite" }}
                />
              </div>

              {/* Connector labels */}
              <div className="absolute left-0 top-1/2 -translate-x-[calc(100%+12px)] -translate-y-1/2">
                <div className="flex items-center gap-1">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-accent/30" />
                  <div className="h-1.5 w-1.5 rounded-full bg-accent/40" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
                </div>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-[calc(100%+12px)] -translate-y-1/2">
                <div className="flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent/40" style={{ animation: "pulse-dot 2s ease-in-out infinite 0.5s" }} />
                  <div className="h-[1px] w-8 bg-gradient-to-r from-accent/30 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Output destinations */}
            <div className="flex flex-col items-start gap-3">
              <div className="mb-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Content out
                </p>
              </div>
              {OUTPUT_NODES.map((node, i) => (
                <IntegrationNode key={node.name} {...node} delay={Math.min(i + 2, 4)} side="output" />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: stacked flow */}
        <div className="lg:hidden">
          {/* Input */}
          <div className="reveal reveal-delay-1 mb-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3 text-center">
              Data in
            </p>
            <div className="flex justify-center">
              {INPUT_NODES.map((node) => (
                <IntegrationNode key={node.name} {...node} delay={1} side="input" />
              ))}
            </div>
          </div>

          {/* Flow arrow */}
          <div className="flex justify-center py-2">
            <Icon icon={Icons.chevronDown} size="sm" className="text-accent/40" />
          </div>

          {/* Center engine */}
          <div className="reveal reveal-delay-2 relative mx-auto max-w-[280px] mb-4">
            <div className="absolute inset-0 -m-3 rounded-3xl bg-accent/[0.05] blur-xl" />
            <div className="relative rounded-2xl border border-accent/25 bg-gradient-to-b from-white to-accent-bg/30 p-5 shadow-[0_4px_24px_-4px_rgba(13,148,136,0.15)]">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light">
                  <span className="text-[13px] font-bold leading-none text-white">R</span>
                </div>
                <span className="text-[15px] font-bold tracking-[-0.02em] text-foreground">RankSEO</span>
              </div>
              <div className="flex flex-wrap justify-center gap-1.5">
                {ENGINE_CAPABILITIES.map((cap) => (
                  <div key={cap.label} className="flex items-center gap-1 rounded-full border border-accent/15 bg-accent-bg/40 px-2 py-0.5">
                    <Icon icon={cap.icon} size="sm" className="text-accent" />
                    <span className="text-[10px] font-semibold text-accent">{cap.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flow arrow */}
          <div className="flex justify-center py-2">
            <Icon icon={Icons.chevronDown} size="sm" className="text-accent/40" />
          </div>

          {/* Output */}
          <div className="reveal reveal-delay-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3 text-center">
              Content out
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {OUTPUT_NODES.map((node, i) => (
                <IntegrationNode key={node.name} {...node} delay={Math.min(i + 3, 4)} side="output" />
              ))}
            </div>
          </div>
        </div>

        {/* ── Caption ── */}
        <div className="reveal reveal-delay-4 mt-12 text-center">
          <p className="text-[13px] text-muted">
            One engine across research, content, publishing, and tracking.
          </p>
        </div>
      </div>

      {/* Inline keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes breathe {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.6; transform: scale(1.01); }
            }
            @keyframes pulse-dot {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.3); }
            }
          `,
        }}
      />
    </section>
  );
}
