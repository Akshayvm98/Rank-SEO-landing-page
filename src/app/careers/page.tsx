import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Careers } from "@/components/Careers";

export const metadata: Metadata = {
  title: "Careers | RankSEO",
  description:
    "Join the team building the future of SEO automation. See open roles and learn how we work at RankSEO.",
  openGraph: {
    title: "Careers | RankSEO",
    description:
      "Join the team building the future of SEO automation. See open roles and learn how we work.",
    url: "https://rankseoengine.com/careers",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | RankSEO",
    description:
      "Join the team building the future of SEO automation.",
  },
  alternates: {
    canonical: "https://rankseoengine.com/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Careers />
      </main>
      <Footer />
    </>
  );
}
