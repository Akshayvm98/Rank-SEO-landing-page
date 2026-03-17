import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FeaturesHero } from "@/components/features/FeaturesHero";
import { CoreFeatures } from "@/components/features/CoreFeatures";
import { DetailedFeatures } from "@/components/features/DetailedFeatures";
import { FeaturesWorkflow } from "@/components/features/FeaturesWorkflow";
import { Integrations } from "@/components/Integrations";
import { TeamSection } from "@/components/features/TeamSection";
import { FeaturesCTA } from "@/components/features/FeaturesCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "RankSEO Features | AI SEO Automation Platform",
  description:
    "Explore RankSEO features including keyword discovery, AI content generation, SEO optimization, publishing, and performance tracking — all in one workflow.",
  openGraph: {
    title: "RankSEO Features",
    description:
      "Turn search data into traffic with automated SEO workflows.",
    url: "/features",
    siteName: "RankSEO",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RankSEO Features",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RankSEO Features",
    description:
      "Discover how RankSEO automates SEO from keywords to publishing.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturesHero />
        <CoreFeatures />
        <DetailedFeatures />
        <FeaturesWorkflow />
        <Integrations />
        <TeamSection />
        <FeaturesCTA />
      </main>
      <Footer />
    </>
  );
}
