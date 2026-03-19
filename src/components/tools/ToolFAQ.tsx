"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

/** Reusable FAQ section for free tool pages with JSON-LD */
export function ToolFAQ({ faqs, title = "Frequently Asked Questions" }: { faqs: FaqItem[]; title?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-[680px] px-6">
        <h2 className="text-[1.5rem] font-bold leading-[1.2] tracking-[-0.02em] text-foreground md:text-[1.75rem]">
          {title}
        </h2>
        <div className="mt-6 space-y-2">
          {faqs.map((faq) => (
            <FaqAccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

function FaqAccordionItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-black/[0.04] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[14px] font-semibold text-foreground pr-4">
          {question}
        </span>
        <span
          className={`shrink-0 text-[18px] text-muted transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-[14px] leading-[1.7] text-muted">{answer}</p>
        </div>
      )}
    </div>
  );
}
