import type {
  GuidePage,
  GuidePillarPage,
  GuideTopicPage,
  GuideArticlePage,
} from "./types";

// ---------------------------------------------------------------------------
// Pillar page
// ---------------------------------------------------------------------------

const pillar: GuidePillarPage = {
  id: "pillar",
  type: "pillar",
  title: "SEO Guide",
  slug: "",
  excerpt:
    "A complete SEO guide covering keyword research, content, on-page SEO, technical SEO, link building, and analytics.",
  category: "SEO Guide",
  order: 0,
  published: true,
  lastUpdated: "2026-03-18",
  seoTitle: "SEO Guide | Learn SEO Without the Guesswork",
  seoDescription:
    "A complete SEO guide covering keyword research, content, on-page SEO, technical SEO, link building, and analytics. Practical, structured, and easy to follow.",
  ogTitle: "SEO Guide | RankSEO",
  ogDescription:
    "Learn SEO with a structured guide covering keywords, content, technical SEO, and more.",
  ogImage: "/og-image.png",
  twitterTitle: "SEO Guide | RankSEO",
  twitterDescription:
    "Learn SEO with a structured guide covering keywords, content, technical SEO, and more.",
  relatedIds: [
    "keyword-research",
    "content-seo",
    "on-page-seo",
    "technical-seo",
    "link-building",
    "seo-analytics",
  ],
};

// ---------------------------------------------------------------------------
// Topic pages
// ---------------------------------------------------------------------------

const topics: GuideTopicPage[] = [
  {
    id: "keyword-research",
    type: "topic",
    title: "Keyword Research Guide",
    slug: "keyword-research",
    topicSlug: "keyword-research",
    excerpt: "Find keywords you can actually rank for",
    category: "Keyword Research",
    order: 1,
    published: true,
    lastUpdated: "2026-03-18",
    seoTitle: "Keyword Research Guide | Find Keywords You Can Actually Rank For",
    seoDescription:
      "Learn how to find SEO keywords you can actually rank for using real data. Step-by-step keyword research guide with practical workflows and examples.",
    ogTitle: "Keyword Research Guide | RankSEO",
    ogDescription:
      "Find keywords you can actually rank for using real data and smarter workflows.",
    ogImage: "/og-image.png",
    twitterTitle: "Keyword Research Guide | RankSEO",
    twitterDescription:
      "Find keywords you can actually rank for using real data and smarter workflows.",
    relatedIds: ["content-seo", "on-page-seo", "seo-analytics"],
  },
  {
    id: "content-seo",
    type: "topic",
    title: "Content SEO Guide",
    slug: "content-seo",
    topicSlug: "content-seo",
    excerpt: "Create structured content that performs",
    category: "Content",
    order: 2,
    published: true,
    lastUpdated: "2026-03-18",
    seoTitle: "Content SEO Guide | How to Write Content That Actually Ranks",
    seoDescription:
      "Learn how to create SEO content that is structured, relevant, and built to rank. Practical guide to writing and optimizing content for organic traffic.",
    ogTitle: "Content SEO Guide | RankSEO",
    ogDescription:
      "Learn how to write and optimize content that actually ranks.",
    ogImage: "/og-image.png",
    twitterTitle: "Content SEO Guide | RankSEO",
    twitterDescription:
      "Learn how to write and optimize content that actually ranks.",
    relatedIds: ["keyword-research", "on-page-seo", "link-building"],
  },
  {
    id: "on-page-seo",
    type: "topic",
    title: "On-Page SEO Guide",
    slug: "on-page-seo",
    topicSlug: "on-page-seo",
    excerpt: "Improve titles, structure, and internal links",
    category: "On-Page",
    order: 3,
    published: true,
    lastUpdated: "2026-03-18",
    seoTitle:
      "On-Page SEO Guide | How to Optimize Pages for Better Rankings",
    seoDescription:
      "Learn how on-page SEO works, what actually matters, and how to improve titles, headings, internal links, metadata, and page structure for better rankings.",
    ogTitle: "On-Page SEO Guide | RankSEO",
    ogDescription:
      "Learn how to optimize pages with better titles, structure, links, and metadata.",
    ogImage: "/og-image.png",
    twitterTitle: "On-Page SEO Guide | RankSEO",
    twitterDescription:
      "Practical on-page SEO guide for titles, headings, metadata, and page structure.",
    relatedIds: ["content-seo", "technical-seo", "keyword-research"],
  },
  {
    id: "technical-seo",
    type: "topic",
    title: "Technical SEO Guide",
    slug: "technical-seo",
    topicSlug: "technical-seo",
    excerpt: "Make your site crawlable and fast",
    category: "On-Page",
    order: 4,
    published: true,
    lastUpdated: "2026-03-18",
    seoTitle:
      "Technical SEO Guide | Improve Crawlability, Speed, and Indexing",
    seoDescription:
      "Learn the technical SEO basics that actually matter, including crawlability, indexing, site speed, Core Web Vitals, sitemaps, and robots.txt.",
    ogTitle: "Technical SEO Guide | RankSEO",
    ogDescription:
      "Learn the technical SEO improvements that help pages get crawled, indexed, and loaded faster.",
    ogImage: "/og-image.png",
    twitterTitle: "Technical SEO Guide | RankSEO",
    twitterDescription:
      "Learn the technical SEO improvements that help pages get crawled, indexed, and loaded faster.",
    relatedIds: ["on-page-seo", "seo-analytics", "content-seo"],
  },
  {
    id: "link-building",
    type: "topic",
    title: "Link Building Guide",
    slug: "link-building",
    topicSlug: "link-building",
    excerpt: "Build authority with better links",
    category: "Link Building",
    order: 5,
    published: true,
    lastUpdated: "2026-03-18",
    seoTitle:
      "Link Building Guide | How to Earn Better Backlinks Without Spam",
    seoDescription:
      "Learn practical link building strategies that actually help SEO. Understand backlinks, internal vs external links, common mistakes, and how to build authority without spammy tactics.",
    ogTitle: "Link Building Guide | RankSEO",
    ogDescription:
      "Learn practical link building strategies that improve SEO without relying on spammy tactics.",
    ogImage: "/og-image.png",
    twitterTitle: "Link Building Guide | RankSEO",
    twitterDescription:
      "Practical link building strategies that improve SEO without spammy tactics.",
    relatedIds: ["content-seo", "on-page-seo", "seo-analytics"],
  },
  {
    id: "seo-analytics",
    type: "topic",
    title: "SEO Analytics Guide",
    slug: "seo-analytics",
    topicSlug: "seo-analytics",
    excerpt: "Understand what is working and why",
    category: "Analytics",
    order: 6,
    published: true,
    lastUpdated: "2026-03-18",
    seoTitle: "SEO Analytics Guide | Track What Actually Drives Traffic",
    seoDescription:
      "Learn how to track SEO performance using clicks, impressions, rankings, and CTR. Practical guide to understanding what is working and what to improve.",
    ogTitle: "SEO Analytics Guide | RankSEO",
    ogDescription:
      "Track SEO performance with real metrics that actually matter.",
    ogImage: "/og-image.png",
    twitterTitle: "SEO Analytics Guide | RankSEO",
    twitterDescription:
      "Practical SEO analytics guide for tracking clicks, impressions, rankings, and growth.",
    relatedIds: ["keyword-research", "technical-seo", "content-seo"],
  },
];

// ---------------------------------------------------------------------------
// Article pages (long-tail content nested under topics)
// ---------------------------------------------------------------------------

const articles: GuideArticlePage[] = [
  {
    id: "how-to-find-easy-keywords",
    type: "article",
    title: "How to Find Easy Keywords",
    slug: "how-to-find-easy-keywords",
    topicSlug: "keyword-research",
    excerpt:
      "Learn how to find low-competition keywords that you can realistically rank for.",
    category: "Keyword Research",
    order: 1.1,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 7,
    seoTitle:
      "How to Find Easy Keywords (That You Can Actually Rank For)",
    seoDescription:
      "Learn how to find low-competition keywords that you can realistically rank for. A practical keyword research strategy using real data.",
    ogTitle: "How to Find Easy Keywords | RankSEO",
    ogDescription:
      "Find low-competition keywords you can actually rank for using real data.",
    ogImage: "/og-image.png",
    twitterTitle: "How to Find Easy Keywords | RankSEO",
    twitterDescription:
      "A practical guide to finding low-competition keywords you can realistically rank for.",
    relatedIds: ["keyword-research", "content-seo", "seo-analytics"],
  },
  {
    id: "search-intent",
    type: "article",
    title: "Search Intent Explained",
    slug: "search-intent",
    topicSlug: "keyword-research",
    excerpt:
      "Understand why some pages rank and others fail — it comes down to matching what users actually want.",
    category: "Keyword Research",
    order: 1.2,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 8,
    seoTitle:
      "Search Intent Explained (And Why Most Content Fails Without It)",
    seoDescription:
      "Learn what search intent is, the different types, and how to match your content to what users actually want. Improve rankings by understanding intent.",
    ogTitle: "Search Intent Explained | RankSEO",
    ogDescription:
      "Learn what search intent is and how to match your content to what users actually want.",
    ogImage: "/og-image.png",
    twitterTitle: "Search Intent Explained | RankSEO",
    twitterDescription:
      "Understand search intent and why it decides which pages rank and which ones fail.",
    relatedIds: ["keyword-research", "content-seo", "how-to-find-easy-keywords"],
  },
  {
    id: "keyword-difficulty",
    type: "article",
    title: "Keyword Difficulty Explained",
    slug: "keyword-difficulty",
    topicSlug: "keyword-research",
    excerpt:
      "Learn how to evaluate keyword difficulty so you stop wasting time on keywords you cannot rank for.",
    category: "Keyword Research",
    order: 1.3,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 9,
    seoTitle:
      "Keyword Difficulty Explained (How to Tell If You Can Rank)",
    seoDescription:
      "Learn what keyword difficulty really means, how to evaluate it beyond a single score, and how to tell if a keyword is actually worth targeting for your site.",
    ogTitle: "Keyword Difficulty Explained | RankSEO",
    ogDescription:
      "Learn how to evaluate keyword difficulty and stop wasting time on keywords you cannot rank for.",
    ogImage: "/og-image.png",
    twitterTitle: "Keyword Difficulty Explained | RankSEO",
    twitterDescription:
      "How to tell if a keyword is actually worth targeting — beyond just a difficulty score.",
    relatedIds: ["keyword-research", "how-to-find-easy-keywords", "search-intent"],
  },
  {
    id: "keyword-clustering",
    type: "article",
    title: "Keyword Clustering Explained",
    slug: "keyword-clustering",
    topicSlug: "keyword-research",
    excerpt:
      "Learn how to group keywords into clusters and create stronger, more structured SEO content.",
    category: "Keyword Research",
    order: 1.4,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 8,
    seoTitle:
      "Keyword Clustering Explained (How to Build Smarter SEO Content)",
    seoDescription:
      "Learn how to group keywords into clusters and create stronger, more structured SEO content. Improve rankings with better topic coverage.",
    ogTitle: "Keyword Clustering Explained | RankSEO",
    ogDescription:
      "Group keywords into clusters to create stronger, more structured SEO content.",
    ogImage: "/og-image.png",
    twitterTitle: "Keyword Clustering Explained | RankSEO",
    twitterDescription:
      "Learn how keyword clustering helps you build smarter, higher-ranking SEO content.",
    relatedIds: ["keyword-research", "content-seo", "search-intent", "keyword-difficulty"],
  },
  {
    id: "how-to-write-seo-articles",
    type: "article",
    title: "How to Write SEO Articles",
    slug: "how-to-write-seo-articles",
    topicSlug: "content-seo",
    excerpt:
      "Learn how to write SEO articles that rank on Google with a practical step-by-step process.",
    category: "Content",
    order: 2.1,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 9,
    seoTitle: "How to Write SEO Articles That Actually Rank",
    seoDescription:
      "Learn how to write SEO articles that rank on Google. A practical step-by-step guide to structure, keywords, and content optimization.",
    ogTitle: "How to Write SEO Articles | RankSEO",
    ogDescription:
      "A practical guide to writing SEO articles that actually rank on Google.",
    ogImage: "/og-image.png",
    twitterTitle: "How to Write SEO Articles | RankSEO",
    twitterDescription:
      "Learn how to write SEO articles that rank with structure, intent, and clarity.",
    relatedIds: ["content-seo", "search-intent", "keyword-clustering"],
  },
  {
    id: "content-optimization",
    type: "article",
    title: "Content Optimization Guide",
    slug: "content-optimization",
    topicSlug: "content-seo",
    excerpt:
      "Learn how to optimize existing content for better SEO rankings without rewriting everything.",
    category: "Content",
    order: 2.2,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 8,
    seoTitle:
      "Content Optimization Guide (How to Improve Rankings Without Writing More)",
    seoDescription:
      "Learn how to optimize your existing content for better SEO rankings. Improve structure, keywords, and readability without rewriting everything.",
    ogTitle: "Content Optimization Guide | RankSEO",
    ogDescription:
      "Improve your existing content for better rankings without starting from scratch.",
    ogImage: "/og-image.png",
    twitterTitle: "Content Optimization Guide | RankSEO",
    twitterDescription:
      "How to optimize existing content for better SEO rankings — practical, actionable improvements.",
    relatedIds: ["content-seo", "how-to-write-seo-articles", "on-page-seo", "seo-analytics"],
  },
  {
    id: "why-your-content-is-not-ranking",
    type: "article",
    title: "Why Your Content Is Not Ranking",
    slug: "why-your-content-is-not-ranking",
    topicSlug: "content-seo",
    excerpt:
      "Learn the real reasons your content is not ranking on Google and how to fix them.",
    category: "Content",
    order: 2.3,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 9,
    seoTitle: "Why Your Content Is Not Ranking (And How to Fix It)",
    seoDescription:
      "Struggling to rank on Google? Learn the real reasons your content is not ranking and how to fix them with practical, actionable steps.",
    ogTitle: "Why Your Content Is Not Ranking | RankSEO",
    ogDescription:
      "Learn the real reasons your content is not ranking and how to fix them.",
    ogImage: "/og-image.png",
    twitterTitle: "Why Your Content Is Not Ranking | RankSEO",
    twitterDescription:
      "Struggling to rank? Learn the real reasons and practical fixes for underperforming content.",
    relatedIds: ["how-to-find-easy-keywords", "search-intent", "content-optimization", "seo-analytics"],
  },
  {
    id: "how-to-increase-organic-traffic",
    type: "article",
    title: "How to Increase Organic Traffic",
    slug: "how-to-increase-organic-traffic",
    topicSlug: "content-seo",
    excerpt:
      "Learn how to increase organic traffic using practical SEO strategies and a clear growth framework.",
    category: "Content",
    order: 2.4,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 9,
    seoTitle: "How to Increase Organic Traffic (Without Guesswork)",
    seoDescription:
      "Learn how to increase organic traffic using practical SEO strategies. Improve rankings, content, and visibility with clear, actionable steps.",
    ogTitle: "How to Increase Organic Traffic | RankSEO",
    ogDescription:
      "Practical strategies to grow organic traffic without guesswork.",
    ogImage: "/og-image.png",
    twitterTitle: "How to Increase Organic Traffic | RankSEO",
    twitterDescription:
      "Learn how to grow organic traffic with a clear, actionable SEO growth framework.",
    relatedIds: ["how-to-find-easy-keywords", "how-to-write-seo-articles", "content-optimization", "seo-analytics"],
  },
  {
    id: "title-tags",
    type: "article",
    title: "Title Tags Explained",
    slug: "title-tags",
    topicSlug: "on-page-seo",
    excerpt:
      "Learn how to write SEO title tags that improve rankings and increase click-through rate.",
    category: "On-Page",
    order: 3.1,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 7,
    seoTitle: "Title Tags Explained (How to Write Titles That Get Clicks)",
    seoDescription:
      "Learn how to write SEO title tags that improve rankings and increase click-through rate. Practical tips and examples included.",
    ogTitle: "Title Tags Explained | RankSEO",
    ogDescription:
      "Write better title tags that improve your click-through rate and SEO rankings.",
    ogImage: "/og-image.png",
    twitterTitle: "Title Tags Explained | RankSEO",
    twitterDescription:
      "How to write title tags that get clicks and improve your SEO rankings.",
    relatedIds: ["on-page-seo", "how-to-write-seo-articles", "content-optimization"],
  },
  {
    id: "internal-linking",
    type: "article",
    title: "Internal Linking Guide",
    slug: "internal-linking",
    topicSlug: "on-page-seo",
    excerpt:
      "Learn how internal linking improves SEO, rankings, and site structure with practical strategies.",
    category: "On-Page",
    order: 3.2,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 8,
    seoTitle: "Internal Linking Guide (How to Boost SEO With Better Connections)",
    seoDescription:
      "Learn how internal linking improves SEO, rankings, and site structure. A practical guide to building better internal links.",
    ogTitle: "Internal Linking Guide | RankSEO",
    ogDescription:
      "A practical guide to internal linking that improves SEO and site structure.",
    ogImage: "/og-image.png",
    twitterTitle: "Internal Linking Guide | RankSEO",
    twitterDescription:
      "How internal linking improves your SEO more than you think — practical strategies included.",
    relatedIds: ["on-page-seo", "keyword-clustering", "content-optimization", "seo-analytics"],
  },
];

// ---------------------------------------------------------------------------
// Full registry
// ---------------------------------------------------------------------------

export const guidePages: GuidePage[] = [pillar, ...topics, ...articles];
