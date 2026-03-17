import Image from "next/image";
export function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* ── Story ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              Our Story
            </p>
            <h2 className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.5rem]">
              How Rank SEO turns search data into traffic
            </h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                SEO today feels messy. Too many tools, too many tabs, and no
                clear direction.
              </p>
              <p>Rank SEO was built to simplify that.</p>
              <p>
                It connects to your Search Console, understands what&apos;s
                working, and turns that into content that grows your traffic.
              </p>
              <p className="font-medium text-foreground">
                No guesswork. No chaos.
              </p>
            </div>
          </div>

          {/* Product-style visual */}
          <div className="reveal reveal-delay-3">
            <StoryVisual />
          </div>
        </div>

        {/* ── Philosophy ── */}
        <div
          className="mt-28 md:mt-36"
        >
          <div className="reveal relative overflow-hidden rounded-3xl border border-border-light bg-gradient-to-br from-accent-bg/60 via-white to-white px-8 py-16 md:px-16 md:py-20">
            <div className="mx-auto max-w-[640px] text-center">
              <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
                Product Philosophy
              </p>
              <h2 className="text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.5rem]">
                Intelligent SEO Automation
              </h2>
              <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-muted">
                <p>SEO shouldn&apos;t feel like a full-time job.</p>
                <p>
                  Rank SEO brings research, content, and publishing into one
                  system, powered by real data.
                </p>
                <p>
                  So instead of managing tools, you just focus on building.
                </p>
              </div>
              <p className="mt-8 text-[13px] italic text-muted-light">
                Your always-on SEO system. No coffee breaks.
              </p>
            </div>
          </div>
        </div>

        {/* ── Founder ── */}
        <div
          className="mt-28 grid items-center gap-12 md:mt-36 lg:grid-cols-[auto_1fr] lg:gap-20"
        >
          <div className="reveal mx-auto w-full max-w-[340px] lg:mx-0">
            <Image
              src="/founder.jpg"
              alt="Anujith Singh, Founder of Rank SEO"
              width={340}
              height={453}
              className="rounded-2xl object-cover object-top shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]"
            />
          </div>

          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              Meet the Founder
            </p>
            <h2 className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              Built by someone who got tired of SEO
            </h2>

            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                SEO always felt more complicated than it needed to be.
              </p>
              <p>
                Too many tools. Too much noise. Not enough clarity.
              </p>
              <p>
                Rank SEO started as a way to simplify that. Turning real search
                data into clear, actionable growth.
              </p>
              <p>Not another tool. Something that actually does the work.</p>
            </div>

            <div className="reveal reveal-delay-3 mt-8 border-t border-border-light pt-6">
              <p className="text-[17px] font-semibold text-foreground">
                Anujith Singh
              </p>
              <p className="mt-0.5 text-[14px] text-muted">
                Founder, Rank SEO
              </p>
              <p className="mt-4 text-[13px] italic text-muted-light">
                Still building. Still improving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Inline product visual for Story section ── */
function StoryVisual() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/[0.05] to-accent-light/[0.03] blur-2xl" />

      <div className="relative rounded-2xl border border-border bg-white p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)]">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-success" />
            <span className="text-[13px] font-medium text-foreground">
              Content Pipeline
            </span>
          </div>
          <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">
            Live
          </span>
        </div>

        {/* Pipeline steps */}
        <div className="space-y-2.5">
          {[
            { step: "Search Console", status: "Synced", done: true },
            { step: "Keyword Analysis", status: "42 opportunities", done: true },
            { step: "Content Generation", status: "3 articles ready", done: true },
            { step: "SEO Optimization", status: "Avg. score 91", done: true },
            { step: "Publishing", status: "Auto-scheduled", done: false },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-center justify-between rounded-lg border border-border-light px-3.5 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${
                    item.done
                      ? "bg-success-bg"
                      : "bg-accent-bg"
                  }`}
                >
                  {item.done ? (
                    <svg
                      className="h-3 w-3 text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  )}
                </div>
                <span className="text-[13px] font-medium text-foreground">
                  {item.step}
                </span>
              </div>
              <span className="text-[12px] text-muted-light">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="mt-4 flex items-center justify-between rounded-lg bg-accent-bg/40 px-3.5 py-2.5">
          <span className="text-[12px] text-muted">Total pipeline time</span>
          <span className="text-[13px] font-semibold text-accent">
            12 min avg.
          </span>
        </div>
      </div>
    </div>
  );
}
