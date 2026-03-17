"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "Connect your website",
    description: "Link your domain and Google Search Console",
  },
  {
    number: "02",
    title: "Discover keywords",
    description: "Get scored opportunities based on real data",
  },
  {
    number: "03",
    title: "Generate content",
    description: "AI writes in your brand voice with SEO structure",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Score and improve before anything goes live",
  },
  {
    number: "05",
    title: "Publish & track",
    description: "Push to CMS and monitor performance",
  },
];

export function FeaturesWorkflow() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal mx-auto mb-14 max-w-[500px] text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          From search data to published content
        </h2>

        {/* Desktop horizontal flow */}
        <div className="reveal reveal-delay-1 hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-border" />

            {steps.map((step) => (
              <div key={step.number} className="relative flex w-[18%] flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-white text-[14px] font-bold text-accent">
                  {step.number}
                </div>
                <h3 className="mb-1 text-[14px] font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="reveal reveal-delay-1 relative md:hidden">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-5 pl-2">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-[13px] font-bold text-accent">
                  {step.number}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-[14px] font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-0.5 text-[13px] text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
