/** Data-driven contextual CTA for tool pages */

const CTA_MAP: Record<string, { title: string; description: string }> = {
  "content-length-analyzer": {
    title: "Want to analyze your entire site?",
    description: "RankSEO checks content length, structure, and SEO readiness across every page. Find thin content and weak pages before they hurt your rankings.",
  },
  "readability-checker": {
    title: "Want readability checks across your entire site?",
    description: "RankSEO analyzes readability, content structure, and engagement signals on every page. Find the content that is losing readers before it loses rankings.",
  },
  "keyword-density-checker": {
    title: "Want keyword analysis at scale?",
    description: "RankSEO tracks keyword usage, density, and optimization opportunities across every page on your site.",
  },
  "content-structure-checker": {
    title: "Want full content audits?",
    description: "RankSEO analyzes structure, readability, and SEO signals across every page. Find what needs fixing without checking pages one by one.",
  },
  "image-alt-text-checker": {
    title: "Want image SEO checks across your site?",
    description: "RankSEO audits alt text, image optimization, and accessibility across every page automatically.",
  },
  "meta-tag-checker": {
    title: "Want to audit metadata across your entire site?",
    description: "RankSEO checks title tags, descriptions, Open Graph, and all metadata on every page. Find issues at scale and fix them before they cost you traffic.",
  },
  "title-tag-analyzer": {
    title: "Want title analysis across your whole site?",
    description: "RankSEO checks every title tag, meta description, and on-page element across your entire site.",
  },
  "url-slug-analyzer": {
    title: "Want URL optimization across your site?",
    description: "RankSEO audits every URL on your site for SEO issues, readability, and structure.",
  },
  "anchor-text-analyzer": {
    title: "Want anchor text analysis at scale?",
    description: "RankSEO audits anchor text, internal links, and linking patterns across every page.",
  },
  "robots-txt-checker": {
    title: "Want to monitor robots.txt and crawl health automatically?",
    description: "RankSEO watches your robots.txt, sitemaps, and crawlability across your entire site. Catch blocking issues before they hurt your rankings.",
  },
  "sitemap-checker": {
    title: "Want full sitemap and crawl analysis?",
    description: "RankSEO monitors your sitemap, crawlability, and indexing health across your entire site.",
  },
  "canonical-tag-checker": {
    title: "Want canonical checks across your site?",
    description: "RankSEO audits canonical tags, redirects, and indexing signals across every page.",
  },
  "noindex-checker": {
    title: "Want indexing checks across your site?",
    description: "RankSEO monitors noindex directives, crawlability, and indexing health across every page.",
  },
  "broken-link-checker": {
    title: "Want site-wide broken link detection?",
    description: "RankSEO crawls your entire site and finds every broken link, redirect chain, and orphan page automatically.",
  },
  "internal-link-checker": {
    title: "Want site-wide internal link analysis?",
    description: "RankSEO audits internal links across your entire site. Find orphan pages, fix broken links, and optimize anchor text at scale.",
  },
  "heading-structure-checker": {
    title: "Want full on-page SEO analysis?",
    description: "RankSEO checks heading structure, content quality, keyword placement, and internal linking across your entire site.",
  },
  "serp-preview-tool": {
    title: "Want to optimize every page at scale?",
    description: "RankSEO checks title tags, meta descriptions, and SERP appearance across your entire site automatically.",
  },
  "open-graph-checker": {
    title: "Want Open Graph checks across your site?",
    description: "RankSEO audits meta tags, Open Graph, and social sharing readiness across every page.",
  },
};

const DEFAULT_CTA = {
  title: "Done checking pages one at a time?",
  description: "RankSEO runs these checks across your entire site automatically. Find every issue, fix what matters, and watch your traffic grow.",
};

export function ToolContextCTA({ toolId }: { toolId: string }) {
  const cta = CTA_MAP[toolId] ?? DEFAULT_CTA;

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-[680px] px-6">
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-bg/30 to-white p-8 text-center">
          <h2 className="text-[1.375rem] font-bold text-foreground">
            {cta.title}
          </h2>
          <p className="mt-2 max-w-[460px] mx-auto text-[14px] leading-[1.7] text-muted">
            {cta.description}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="/features"
              className="rounded-xl bg-accent px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md"
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
          <p className="mt-4 text-[12px] text-muted-light">
            Fast, practical checks without the clutter.
          </p>
        </div>
      </div>
    </section>
  );
}
