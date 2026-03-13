export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-foreground/5 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white text-sm font-bold">
              B
            </div>
            <span className="text-lg font-semibold tracking-tight">
              BlogCraft
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">
              How It Works
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground sm:block">
              Log in
            </button>
            <button className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-float absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
          <div className="animate-float absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-light/10 blur-3xl [animation-delay:3s]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Now with AI-powered editing
            </div>
            <h1 className="animate-fade-up text-5xl font-bold leading-tight tracking-tight md:text-7xl [animation-delay:0.1s]">
              Write blogs that
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                {" "}captivate
              </span>
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl [animation-delay:0.2s]">
              From first draft to final polish, BlogCraft helps you create
              compelling blog posts in minutes — not hours.
            </p>
            <div className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center [animation-delay:0.3s]">
              <button className="w-full rounded-xl bg-accent px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 sm:w-auto">
                Start Writing — It&apos;s Free
              </button>
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl border border-foreground/10 px-8 py-3.5 text-base font-medium transition-all hover:border-foreground/20 hover:bg-surface sm:w-auto">
                <svg
                  className="h-5 w-5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Watch Demo
              </button>
            </div>
            <p className="animate-fade-in mt-5 text-sm text-muted [animation-delay:0.5s]">
              No credit card required. Free plan includes 10 posts/month.
            </p>
          </div>

          {/* Hero visual — editor mockup */}
          <div className="animate-fade-up relative mx-auto mt-16 max-w-4xl [animation-delay:0.4s]">
            <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface shadow-2xl shadow-black/10">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-foreground/5 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto rounded-md bg-foreground/5 px-12 py-1 text-xs text-muted">
                  my-latest-post.md
                </div>
              </div>
              {/* Editor content */}
              <div className="p-8 md:p-12">
                <div className="space-y-4 font-mono text-sm leading-relaxed">
                  <p className="text-muted"># How to Build a Successful Blog</p>
                  <p className="text-muted/60">
                    Writing a great blog post starts with understanding your audience.
                    Here are the key principles that separate good content from great
                    content...
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-1 text-xs text-accent">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                      AI is writing...
                    </span>
                    <span className="h-5 w-px animate-pulse bg-accent" />
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect behind editor */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-b from-accent/5 to-transparent blur-2xl" />
          </div>
        </div>
      </section>

      {/* Logos / social proof */}
      <section className="border-y border-foreground/5 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-widest text-muted">
            Trusted by writers at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-xl font-semibold text-foreground/20">
            <span>Medium</span>
            <span>Substack</span>
            <span>WordPress</span>
            <span>Ghost</span>
            <span>Hashnode</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Everything you need to write better
            </h2>
            <p className="mt-4 text-lg text-muted">
              Powerful features that take you from blank page to published post.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              }
              title="AI Draft Generation"
              description="Describe your topic and get a full first draft in seconds. Our AI understands tone, structure, and audience."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                </svg>
              }
              title="Smart Editor"
              description="A distraction-free editor with inline AI suggestions, real-time grammar fixes, and readability scoring."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9 9 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              }
              title="SEO Optimization"
              description="Built-in SEO analysis ensures your posts rank. Get keyword suggestions, meta descriptions, and more."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              }
              title="Templates Library"
              description="50+ blog templates for how-tos, listicles, reviews, and more. Never start from a blank page again."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              }
              title="Tone Adjustment"
              description="Switch between professional, casual, witty, or academic tones with one click. Your voice, amplified."
            />
            <FeatureCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
              }
              title="One-Click Publish"
              description="Export to Markdown, HTML, or publish directly to WordPress, Medium, Ghost, and more."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-foreground/5 bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Three steps to a great post
            </h2>
            <p className="mt-4 text-lg text-muted">
              Go from idea to published in minutes.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <StepCard
              step="01"
              title="Describe your idea"
              description="Enter your topic, target audience, and preferred tone. Add any key points you want to cover."
            />
            <StepCard
              step="02"
              title="Refine with AI"
              description="Review the AI-generated draft. Edit inline, adjust tone, add your personal touch, and optimize for SEO."
            />
            <StepCard
              step="03"
              title="Publish everywhere"
              description="Export or publish directly to your favorite platform. Track performance with built-in analytics."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Simple, honest pricing
            </h2>
            <p className="mt-4 text-lg text-muted">
              Start free. Upgrade when you need more.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <PricingCard
              name="Starter"
              price="$0"
              period="/month"
              description="Perfect for getting started"
              features={[
                "10 blog posts/month",
                "AI draft generation",
                "Basic templates",
                "Markdown export",
              ]}
            />
            <PricingCard
              name="Pro"
              price="$19"
              period="/month"
              description="For serious bloggers"
              featured
              features={[
                "Unlimited blog posts",
                "Advanced AI editing",
                "50+ templates",
                "SEO optimization",
                "All export formats",
                "Priority support",
              ]}
            />
            <PricingCard
              name="Team"
              price="$49"
              period="/month"
              description="For content teams"
              features={[
                "Everything in Pro",
                "5 team members",
                "Collaboration tools",
                "Brand voice profiles",
                "API access",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-foreground/5">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Ready to write something amazing?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
            Join thousands of writers who craft better content in less time.
          </p>
          <button className="mt-10 rounded-xl bg-accent px-10 py-4 text-base font-medium text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white text-xs font-bold">
              B
            </div>
            <span className="text-sm font-semibold">BlogCraft</span>
          </div>
          <div className="flex gap-8 text-sm text-muted">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Blog</a>
            <a href="#" className="transition-colors hover:text-foreground">Contact</a>
          </div>
          <p className="text-sm text-muted">&copy; 2026 BlogCraft</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-foreground/5 bg-surface p-8 transition-all hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 font-mono text-lg font-bold text-accent">
        {step}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  featured = false,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-8 ${
        featured
          ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
          : "border-foreground/5 bg-surface"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-white">
          Most Popular
        </div>
      )}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-muted">{description}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-sm text-muted">{period}</span>
      </div>
      <button
        className={`mt-6 w-full rounded-xl py-3 text-sm font-medium transition-colors ${
          featured
            ? "bg-accent text-white hover:bg-accent-dark"
            : "border border-foreground/10 hover:bg-foreground/5"
        }`}
      >
        Get Started
      </button>
      <ul className="mt-8 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-muted">
            <svg
              className="h-4 w-4 shrink-0 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
