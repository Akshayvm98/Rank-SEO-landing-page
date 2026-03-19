// ---------------------------------------------------------------------------
// Shared types for the Free Tools platform
// ---------------------------------------------------------------------------

/** Metadata for a registered free tool */
export interface ToolMeta {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon: string; // Lucide icon key
  href: string;
  published: boolean;
}

// ---------------------------------------------------------------------------
// Page analysis pipeline types
// ---------------------------------------------------------------------------

export interface PageFetchResult {
  url: string;
  html: string;
  statusCode: number;
  contentType: string;
}

export interface PageHeading {
  level: number;
  text: string;
}

export interface PageLink {
  href: string;
  text: string;
  isInternal: boolean;
}

export interface PageAnalysis {
  url: string;
  title: string;
  metaDescription: string;
  wordCount: number;
  characterCount: number;
  characterCountNoSpaces: number;
  sentenceCount: number;
  paragraphCount: number;
  readingTimeMinutes: number;
  speakingTimeMinutes: number;
  headings: PageHeading[];
  headingCounts: Record<string, number>; // h1, h2, h3, etc.
  internalLinks: PageLink[];
  externalLinks: PageLink[];
  internalLinkCount: number;
  externalLinkCount: number;
}

// ---------------------------------------------------------------------------
// Usage gating types
// ---------------------------------------------------------------------------

export interface UsageRecord {
  visitorId: string;
  toolId: string;
  count: number;
  lastUsed: number; // unix ms
}

export type GateDecision =
  | { allowed: true; showSignupPrompt: boolean; usageCount: number }
  | { allowed: false; reason: "limit_reached"; usageCount: number };

// ---------------------------------------------------------------------------
// API response types
// ---------------------------------------------------------------------------

export interface AnalyzePageResponse {
  success: true;
  data: PageAnalysis;
  gate: GateDecision;
}

export interface AnalyzePageError {
  success: false;
  error: string;
}

export interface UsageResponse {
  visitorId: string;
  usageCount: number;
  gate: GateDecision;
}
