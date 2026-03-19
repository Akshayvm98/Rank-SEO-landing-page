import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ToolsHub } from "@/components/tools/ToolsHub";

export const metadata: Metadata = {
  title: "Free SEO Tools | Analyze and Improve Your SEO | RankSEO",
  description:
    "Free SEO tools to analyze content length, meta tags, headings, links, and more. Fast, simple tools to help you improve your SEO.",
  openGraph: {
    title: "Free SEO Tools | RankSEO",
    description:
      "Fast, simple SEO tools to analyze and improve your website. No login required.",
    url: "https://rankseoengine.com/tools",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Tools | RankSEO",
    description:
      "Fast, simple SEO tools to analyze and improve your website.",
  },
  alternates: {
    canonical: "https://rankseoengine.com/tools",
  },
};

export default function ToolsPage() {
  return (
    <ToolLayout>
      <ToolsHub />
    </ToolLayout>
  );
}
