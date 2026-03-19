"use client";

/** Modal shown when anonymous user hits usage limit */
export function GateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[20px] text-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-bg">
            <span className="text-[20px] text-accent">&#x1F512;</span>
          </div>
          <h2 className="mt-4 text-[1.25rem] font-bold text-foreground">
            Free limit reached
          </h2>
          <p className="mt-2 text-[14px] leading-[1.7] text-muted">
            You have used your free analyses for today. Create a free account
            to get unlimited access to all SEO tools.
          </p>
          <div className="mt-6 space-y-3">
            {/* TODO: Wire to actual auth flow when available */}
            <a
              href="/pricing"
              className="block w-full rounded-xl bg-accent py-3 text-center text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Get started free
            </a>
            <button
              onClick={onClose}
              className="block w-full rounded-xl border border-border py-3 text-center text-[14px] font-semibold text-muted transition-colors hover:bg-border-light"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
