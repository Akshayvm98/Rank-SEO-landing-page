"use client";

import { useState } from "react";
const faqs = [
  {
    question: "Which integrations does RankSEO support?",
    answer:
      "RankSEO supports Google Search Console, WordPress, Webflow, Framer, Notion, and analytics tools.",
  },
  {
    question: "Do I need to switch my website platform to use RankSEO?",
    answer:
      "No. RankSEO is designed to fit into your existing workflow and CMS setup.",
  },
  {
    question: "Can I connect Google Search Console during onboarding?",
    answer:
      "Yes. Connecting Search Console is a key onboarding step and helps RankSEO identify real keyword opportunities.",
  },
  {
    question: "Does RankSEO publish directly to my CMS?",
    answer:
      "Yes. Depending on your setup, RankSEO can publish directly to supported platforms like WordPress, Webflow, Framer, and Notion.",
  },
  {
    question: "Can I use RankSEO without every integration connected?",
    answer:
      "Yes. Some integrations are optional, but connecting more of your workflow improves automation and insights.",
  },
];

export function IntegrationsFAQ() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="reveal mb-12 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[1.875rem]">
          Frequently asked questions about integrations
        </h2>

        <div className="reveal reveal-delay-1 space-y-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border-light bg-white transition-colors hover:border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-foreground">{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-[14px] leading-[1.7] text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}
