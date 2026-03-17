import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://rankseoengine.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rank SEO — AI-Powered SEO Automation Platform",
    template: "%s — Rank SEO",
  },
  description:
    "Build an organic growth engine that runs itself. Rank SEO finds keyword opportunities, generates optimized content, and publishes automatically.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rank SEO",
    title: "Rank SEO — AI-Powered SEO Automation Platform",
    description:
      "Build an organic growth engine that runs itself. Rank SEO finds keyword opportunities, generates optimized content, and publishes automatically.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rank SEO — AI-Powered SEO Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rank SEO — AI-Powered SEO Automation Platform",
    description:
      "Build an organic growth engine that runs itself. Connect Search Console, find keywords, generate content, and publish automatically.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var o=new IntersectionObserver(function(e){e.forEach(function(n){if(n.isIntersecting){n.target.classList.add("visible");o.unobserve(n.target)}})},{threshold:0.15,rootMargin:"0px 0px -40px 0px"});function init(){document.querySelectorAll(".reveal:not(.visible)").forEach(function(el){o.observe(el)})}init();new MutationObserver(function(){init()}).observe(document.body,{childList:true,subtree:true})})();`,
          }}
        />
      </body>
    </html>
  );
}
