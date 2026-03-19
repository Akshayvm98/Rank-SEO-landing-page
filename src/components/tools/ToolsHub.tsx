"use client";

import { useState, useMemo } from "react";
import { Icon, Icons } from "@/components/ui/Icon";
import { getPublishedTools } from "@/lib/tools/tools-data";
import { ToolCTA } from "./ToolCTA";
import { ToolFAQ } from "./ToolFAQ";
import type { ToolMeta } from "@/lib/tools/types";

// ---------------------------------------------------------------------------
// Category definitions with human descriptions
// ---------------------------------------------------------------------------

const CATEGORIES = [
  {
    id: "all",
    label: "All Tools",
    description: "",
  },
  {
    id: "Content SEO",
    label: "Content SEO",
    description: "Understand what your content looks like to readers and search engines.",
  },
  {
    id: "On-Page SEO",
    label: "On-Page SEO",
    description: "Check the elements on your page that help Google understand your content.",
  },
  {
    id: "Technical SEO",
    label: "Technical SEO",
    description: "Find crawl, indexing, and configuration issues that quietly hurt performance.",
  },
  {
    id: "SERP & Optimization",
    label: "SERP & Optimization",
    description: "See how your pages appear in search results and improve click-through rate.",
  },
] as const;

// Humanized taglines that override the registry when needed
const HUMANIZED_TAGLINES: Record<string, string> = {
  "content-length-analyzer": "See if your content has enough depth to compete",
  "readability-checker": "Find out how easy your content is to read and scan",
  "content-structure-checker": "Check headings, paragraphs, lists, and overall flow",
  "meta-tag-checker": "Inspect title tags, descriptions, OG tags, and more",
  "heading-structure-checker": "Verify your H1, H2, H3 hierarchy is correct",
  "keyword-density-checker": "Check how often keywords appear without over-doing it",
  "anchor-text-analyzer": "See if your link text is descriptive or too generic",
  "image-alt-text-checker": "Find images that are missing useful alt descriptions",
  "internal-link-checker": "Audit internal links and anchor text quality",
  "broken-link-checker": "Find dead links before your visitors do",
  "robots-txt-checker": "Make sure your robots.txt is not blocking important pages",
  "sitemap-checker": "Verify your XML sitemap exists and is well-structured",
  "canonical-tag-checker": "Check if canonical tags point to the right URL",
  "noindex-checker": "Detect noindex directives that hide pages from Google",
  "serp-preview-tool": "Preview how your page looks in Google search results",
  "url-slug-analyzer": "Check if your URL slugs are clean and SEO-friendly",
  "title-tag-analyzer": "Analyze title tag length, keywords, and SERP readiness",
  "open-graph-checker": "Check Open Graph tags for better social sharing previews",
};

// Helper text for what each tool checks
const HELPER_TEXT: Record<string, string> = {
  "content-length-analyzer": "Words, reading time, headings, links",
  "readability-checker": "Sentence length, paragraph density, scannability",
  "content-structure-checker": "Headings, paragraphs, lists, internal links",
  "meta-tag-checker": "Title, description, OG, Twitter, canonical, robots",
  "heading-structure-checker": "H1 count, H2/H3 hierarchy, skip detection",
  "keyword-density-checker": "Top keywords, target density, stop word filtering",
  "anchor-text-analyzer": "Anchor quality, generic/empty detection, duplicates",
  "image-alt-text-checker": "Missing alt, empty alt, generic alt, duplicates",
  "internal-link-checker": "Internal/external ratio, anchor quality, link count",
  "broken-link-checker": "404s, server errors, redirects, unreachable links",
  "robots-txt-checker": "Directives, sitemaps, user-agents, blocking rules",
  "sitemap-checker": "Sitemap type, URL count, lastmod, index structure",
  "canonical-tag-checker": "Self-referencing, cross-domain, protocol mismatch",
  "noindex-checker": "Meta robots, X-Robots-Tag, nofollow, directive parsing",
  "serp-preview-tool": "Title length, description length, URL readability",
  "url-slug-analyzer": "Length, stop words, readability, keyword presence",
  "title-tag-analyzer": "Character count, keyword position, repetition check",
  "open-graph-checker": "og:title, og:description, og:image, social preview",
};

const FEATURED_IDS = [
  "content-length-analyzer",
  "meta-tag-checker",
  "robots-txt-checker",
  "readability-checker",
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const allTools = getPublishedTools();

export function ToolsHub() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    let tools = allTools;

    // Category filter
    if (activeCategory !== "all") {
      tools = tools.filter((t) => t.category === activeCategory);
    }

    // Search filter
    const q = search.toLowerCase().trim();
    if (q) {
      tools = tools.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tagline.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          (HUMANIZED_TAGLINES[t.id] ?? "").toLowerCase().includes(q) ||
          (HELPER_TEXT[t.id] ?? "").toLowerCase().includes(q),
      );
    }

    return tools;
  }, [search, activeCategory]);

  // Group filtered tools by category for the categorized view
  const grouped = useMemo(() => {
    if (search.trim()) return null; // flat list when searching
    const groups: { category: typeof CATEGORIES[number]; tools: ToolMeta[] }[] = [];
    for (const cat of CATEGORIES) {
      if (cat.id === "all") continue;
      const catTools = filtered.filter((t) => t.category === cat.id);
      if (catTools.length > 0) {
        groups.push({ category: cat, tools: catTools });
      }
    }
    return groups;
  }, [filtered, search]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative mx-auto max-w-[720px] px-6 text-center">
          <p className="animate-hero inline-block rounded-full bg-accent-bg px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
            18 Free Tools
          </p>
          <h1 className="animate-hero-delay-1 mt-5 text-[2rem] font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.75rem]">
            Free SEO Tools to Analyze, Fix, and Grow Your Traffic
          </h1>
          <p className="animate-hero-delay-2 mx-auto mt-5 max-w-[540px] text-[16px] leading-[1.7] text-muted">
            Practical tools to check content, metadata, technical SEO, and
            on-page issues. No login required. Paste a URL and get results
            in seconds.
          </p>
          <a
            href="#tools"
            className="animate-hero-delay-3 mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            Explore tools
            <Icon icon={Icons.arrowRight} size="sm" />
          </a>
        </div>
      </section>

      {/* ── Featured tools ── */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-[1000px] px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-4">
            Popular tools
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_IDS.map((id) => {
              const tool = allTools.find((t) => t.id === id);
              if (!tool) return null;
              return (
                <a
                  key={tool.id}
                  href={tool.href}
                  className="group flex items-center gap-3 rounded-xl border border-accent/15 bg-accent-bg/20 p-4 transition-all duration-300 hover:bg-accent-bg/40 hover:border-accent/25"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon
                      icon={Icons[tool.icon as keyof typeof Icons] ?? Icons.fileText}
                      size="sm"
                      className="text-accent"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                      {tool.name}
                    </p>
                    <p className="text-[11px] text-muted truncate">
                      {HUMANIZED_TAGLINES[tool.id] ?? tool.tagline}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Search + Filter ── */}
      <section id="tools" className="pt-6 pb-2 md:pt-8">
        <div className="mx-auto max-w-[1000px] px-6">
          {/* Search bar */}
          <div className="relative mb-5">
            <Icon
              icon={Icons.search}
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-light"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools... (e.g. meta, robots, keyword, readability)"
              className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-[14px] text-foreground placeholder:text-muted-light outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_0_4px_rgba(13,148,136,0.06)]"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <Icon icon={Icons.x} size="sm" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearch("");
                }}
                className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-accent text-white shadow-sm"
                    : "bg-border-light text-muted hover:bg-border hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tool Grid ── */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-[1000px] px-6">
          {/* Search results (flat) */}
          {search.trim() ? (
            <>
              <p className="text-[13px] text-muted mb-4">
                {filtered.length} tool{filtered.length !== 1 ? "s" : ""} found
                {search && ` for "${search}"`}
              </p>
              {filtered.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-[15px] text-muted">
                    No tools match your search. Try a different term.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Categorized view */
            grouped?.map(({ category, tools }) => (
              <div key={category.id} className="mb-10 last:mb-0">
                <div className="mb-4">
                  <h2 className="text-[15px] font-bold text-foreground">
                    {category.label}
                  </h2>
                  {category.description && (
                    <p className="mt-0.5 text-[13px] text-muted">
                      {category.description}
                    </p>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── Learn more ── */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-[880px] px-6">
          <div className="text-center mb-6">
            <h2 className="text-[1.25rem] font-bold text-foreground">
              Fix what the tools find
            </h2>
            <p className="mt-1 text-[14px] text-muted">
              Our SEO guides explain how to solve the issues these tools uncover.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/seo-guide/technical-seo/robots-txt-guide", label: "Robots.txt Guide", desc: "Control how search engines crawl your site" },
              { href: "/seo-guide/on-page-seo/internal-linking-best-practices", label: "Internal Linking", desc: "Distribute authority and improve discovery" },
              { href: "/seo-guide/on-page-seo/title-tags", label: "Title Tags", desc: "Write titles that get clicks in search results" },
              { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization", desc: "Improve existing content for better rankings" },
              { href: "/seo-guide/content-seo/content-readability", label: "Readability", desc: "Make content easier to read and scan" },
              { href: "/seo-guide/on-page-seo/headings-seo", label: "Heading Tags", desc: "Structure content with proper heading hierarchy" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex flex-col rounded-xl border border-black/[0.04] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
              >
                <p className="text-[14px] font-semibold text-foreground group-hover:text-accent transition-colors">
                  {link.label}
                </p>
                <p className="mt-0.5 text-[12px] text-muted">
                  {link.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-[680px] px-6">
          <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-bg/30 to-white p-8 text-center">
            <h2 className="text-[1.375rem] font-bold text-foreground">
              Done checking pages one at a time?
            </h2>
            <p className="mt-2 text-[14px] leading-[1.7] text-muted max-w-[460px] mx-auto">
              RankSEO runs these checks across your entire site automatically.
              Find every issue, track every fix, and watch your traffic grow.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="/features"
                className="rounded-xl bg-accent px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
              >
                See what RankSEO does
              </a>
              <a
                href="/pricing"
                className="rounded-xl border border-accent/20 bg-white px-6 py-3 text-[13px] font-semibold text-accent transition-colors hover:bg-accent-bg/50"
              >
                View plans
              </a>
            </div>
          </div>
        </div>
      </section>

      <ToolFAQ
        faqs={[
          {
            question: "Are these tools really free?",
            answer:
              "Yes. You get 2 free analyses per tool each day without creating an account. No credit card, no signup wall. Just paste a URL and go.",
          },
          {
            question: "What can I check with these tools?",
            answer:
              "Content quality, meta tags, heading structure, keyword usage, link health, robots.txt, sitemaps, canonical tags, indexing directives, social sharing tags, and more. Each tool focuses on one specific part of SEO.",
          },
          {
            question: "Do I need to install anything?",
            answer:
              "No. Everything runs in your browser. Paste a URL, click analyze, and see results instantly. Nothing to download or configure.",
          },
          {
            question: "How accurate are the results?",
            answer:
              "Every analysis fetches your live page HTML in real time. Results reflect the actual current state of your page, not cached or estimated data.",
          },
          {
            question: "Can I use these tools on any website?",
            answer:
              "You can analyze any publicly accessible web page. The tools fetch the page the same way a search engine would. Private or password-protected pages cannot be analyzed.",
          },
        ]}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// Tool card component
// ---------------------------------------------------------------------------

function ToolCard({ tool }: { tool: ToolMeta }) {
  const tagline = HUMANIZED_TAGLINES[tool.id] ?? tool.tagline;
  const helper = HELPER_TEXT[tool.id];

  return (
    <a
      href={tool.href}
      className="group relative flex flex-col rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1"
    >
      {/* Top row: icon + badges */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg transition-colors group-hover:bg-accent/10">
          <Icon
            icon={Icons[tool.icon as keyof typeof Icons] ?? Icons.fileText}
            size="md"
            className="text-accent"
          />
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
          Free
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-3 text-[15px] font-bold text-foreground group-hover:text-accent transition-colors">
        {tool.name}
      </h3>

      {/* Tagline */}
      <p className="mt-1 text-[13px] leading-[1.55] text-muted flex-1">
        {tagline}
      </p>

      {/* Helper line */}
      {helper && (
        <p className="mt-2 text-[11px] text-muted-light">
          Checks: {helper}
        </p>
      )}

      {/* CTA */}
      <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-accent transition-all group-hover:gap-2">
        Use tool
        <Icon icon={Icons.arrowRight} size="sm" />
      </span>
    </a>
  );
}
