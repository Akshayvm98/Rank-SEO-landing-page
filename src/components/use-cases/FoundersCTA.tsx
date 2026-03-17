export function FoundersCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <div className="reveal">
          <h2 className="text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
            Start your $1 trial today
          </h2>

          <p className="reveal reveal-delay-1 mt-4 text-[16px] leading-[1.7] text-muted">
            See your first keyword opportunities in minutes.
          </p>

          <div className="reveal reveal-delay-2 mt-8">
            <a
              href="/pricing"
              className="inline-flex h-12 items-center rounded-lg bg-foreground px-8 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
            >
              Start $1 Trial
            </a>
          </div>

          <p className="reveal reveal-delay-3 mt-4 text-[13px] text-muted-light">
            No commitment. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
