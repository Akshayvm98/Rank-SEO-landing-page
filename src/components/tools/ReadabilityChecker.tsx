"use client";

import { useState } from "react";
import { Icon, Icons } from "@/components/ui/Icon";
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
import type { GateDecision } from "@/lib/tools/types";
import type {
  ReadabilityLevel,
  SentenceMetrics,
  ParagraphMetrics,
} from "@/lib/tools/readability-analysis";

const TOOL_ID = "readability-checker";

interface AnalysisResult {
  url: string;
  title: string;
  totalWords: number;
  sentenceMetrics: SentenceMetrics;
  paragraphMetrics: ParagraphMetrics;
  headingCount: number;
  readingTimeMinutes: number;
  level: ReadabilityLevel;
  insights: string[];
  recommendations: string[];
}

// ---------------------------------------------------------------------------
// Level styling and humanized descriptions
// ---------------------------------------------------------------------------

const levelConfig: Record<ReadabilityLevel, {
  bg: string; text: string; badge: string; border: string;
  summary: string;
}> = {
  "easy to read": {
    bg: "bg-emerald-50/40", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", border: "border-emerald-200",
    summary: "Your content is easy to follow. Sentences are clear, paragraphs are well-spaced, and most readers will have no trouble staying engaged.",
  },
  "fairly readable": {
    bg: "bg-blue-50/40", text: "text-blue-700", badge: "bg-blue-100 text-blue-700", border: "border-blue-200",
    summary: "Most readers will find this content reasonably clear. A few areas could be simplified to improve flow and scannability.",
  },
  "needs improvement": {
    bg: "bg-amber-50/40", text: "text-amber-700", badge: "bg-amber-100 text-amber-700", border: "border-amber-200",
    summary: "Some parts of this content may feel heavy or hard to follow. Shorter sentences and better-spaced paragraphs would help readers stay engaged.",
  },
  "hard to read": {
    bg: "bg-red-50/40", text: "text-red-700", badge: "bg-red-100 text-red-700", border: "border-red-200",
    summary: "This content is difficult to read for most audiences. Long sentences, dense paragraphs, or missing structure are creating friction. Simplifying would significantly improve engagement.",
  },
};

// ---------------------------------------------------------------------------
// Complexity signals (deterministic)
// ---------------------------------------------------------------------------

interface Signal {
  status: "good" | "warning";
  label: string;
  detail: string;
}

function getComplexitySignals(result: AnalysisResult): Signal[] {
  const signals: Signal[] = [];
  const { sentenceMetrics: sm, paragraphMetrics: pm, headingCount, totalWords } = result;

  // Sentence length
  if (sm.averageWordsPerSentence <= 20) {
    signals.push({ status: "good", label: "Sentence length", detail: `${sm.averageWordsPerSentence} words per sentence on average. Most readers will find this comfortable.` });
  } else if (sm.averageWordsPerSentence <= 28) {
    signals.push({ status: "warning", label: "Sentence length", detail: `${sm.averageWordsPerSentence} words per sentence on average. Some readers may struggle to follow longer sentences.` });
  } else {
    signals.push({ status: "warning", label: "Sentence length", detail: `${sm.averageWordsPerSentence} words per sentence on average. This is quite long. Breaking sentences apart would help a lot.` });
  }

  // Long sentences
  if (sm.longSentences > 0) {
    if (sm.longSentencePercent > 30) {
      signals.push({ status: "warning", label: "Long sentences", detail: `${sm.longSentencePercent}% of sentences are 25+ words. That is a lot of dense reading. Try to keep this under 20%.` });
    } else if (sm.longSentencePercent > 15) {
      signals.push({ status: "warning", label: "Long sentences", detail: `${sm.longSentencePercent}% of sentences are on the long side. Shortening a few would improve clarity.` });
    }
  } else if (sm.totalSentences > 5) {
    signals.push({ status: "good", label: "Sentence variety", detail: "No excessively long sentences found. Your writing flows well." });
  }

  // Paragraph density
  if (pm.averageSentencesPerParagraph <= 4) {
    signals.push({ status: "good", label: "Paragraph spacing", detail: "Paragraphs are well-spaced. Easy to scan on any device." });
  } else if (pm.averageSentencesPerParagraph <= 6) {
    signals.push({ status: "warning", label: "Paragraph spacing", detail: "Some paragraphs are a bit dense. Splitting them would improve scannability, especially on mobile." });
  } else {
    signals.push({ status: "warning", label: "Paragraph spacing", detail: "Paragraphs are very dense. Most web readers prefer 2 to 4 sentences per paragraph." });
  }

  // Dense paragraphs
  if (pm.denseParagraphs > 0) {
    signals.push({ status: "warning", label: "Dense blocks", detail: `${pm.denseParagraphs} paragraph${pm.denseParagraphs !== 1 ? "s have" : " has"} 6 or more sentences. These sections probably need breaking up.` });
  }

  // Heading coverage
  if (totalWords > 500) {
    if (headingCount === 0) {
      signals.push({ status: "warning", label: "No headings", detail: "Content has no headings at all. Adding H2 and H3 tags would make it much easier to navigate." });
    } else {
      const ratio = totalWords / headingCount;
      if (ratio > 500) {
        signals.push({ status: "warning", label: "Few headings", detail: "There are very few headings for this content length. Adding more would improve structure." });
      } else {
        signals.push({ status: "good", label: "Heading structure", detail: "Headings break the content into scannable sections." });
      }
    }
  }

  return signals;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ReadabilityChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/readability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
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
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, level: data.data.level });

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

  const config = result ? (levelConfig[result.level] ?? levelConfig["needs improvement"]) : null;
  const signals = result ? getComplexitySignals(result) : [];

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Readability Checker"
        subtitle="See how easy your content is to read. Get clarity scores, sentence and paragraph analysis, and practical tips to make your writing more engaging."
      />

      <ToolInput
        value={url}
        onChange={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        loadingMessage="Checking readability..."
        placeholder="https://example.com/blog-post"
        buttonText="Check readability"
      />

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {loading && <ToolLoading message="Analyzing content readability..." />}

      {error && <ToolError message={error} onRetry={handleAnalyze} />}

      {result && config && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Page info */}
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
                <ToolResultCard label="Words" value={result.totalWords.toLocaleString()} />
                <ToolResultCard label="Sentences" value={result.sentenceMetrics.totalSentences} />
                <ToolResultCard label="Paragraphs" value={result.paragraphMetrics.totalParagraphs} />
                <ToolResultCard label="Headings" value={result.headingCount} />
                <ToolResultCard label="Reading time" value={`${result.readingTimeMinutes} min`} />
              </div>
            </div>

            {/* ── Readability score ── */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">
                Readability level
              </p>
              <div className={`rounded-2xl border p-6 ${config.bg} ${config.border}`}>
                <div className="flex items-center gap-3">
                  <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${config.badge}`}>
                    {result.level}
                  </span>
                </div>
                <p className={`mt-3 text-[14px] leading-[1.7] font-medium ${config.text}`}>
                  {config.summary}
                </p>
              </div>
            </div>

            {/* ── Sentence & paragraph analysis ── */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">
                Writing analysis
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {/* Sentences */}
                <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                    Sentences
                  </p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[28px] font-bold text-foreground">
                      {result.sentenceMetrics.averageWordsPerSentence}
                    </span>
                    <span className="text-[13px] text-muted">words per sentence</span>
                  </div>
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                    result.sentenceMetrics.averageWordsPerSentence <= 20
                      ? "bg-emerald-100 text-emerald-700"
                      : result.sentenceMetrics.averageWordsPerSentence <= 28
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {result.sentenceMetrics.averageWordsPerSentence <= 14 ? "Short and clear" :
                     result.sentenceMetrics.averageWordsPerSentence <= 20 ? "Good length" :
                     result.sentenceMetrics.averageWordsPerSentence <= 28 ? "A bit long" : "Very long"}
                  </span>
                  {result.sentenceMetrics.longSentences > 0 && (
                    <p className="mt-3 text-[12px] text-muted">
                      {result.sentenceMetrics.longSentences} sentence{result.sentenceMetrics.longSentences !== 1 ? "s are" : " is"} over 25 words ({result.sentenceMetrics.longSentencePercent}%)
                    </p>
                  )}
                </div>

                {/* Paragraphs */}
                <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                    Paragraphs
                  </p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[28px] font-bold text-foreground">
                      {result.paragraphMetrics.averageSentencesPerParagraph}
                    </span>
                    <span className="text-[13px] text-muted">sentences per paragraph</span>
                  </div>
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                    result.paragraphMetrics.averageSentencesPerParagraph <= 4
                      ? "bg-emerald-100 text-emerald-700"
                      : result.paragraphMetrics.averageSentencesPerParagraph <= 6
                      ? "bg-blue-100 text-blue-700"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {result.paragraphMetrics.averageSentencesPerParagraph <= 3 ? "Easy to scan" :
                     result.paragraphMetrics.averageSentencesPerParagraph <= 5 ? "Reasonable" : "Dense"}
                  </span>
                  {result.paragraphMetrics.denseParagraphs > 0 && (
                    <p className="mt-3 text-[12px] text-muted">
                      {result.paragraphMetrics.denseParagraphs} dense paragraph{result.paragraphMetrics.denseParagraphs !== 1 ? "s" : ""} (6+ sentences each)
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ── Complexity signals ── */}
            {signals.length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light mb-3">
                  What we found
                </p>
                <div className="space-y-2">
                  {signals.map((signal, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 rounded-xl border px-5 py-3.5 ${
                        signal.status === "good"
                          ? "border-emerald-200 bg-emerald-50/30"
                          : "border-amber-200 bg-amber-50/30"
                      }`}
                    >
                      <Icon
                        icon={signal.status === "good" ? Icons.checkCircle : Icons.alertTriangle}
                        size="sm"
                        className={`mt-0.5 shrink-0 ${signal.status === "good" ? "text-emerald-500" : "text-amber-500"}`}
                      />
                      <div>
                        <p className={`text-[13px] font-semibold ${signal.status === "good" ? "text-emerald-700" : "text-amber-700"}`}>
                          {signal.label}
                        </p>
                        <p className={`mt-0.5 text-[13px] leading-[1.6] ${signal.status === "good" ? "text-emerald-600" : "text-amber-600"}`}>
                          {signal.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Recommendations ── */}
            {(result.recommendations ?? []).length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-accent mb-3">
                  How to improve
                </p>
                <div className="rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
                  <ul className="space-y-2.5">
                    {(result.recommendations ?? []).map((rec, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px] text-foreground leading-[1.6]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
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
            question: "What does this readability checker analyze?",
            answer:
              "It fetches any public web page and analyzes sentence length, paragraph density, heading structure, and overall content flow. Then it gives you a readability level and practical suggestions to improve clarity.",
          },
          {
            question: "Does readability affect SEO rankings?",
            answer:
              "Not directly. Google does not have a readability ranking factor. But readable content keeps readers engaged longer, reduces bounce rates, and improves time on page. Those engagement signals do influence how Google perceives content quality.",
          },
          {
            question: "What is a good readability score?",
            answer:
              "For web content, aim for sentences averaging 15 to 20 words, paragraphs of 2 to 4 sentences, and clear headings every 200 to 300 words. Most audiences prefer content that is easy to scan, even on technical topics.",
          },
          {
            question: "How do I make content easier to read?",
            answer:
              "Shorten long sentences, break dense paragraphs into smaller chunks, add more headings, and use lists where they make sense. Reading your content out loud is one of the simplest ways to catch awkward phrasing.",
          },
          {
            question: "Can I use this on any website?",
            answer:
              "You can analyze any publicly accessible web page. The tool fetches the page the same way a search engine would. Private or login-protected pages cannot be analyzed.",
          },
        ]}
      />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
