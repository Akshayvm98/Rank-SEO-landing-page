const personas = [
  {
    label: "Founders",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    label: "Content Marketers",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    label: "SEO Professionals",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    label: "Agencies",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    label: "Bloggers",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
    ),
  },
  {
    label: "SaaS Teams",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export function UseCasesHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: Copy */}
          <div>
            <h1 className="reveal text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[2.75rem] lg:text-[3rem]">
              SEO workflows built for the way{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                different teams
              </span>{" "}
              actually work
            </h1>

            <p className="reveal reveal-delay-1 mt-5 max-w-[520px] text-[17px] leading-[1.65] text-muted">
              RankSEO helps founders, marketers, agencies, bloggers, and SaaS teams turn search data
              into content, publishing, and growth — without the usual manual overhead.
            </p>

            <div className="reveal reveal-delay-2 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/pricing"
                className="inline-flex h-11 items-center rounded-lg bg-foreground px-6 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
              >
                Start $1 Trial
              </a>
              <a
                href="/pricing"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-[14px] font-medium text-foreground transition-all duration-200 hover:border-muted-light hover:bg-white"
              >
                View Pricing
              </a>
            </div>

            <p className="reveal reveal-delay-3 mt-5 text-[13px] text-muted-light">
              Choose the use case that fits your workflow best.
            </p>
          </div>

          {/* Right: Persona visual */}
          <div className="reveal reveal-delay-2 relative">
            <PersonaVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonaVisual() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-accent/[0.06] to-accent-light/[0.04] blur-2xl" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Central hub */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light shadow-lg shadow-accent/10">
          <span className="text-[20px] font-bold leading-none text-white">R</span>
        </div>

        {/* Connecting lines indicator */}
        <div className="h-6 w-px bg-gradient-to-b from-accent/40 to-border-light" />

        {/* Persona cards grid */}
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
          {personas.map((persona, i) => (
            <div
              key={persona.label}
              className="group relative flex items-center gap-2.5 rounded-xl border border-border-light bg-white p-3 transition-all duration-300 hover:border-accent-muted/50 hover:shadow-[0_2px_12px_-2px_rgba(13,148,136,0.08)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Connector dot */}
              <div className="absolute -top-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent/30" />

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent">
                {persona.icon}
              </div>
              <span className="text-[12px] font-medium leading-tight text-foreground">
                {persona.label}
              </span>
            </div>
          ))}
        </div>

        {/* Platform label */}
        <div className="rounded-full border border-border-light bg-white px-4 py-1.5 text-[11px] font-medium text-muted">
          One platform. Multiple workflows.
        </div>
      </div>
    </div>
  );
}
