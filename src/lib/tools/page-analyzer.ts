// ---------------------------------------------------------------------------
// Shared page analysis pipeline for all URL-based free tools
// ---------------------------------------------------------------------------

import * as cheerio from "cheerio";
import type { PageAnalysis, PageHeading, PageLink } from "./types";

// ---------------------------------------------------------------------------
// URL validation & safety
// ---------------------------------------------------------------------------

const BLOCKED_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "[::1]",
  "metadata.google.internal",
  "169.254.169.254",
]);

const PRIVATE_IP_PATTERNS = [
  /^10\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^192\.168\./,
  /^0\./,
  /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./,
];

export function validateUrl(input: string): { valid: true; url: URL } | { valid: false; error: string } {
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return { valid: false, error: "Invalid URL format" };
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    return { valid: false, error: "Only http and https URLs are allowed" };
  }

  const hostname = url.hostname.toLowerCase();

  if (BLOCKED_HOSTS.has(hostname)) {
    return { valid: false, error: "This URL target is not allowed" };
  }

  if (PRIVATE_IP_PATTERNS.some((p) => p.test(hostname))) {
    return { valid: false, error: "Private IP addresses are not allowed" };
  }

  if (hostname.endsWith(".local") || hostname.endsWith(".internal")) {
    return { valid: false, error: "Internal hostnames are not allowed" };
  }

  return { valid: true, url };
}

// ---------------------------------------------------------------------------
// Fetch page HTML safely
// ---------------------------------------------------------------------------

const FETCH_TIMEOUT_MS = 15_000;
const MAX_CONTENT_SIZE = 5 * 1024 * 1024; // 5 MB

export async function fetchPage(url: URL): Promise<{ html: string; statusCode: number; contentType: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url.toString(), {
      signal: controller.signal,
      headers: {
        "User-Agent": "RankSEO-Analyzer/1.0 (+https://rankseoengine.com)",
        Accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) {
      throw new Error("URL does not return HTML content");
    }

    const contentLength = response.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > MAX_CONTENT_SIZE) {
      throw new Error("Page content is too large to analyze");
    }

    const html = await response.text();

    if (html.length > MAX_CONTENT_SIZE) {
      throw new Error("Page content is too large to analyze");
    }

    return {
      html,
      statusCode: response.status,
      contentType,
    };
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// HTML parsing & extraction
// ---------------------------------------------------------------------------

function extractVisibleText($: cheerio.CheerioAPI): string {
  // Remove non-visible elements
  $("script, style, noscript, iframe, svg, canvas, [hidden], [aria-hidden='true']").remove();

  const body = $("body");
  if (!body.length) return $.text();

  return body.text().replace(/\s+/g, " ").trim();
}

function extractHeadings($: cheerio.CheerioAPI): PageHeading[] {
  const headings: PageHeading[] = [];
  $("h1, h2, h3, h4, h5, h6").each((_, el) => {
    const tag = ((el as unknown as { tagName?: string }).tagName ?? "").toLowerCase();
    const level = parseInt(tag.replace("h", ""), 10);
    const text = $(el).text().trim();
    if (text && !isNaN(level)) {
      headings.push({ level, text });
    }
  });
  return headings;
}

function extractLinks($: cheerio.CheerioAPI, pageUrl: URL): { internal: PageLink[]; external: PageLink[] } {
  const internal: PageLink[] = [];
  const external: PageLink[] = [];

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") ?? "";
    const text = $(el).text().trim();
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
      return;
    }

    let absoluteHref: string;
    try {
      absoluteHref = new URL(href, pageUrl.origin).toString();
    } catch {
      return;
    }

    try {
      const linkUrl = new URL(absoluteHref);
      const isInternal = linkUrl.hostname === pageUrl.hostname;
      const link: PageLink = { href: absoluteHref, text: text.slice(0, 200), isInternal };
      if (isInternal) {
        internal.push(link);
      } else {
        external.push(link);
      }
    } catch {
      // skip malformed
    }
  });

  return { internal, external };
}

// ---------------------------------------------------------------------------
// Text statistics
// ---------------------------------------------------------------------------

function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => w.length > 0).length;
}

function countSentences(text: string): number {
  const matches = text.match(/[.!?]+(?:\s|$)/g);
  return matches ? matches.length : text.length > 0 ? 1 : 0;
}

function countParagraphs($: cheerio.CheerioAPI): number {
  let count = 0;
  $("p").each((_, el) => {
    const text = $(el).text().trim();
    if (text.length > 0) count++;
  });
  return Math.max(count, 1);
}

// ---------------------------------------------------------------------------
// Main analysis function
// ---------------------------------------------------------------------------

export async function analyzePage(urlString: string): Promise<PageAnalysis> {
  const validation = validateUrl(urlString);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const { html } = await fetchPage(validation.url);
  const $ = cheerio.load(html);

  const title = $("title").first().text().trim() || $("h1").first().text().trim() || "";
  const metaDescription =
    $('meta[name="description"]').attr("content")?.trim() ??
    $('meta[property="og:description"]').attr("content")?.trim() ??
    "";

  const visibleText = extractVisibleText($);
  const headings = extractHeadings(cheerio.load(html)); // re-parse to get headings from full HTML
  const { internal: internalLinks, external: externalLinks } = extractLinks(cheerio.load(html), validation.url);

  const wordCount = countWords(visibleText);
  const characterCount = visibleText.length;
  const characterCountNoSpaces = visibleText.replace(/\s/g, "").length;
  const sentenceCount = countSentences(visibleText);
  const paragraphCount = countParagraphs(cheerio.load(html));

  // Average reading speed: 238 wpm, speaking: 150 wpm
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / 238));
  const speakingTimeMinutes = Math.max(1, Math.round(wordCount / 150));

  const headingCounts: Record<string, number> = {};
  for (const h of headings) {
    const key = `h${h.level}`;
    headingCounts[key] = (headingCounts[key] ?? 0) + 1;
  }

  return {
    url: validation.url.toString(),
    title,
    metaDescription,
    wordCount,
    characterCount,
    characterCountNoSpaces,
    sentenceCount,
    paragraphCount,
    readingTimeMinutes,
    speakingTimeMinutes,
    headings,
    headingCounts,
    internalLinks,
    externalLinks,
    internalLinkCount: internalLinks.length,
    externalLinkCount: externalLinks.length,
  };
}
