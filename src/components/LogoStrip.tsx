const brands = ["Nova Labs", "Craftly", "Brightpath", "Atlas Studio", "PixelForge", "Growthlane"];

export function LogoStrip() {
  return (
    <section className="border-y border-border-light py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal flex flex-col items-center gap-8">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted-light">
            Trusted by growing teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-[15px] font-semibold tracking-[-0.01em] text-foreground/25 select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
