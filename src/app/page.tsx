import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd, FAQJsonLd, ProductJsonLd } from "@/components/JsonLd";

const TrustMetrics = dynamic(() => import("@/components/TrustMetrics").then(m => m.TrustMetrics));
const HowItWorks = dynamic(() => import("@/components/HowItWorks").then(m => m.HowItWorks));
const FeatureGrid = dynamic(() => import("@/components/FeatureGrid").then(m => m.FeatureGrid));
const WorkflowSection = dynamic(() => import("@/components/WorkflowSection").then(m => m.WorkflowSection));
const Integrations = dynamic(() => import("@/components/Integrations").then(m => m.Integrations));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => m.Testimonials));
const FAQ = dynamic(() => import("@/components/FAQ").then(m => m.FAQ));

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <FAQJsonLd />
      <ProductJsonLd />
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <TrustMetrics />
        <HowItWorks />
        <FeatureGrid />
        <WorkflowSection />
        <Integrations />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
