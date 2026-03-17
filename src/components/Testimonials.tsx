const testimonials = [
  {
    quote:
      "We went from scattered SEO tasks to a repeatable content engine in days. The keyword scoring alone saved us hours of manual research every week.",
    name: "Sarah Chen",
    role: "Growth Lead",
    company: "Brightpath",
    initials: "SC",
  },
  {
    quote:
      "The brand voice controls are surprisingly good. I was skeptical, but the output genuinely feels like our team wrote it. We publish with minimal edits now.",
    name: "Marcus Rivera",
    role: "Founder",
    company: "Craftly",
    initials: "MR",
  },
  {
    quote:
      "Going from keyword discovery to a published article in one flow saved us hours every week. Our organic traffic is up 34% in three months.",
    name: "Emily Zhao",
    role: "Content Manager",
    company: "Atlas Studio",
    initials: "EZ",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Real results from real teams
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Marketers and founders scaling organic traffic with confidence.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} flex flex-col rounded-2xl border border-border-light bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:-translate-y-1`}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mb-6 flex-1 text-[15px] leading-[1.7] text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 border-t border-border-light pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-bg text-[13px] font-semibold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-foreground">{t.name}</p>
                  <p className="text-[13px] text-muted">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
