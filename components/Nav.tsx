"use client";

/*
 * Nav — sticky top nav, reusable across every page.
 *   - Wordmark (left)
 *   - 8 flat links (centre): Curriculum · Workshops · Resources · Stories ·
 *       Gallery · Impact · About · Contact
 *   - Language switcher EN · हिं · বাং (right).
 * Ported from the Claude Design Nav.jsx; hrefs are real app routes and the
 * active link is derived from the current pathname.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, LANGS } from "./LanguageContext";
import { copy } from "@/content/copy";

const NAV_LINKS: { id: string; label: string; href: string }[] = [
  { id: "curriculum", label: "Curriculum", href: "/curriculum" },
  { id: "workshops", label: "Workshops", href: "/workshops" },
  { id: "resources", label: "Resources", href: "/resources" },
  { id: "stories", label: "Stories", href: "/stories" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "impact", label: "Impact", href: "/impact" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];

function currentId(pathname: string): string {
  if (pathname.startsWith("/curriculum")) return "curriculum";
  if (pathname.startsWith("/workshops")) return "workshops";
  if (pathname.startsWith("/resources")) return "resources";
  if (pathname.startsWith("/stories")) return "stories";
  if (pathname.startsWith("/gallery")) return "gallery";
  if (pathname.startsWith("/impact")) return "impact";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

export function Nav() {
  const pathname = usePathname();
  const current = currentId(pathname ?? "/");
  const { lang, setLang } = useLanguage();

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav__inner">
        <Link href="/" className="nav__wordmark">
          {copy.site.wordmark}
        </Link>

        <ul className="nav__links" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="nav__item">
              <Link
                href={link.href}
                className="nav__link"
                aria-current={current === link.id ? "page" : undefined}
                style={current === link.id ? { color: "var(--marigold-deep)" } : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav__right">
          <div className="nav__lang" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button
                key={l.id}
                type="button"
                data-active={lang === l.id}
                data-script={l.script}
                onClick={() => setLang(l.id)}
                aria-pressed={lang === l.id}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
