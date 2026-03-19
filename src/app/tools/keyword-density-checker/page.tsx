import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { KeywordDensityChecker } from "@/components/tools/KeywordDensityChecker";

export const metadata: Metadata = {
  title: "Keyword Density Checker | Free SEO Tool | RankSEO",
  description:
    "Analyze keyword frequency and density on any page. See top keywords, check specific term usage, and get SEO recommendations.",
  openGraph: {
    title: "Keyword Density Checker | RankSEO",
    description:
      "Free tool to analyze keyword density, term frequency, and content balance for SEO.",
    url: "https://rankseoengine.com/tools/keyword-density-checker",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyword Density Checker | RankSEO",
    description:
      "Free tool to analyze keyword density, term frequency, and content balance for SEO.",
  },
  alternates: {
    canonical: "https://rankseoengine.com/tools/keyword-density-checker",
  },
};

export default function KeywordDensityCheckerPage() {
  return (
    <ToolLayout>
      <KeywordDensityChecker />
    </ToolLayout>
  );
}
