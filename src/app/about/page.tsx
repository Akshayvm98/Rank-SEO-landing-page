import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Rank SEO turns search data into traffic. Meet the founder and learn about the product philosophy behind intelligent SEO automation.",
  openGraph: {
    title: "About — Rank SEO",
    description:
      "How Rank SEO turns search data into traffic. Meet the founder and learn about the product philosophy behind intelligent SEO automation.",
    url: "/about",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About Rank SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Rank SEO",
    description:
      "How Rank SEO turns search data into traffic. Meet the founder and learn about the product philosophy behind intelligent SEO automation.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
