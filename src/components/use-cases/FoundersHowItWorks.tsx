const steps = [
  {
    number: "01",
    title: "Connect your site",
    description: "Link your domain and Search Console",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    number: "02",
    title: "Discover opportunities",
    description: "See what keywords you can realistically rank for",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    number: "03",
    title: "Generate content",
    description: "Create articles in your brand voice",
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
  },
  {
    number: "04",
    title: "Publish",
    description: "Push directly to your CMS",
    icon: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
  },
  {
    number: "05",
    title: "Track growth",
    description: "Watch your traffic improve over time",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
];

export function FoundersHowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[520px] px-6">
        <h2 className="reveal mb-14 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          How it works
        </h2>

        <div className="reveal reveal-delay-1 relative">
          {steps.map((step, i) => (
            <div key={step.number} className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative flex gap-5`}>
              {/* Rail */}
              <div className="flex flex-col items-center">
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white transition-all duration-200 hover:border-accent/40 hover:shadow-sm">
                  <svg
                    className="h-[18px] w-[18px] text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-px flex-1 ${
                      i === steps.length - 2
                        ? "bg-gradient-to-b from-border to-transparent"
                        : "bg-border-light"
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  Step {step.number}
                </p>
                <h3 className="mt-1 text-[16px] font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
