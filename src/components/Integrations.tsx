"use client";

import { useReveal } from "@/hooks/useReveal";

const integrations = [
  {
    name: "Google Search Console",
    description: "Import real search performance data",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    description: "Publish directly to your WordPress site",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="#21759B">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.443 12c0-1.174.243-2.29.68-3.306l3.744 10.262A8.574 8.574 0 013.443 12zm8.557 8.557c-.882 0-1.73-.143-2.524-.407l2.68-7.786 2.745 7.524c.018.045.04.087.062.127a8.547 8.547 0 01-2.963.542zm1.2-12.565c.538-.028 1.023-.084 1.023-.084.481-.057.425-.764-.057-.736 0 0-1.448.114-2.381.114-.878 0-2.354-.114-2.354-.114-.482-.028-.538.707-.057.736 0 0 .457.056.94.084l1.396 3.826-1.962 5.882-3.266-9.708c.538-.028 1.023-.084 1.023-.084.481-.057.425-.764-.057-.736 0 0-1.448.114-2.381.114-.167 0-.365-.004-.572-.01A8.546 8.546 0 0112 3.443c2.382 0 4.553.974 6.113 2.548-.039-.003-.076-.009-.116-.009-1.878 0-2.133 1.65-2.133 2.498 0 .737.422 1.36.871 2.098.337.59.731 1.347.731 2.44 0 .756-.29 1.634-.674 2.857l-.884 2.952-3.21-9.539z" />
      </svg>
    ),
  },
  {
    name: "Webflow",
    description: "Sync content with your Webflow CMS",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="#4353FF">
        <path d="M17.802 8.56s-1.946 5.977-2.058 6.327c-.047-.367-1.098-6.327-1.098-6.327S13.088 4 10.456 4c-2.283 0-4.397 1.748-5.207 4.28 0 0-1.956 6.073-2.068 6.423C3.134 14.351 3 13.464 3 13.464L1.2 20h4.65s1.252-3.898 1.322-4.12c.065.218 1.098 4.12 1.098 4.12s1.73 0 2.592 0c2.392 0 4.414-1.815 5.186-4.308 0 0 1.956-6.053 2.068-6.403.047.347.13.949.13.949L19.35 20h4.65l-2.69-11.44C20.504 5.674 18.768 4 16.736 4c-1.164 0-2.24.73-2.24.73L17.802 8.56z" />
      </svg>
    ),
  },
  {
    name: "Framer",
    description: "Push optimized pages to Framer sites",
    icon: (
      <img src="/framer-logo.svg" alt="Framer" className="h-7 w-7" />
    ),
  },
  {
    name: "Notion",
    description: "Draft and organize content in Notion",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="#000">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.19 2.17c-.466-.373-.84-.56-1.773-.466L3.293 3.016c-.467.047-.56.28-.373.466l1.54 1.726zm.793 3.36v13.85c0 .746.373 1.026 1.213.98l14.523-.84c.84-.046.933-.56.933-1.166V6.632c0-.606-.233-.933-.746-.886l-15.177.886c-.56.047-.746.327-.746.933zm14.336.42c.094.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.166.513-1.633.513-.746 0-.933-.233-1.493-.933l-4.571-7.178v6.952l1.446.327s0 .84-1.166.84l-3.22.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.453-.233 4.758 7.272V9.387l-1.213-.14c-.094-.513.28-.886.746-.933l3.22-.186z" />
      </svg>
    ),
  },
  {
    name: "Pirsch Analytics",
    description: "Privacy-friendly performance tracking",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center rounded bg-[#0E1729] text-[11px] font-bold text-white">
        P
      </div>
    ),
  },
];

export function Integrations() {
  const ref = useReveal();

  return (
    <section ref={ref} className="border-t border-border-light bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Plugs into your entire stack
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Connect the tools you already use. Rank SEO owns the workflow from keyword discovery to publishing and tracking.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, i) => (
            <div
              key={item.name}
              className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-4 rounded-xl border border-border-light bg-white p-5 transition-all duration-300 hover:border-border hover:shadow-sm`}
            >
              <div className="shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-[14px] font-semibold text-foreground">{item.name}</h3>
                <p className="mt-0.5 text-[13px] text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
