"use client";

import { useState } from "react";
import { ToolHero } from "./ToolHero";
import { ToolInput } from "./ToolInput";
import { ToolResultCard } from "./ToolResultCard";
import { ToolFAQ } from "./ToolFAQ";
import { ToolError } from "./ToolError";
import { ToolLoading } from "./ToolLoading";
import { ToolRelated } from "./ToolRelated";
import { ToolGuides } from "./ToolGuides";
import { ToolContextCTA } from "./ToolContextCTA";
import { GateModal } from "./GateModal";
import { SignupPrompt } from "./SignupPrompt";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import type { PageHeading, GateDecision } from "@/lib/tools/types";

const TOOL_ID = "heading-structure-checker";

// ---------------------------------------------------------------------------
// Rule-based heading analysis
// ---------------------------------------------------------------------------

interface HeadingIssue {
  severity: "critical" | "warning" | "info";
  message: string;
}

type StructureScore = "poor" | "needs improvement" | "good";

function analyzeHeadings(headings: PageHeading[]) {
  const issues: HeadingIssue[] = [];
  const h1s = headings.filter((h) => h.level === 1);
  const h2s = headings.filter((h) => h.level === 2);
  const h3s = headings.filter((h) => h.level === 3);

  // H1 checks
  if (h1s.length === 0) {
    issues.push({ severity: "critical", message: "No H1 tag found. Every page should have exactly one H1." });
  } else if (h1s.length > 1) {
    issues.push({ severity: "warning", message: `Multiple H1 tags found (${h1s.length}). Use only one H1 per page.` });
  }

  // H2 checks
  if (h2s.length === 0 && headings.length > 1) {
    issues.push({ severity: "warning", message: "No H2 tags found. H2 headings create the main structure of your content." });
  }

  // Hierarchy check: H3 without preceding H2
  let hasH2 = false;
  for (const h of headings) {
    if (h.level === 2) hasH2 = true;
    if (h.level === 3 && !hasH2) {
      issues.push({ severity: "warning", message: "H3 appears before any H2. Headings should follow a logical hierarchy (H1 → H2 → H3)." });
      break;
    }
  }

  // Skip level check: H1 directly to H3
  for (let i = 0; i < headings.length - 1; i++) {
    const current = headings[i].level;
    const next = headings[i + 1].level;
    if (next > current + 1) {
      issues.push({
        severity: "warning",
        message: `Heading level skipped: H${current} followed by H${next}. Avoid skipping levels.`,
      });
      break;
    }
  }

  // Too few headings
  if (headings.length === 0) {
    issues.push({ severity: "critical", message: "No headings found at all. Content needs heading structure for SEO and readability." });
  } else if (headings.length < 3) {
    issues.push({ severity: "info", message: "Very few headings. Consider adding more H2 sections to improve content structure." });
  }

  // Score
  const criticalCount = issues.filter((i) => i.severity === "critical").length;
  const warningCount = issues.filter((i) => i.severity === "warning").length;

  let score: StructureScore = "good";
  if (criticalCount > 0) {
    score = "poor";
  } else if (warningCount >= 2) {
    score = "needs improvement";
  } else if (warningCount === 1) {
    score = "needs improvement";
  }

  // Recommendations
  const recommendations: string[] = [];
  if (h1s.length === 0) {
    recommendations.push("Add a single H1 tag that clearly describes the main topic of the page.");
  }
  if (h1s.length > 1) {
    recommendations.push("Consolidate to one H1 tag. Use H2 for other main sections.");
  }
  if (h2s.length === 0 && headings.length > 0) {
    recommendations.push("Add H2 headings to break your content into clear, scannable sections.");
  }
  if (issues.some((i) => i.message.includes("skipped"))) {
    recommendations.push("Fix heading level skips. Go H1 → H2 → H3 without jumping levels.");
  }
  if (issues.length === 0) {
    recommendations.push("Heading structure looks good. Make sure headings are descriptive and include keywords naturally.");
  }

  return { h1s, h2s, h3s, issues, score, recommendations };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function HeadingStructureChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [headings, setHeadings] = useState<PageHeading[] | null>(null);
  const [pageTitle, setPageTitle] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setHeadings(null);
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

      setHeadings(data.data.headings);
      setPageTitle(data.data.title || data.data.url);
      setPageUrl(data.data.url);
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, headingCount: data.data.headings.length });

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

  const analysis = headings ? analyzeHeadings(headings) : null;

  const scoreStyles: Record<StructureScore, { bg: string; text: string; border: string }> = {
    poor: { bg: "bg-red-50/40", text: "text-red-700", border: "border-red-200" },
    "needs improvement": { bg: "bg-amber-50/40", text: "text-amber-700", border: "border-amber-200" },
    good: { bg: "bg-emerald-50/40", text: "text-emerald-700", border: "border-emerald-200" },
  };

  const severityStyles: Record<string, string> = {
    critical: "border-red-200 bg-red-50/40 text-red-700",
    warning: "border-amber-200 bg-amber-50/40 text-amber-700",
    info: "border-blue-200 bg-blue-50/40 text-blue-700",
  };

  const severityLabels: Record<string, string> = {
    critical: "Critical",
    warning: "Warning",
    info: "Info",
  };

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Heading Structure Checker"
        subtitle="Analyze your page headings and improve content structure for SEO. Check H1, H2, H3 hierarchy and detect common issues."
      />

      <ToolInput
        value={url}
        onChange={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        placeholder="https://example.com/blog-post"
        buttonText="Check headings"
      />

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {loading && <ToolLoading message="Reviewing heading structure..." />}
      {error && <ToolError message={error} onRetry={handleAnalyze} />}

      {analysis && headings && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Page info */}
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                Analyzed page
              </p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">
                {pageTitle}
              </h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{pageUrl}</p>
            </div>

            {/* Overview cards */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
              <ToolResultCard label="H1 tags" value={analysis.h1s.length} />
              <ToolResultCard label="H2 tags" value={analysis.h2s.length} />
              <ToolResultCard label="H3 tags" value={analysis.h3s.length} />
              <ToolResultCard label="Total headings" value={headings.length} />
            </div>

            {/* Structure score */}
            {analysis.score && (
              <div className={`mt-6 rounded-2xl border p-6 ${scoreStyles[analysis.score].bg} ${scoreStyles[analysis.score].border}`}>
                <div className="flex items-center gap-3">
                  <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${scoreStyles[analysis.score].text} ${analysis.score === "good" ? "bg-emerald-100" : analysis.score === "needs improvement" ? "bg-amber-100" : "bg-red-100"}`}>
                    {analysis.score}
                  </span>
                  <span className={`text-[14px] font-semibold ${scoreStyles[analysis.score].text}`}>
                    Heading structure
                  </span>
                </div>
              </div>
            )}

            {/* H1 analysis */}
            <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                H1 Tag{analysis.h1s.length !== 1 ? "s" : ""}
              </p>
              {analysis.h1s.length === 0 ? (
                <p className="text-[14px] text-red-600 font-medium">
                  No H1 tag found on this page.
                </p>
              ) : (
                <div className="space-y-2">
                  {analysis.h1s.map((h, i) => (
                    <div
                      key={i}
                      className={`rounded-lg px-4 py-3 text-[14px] font-medium ${
                        analysis.h1s.length > 1
                          ? "border border-amber-200 bg-amber-50/30 text-amber-800"
                          : "border border-emerald-200 bg-emerald-50/30 text-emerald-800"
                      }`}
                    >
                      {h.text}
                    </div>
                  ))}
                  {analysis.h1s.length > 1 && (
                    <p className="text-[13px] text-amber-600 mt-1">
                      Multiple H1 tags detected. Use only one H1 per page.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Heading hierarchy view */}
            {headings.length > 0 && (
              <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                  Heading hierarchy
                </p>
                <div className="space-y-1">
                  {headings.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 rounded-lg px-3 py-2 hover:bg-border-light/50 transition-colors"
                      style={{ paddingLeft: `${(h.level - 1) * 20 + 12}px` }}
                    >
                      <span
                        className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                          h.level === 1
                            ? "bg-accent-bg text-accent"
                            : h.level === 2
                            ? "bg-blue-50 text-blue-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        H{h.level}
                      </span>
                      <span className="text-[13px] text-foreground leading-snug">
                        {h.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Issues */}
            {analysis.issues.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                  Issues detected ({analysis.issues.length})
                </p>
                <div className="space-y-2">
                  {analysis.issues.map((issue, i) => (
                    <div
                      key={i}
                      className={`rounded-xl border px-5 py-3 text-[14px] ${severityStyles[issue.severity]}`}
                    >
                      <span className="font-semibold">{severityLabels[issue.severity]}:</span>{" "}
                      {issue.message}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {analysis.recommendations.length > 0 && (
              <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">
                  Recommendations
                </p>
                <ul className="space-y-2">
                  {analysis.recommendations.map((rec, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13px] text-foreground leading-[1.6]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <ToolGuides toolId={TOOL_ID} />
      <ToolRelated currentToolId={TOOL_ID} />

      <ToolContextCTA toolId={TOOL_ID} />

      <ToolFAQ
        faqs={[
          {
            question: "What are heading tags in SEO?",
            answer:
              "Heading tags (H1, H2, H3, etc.) create the hierarchical structure of your page content. They help search engines understand what your page is about and help readers scan and navigate your content quickly.",
          },
          {
            question: "Does heading structure affect SEO?",
            answer:
              "Yes. A clear heading hierarchy helps Google understand your content structure and topic organization. It also improves user experience, which indirectly supports better rankings. Proper headings can also help your content appear in featured snippets.",
          },
          {
            question: "How many H1 tags should a page have?",
            answer:
              "One. Every page should have exactly one H1 tag that clearly describes the main topic. Multiple H1s confuse the hierarchy and dilute the signal about what the page is primarily about.",
          },
          {
            question: "What is proper heading hierarchy?",
            answer:
              "Proper hierarchy means H1 is followed by H2 for main sections, and H3 for subsections within H2 sections. You should never skip levels (like going from H1 directly to H3). Think of it like an outline where each level nests under the one above it.",
          },
          {
            question: "Can missing headings hurt my rankings?",
            answer:
              "Content without headings is harder for Google to parse and harder for users to read. While headings alone do not guarantee rankings, poorly structured content without clear headings tends to perform worse than well-structured content with proper heading hierarchy.",
          },
        ]}
      />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
