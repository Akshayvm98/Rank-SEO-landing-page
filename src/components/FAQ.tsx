"use client";

import { useState } from "react";
const faqs = [
  {
    question: "What does Rank SEO actually do?",
    answer:
      "Rank SEO connects to your Google Search Console, discovers keyword opportunities based on real search data, generates optimized content in your brand voice, and publishes it to your CMS automatically. It handles the full workflow from research to ranking.",
  },
  {
    question: "How is Rank SEO different from other AI writing tools?",
    answer:
      "Most AI writing tools generate text from a prompt. Rank SEO starts with your actual search performance data: impressions, clicks, rankings, and content gaps. It uses keyword opportunity scoring, live SERP analysis, and optimization workflows with CMS publishing built in. It's a complete SEO operating system, not just a text generator.",
  },
  {
    question: "Do I need SEO experience to use Rank SEO?",
    answer:
      "No. The platform is designed to simplify SEO for non-experts while still giving marketers and experienced teams the control they need. The keyword scoring, content optimization, and publishing workflows are guided step by step.",
  },
  {
    question: "Can I use Rank SEO with my existing website?",
    answer:
      "Yes. Rank SEO integrates with WordPress, Webflow, Framer, and Notion. It works with your existing site and publishing workflow. Zero migration required.",
  },
  {
    question: "Does Rank SEO replace my content team?",
    answer:
      "Not at all. It amplifies them. Rank SEO handles the repetitive parts of SEO research, first drafts, and optimization scoring. Your team stays in full control of voice, strategy, and final approval before anything gets published.",
  },
  {
    question: "Can I review content before publishing?",
    answer:
      "Absolutely. Every article goes through your review before publishing. You can edit inline, adjust tone, improve the SEO score, and approve or reject content at any stage of the workflow.",
  },
];

export function FAQ() {
  return (
    <section className="bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-6">
        <div className="reveal mb-12 text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Got questions? We have answers.
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Everything founders and marketers need to know before getting started.
          </p>
        </div>

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
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-[14px] leading-[1.7] text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}
