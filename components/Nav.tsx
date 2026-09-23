"use client";

/*
 * Nav — sticky top nav, reusable across every page.
 *   - Wordmark (left)
 *   - 9 flat links (centre): Curriculum · Workshops · Programmes · Resources ·
 *       Stories · Gallery · Reporting · About · Contact
 *   - Language switcher EN · हिं · বাং (right).
 * Ported from the Claude Design Nav.jsx; hrefs are real app routes and the
 * active link is derived from the current pathname.
 *
 * On phones (≤880px) the centre links and language switcher are hidden by
 * CSS (styles/site.css); a "Menu" button reveals a full-screen paper overlay
 * (styles/mobile.css) that carries the same links + language switcher. The
 * overlay is a sibling of <nav> — nav's backdrop-filter would otherwise trap
 * its position:fixed. All of it is inert on desktop (button/overlay hidden).
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage, LANGS } from "./LanguageContext";
import { copy } from "@/content/copy";

const NAV_LINKS: { id: string; label: string; href: string }[] = [
  { id: "curriculum", label: "Curriculum", href: "/curriculum" },
  { id: "workshops", label: "Workshops", href: "/workshops" },
  { id: "programmes", label: "Programmes", href: "/programmes" },
  { id: "resources", label: "Resources", href: "/resources" },
  { id: "stories", label: "Stories", href: "/stories" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "reporting", label: "Reporting", href: "/reporting" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];

// Mobile overlay leads with Home — the wordmark is the only way back on
// desktop, but it's easy to miss inside the phone menu.
const MOBILE_LINKS = [{ id: "home", label: "Home", href: "/" }, ...NAV_LINKS];

function currentId(pathname: string): string {
  if (pathname.startsWith("/curriculum")) return "curriculum";
  if (pathname.startsWith("/workshops")) return "workshops";
  if (pathname.startsWith("/programmes")) return "programmes";
  if (pathname.startsWith("/resources")) return "resources";
  if (pathname.startsWith("/stories")) return "stories";
  if (pathname.startsWith("/gallery")) return "gallery";
  if (pathname.startsWith("/reporting")) return "reporting";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

export function Nav() {
  const pathname = usePathname();
  const current = currentId(pathname ?? "/");
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu on navigation (covers link taps + back/forward).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the overlay is open. The class only has an effect
  // inside the ≤880 media query, so it can never leak onto desktop.
  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  // While open the overlay behaves as a modal dialog: focus moves into it,
  // Tab cycles between its links and the Close button, the page behind is
  // inert, and focus goes back to the Menu button when it closes.
  useEffect(() => {
    if (!open) return;
    const behind = [document.querySelector("main"), document.querySelector(".site-footer")];
    behind.forEach((el) => el?.setAttribute("inert", ""));
    const overlay = overlayRef.current;
    const menuBtn = menuBtnRef.current;
    overlay?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      behind.forEach((el) => el?.removeAttribute("inert"));
      const focusWasInMenu =
        !document.activeElement ||
        document.activeElement === document.body ||
        overlay?.contains(document.activeElement);
      if (focusWasInMenu) menuBtn?.focus();
    };
  }, [open]);

  // Escape closes; growing past the phone tier closes (belt-and-braces —
  // CSS already hides the overlay >880).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !overlayRef.current) return;
      const stops = [
        menuBtnRef.current,
        ...overlayRef.current.querySelectorAll<HTMLElement>("a, button"),
      ].filter((el): el is HTMLElement => !!el);
      const first = stops[0];
      const last = stops[stops.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (!stops.includes(active as HTMLElement)) {
        e.preventDefault();
        first.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 881px)");
    const onMq = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="nav__inner">
          <Link href="/" className="nav__wordmark">
            {copy.site.wordmark}
          </Link>

          <ul className="nav__links">
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
                  lang={l.htmlLang}
                  aria-label={l.name}
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

          {/* Phone-only trigger — hidden >880px by CSS. */}
          <button
            ref={menuBtnRef}
            type="button"
            className="nav__menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="nav-overlay"
          id="mobile-menu"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <ul className="nav-overlay__links">
            {MOBILE_LINKS.map((link, i) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="nav-overlay__link"
                  data-active={current === link.id}
                  aria-current={current === link.id ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-overlay__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-overlay__lang" role="group" aria-label="Language">
            <span className="nav-overlay__lang-label">Language</span>
            {LANGS.map((l) => (
              <button
                key={l.id}
                type="button"
                lang={l.htmlLang}
                aria-label={l.name}
                data-active={lang === l.id}
                data-script={l.script}
                aria-pressed={lang === l.id}
                onClick={() => {
                  setLang(l.id);
                  setOpen(false);
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
