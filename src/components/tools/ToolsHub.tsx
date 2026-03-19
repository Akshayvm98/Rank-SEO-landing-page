import { Icon, Icons } from "@/components/ui/Icon";
import { getPublishedTools } from "@/lib/tools/tools-data";
import { ToolCTA } from "./ToolCTA";
import { ToolFAQ } from "./ToolFAQ";

// Categories with published tools + coming-soon placeholders
const categories = [
  {
    name: "Content SEO",
    tools: [
      { id: "content-length-analyzer", live: true },
    ],
    comingSoon: [
      { name: "Readability Checker", description: "Analyze content readability and get improvement suggestions." },
      { name: "Content Structure Analyzer", description: "Check heading hierarchy, paragraph flow, and content organization." },
    ],
  },
  {
    name: "On-Page SEO",
    tools: [
      { id: "meta-tag-checker", live: true },
      { id: "heading-structure-checker", live: true },
      { id: "keyword-density-checker", live: true },
    ],
    comingSoon: [],
  },
  {
    name: "Technical SEO",
    tools: [],
    comingSoon: [
      { name: "Internal Link Checker", description: "Find broken internal links and orphan pages." },
      { name: "Broken Link Checker", description: "Detect broken outbound links on any page." },
      { name: "URL Slug Analyzer", description: "Check URL structure and get optimization tips." },
    ],
  },
  {
    name: "SERP & Optimization",
    tools: [],
    comingSoon: [
      { name: "SERP Preview", description: "Preview how your page appears in Google search results." },
      { name: "Schema Markup Checker", description: "Validate structured data and rich snippet eligibility." },
    ],
  },
];

const publishedTools = getPublishedTools();

function getToolById(id: string) {
  return publishedTools.find((t) => t.id === id);
}

export function ToolsHub() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-10 md:pt-24 md:pb-14">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative mx-auto max-w-[720px] px-6 text-center">
          <p className="animate-hero inline-block rounded-full bg-accent-bg px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
            Free SEO Tools
          </p>
          <h1 className="animate-hero-delay-1 mt-5 text-[2rem] font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.75rem]">
            Free SEO Tools to Grow Your Traffic
          </h1>
          <p className="animate-hero-delay-2 mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.7] text-muted">
            Fast, simple tools to analyze and improve your SEO. No login
            required. Just paste a URL and get actionable insights.
          </p>
        </div>
      </section>

      {/* Tools grid by category */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-[1000px] px-6">
          {categories.map((cat) => (
            <div key={cat.name} className="mb-12 last:mb-0">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent mb-5">
                {cat.name}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Live tools */}
                {cat.tools.map((ref) => {
                  const tool = getToolById(ref.id);
                  if (!tool) return null;
                  return (
                    <a
                      key={tool.id}
                      href={tool.href}
                      className="group relative rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg">
                        <Icon
                          icon={Icons[tool.icon as keyof typeof Icons] ?? Icons.fileText}
                          size="md"
                          className="text-accent"
                        />
                      </div>
                      <h3 className="mt-4 text-[15px] font-bold text-foreground group-hover:text-accent transition-colors">
                        {tool.name}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-[1.6] text-muted">
                        {tool.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-accent transition-all group-hover:gap-2">
                        Use tool
                        <Icon icon={Icons.arrowRight} size="sm" />
                      </span>
                    </a>
                  );
                })}

                {/* Coming soon placeholders */}
                {cat.comingSoon.map((placeholder) => (
                  <div
                    key={placeholder.name}
                    className="relative rounded-2xl border border-dashed border-border bg-surface p-6 opacity-60"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-border-light">
                      <Icon icon={Icons.tool} size="md" className="text-muted-light" />
                    </div>
                    <h3 className="mt-4 text-[15px] font-bold text-foreground">
                      {placeholder.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.6] text-muted">
                      {placeholder.description}
                    </p>
                    <span className="mt-4 inline-block rounded-full bg-border-light px-3 py-1 text-[11px] font-semibold text-muted">
                      Coming soon
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured tool */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-[880px] px-6">
          <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-bg/40 to-white p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-2">
                  Featured tool
                </p>
                <h2 className="text-[1.375rem] font-bold text-foreground md:text-[1.5rem]">
                  Content Length Analyzer
                </h2>
                <p className="mt-2 text-[14px] leading-[1.7] text-muted">
                  Paste any URL and instantly see word count, reading time,
                  heading structure, internal/external links, and SEO
                  content-length recommendations. Know if your content is too
                  thin or just right.
                </p>
                <a
                  href="/tools/content-length-analyzer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
                >
                  Try it free
                  <Icon icon={Icons.arrowRight} size="sm" />
                </a>
              </div>
              <div className="hidden md:block shrink-0">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Word count", value: "1,847" },
                    { label: "Reading time", value: "8 min" },
                    { label: "Headings", value: "12" },
                    { label: "Links", value: "23" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-accent/10 bg-white px-4 py-3"
                    >
                      <p className="text-[10px] font-medium uppercase tracking-wide text-muted-light">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 text-[18px] font-bold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Guide link */}
      <section className="py-6">
        <div className="mx-auto max-w-[680px] px-6">
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
            Learn SEO
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: "/seo-guide", label: "Complete SEO Guide" },
              { href: "/seo-guide/content-seo", label: "Content SEO Guide" },
              { href: "/seo-guide/on-page-seo", label: "On-Page SEO Guide" },
              { href: "/seo-guide/technical-seo", label: "Technical SEO Guide" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ToolCTA
        title="Need a complete SEO platform?"
        description="RankSEO automates keyword research, content creation, optimization, and tracking. Go beyond free tools with a full SEO engine."
      />

      <ToolFAQ
        faqs={[
          {
            question: "Are these SEO tools really free?",
            answer:
              "Yes. Anonymous visitors get 2 free analyses per tool per day. No login is required for your first uses. Create a free account for unlimited access.",
          },
          {
            question: "What can I analyze with these tools?",
            answer:
              "Our tools analyze content length, word count, headings, meta tags, internal and external links, reading time, and more. Each tool focuses on a specific aspect of SEO so you get actionable insights fast.",
          },
          {
            question: "Do I need to install anything?",
            answer:
              "No. All tools run in your browser. Just paste a URL and click analyze. Results appear instantly with no downloads or installations required.",
          },
          {
            question: "How accurate are the results?",
            answer:
              "The tools fetch and parse your actual page HTML in real time. Word counts, heading structures, and link counts are calculated from the live page, not cached data.",
          },
          {
            question: "Will more tools be added?",
            answer:
              "Yes. We are actively building more free SEO tools including heading structure checkers, keyword density analyzers, broken link checkers, and SERP previews. Check back regularly for new additions.",
          },
        ]}
      />
    </>
  );
}
