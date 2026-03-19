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
  // Future tools — add entries here as they are built
  // {
  //   id: "heading-structure-checker",
  //   slug: "heading-structure-checker",
  //   name: "Heading Structure Checker",
  //   ...
  // },
];

export function getToolBySlug(slug: string): ToolMeta | null {
  return freeTools.find((t) => t.slug === slug && t.published) ?? null;
}

export function getPublishedTools(): ToolMeta[] {
  return freeTools.filter((t) => t.published);
}
