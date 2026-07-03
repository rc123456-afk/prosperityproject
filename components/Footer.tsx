/* Footer — condensed: brand signature + a compact primary-link row + a slim
   legal strip. Keeps the design's ink/paper/mono/marigold language. */

import Link from "next/link";
import { copy } from "@/content/copy";

const LINKS: { label: string; href: string }[] = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Workshops", href: "/workshops" },
  { label: "Resources", href: "/resources" },
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Impact", href: "/impact" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <p className="site-footer__deva">{copy.site.footerDevaLine}</p>
            <p className="site-footer__roman">{copy.site.footerRomanLine}</p>
            <p
              className="site-footer__roman"
              style={{ marginTop: 10, opacity: 0.7, fontStyle: "italic" }}
            >
              {copy.site.tagline}
            </p>
          </div>
          <nav className="site-footer__links" aria-label="Footer">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__rule" />

        <div className="site-footer__legal">
          <span>© 2026 The Prosperity Project</span>
          <span>
            <span>hello@[ domain ]</span>
            <span className="sep">·</span>
            <Link href="/about#partners">In partnership with Bandhan-Konnagar</Link>
            <span className="sep">·</span>
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
