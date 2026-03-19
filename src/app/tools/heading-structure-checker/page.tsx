import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { HeadingStructureChecker } from "@/components/tools/HeadingStructureChecker";

export const metadata: Metadata = {
  title: "Heading Structure Checker | Free SEO Tool | RankSEO",
  description:
    "Analyze heading structure on any page. Check H1, H2, H3 hierarchy, detect SEO issues, and get actionable recommendations.",
  openGraph: {
    title: "Heading Structure Checker | RankSEO",
    description:
      "Free tool to analyze heading hierarchy, detect structural issues, and improve on-page SEO.",
    url: "https://rankseoengine.com/tools/heading-structure-checker",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heading Structure Checker | RankSEO",
    description:
      "Free tool to analyze heading hierarchy, detect structural issues, and improve on-page SEO.",
  },
  alternates: {
    canonical: "https://rankseoengine.com/tools/heading-structure-checker",
  },
};

export default function HeadingStructureCheckerPage() {
  return (
    <ToolLayout>
      <HeadingStructureChecker />
    </ToolLayout>
  );
}
