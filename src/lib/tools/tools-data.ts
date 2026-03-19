// ---------------------------------------------------------------------------
// Registry of all free tools — single source of truth
// ---------------------------------------------------------------------------

import type { ToolMeta } from "./types";

export const freeTools: ToolMeta[] = [
  {
    id: "content-length-analyzer",
    slug: "content-length-analyzer",
    name: "Content Length Analyzer",
    tagline: "Check if your content is the right length for SEO",
    description:
      "Analyze any page's word count, headings, links, and reading time. Get SEO recommendations based on content length.",
    category: "Content",
    icon: "fileText",
    href: "/tools/content-length-analyzer",
    published: true,
  },
  {
    id: "meta-tag-checker",
    slug: "meta-tag-checker",
    name: "Meta Tag Checker",
    tagline: "Analyze meta tags on any page for SEO",
    description:
      "Check title tags, meta descriptions, Open Graph, Twitter Cards, canonical, robots, and all other meta tags. Get length assessments and optimization tips.",
    category: "On-Page SEO",
    icon: "tag",
    href: "/tools/meta-tag-checker",
    published: true,
  },
  {
    id: "heading-structure-checker",
    slug: "heading-structure-checker",
    name: "Heading Structure Checker",
    tagline: "Analyze heading hierarchy and detect SEO issues",
    description:
      "Check H1, H2, H3 structure on any page. Detect missing headings, hierarchy issues, and get actionable recommendations.",
    category: "On-Page SEO",
    icon: "alignLeft",
    href: "/tools/heading-structure-checker",
    published: true,
  },
  {
    id: "keyword-density-checker",
    slug: "keyword-density-checker",
    name: "Keyword Density Checker",
    tagline: "Analyze keyword frequency and content balance",
    description:
      "Check keyword density, see top terms, and analyze specific keyword usage on any page. Get practical SEO recommendations.",
    category: "On-Page SEO",
    icon: "target",
    href: "/tools/keyword-density-checker",
    published: true,
  },
  // Future tools — add entries here as they are built
];

export function getToolBySlug(slug: string): ToolMeta | null {
  return freeTools.find((t) => t.slug === slug && t.published) ?? null;
}

export function getPublishedTools(): ToolMeta[] {
  return freeTools.filter((t) => t.published);
}
