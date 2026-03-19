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
    "seo-strategy",
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
    id: "seo-strategy",
    type: "topic",
    title: "SEO Strategy Guide",
    slug: "seo-strategy",
    topicSlug: "seo-strategy",
    excerpt: "Plan your SEO strategy with realistic timelines and priorities",
    category: "Strategy",
    order: 7,
    published: true,
    lastUpdated: "2026-03-18",
    seoTitle: "SEO Strategy Guide | Plan Your SEO With Realistic Timelines",
    seoDescription:
      "Learn how to plan an effective SEO strategy with realistic timelines, priorities, and actionable steps that deliver results.",
    ogTitle: "SEO Strategy Guide | RankSEO",
    ogDescription:
      "Plan your SEO strategy with realistic timelines and clear priorities.",
    ogImage: "/og-image.png",
    twitterTitle: "SEO Strategy Guide | RankSEO",
    twitterDescription:
      "Plan your SEO strategy with realistic timelines and actionable priorities.",
    relatedIds: ["keyword-research", "content-seo", "seo-analytics"],
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
  {
    id: "how-to-find-low-competition-keywords",
    type: "article",
    title: "How to Find Low Competition Keywords",
    slug: "how-to-find-low-competition-keywords",
    topicSlug: "keyword-research",
    excerpt:
      "Learn how to find low competition keywords that are easier to rank for using a step-by-step process.",
    category: "Keyword Research",
    order: 1.5,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 10,
    seoTitle:
      "How to Find Low Competition Keywords (Step-by-Step Guide)",
    seoDescription:
      "Learn how to find low competition keywords that are easier to rank for. A step-by-step process with examples, tools, and a practical checklist.",
    ogTitle: "How to Find Low Competition Keywords | RankSEO",
    ogDescription:
      "Find low competition keywords you can actually rank for with this step-by-step guide.",
    ogImage: "/og-image.png",
    twitterTitle: "How to Find Low Competition Keywords | RankSEO",
    twitterDescription:
      "Step-by-step guide to finding low competition keywords that are easier to rank for.",
    relatedIds: ["keyword-research", "how-to-find-easy-keywords", "keyword-difficulty", "search-intent"],
  },
  {
    id: "ai-content-seo",
    type: "article",
    title: "AI Content SEO",
    slug: "ai-content-seo",
    topicSlug: "content-seo",
    excerpt:
      "Learn how to rank with AI-generated content by combining automation with quality and intent.",
    category: "Content",
    order: 2.5,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 10,
    seoTitle:
      "AI Content SEO: How to Rank with AI-Generated Content",
    seoDescription:
      "Learn how to rank with AI-generated content. Practical guide to making AI content SEO-friendly with quality, structure, and originality.",
    ogTitle: "AI Content SEO | RankSEO",
    ogDescription:
      "How to rank with AI-generated content — practical SEO strategies that work.",
    ogImage: "/og-image.png",
    twitterTitle: "AI Content SEO | RankSEO",
    twitterDescription:
      "Learn how to make AI-generated content rank on Google with practical SEO strategies.",
    relatedIds: ["content-seo", "how-to-write-seo-articles", "content-optimization", "search-intent"],
  },
  {
    id: "blog-seo-checklist",
    type: "article",
    title: "Blog SEO Checklist",
    slug: "blog-seo-checklist",
    topicSlug: "content-seo",
    excerpt:
      "Use this 15-step blog SEO checklist to optimize every article for search, traffic, and visibility.",
    category: "Content",
    order: 2.6,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 9,
    seoTitle:
      "Blog SEO Checklist: 15 Steps to Optimize Every Post",
    seoDescription:
      "Use this blog SEO checklist to optimize every article for search. 15 simple steps to improve rankings, traffic, and visibility.",
    ogTitle: "Blog SEO Checklist | RankSEO",
    ogDescription:
      "15-step blog SEO checklist to optimize every post for better rankings.",
    ogImage: "/og-image.png",
    twitterTitle: "Blog SEO Checklist | RankSEO",
    twitterDescription:
      "Optimize every blog post with this 15-step SEO checklist.",
    relatedIds: ["content-seo", "how-to-write-seo-articles", "content-optimization", "title-tags", "internal-linking"],
  },
  {
    id: "how-to-update-old-content",
    type: "article",
    title: "How to Update Old Content for SEO",
    slug: "how-to-update-old-content",
    topicSlug: "content-seo",
    excerpt:
      "Learn how to update old content for SEO and improve rankings with a step-by-step refresh process.",
    category: "Content",
    order: 2.7,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 9,
    seoTitle:
      "How to Update Old Content for SEO (Step-by-Step Guide)",
    seoDescription:
      "Learn how to update old content for SEO and improve rankings. A step-by-step guide to refresh and optimize existing articles.",
    ogTitle: "How to Update Old Content for SEO | RankSEO",
    ogDescription:
      "Step-by-step guide to refreshing old content for better SEO rankings.",
    ogImage: "/og-image.png",
    twitterTitle: "How to Update Old Content for SEO | RankSEO",
    twitterDescription:
      "How to update and refresh old content to improve your SEO rankings.",
    relatedIds: ["content-seo", "content-optimization", "blog-seo-checklist", "internal-linking"],
  },
  {
    id: "how-long-does-seo-take",
    type: "article",
    title: "How Long Does SEO Take",
    slug: "how-long-does-seo-take",
    topicSlug: "seo-strategy",
    excerpt:
      "Learn how long SEO takes to show results with realistic timelines and factors that affect speed.",
    category: "Strategy",
    order: 7.1,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 10,
    seoTitle:
      "How Long Does SEO Take? Realistic Timeline Explained",
    seoDescription:
      "Learn how long SEO takes to show results. Realistic timelines by strategy type, factors that affect speed, and how to accelerate growth.",
    ogTitle: "How Long Does SEO Take | RankSEO",
    ogDescription:
      "Realistic SEO timelines — how long it takes and what affects the speed of results.",
    ogImage: "/og-image.png",
    twitterTitle: "How Long Does SEO Take | RankSEO",
    twitterDescription:
      "How long does SEO take? Realistic timelines and factors that affect your results.",
    relatedIds: ["seo-strategy", "keyword-difficulty", "how-to-find-low-competition-keywords", "content-seo"],
  },
  {
    id: "semantic-keywords",
    type: "article",
    title: "Semantic Keywords Explained",
    slug: "semantic-keywords",
    topicSlug: "keyword-research",
    excerpt:
      "Learn what semantic keywords are and how to use them to improve SEO with better content context.",
    category: "Keyword Research",
    order: 1.6,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 9,
    seoTitle:
      "Semantic Keywords: What They Are and How to Use Them for SEO",
    seoDescription:
      "Learn what semantic keywords are and how to use them to improve SEO. A practical guide to ranking with better content context.",
    ogTitle: "Semantic Keywords Explained | RankSEO",
    ogDescription:
      "What semantic keywords are and how to use them to improve your SEO rankings.",
    ogImage: "/og-image.png",
    twitterTitle: "Semantic Keywords Explained | RankSEO",
    twitterDescription:
      "Learn what semantic keywords are and how to use them for better SEO results.",
    relatedIds: ["keyword-research", "keyword-clustering", "search-intent", "how-to-find-easy-keywords"],
  },
  {
    id: "how-to-improve-ctr",
    type: "article",
    title: "How to Improve CTR in SEO",
    slug: "how-to-improve-ctr",
    topicSlug: "seo-analytics",
    excerpt:
      "Learn how to improve your CTR in SEO and get more clicks from Google without ranking higher.",
    category: "Analytics",
    order: 6.1,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 10,
    seoTitle:
      "How to Improve CTR in SEO (Increase Clicks Without Ranking Higher)",
    seoDescription:
      "Learn how to improve your CTR in SEO and get more clicks from Google without ranking higher. Practical tips that work.",
    ogTitle: "How to Improve CTR in SEO | RankSEO",
    ogDescription:
      "Get more clicks from Google without ranking higher — practical CTR optimization tips.",
    ogImage: "/og-image.png",
    twitterTitle: "How to Improve CTR in SEO | RankSEO",
    twitterDescription:
      "How to improve your click-through rate in SEO and get more traffic from existing rankings.",
    relatedIds: ["seo-analytics", "title-tags", "content-optimization", "search-intent"],
  },
  {
    id: "robots-txt-guide",
    type: "article",
    title: "Robots.txt Guide",
    slug: "robots-txt-guide",
    topicSlug: "technical-seo",
    excerpt:
      "Learn how to use robots.txt for SEO with simple examples. Control how search engines crawl your site.",
    category: "On-Page",
    order: 4.1,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 9,
    seoTitle:
      "Robots.txt Guide: How to Use It for SEO (With Examples)",
    seoDescription:
      "Learn how to use robots.txt for SEO with simple examples. Avoid common mistakes and control how search engines crawl your site.",
    ogTitle: "Robots.txt Guide | RankSEO",
    ogDescription:
      "How to use robots.txt for SEO — simple examples and common mistakes to avoid.",
    ogImage: "/og-image.png",
    twitterTitle: "Robots.txt Guide | RankSEO",
    twitterDescription:
      "Learn how to use robots.txt for SEO with practical examples and best practices.",
    relatedIds: ["technical-seo", "on-page-seo", "content-seo"],
  },
  {
    id: "seo-for-startups",
    type: "article",
    title: "SEO for Startups",
    slug: "seo-for-startups",
    topicSlug: "seo-strategy",
    excerpt:
      "Learn how startups can use SEO to get their first organic traffic with a simple, practical framework.",
    category: "Strategy",
    order: 7.2,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 9,
    seoTitle:
      "SEO for Startups: A Simple Guide to Getting Your First Organic Traffic",
    seoDescription:
      "Learn how startups can use SEO to get their first users. A simple, practical guide to growing organic traffic without a big team.",
    ogTitle: "SEO for Startups | RankSEO",
    ogDescription:
      "A simple guide to getting your first organic traffic as a startup.",
    ogImage: "/og-image.png",
    twitterTitle: "SEO for Startups | RankSEO",
    twitterDescription:
      "How startups can use SEO to get their first organic traffic — simple, practical, no big team required.",
    relatedIds: ["seo-strategy", "how-to-find-easy-keywords", "how-to-write-seo-articles", "content-optimization"],
  },
  {
    id: "seo-writing-mistakes",
    type: "article",
    title: "10 SEO Writing Mistakes",
    slug: "seo-writing-mistakes",
    topicSlug: "content-seo",
    excerpt:
      "Avoid these common SEO writing mistakes that hurt your rankings. Learn what to fix and how to improve your content.",
    category: "Content",
    order: 2.8,
    published: true,
    lastUpdated: "2026-03-18",
    readingTime: 10,
    seoTitle:
      "10 SEO Writing Mistakes That Are Killing Your Rankings",
    seoDescription:
      "Avoid these common SEO writing mistakes that hurt your rankings. Learn what to fix and how to improve your content.",
    ogTitle: "10 SEO Writing Mistakes | RankSEO",
    ogDescription:
      "Common SEO writing mistakes that hurt your rankings — and how to fix them.",
    ogImage: "/og-image.png",
    twitterTitle: "10 SEO Writing Mistakes | RankSEO",
    twitterDescription:
      "Avoid these SEO writing mistakes that are killing your rankings. Practical fixes included.",
    relatedIds: ["content-seo", "search-intent", "how-to-write-seo-articles", "content-optimization", "title-tags"],
  },
  {
    id: "why-pages-are-not-indexed",
    type: "article",
    title: "Why Pages Are Not Indexed by Google",
    slug: "why-pages-are-not-indexed",
    topicSlug: "technical-seo",
    excerpt:
      "Learn why your pages are not indexed by Google and how to fix common indexing issues step by step.",
    category: "On-Page",
    order: 4.2,
    published: true,
    lastUpdated: "2026-03-19",
    readingTime: 11,
    seoTitle:
      "Why My Pages Are Not Indexed by Google (How to Fix It)",
    seoDescription:
      "Struggling with pages not indexed by Google? Learn the real reasons and how to fix indexing issues fast.",
    ogTitle: "Why Pages Are Not Indexed by Google | RankSEO",
    ogDescription:
      "Learn why Google is not indexing your pages and how to diagnose and fix the most common causes.",
    ogImage: "/og-image.png",
    twitterTitle: "Why Pages Are Not Indexed | RankSEO",
    twitterDescription:
      "Pages not showing up in Google? Learn the common causes and exactly how to fix them.",
    relatedIds: ["technical-seo", "robots-txt-guide", "internal-linking", "content-optimization"],
  },
  {
    id: "why-impressions-but-no-clicks",
    type: "article",
    title: "Why Impressions but No Clicks",
    slug: "why-impressions-but-no-clicks",
    topicSlug: "on-page-seo",
    excerpt:
      "Getting impressions but no clicks? Learn why your CTR is low and how to turn visibility into real traffic.",
    category: "On-Page",
    order: 3.3,
    published: true,
    lastUpdated: "2026-03-19",
    readingTime: 10,
    seoTitle:
      "Why Impressions but No Clicks (And How to Fix It)",
    seoDescription:
      "Getting impressions but no clicks? Learn why your CTR is low and how to turn visibility into real traffic.",
    ogTitle: "Why Impressions but No Clicks | RankSEO",
    ogDescription:
      "Your pages show up in Google but nobody clicks. Learn why and how to fix it.",
    ogImage: "/og-image.png",
    twitterTitle: "Why Impressions but No Clicks | RankSEO",
    twitterDescription:
      "Getting impressions but no clicks in Google? Learn the common causes and how to improve your CTR.",
    relatedIds: ["on-page-seo", "title-tags", "search-intent", "content-optimization", "how-to-improve-ctr"],
  },
  {
    id: "why-my-website-is-not-ranking",
    type: "article",
    title: "Why My Website Is Not Ranking",
    slug: "why-my-website-is-not-ranking",
    topicSlug: "technical-seo",
    excerpt:
      "Learn why your website is not ranking on Google and how to fix common SEO issues step by step.",
    category: "On-Page",
    order: 4.3,
    published: true,
    lastUpdated: "2026-03-19",
    readingTime: 11,
    seoTitle:
      "Why My Website Is Not Ranking on Google (And How to Fix It)",
    seoDescription:
      "Wondering why your website is not ranking on Google? Learn the real reasons and how to fix your SEO step by step.",
    ogTitle: "Why My Website Is Not Ranking | RankSEO",
    ogDescription:
      "Learn why your website is not ranking on Google and the steps to fix it.",
    ogImage: "/og-image.png",
    twitterTitle: "Why My Website Is Not Ranking | RankSEO",
    twitterDescription:
      "Your website is not ranking on Google? Learn the common causes and how to fix them.",
    relatedIds: ["technical-seo", "why-pages-are-not-indexed", "how-to-find-low-competition-keywords", "internal-linking", "content-optimization"],
  },
  {
    id: "why-ranking-dropped",
    type: "article",
    title: "Why Your Rankings Dropped",
    slug: "why-ranking-dropped",
    topicSlug: "technical-seo",
    excerpt:
      "Did your rankings drop suddenly? Learn the common causes and how to recover your traffic quickly.",
    category: "On-Page",
    order: 4.4,
    published: true,
    lastUpdated: "2026-03-19",
    readingTime: 11,
    seoTitle:
      "Why Your Rankings Dropped Suddenly (And How to Fix It)",
    seoDescription:
      "Did your rankings drop suddenly? Learn the common causes of ranking drops and how to recover your traffic quickly.",
    ogTitle: "Why Your Rankings Dropped | RankSEO",
    ogDescription:
      "Rankings dropped suddenly? Learn why it happened and how to recover your traffic.",
    ogImage: "/og-image.png",
    twitterTitle: "Why Your Rankings Dropped | RankSEO",
    twitterDescription:
      "Sudden ranking drop? Learn the common causes and step-by-step recovery process.",
    relatedIds: ["technical-seo", "why-my-website-is-not-ranking", "why-pages-are-not-indexed", "how-to-update-old-content", "internal-linking"],
  },
  {
    id: "new-website-no-traffic",
    type: "article",
    title: "Why Your New Website Is Not Getting Traffic",
    slug: "new-website-no-traffic",
    topicSlug: "technical-seo",
    excerpt:
      "Learn why your new website is not getting traffic and what to do about it with a clear, step-by-step plan.",
    category: "On-Page",
    order: 4.5,
    published: true,
    lastUpdated: "2026-03-19",
    readingTime: 10,
    seoTitle:
      "Why Your New Website Is Not Getting Traffic (And How to Fix It)",
    seoDescription:
      "New website getting zero traffic? Learn why it happens and the exact steps to start getting organic visitors from Google.",
    ogTitle: "Why Your New Website Is Not Getting Traffic | RankSEO",
    ogDescription:
      "Learn why your new website has no traffic and what to do about it step by step.",
    ogImage: "/og-image.png",
    twitterTitle: "New Website No Traffic | RankSEO",
    twitterDescription:
      "New website with no traffic? Learn the common causes and a clear plan to fix it.",
    relatedIds: ["technical-seo", "how-long-does-seo-take", "how-to-find-low-competition-keywords", "why-pages-are-not-indexed", "seo-for-startups"],
  },
  {
    id: "discovered-not-indexed",
    type: "article",
    title: "Discovered but Not Indexed",
    slug: "discovered-not-indexed",
    topicSlug: "technical-seo",
    excerpt:
      "Learn what 'Discovered, currently not indexed' means in Google Search Console and how to fix it.",
    category: "On-Page",
    order: 4.6,
    published: true,
    lastUpdated: "2026-03-19",
    readingTime: 10,
    seoTitle:
      "Discovered but Not Indexed: What It Means and How to Fix It",
    seoDescription:
      "Seeing 'Discovered, currently not indexed' in Google Search Console? Learn what it means, why it happens, and how to get your pages indexed.",
    ogTitle: "Discovered but Not Indexed | RankSEO",
    ogDescription:
      "Learn what 'Discovered, currently not indexed' means and how to fix it in Google Search Console.",
    ogImage: "/og-image.png",
    twitterTitle: "Discovered but Not Indexed | RankSEO",
    twitterDescription:
      "Fix the 'Discovered, currently not indexed' status in Google Search Console with this step-by-step guide.",
    relatedIds: ["technical-seo", "why-pages-are-not-indexed", "robots-txt-guide", "internal-linking", "new-website-no-traffic"],
  },
];

// ---------------------------------------------------------------------------
// Full registry
// ---------------------------------------------------------------------------

export const guidePages: GuidePage[] = [pillar, ...topics, ...articles];
