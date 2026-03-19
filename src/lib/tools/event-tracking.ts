// ---------------------------------------------------------------------------
// Lightweight event tracking placeholders for Free Tools
// ---------------------------------------------------------------------------
//
// Wire these to your analytics provider (GA4, PostHog, etc.) when ready.
// For now they are no-ops that can be called safely from client components.
// ---------------------------------------------------------------------------

type ToolEvent =
  | "tool_page_viewed"
  | "analysis_started"
  | "analysis_completed"
  | "analysis_failed"
  | "gate_triggered"
  | "signup_modal_shown"
  | "signup_prompt_shown"
  | "cta_clicked";

interface EventPayload {
  toolId: string;
  [key: string]: string | number | boolean | undefined;
}

export function trackToolEvent(event: ToolEvent, payload: EventPayload): void {
  if (typeof window === "undefined") return;

  // Log in development for debugging
  if (process.env.NODE_ENV === "development") {
    console.log(`[ToolEvent] ${event}`, payload);
  }

  // TODO: Wire to analytics provider
  // Example: window.gtag?.("event", event, payload);
  // Example: posthog?.capture(event, payload);
}
