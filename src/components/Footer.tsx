const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "SEO Guides", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-light">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
            <div className="mt-5 flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[13px] font-medium text-muted-light transition-colors hover:text-foreground"
                  aria-label={s.label}
                >
                  {s.label}
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
          <p className="text-[13px] text-muted-light">
            &copy; 2026 Rank SEO. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-muted-light">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
