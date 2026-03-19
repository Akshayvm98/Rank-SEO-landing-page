import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ContentLengthAnalyzer } from "@/components/tools/ContentLengthAnalyzer";

export const metadata: Metadata = {
  title: "Content Length Analyzer | Free SEO Tool | RankSEO",
  description:
    "Check if your content is the right length for SEO. Analyze word count, headings, links, and reading time. Get free SEO recommendations.",
  openGraph: {
    title: "Content Length Analyzer | RankSEO",
    description:
      "Free tool to analyze page content length, structure, and SEO readiness.",
    url: "https://rankseoengine.com/free-tools/content-length-analyzer",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Length Analyzer | RankSEO",
    description:
      "Free tool to analyze page content length, structure, and SEO readiness.",
  },
  alternates: {
    canonical: "https://rankseoengine.com/free-tools/content-length-analyzer",
  },
};

export default function ContentLengthAnalyzerPage() {
  return (
    <ToolLayout>
      <ContentLengthAnalyzer />
    </ToolLayout>
  );
}
