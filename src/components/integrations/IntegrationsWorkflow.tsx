"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  { number: "01", title: "Connect Search Console" },
  { number: "02", title: "Discover keyword opportunities" },
  { number: "03", title: "Generate content in your brand voice" },
  { number: "04", title: "Publish to your CMS" },
  { number: "05", title: "Track performance and improve" },
];

export function IntegrationsWorkflow() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal mx-auto mb-4 max-w-[560px] text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          From connected tools to a connected SEO workflow
        </h2>
        <p className="reveal reveal-delay-1 mx-auto mb-14 max-w-[560px] text-center text-[15px] leading-[1.7] text-muted">
          RankSEO reduces context switching by bringing your SEO data,
          publishing workflow, and performance tracking into one place.
        </p>

        {/* Desktop */}
        <div className="reveal reveal-delay-2 hidden md:block">
          <div className="relative flex items-start justify-between">
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-border" />
            {steps.map((step) => (
              <div key={step.number} className="relative flex w-[18%] flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-white text-[14px] font-bold text-accent">
                  {step.number}
                </div>
                <h3 className="text-[13px] font-semibold leading-snug text-foreground">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="reveal reveal-delay-2 relative md:hidden">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-5 pl-2">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-[13px] font-bold text-accent">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-[14px] font-semibold text-foreground">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
