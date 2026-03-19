// ---------------------------------------------------------------------------
// Shared text analysis utilities for keyword density, readability, etc.
// Reusable across multiple free tools.
// ---------------------------------------------------------------------------

/** Common English stop words to exclude from keyword frequency analysis */
const STOP_WORDS = new Set([
  "a", "about", "above", "after", "again", "against", "all", "am", "an",
  "and", "any", "are", "as", "at", "be", "because", "been", "before",
  "being", "below", "between", "both", "but", "by", "can", "could", "did",
  "do", "does", "doing", "down", "during", "each", "few", "for", "from",
  "further", "get", "got", "had", "has", "have", "having", "he", "her",
  "here", "hers", "herself", "him", "himself", "his", "how", "i", "if",
  "in", "into", "is", "it", "its", "itself", "just", "know", "let", "like",
  "ll", "me", "might", "more", "most", "my", "myself", "no", "nor", "not",
  "now", "of", "off", "on", "once", "only", "or", "other", "our", "ours",
  "ourselves", "out", "over", "own", "re", "s", "same", "she", "should",
  "so", "some", "such", "t", "than", "that", "the", "their", "theirs",
  "them", "themselves", "then", "there", "these", "they", "this", "those",
  "through", "to", "too", "under", "until", "up", "us", "ve", "very",
  "was", "we", "were", "what", "when", "where", "which", "while", "who",
  "whom", "why", "will", "with", "would", "you", "your", "yours",
  "yourself", "yourselves", "also", "back", "even", "go", "going", "make",
  "much", "new", "one", "see", "still", "take", "two", "use", "used",
  "way", "well", "d", "m",
]);

/** Normalize text for analysis: lowercase, collapse whitespace */
export function normalizeText(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

/** Split text into words, stripping punctuation from edges */
export function tokenize(text: string): string[] {
  return normalizeText(text)
    .split(/\s+/)
    .map((w) => w.replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, ""))
    .filter((w) => w.length > 0);
}

/** Remove stop words from a word list */
export function removeStopWords(words: string[]): string[] {
  return words.filter((w) => !STOP_WORDS.has(w.toLowerCase()));
}

/** Count occurrences of each word */
export function countWords(words: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const w of words) {
    const lower = w.toLowerCase();
    counts.set(lower, (counts.get(lower) ?? 0) + 1);
  }
  return counts;
}

/** Compute density as a percentage */
export function computeDensity(count: number, totalWords: number): number {
  if (totalWords === 0) return 0;
  return Math.round((count / totalWords) * 10000) / 100; // 2 decimal places
}

/** Count exact phrase occurrences in text */
export function countPhrase(text: string, phrase: string): number {
  const normalizedText = normalizeText(text);
  const normalizedPhrase = normalizeText(phrase);
  if (!normalizedPhrase) return 0;

  let count = 0;
  let pos = 0;
  while (true) {
    const idx = normalizedText.indexOf(normalizedPhrase, pos);
    if (idx === -1) break;
    count++;
    pos = idx + 1;
  }
  return count;
}

/** Top keyword entry */
export interface KeywordEntry {
  keyword: string;
  count: number;
  density: number;
}

/** Get top N keywords from text, excluding stop words */
export function getTopKeywords(text: string, limit: number = 20): KeywordEntry[] {
  const allWords = tokenize(text);
  const filtered = removeStopWords(allWords);
  const counts = countWords(filtered);
  const totalWords = allWords.length;

  return Array.from(counts.entries())
    .filter(([word]) => word.length > 1) // skip single chars
    .map(([keyword, count]) => ({
      keyword,
      count,
      density: computeDensity(count, totalWords),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

/** Density status bucket */
export type DensityStatus = "not found" | "very low" | "natural" | "high";

export function getDensityStatus(density: number): DensityStatus {
  if (density === 0) return "not found";
  if (density < 0.5) return "very low";
  if (density <= 2.5) return "natural";
  return "high";
}

/** Full keyword density analysis result */
export interface KeywordDensityResult {
  totalWords: number;
  uniqueWords: number;
  topKeywords: KeywordEntry[];
  targetKeyword?: {
    keyword: string;
    count: number;
    density: number;
    status: DensityStatus;
  };
}

/** Analyze keyword density from visible text */
export function analyzeKeywordDensity(
  visibleText: string,
  targetKeyword?: string,
): KeywordDensityResult {
  const allWords = tokenize(visibleText);
  const totalWords = allWords.length;
  const uniqueWords = new Set(allWords.map((w) => w.toLowerCase())).size;
  const topKeywords = getTopKeywords(visibleText, 20);

  let target: KeywordDensityResult["targetKeyword"];

  if (targetKeyword && targetKeyword.trim()) {
    const phrase = targetKeyword.trim();
    const phraseWords = phrase.split(/\s+/).length;

    let count: number;
    if (phraseWords === 1) {
      // Single word: count from tokenized words
      const lower = normalizeText(phrase);
      count = allWords.filter((w) => w.toLowerCase() === lower).length;
    } else {
      // Multi-word phrase: count exact occurrences
      count = countPhrase(visibleText, phrase);
    }

    const density = computeDensity(count, totalWords);
    target = {
      keyword: phrase,
      count,
      density,
      status: getDensityStatus(density),
    };
  }

  return { totalWords, uniqueWords, topKeywords, targetKeyword: target };
}
