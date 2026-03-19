const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "SEO Guides", href: "/seo-guide" },
      { label: "Help Center", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "Free Tools",
    links: [
      { label: "All Tools", href: "/tools" },
      { label: "Content Analyzer", href: "/tools/content-length-analyzer" },
      { label: "Meta Tag Checker", href: "/tools/meta-tag-checker" },
      { label: "Readability Checker", href: "/tools/readability-checker" },
      { label: "Broken Link Checker", href: "/tools/broken-link-checker" },
      { label: "SERP Preview", href: "/tools/serp-preview-tool" },
      { label: "Title Tag Analyzer", href: "/tools/title-tag-analyzer" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rankseoengine/",
    icon: (
      <svg className="h-5 w-5" fill="#0A66C2" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="#000000" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-light">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light">
                <span className="text-[16px] font-bold leading-none text-white">R</span>
              </div>
              <span className="text-[17px] font-semibold tracking-[-0.02em] text-foreground">
                Rank SEO
              </span>
            </a>
            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.65] text-muted">
              We believe organic growth should be simple and accessible. Rank SEO
              combines real search data and AI automation to help businesses grow
              consistently.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="transition-opacity hover:opacity-70"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-foreground">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-light pt-6 md:flex-row">
          <p className="text-[13px] text-muted">
            &copy; 2026 Rank SEO. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-muted">
            <a href="/privacy-policy" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="/terms-and-conditions" className="transition-colors hover:text-foreground">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
