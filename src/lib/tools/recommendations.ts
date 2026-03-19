// ---------------------------------------------------------------------------
// Deterministic SEO content-length recommendations
// ---------------------------------------------------------------------------

export interface ContentRecommendation {
  label: string;
  color: string; // tailwind color token
  summary: string;
  details: string[];
}

export function getContentLengthRecommendation(wordCount: number): ContentRecommendation {
  if (wordCount < 300) {
    return {
      label: "Very short",
      color: "red",
      summary:
        "This content is too thin for most SEO purposes. Google may consider it low-value.",
      details: [
        "Pages under 300 words rarely rank for competitive keywords",
        "Consider expanding the content with more depth, examples, and supporting sections",
        "Aim for at least 800 words for informational content",
        "Thin pages can hurt your site's overall quality signals",
      ],
    };
  }

  if (wordCount < 800) {
    return {
      label: "Short",
      color: "amber",
      summary:
        "This content may work for simple topics but is likely too short for competitive queries.",
      details: [
        "Short content can rank for low-competition, simple queries",
        "For most blog posts and guides, 1,000 to 2,000 words performs better",
        "Consider adding more sections, examples, or a FAQ to increase depth",
        "Check competitors to see if they cover more ground on the same topic",
      ],
    };
  }

  if (wordCount < 2000) {
    return {
      label: "Solid",
      color: "emerald",
      summary:
        "This is a good content length for most SEO purposes. It shows depth without unnecessary padding.",
      details: [
        "This range works well for most informational queries and blog posts",
        "Focus on quality and structure rather than adding more words",
        "Make sure every section adds genuine value to the reader",
        "Strong headings, internal links, and clear structure matter more than word count at this length",
      ],
    };
  }

  if (wordCount < 4000) {
    return {
      label: "Long-form",
      color: "blue",
      summary:
        "This is comprehensive long-form content. It can perform very well for competitive queries.",
      details: [
        "Long-form content ranks well for competitive and complex topics",
        "Make sure the content is well-structured with clear headings so readers can scan",
        "Add a table of contents for better user experience on longer pages",
        "Verify that every section adds unique value and nothing is padded for length",
      ],
    };
  }

  return {
    label: "Very long",
    color: "violet",
    summary:
      "This content is very long. Make sure it is justified by the topic's complexity.",
    details: [
      "Extremely long content can work for pillar pages and comprehensive guides",
      "Check that readers can navigate the page easily with headings and a table of contents",
      "Consider whether splitting this into multiple focused pages would serve users better",
      "Google does not reward length for its own sake — every section should earn its place",
    ],
  };
}
