"use client";

/*
 * Nav — sticky top nav, reusable across every page.
 *   - Wordmark (left)
 *   - 8 links (centre):
 *       Curriculum · Workshops · Resources · Stories — each opens a dropdown
 *         offering "For Women" (active) and "For Blue-Collar Workers" (in dev).
 *       Gallery · Impact · About · Contact — flat links.
 *   - Language switcher EN · हिं · বাং (right).
 * Ported from the Claude Design Nav.jsx; hrefs are real app routes and the
 * active link is derived from the current pathname.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, LANGS } from "./LanguageContext";

type DropdownLink = {
  id: string;
  label: string;
  routes: { women: string; bluecollar: string };
  flat?: false;
};
type FlatLink = {
  id: string;
  label: string;
  href: string;
  flat: true;
};
type NavLink = DropdownLink | FlatLink;

const NAV_LINKS: NavLink[] = [
  {
    id: "curriculum",
    label: "Curriculum",
    routes: { women: "/curriculum/women", bluecollar: "/curriculum/blue-collar-workers" },
  },
  {
    id: "workshops",
    label: "Workshops",
    routes: { women: "/workshops/women", bluecollar: "/workshops/blue-collar-workers" },
  },
  {
    id: "resources",
    label: "Resources",
    routes: { women: "/resources/women", bluecollar: "/resources/blue-collar-workers" },
  },
  {
    id: "stories",
    label: "Stories",
    routes: { women: "/stories/women", bluecollar: "/stories/blue-collar-workers" },
  },
  { id: "gallery", label: "Gallery", href: "/gallery", flat: true },
  { id: "impact", label: "Impact", href: "/impact", flat: true },
  { id: "about", label: "About", href: "/about", flat: true },
  { id: "contact", label: "Contact", href: "/contact", flat: true },
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

  const [open, setOpen] = useState<string | null>(null);
  const { lang, setLang } = useLanguage();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close the open dropdown on route change.
  useEffect(() => {
    setOpen(null);
  }, [pathname]);

  // Close on Escape or outside click.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".nav__item")) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(id);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav__inner">
        <Link href="/" className="nav__wordmark">
          The Prosperity Project
        </Link>

        <ul className="nav__links" role="menubar">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className="nav__item"
              onMouseEnter={() => !link.flat && openMenu(link.id)}
              onMouseLeave={() => !link.flat && scheduleClose()}
            >
              {link.flat ? (
                <Link
                  href={link.href}
                  className="nav__link"
                  aria-current={current === link.id ? "page" : undefined}
                  style={current === link.id ? { color: "var(--marigold-deep)" } : undefined}
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    className="nav__link"
                    aria-haspopup="true"
                    aria-expanded={open === link.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (closeTimer.current) clearTimeout(closeTimer.current);
                      setOpen(open === link.id ? null : link.id);
                    }}
                    onFocus={() => openMenu(link.id)}
                  >
                    {link.label}
                    <span className="caret" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  <div
                    className="nav__panel"
                    data-open={open === link.id ? "true" : "false"}
                    role="menu"
                    onMouseEnter={() => openMenu(link.id)}
                    onMouseLeave={scheduleClose}
                  >
                    <Link href={link.routes.women} className="nav__panel-item" role="menuitem">
                      <span
                        className="nav__panel-dot nav__panel-dot--active"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="nav__panel-label">For Women</span>
                        <span className="nav__panel-meta nav__panel-meta--active" />
                      </span>
                    </Link>
                    <Link
                      href={link.routes.bluecollar}
                      className="nav__panel-item"
                      role="menuitem"
                    >
                      <span className="nav__panel-dot nav__panel-dot--dev" aria-hidden="true" />
                      <span>
                        <span className="nav__panel-label">For Blue-Collar Workers</span>
                        <span className="nav__panel-meta">In development &nbsp;·&nbsp; UAE</span>
                      </span>
                    </Link>
                  </div>
                </>
              )}
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
