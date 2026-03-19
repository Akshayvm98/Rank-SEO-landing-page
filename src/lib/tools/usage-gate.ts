// ---------------------------------------------------------------------------
// Shared anonymous usage tracking & gating for Free Tools
// ---------------------------------------------------------------------------
//
// V1 uses an in-memory store keyed by visitor ID (cookie-based).
// This is sufficient for a single-server deployment. For multi-server,
// replace the store with Redis or a database.
// ---------------------------------------------------------------------------

import type { GateDecision } from "./types";

const ANONYMOUS_DAILY_LIMIT = 2;
const COOKIE_NAME = "rs_vid";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// ---------------------------------------------------------------------------
// Visitor ID helpers
// ---------------------------------------------------------------------------

export function generateVisitorId(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 10);
  return `v_${ts}_${rand}`;
}

export function getVisitorIdFromCookie(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  return match ? match[1] : null;
}

export function buildSetCookieHeader(visitorId: string): string {
  return `${COOKIE_NAME}=${visitorId}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax; HttpOnly`;
}

// ---------------------------------------------------------------------------
// In-memory usage store (keyed by visitorId:toolId:dateKey)
// ---------------------------------------------------------------------------

const usageStore = new Map<string, number>();

function dateKey(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function storeKey(visitorId: string, toolId: string): string {
  return `${visitorId}:${toolId}:${dateKey()}`;
}

export function getUsageCount(visitorId: string, toolId: string): number {
  return usageStore.get(storeKey(visitorId, toolId)) ?? 0;
}

export function incrementUsage(visitorId: string, toolId: string): number {
  const key = storeKey(visitorId, toolId);
  const current = usageStore.get(key) ?? 0;
  const next = current + 1;
  usageStore.set(key, next);
  return next;
}

// ---------------------------------------------------------------------------
// Gate decision
// ---------------------------------------------------------------------------

export function checkGate(visitorId: string, toolId: string): GateDecision {
  const count = getUsageCount(visitorId, toolId);

  if (count >= ANONYMOUS_DAILY_LIMIT) {
    return { allowed: false, reason: "limit_reached", usageCount: count };
  }

  // Show signup prompt on 2nd use (count === 1 means they already used once)
  const showSignupPrompt = count >= 1;

  return { allowed: true, showSignupPrompt, usageCount: count };
}

// ---------------------------------------------------------------------------
// Resolve visitor from request
// ---------------------------------------------------------------------------

export function resolveVisitor(cookieHeader: string | null): {
  visitorId: string;
  isNew: boolean;
} {
  const existing = getVisitorIdFromCookie(cookieHeader);
  if (existing) {
    return { visitorId: existing, isNew: false };
  }
  return { visitorId: generateVisitorId(), isNew: true };
}
