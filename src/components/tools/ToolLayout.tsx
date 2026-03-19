import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/** Shared page shell for all free tool pages */
export function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
    </>
  );
}
