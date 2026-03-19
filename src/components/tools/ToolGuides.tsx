/** Data-driven guide links section for tool pages */

const GUIDE_MAP: Record<string, { intro: string; links: { href: string; label: string }[] }> = {
  "content-length-analyzer": {
    intro: "Learn how to improve what you found",
    links: [
      { href: "/seo-guide/content-seo/how-to-write-seo-articles", label: "How to Write SEO Articles" },
      { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
      { href: "/seo-guide/content-seo/blog-seo-checklist", label: "Blog SEO Checklist" },
    ],
  },
  "readability-checker": {
    intro: "Make your content easier to read",
    links: [
      { href: "/seo-guide/content-seo/how-to-write-seo-articles", label: "How to Write SEO Articles" },
      { href: "/seo-guide/content-seo/seo-writing-mistakes", label: "SEO Writing Mistakes to Avoid" },
      { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
    ],
  },
  "keyword-density-checker": {
    intro: "Understand keyword usage better",
    links: [
      { href: "/seo-guide/keyword-research/semantic-keywords", label: "Semantic Keywords Explained" },
      { href: "/seo-guide/keyword-research/keyword-clustering", label: "Keyword Clustering Guide" },
      { href: "/seo-guide/keyword-research/how-to-find-low-competition-keywords", label: "Find Low-Competition Keywords" },
    ],
  },
  "content-structure-checker": {
    intro: "Improve your content structure",
    links: [
      { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
      { href: "/seo-guide/content-seo/how-to-write-seo-articles", label: "How to Write SEO Articles" },
      { href: "/seo-guide/content-seo/seo-writing-mistakes", label: "SEO Writing Mistakes" },
    ],
  },
  "image-alt-text-checker": {
    intro: "Learn about image SEO",
    links: [
      { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
      { href: "/seo-guide/on-page-seo/title-tags", label: "Title Tags Explained" },
    ],
  },
  "meta-tag-checker": {
    intro: "Fix what you found",
    links: [
      { href: "/seo-guide/on-page-seo/title-tags", label: "Title Tags Explained" },
      { href: "/seo-guide/content-seo/why-your-content-is-not-ranking", label: "Why Content Is Not Ranking" },
      { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
    ],
  },
  "title-tag-analyzer": {
    intro: "Write better title tags",
    links: [
      { href: "/seo-guide/on-page-seo/title-tags", label: "Title Tags Explained" },
      { href: "/seo-guide/seo-analytics/how-to-improve-ctr", label: "How to Improve CTR" },
    ],
  },
  "url-slug-analyzer": {
    intro: "Improve your URL structure",
    links: [
      { href: "/seo-guide/content-seo/seo-writing-mistakes", label: "SEO Writing Mistakes" },
      { href: "/seo-guide/keyword-research/search-intent", label: "Search Intent Explained" },
    ],
  },
  "anchor-text-analyzer": {
    intro: "Strengthen your internal links",
    links: [
      { href: "/seo-guide/on-page-seo/internal-linking", label: "Internal Linking Guide" },
      { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
    ],
  },
  "robots-txt-checker": {
    intro: "Understand your robots.txt better",
    links: [
      { href: "/seo-guide/technical-seo/robots-txt-guide", label: "Robots.txt Guide" },
      { href: "/seo-guide/content-seo/why-your-content-is-not-ranking", label: "Why Content Is Not Ranking" },
    ],
  },
  "sitemap-checker": {
    intro: "Learn about sitemaps and crawling",
    links: [
      { href: "/seo-guide/technical-seo/robots-txt-guide", label: "Robots.txt Guide" },
      { href: "/seo-guide/content-seo/how-to-increase-organic-traffic", label: "How to Increase Organic Traffic" },
    ],
  },
  "canonical-tag-checker": {
    intro: "Understand canonical tags",
    links: [
      { href: "/seo-guide/content-seo/why-your-content-is-not-ranking", label: "Why Content Is Not Ranking" },
      { href: "/seo-guide/content-seo/how-to-update-old-content", label: "How to Update Old Content" },
    ],
  },
  "noindex-checker": {
    intro: "Fix indexing issues",
    links: [
      { href: "/seo-guide/content-seo/why-your-content-is-not-ranking", label: "Why Content Is Not Ranking" },
      { href: "/seo-guide/content-seo/how-to-increase-organic-traffic", label: "How to Increase Organic Traffic" },
    ],
  },
  "broken-link-checker": {
    intro: "Fix broken links and improve site health",
    links: [
      { href: "/seo-guide/on-page-seo/internal-linking", label: "Internal Linking Guide" },
      { href: "/seo-guide/content-seo/how-to-update-old-content", label: "How to Update Old Content" },
    ],
  },
  "internal-link-checker": {
    intro: "Build stronger internal links",
    links: [
      { href: "/seo-guide/on-page-seo/internal-linking", label: "Internal Linking Guide" },
      { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
    ],
  },
  "heading-structure-checker": {
    intro: "Improve your heading structure",
    links: [
      { href: "/seo-guide/on-page-seo/headings-seo", label: "Heading Tags Best Practices" },
      { href: "/seo-guide/content-seo/blog-structure", label: "Blog Structure for SEO" },
    ],
  },
  "serp-preview-tool": {
    intro: "Improve your search appearance",
    links: [
      { href: "/seo-guide/seo-analytics/how-to-improve-ctr", label: "How to Improve CTR" },
      { href: "/seo-guide/on-page-seo/title-tags", label: "Title Tags Explained" },
    ],
  },
  "open-graph-checker": {
    intro: "Improve your social sharing setup",
    links: [
      { href: "/seo-guide/seo-analytics/how-to-improve-ctr", label: "How to Improve CTR" },
      { href: "/seo-guide/content-seo/content-optimization", label: "Content Optimization Guide" },
    ],
  },
};

/** Shared guide links section for tool pages */
export function ToolGuides({ toolId }: { toolId: string }) {
  const config = GUIDE_MAP[toolId];
  if (!config) return null;

  return (
    <section className="py-6">
      <div className="mx-auto max-w-[680px] px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-1">
          {config.intro}
        </p>
        <p className="text-[13px] text-muted mb-3">
          These guides explain how to fix the issues this tool uncovers.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {config.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent hover:shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
