export function BloggersProblem() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[720px]">
          <h2 className="reveal text-center text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Writing blog posts is easy. Writing the{" "}
            <span className="italic">right</span> blog posts is the hard part.
          </h2>

          <div className="reveal reveal-delay-1 mt-6 text-center text-[16px] leading-[1.7] text-muted">
            <p>
              A lot of bloggers don&apos;t struggle with writing. They struggle
              with direction.
            </p>
          </div>

          <ul className="reveal reveal-delay-2 mt-8 space-y-3">
            {[
              "What should I write next?",
              "Which keywords are worth targeting?",
              "Why is one post ranking while another gets nothing?",
              "How do I stay consistent without burning out?",
            ].map((question, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-bg">
                  <span className="text-[11px] font-medium text-accent">?</span>
                </span>
                <span>{question}</span>
              </li>
            ))}
          </ul>

          <p className="reveal reveal-delay-3 mt-8 text-center text-[16px] leading-[1.7] text-muted">
            Without a clear system, blogging can quickly turn into guesswork.
          </p>
        </div>

        {/* Visual: Random vs Strategic Publishing */}
        <div className="reveal reveal-delay-3 mx-auto mt-14 grid max-w-[800px] gap-6 sm:grid-cols-2">
          {/* Random Publishing */}
          <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-400" />
              <span className="text-[12px] font-medium text-muted-light">Random publishing</span>
            </div>
            <div className="space-y-2">
              {[
                { title: "My Trip to Paris", angle: "rotate-1" },
                { title: "Random Recipe Post", angle: "-rotate-2" },
                { title: "Why I Love Coffee", angle: "rotate-[0.5deg]" },
                { title: "Weekend Thoughts", angle: "-rotate-1" },
              ].map((post, i) => (
                <div
                  key={i}
                  className={`rounded-lg border border-dashed border-border bg-border-light/30 px-3 py-2 ${post.angle}`}
                >
                  <span className="text-[11px] text-muted-light">{post.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <div className="h-1 flex-1 rounded-full bg-border-light" />
              <span className="text-[10px] text-muted-light">No keyword data</span>
            </div>
          </div>

          {/* Strategic Publishing */}
          <div className="rounded-2xl border border-accent/20 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              <span className="text-[12px] font-medium text-success">Strategic publishing</span>
            </div>
            <div className="space-y-2">
              {[
                { title: "Best Travel Blogs to Follow", kw: "1.2K/mo", num: "01" },
                { title: "Budget Travel Tips for 2026", kw: "3.4K/mo", num: "02" },
                { title: "Paris Travel Guide for Beginners", kw: "5.1K/mo", num: "03" },
                { title: "How to Start a Travel Blog", kw: "8.2K/mo", num: "04" },
              ].map((post, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-border-light bg-accent-bg/30 px-3 py-2"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold text-accent">
                    {post.num}
                  </span>
                  <span className="flex-1 text-[11px] text-foreground/70">{post.title}</span>
                  <span className="shrink-0 rounded-full bg-white px-1.5 py-0.5 text-[9px] font-medium text-accent">
                    {post.kw}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <div className="h-1 flex-1 rounded-full bg-success/20">
                <div className="h-full w-[72%] rounded-full bg-success" />
              </div>
              <span className="text-[10px] text-success">Keyword-driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
