import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { MetaTagChecker } from "@/components/tools/MetaTagChecker";

export const metadata: Metadata = {
  title: "Meta Tag Checker | Free SEO Tool | RankSEO",
  description:
    "Check meta tags on any page. Analyze title tags, meta descriptions, Open Graph, Twitter Cards, and more. Get free SEO recommendations.",
  openGraph: {
    title: "Meta Tag Checker | RankSEO",
    description:
      "Free tool to analyze meta tags, Open Graph, Twitter Cards, and SEO metadata on any page.",
    url: "https://rankseoengine.com/tools/meta-tag-checker",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Tag Checker | RankSEO",
    description:
      "Free tool to analyze meta tags, Open Graph, Twitter Cards, and SEO metadata on any page.",
  },
  alternates: {
    canonical: "https://rankseoengine.com/tools/meta-tag-checker",
  },
};

export default function MetaTagCheckerPage() {
  return (
    <ToolLayout>
      <MetaTagChecker />
    </ToolLayout>
  );
}
