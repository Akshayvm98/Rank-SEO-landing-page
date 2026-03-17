export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rank SEO",
    url: "https://rank-seo-landing-page.vercel.app",
    logo: "https://rank-seo-landing-page.vercel.app/icon.svg",
    description:
      "AI-Powered SEO Automation Platform. Connect Search Console, find keywords, generate content, and publish automatically.",
    founder: {
      "@type": "Person",
      name: "Anujith Singh",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Rank SEO actually do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rank SEO connects to your Google Search Console, discovers keyword opportunities based on real search data, generates optimized content in your brand voice, and publishes it to your CMS automatically. It handles the full workflow from research to ranking.",
        },
      },
      {
        "@type": "Question",
        name: "How is Rank SEO different from other AI writing tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most AI writing tools generate text from a prompt. Rank SEO starts with your actual search performance data: impressions, clicks, rankings, and content gaps. It uses keyword opportunity scoring, live SERP analysis, and optimization workflows with CMS publishing built in.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need SEO experience to use Rank SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The platform is designed to simplify SEO for non-experts while still giving marketers and experienced teams the control they need. The keyword scoring, content optimization, and publishing workflows are guided step by step.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Rank SEO with my existing website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Rank SEO integrates with WordPress, Webflow, Framer, and Notion. It works with your existing site and publishing workflow. Zero migration required.",
        },
      },
      {
        "@type": "Question",
        name: "Does Rank SEO replace my content team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all. It amplifies them. Rank SEO handles the repetitive parts of SEO research, first drafts, and optimization scoring. Your team stays in full control of voice, strategy, and final approval before anything gets published.",
        },
      },
      {
        "@type": "Question",
        name: "Can I review content before publishing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Every article goes through your review before publishing. You can edit inline, adjust tone, improve the SEO score, and approve or reject content at any stage of the workflow.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rank SEO",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-Powered SEO Automation Platform that connects to Google Search Console, finds keyword opportunities, generates optimized content, and publishes automatically.",
    offers: {
      "@type": "Offer",
      price: "69",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
