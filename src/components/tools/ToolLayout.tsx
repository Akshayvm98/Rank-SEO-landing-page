import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icon, Icons } from "@/components/ui/Icon";

/** Shared page shell for all free tool pages */
export function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Back to tools navigation */}
        <div className="mx-auto max-w-[1000px] px-6 pt-4">
          <a
            href="/tools"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-accent"
          >
            <Icon icon={Icons.arrowLeft} size="sm" />
            All tools
          </a>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
