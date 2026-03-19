import { Icon, Icons } from "@/components/ui/Icon";

/** Shared humanized error state for tool analysis */
export function ToolError({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  // Humanize common technical errors
  const humanMessage = humanizeError(message);

  return (
    <div className="mx-auto max-w-[680px] px-6 py-4">
      <div className="rounded-xl border border-red-200 bg-red-50/40 px-5 py-4">
        <div className="flex items-start gap-3">
          <Icon icon={Icons.alertCircle} size="sm" className="mt-0.5 shrink-0 text-red-500" />
          <div className="flex-1">
            <p className="text-[14px] font-medium text-red-700">
              {humanMessage}
            </p>
            {onRetry && (
              <button
                onClick={onRetry}
                className="mt-2 text-[13px] font-semibold text-red-600 hover:text-red-800 transition-colors underline underline-offset-2"
              >
                Try again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function humanizeError(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("url") && lower.includes("required")) return "Please enter a URL to analyze.";
  if (lower.includes("invalid url")) return "That does not look like a valid URL. Check the format and try again.";
  if (lower.includes("not allowed")) return "That URL cannot be analyzed. Only public web pages are supported.";
  if (lower.includes("private ip") || lower.includes("internal")) return "That URL points to a private or internal address.";
  if (lower.includes("timeout") || lower.includes("abort")) return "The page took too long to respond. It may be slow or blocking requests.";
  if (lower.includes("html")) return "That URL did not return an HTML page. Only web pages can be analyzed.";
  if (lower.includes("too large")) return "That page is too large to analyze.";
  if (lower.includes("limit reached") || lower.includes("usage limit")) return "You have reached the free analysis limit for today. Sign up for unlimited access.";
  if (lower.includes("fetch") || lower.includes("network")) return "Could not reach that page. It may be down or blocking automated requests.";
  return message;
}
