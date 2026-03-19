"use client";

import { useState } from "react";
import { Icon, Icons } from "@/components/ui/Icon";
import { ToolHero } from "./ToolHero";
import { ToolInput } from "./ToolInput";
import { ToolResultCard } from "./ToolResultCard";
import { ToolCTA } from "./ToolCTA";
import { ToolFAQ } from "./ToolFAQ";
import { ToolError } from "./ToolError";
import { ToolLoading } from "./ToolLoading";
import { ToolRelated } from "./ToolRelated";
import { GateModal } from "./GateModal";
import { SignupPrompt } from "./SignupPrompt";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import type { PageAnalysis, GateDecision } from "@/lib/tools/types";

const TOOL_ID = "content-length-analyzer";

// ---------------------------------------------------------------------------
// Deterministic content evaluation
// ---------------------------------------------------------------------------

type ContentGrade = "too-short" | "decent" | "strong" | "long-form" | "very-long";

interface Evaluation {
  grade: ContentGrade;
  label: string;
  color: string;
  badgeColor: string;
  borderColor: string;
  summary: string;
  guidance: string;
}

function evaluateContent(wordCount: number): Evaluation {
  if (wordCount < 300) {
    return {
      grade: "too-short",
      label: "Too short",
      color: "text-red-700",
      badgeColor: "bg-red-100 text-red-700",
      borderColor: "border-red-200 bg-red-50/40",
      summary: "This content is likely too thin to cover most topics well. Search engines generally favor pages with more substance.",
      guidance: "Most blog posts and informational pages need at least 800 words to provide meaningful depth. Consider expanding your key sections with examples, details, or supporting points.",
    };
  }
  if (wordCount < 800) {
    return {
      grade: "decent",
      label: "Short",
      color: "text-amber-700",
      badgeColor: "bg-amber-100 text-amber-700",
      borderColor: "border-amber-200 bg-amber-50/40",
      summary: "This may work for simple topics, but most competitive queries need more depth to rank well.",
      guidance: "For blog posts and guides, 1,000 to 2,000 words tends to perform best. Landing pages can work at this length if the copy is focused and clear.",
    };
  }
  if (wordCount < 1500) {
    return {
      grade: "decent",
      label: "Decent",
      color: "text-blue-700",
      badgeColor: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-200 bg-blue-50/40",
      summary: "This is a reasonable length for many topics. It shows depth without unnecessary padding.",
      guidance: "You are in a solid range for most blog posts. Focus on quality, structure, and making sure every section adds genuine value to the reader.",
    };
  }
  if (wordCount < 2500) {
    return {
      grade: "strong",
      label: "Strong",
      color: "text-emerald-700",
      badgeColor: "bg-emerald-100 text-emerald-700",
      borderColor: "border-emerald-200 bg-emerald-50/40",
      summary: "This is a strong content length for most SEO purposes. Pages in this range tend to rank well when the content is well-structured.",
      guidance: "At this length, structure matters more than adding words. Use clear headings, short paragraphs, and internal links to keep readers engaged throughout.",
    };
  }
  if (wordCount < 4000) {
    return {
      grade: "long-form",
      label: "Long-form",
      color: "text-blue-700",
      badgeColor: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-200 bg-blue-50/40",
      summary: "This is comprehensive long-form content. It can perform very well for competitive and complex topics.",
      guidance: "Make sure readers can navigate easily. Add a table of contents, use clear headings, and break dense sections into smaller chunks. Every section should earn its place.",
    };
  }
  return {
    grade: "very-long",
    label: "Very long",
    color: "text-violet-700",
    badgeColor: "bg-violet-100 text-violet-700",
    borderColor: "border-violet-200 bg-violet-50/40",
    summary: "This content is very long. That can work for pillar pages and comprehensive guides, but only if the depth is justified.",
    guidance: "Consider whether splitting this into focused subtopic pages would serve readers better. Google does not reward length for its own sake. Check that no section feels padded or redundant.",
  };
}

// ---------------------------------------------------------------------------
// Lightweight readability hints
// ---------------------------------------------------------------------------

interface ReadabilityHint {
  status: "good" | "warning";
  message: string;
}

function getReadabilityHints(result: PageAnalysis): ReadabilityHint[] {
  const hints: ReadabilityHint[] = [];
  const { wordCount, paragraphCount, headings, sentenceCount } = result;

  // Paragraph density
  if (paragraphCount > 0 && wordCount > 300) {
    const avgWordsPerParagraph = Math.round(wordCount / paragraphCount);
    if (avgWordsPerParagraph > 120) {
      hints.push({ status: "warning", message: "Some paragraphs look quite dense. Breaking them into smaller chunks would improve readability." });
    } else if (avgWordsPerParagraph <= 60) {
      hints.push({ status: "good", message: "Paragraph length looks good for scanning." });
    }
  }

  // Heading coverage
  if (wordCount > 500 && headings.length === 0) {
    hints.push({ status: "warning", message: "No headings found. Adding H2 and H3 headings would make this content much easier to scan." });
  } else if (wordCount > 500 && headings.length > 0) {
    const ratio = wordCount / headings.length;
    if (ratio > 500) {
      hints.push({ status: "warning", message: "Very few headings for this content length. More headings would improve scannability." });
    } else {
      hints.push({ status: "good", message: "Heading coverage looks reasonable for this content length." });
    }
  }

  // Sentence length (rough check)
  if (sentenceCount > 0 && wordCount > 300) {
    const avgWordsPerSentence = Math.round(wordCount / sentenceCount);
    if (avgWordsPerSentence > 25) {
      hints.push({ status: "warning", message: "Sentences are on the long side. Shorter sentences are easier to read on screens." });
    }
  }

  // Internal links
  if (wordCount > 500 && result.internalLinkCount === 0) {
    hints.push({ status: "warning", message: "No internal links found. Adding links to related pages helps both readers and search engines." });
  }

  if (hints.length === 0) {
    hints.push({ status: "good", message: "Content structure looks good at a glance." });
  }

  return hints;
}

// ---------------------------------------------------------------------------
// Smart recommendations
// ---------------------------------------------------------------------------

function getSmartRecommendations(result: PageAnalysis, grade: ContentGrade): string[] {
  const recs: string[] = [];
  const { wordCount, headings, paragraphCount, internalLinkCount, externalLinkCount } = result;

  if (grade === "too-short") {
    recs.push("Expand your content to cover the topic more thoroughly. Aim for at least 800 words for informational pages.");
    recs.push("Add sections that address common follow-up questions readers might have.");
  }

  if (grade === "decent" && wordCount < 1000) {
    recs.push("Consider adding more depth. Look at what top-ranking pages cover that yours does not.");
  }

  if (headings.length === 0 && wordCount > 300) {
    recs.push("Add subheadings (H2, H3) to break the content into clear, scannable sections.");
  } else if (headings.length > 0 && wordCount > 800 && wordCount / headings.length > 400) {
    recs.push("Add more headings. One heading per 200 to 300 words helps readers navigate longer content.");
  }

  if (paragraphCount > 0 && wordCount / paragraphCount > 100) {
    recs.push("Break long paragraphs into shorter ones. Two to four sentences per paragraph works best on screens.");
  }

  if (internalLinkCount === 0 && wordCount > 300) {
    recs.push("Add internal links to 3 to 5 related pages on your site. This helps readers and improves crawlability.");
  }

  if (externalLinkCount === 0 && wordCount > 800) {
    recs.push("Consider linking to authoritative external sources where they add value.");
  }

  if (grade === "long-form" || grade === "very-long") {
    recs.push("Add a table of contents near the top so readers can jump to the section they need.");
    if (headings.length > 0) {
      recs.push("Review each section and remove anything that feels redundant or padded.");
    }
  }

  if (recs.length === 0) {
    recs.push("Content length and structure look solid. Focus on quality and making sure every section adds genuine value.");
  }

  return recs;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ContentLengthAnalyzer() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PageAnalysis | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/analyze-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), toolId: TOOL_ID }),
      });

      const data = await res.json();

      if (!data.success) {
        if (res.status === 429) {
          setGate(data.gate);
          setShowGateModal(true);
          trackToolEvent("gate_triggered", { toolId: TOOL_ID });
          return;
        }
        throw new Error(data.error || "Analysis failed");
      }

      setResult(data.data);
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, wordCount: data.data.wordCount });

      if (data.gate?.showSignupPrompt) {
        trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      trackToolEvent("analysis_failed", { toolId: TOOL_ID, error: message });
    } finally {
      setLoading(false);
    }
  }

  const evaluation = result ? evaluateContent(result.wordCount) : null;
  const readabilityHints = result ? getReadabilityHints(result) : [];
  const recommendations = result && evaluation ? getSmartRecommendations(result, evaluation.grade) : [];

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Content Length Analyzer"
        subtitle="See how your page content stacks up. Get word count, reading time, structure insights, and practical recommendations for better SEO."
      />

      <ToolInput
        value={url}
        onChange={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        loadingMessage="Analyzing content..."
        placeholder="https://example.com/blog-post"
        buttonText="Analyze page"
      />

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {/* Loading */}
      {loading && <ToolLoading message="Fetching and analyzing page content..." />}

      {/* Error */}
      {error && <ToolError message={error} onRetry={handleAnalyze} />}

      {/* Results */}
      {result && evaluation && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">

            {/* ── Page info ── */}
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                Analyzed page
              </p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">
                {result.title || result.url}
              </h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{result.url}</p>
            </div>

            {/* ── Overview ── */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">
                Overview
              </p>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                <ToolResultCard
                  label="Word count"
                  value={result.wordCount.toLocaleString()}
                  status={result.wordCount < 300 ? "error" : result.wordCount < 800 ? "warning" : "good"}
                />
                <ToolResultCard label="Characters" value={result.characterCount.toLocaleString()} />
                <ToolResultCard
                  label="Reading time"
                  value={`${result.readingTimeMinutes} min`}
                  note="At 238 words per minute"
                />
                <ToolResultCard label="Sentences" value={result.sentenceCount.toLocaleString()} />
                <ToolResultCard label="Paragraphs" value={result.paragraphCount.toLocaleString()} />
              </div>
            </div>

            {/* ── Content evaluation ── */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">
                Content evaluation
              </p>
              <div className={`rounded-2xl border p-6 ${evaluation.borderColor}`}>
                <div className="flex items-center gap-3">
                  <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${evaluation.badgeColor}`}>
                    {evaluation.label}
                  </span>
                  <span className={`text-[14px] font-semibold ${evaluation.color}`}>
                    {result.wordCount.toLocaleString()} words
                  </span>
                </div>
                <p className={`mt-3 text-[14px] leading-[1.7] font-medium ${evaluation.color}`}>
                  {evaluation.summary}
                </p>
                <p className={`mt-2 text-[13px] leading-[1.65] ${evaluation.color} opacity-80`}>
                  {evaluation.guidance}
                </p>
              </div>
            </div>

            {/* ── Structure snapshot ── */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">
                Content structure
              </p>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                <ToolResultCard
                  label="Headings"
                  value={(result.headings ?? []).length}
                  note={Object.entries(result.headingCounts ?? {}).sort().map(([k, v]) => `${k}: ${v}`).join(", ") || "none"}
                  status={(result.headings ?? []).length === 0 && result.wordCount > 300 ? "warning" : "neutral"}
                />
                <ToolResultCard
                  label="Internal links"
                  value={result.internalLinkCount}
                  status={result.internalLinkCount === 0 && result.wordCount > 300 ? "warning" : "neutral"}
                />
                <ToolResultCard label="External links" value={result.externalLinkCount} />
                <ToolResultCard
                  label="Speaking time"
                  value={`${result.speakingTimeMinutes} min`}
                  note="At 150 words per minute"
                />
              </div>
            </div>

            {/* ── Readability hints ── */}
            {readabilityHints.length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">
                  Readability signals
                </p>
                <div className="space-y-2">
                  {readabilityHints.map((hint, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 rounded-xl border px-5 py-3 text-[13px] leading-[1.6] ${
                        hint.status === "good"
                          ? "border-emerald-200 bg-emerald-50/30 text-emerald-700"
                          : "border-amber-200 bg-amber-50/30 text-amber-700"
                      }`}
                    >
                      <Icon
                        icon={hint.status === "good" ? Icons.checkCircle : Icons.alertTriangle}
                        size="sm"
                        className="mt-0.5 shrink-0"
                      />
                      {hint.message}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Recommendations ── */}
            {recommendations.length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-accent mb-3">
                  What to improve
                </p>
                <div className="rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
                  <ul className="space-y-2.5">
                    {recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px] text-foreground leading-[1.6]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* ── Metadata ── */}
            {(result.title || result.metaDescription) && (
              <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                  Page metadata
                </p>
                {result.title && (
                  <div className="mb-2">
                    <p className="text-[12px] font-semibold text-muted">Title tag</p>
                    <p className="text-[14px] text-foreground">{result.title}</p>
                  </div>
                )}
                {result.metaDescription && (
                  <div>
                    <p className="text-[12px] font-semibold text-muted">Meta description</p>
                    <p className="text-[14px] text-foreground">{result.metaDescription}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Related guides ── */}
      <section className="py-6">
        <div className="mx-auto max-w-[680px] px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-1">
            Learn how to improve what you found
          </p>
          <p className="text-[13px] text-muted mb-3">
            These guides explain how to fix common content issues.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: "/seo-guide/content-seo/how-to-write-seo-articles", label: "How to Write SEO Articles" },
              { href: "/seo-guide/content-seo/blog-structure", label: "Blog Structure for SEO" },
              { href: "/seo-guide/content-seo/content-readability", label: "Content Readability Guide" },
              { href: "/seo-guide/on-page-seo/headings-seo", label: "Heading Tags Best Practices" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent hover:shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related tools ── */}
      <ToolRelated currentToolId={TOOL_ID} />

      <ToolCTA
        title="Want to analyze your entire site?"
        description="RankSEO checks content length, structure, and SEO readiness across every page automatically. Find thin content, missing headings, and weak pages before they hurt your rankings."
      />

      <ToolFAQ
        faqs={[
          {
            question: "How does this content length analyzer work?",
            answer:
              "It fetches any public web page, extracts the visible text, and breaks down the word count, reading time, sentence and paragraph counts, heading structure, and links. Then it gives you practical recommendations based on what it finds.",
          },
          {
            question: "What is a good word count for SEO?",
            answer:
              "It depends on the topic and intent. Blog posts typically perform best at 1,000 to 2,000 words. Comprehensive guides often need 2,000 to 4,000 words. Landing pages can be shorter if the copy is focused. What matters most is covering the topic thoroughly without padding.",
          },
          {
            question: "Does Google have a minimum word count?",
            answer:
              "No. Google does not set a minimum word count. But pages with very little content (under 300 words) are often considered thin and struggle to rank. The goal is not a specific number. It is answering the reader's question completely.",
          },
          {
            question: "How is reading time calculated?",
            answer:
              "Reading time is based on an average reading speed of 238 words per minute, which is the standard used by most publishing platforms. Speaking time uses 150 words per minute for presentation estimates.",
          },
          {
            question: "Can I use this tool on any website?",
            answer:
              "You can analyze any publicly accessible web page. The tool fetches the page the same way a search engine would. Private or password-protected pages cannot be analyzed.",
          },
        ]}
      />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
