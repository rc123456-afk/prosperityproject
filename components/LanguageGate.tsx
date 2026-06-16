"use client";

import type { ReactNode } from "react";
import { useLanguage, LANGS } from "./LanguageContext";

/**
 * The English site is fully populated. Hindi and Bengali are not translated
 * yet, so selecting हिं or বাং swaps the page body for an honest
 * "Translation in progress" notice rather than fake-translated content.
 */
export function LanguageGate({ children }: { children: ReactNode }) {
  const { lang } = useLanguage();

  if (lang === "EN") return <>{children}</>;

  const meta = LANGS.find((l) => l.id === lang);
  const name = lang === "HI" ? "Hindi" : "Bengali";

  return (
    <section className="section translation-gate">
      <div className="container">
        <p className="translation-gate__eyebrow">
          {meta?.label} &nbsp;·&nbsp; {name}
        </p>
        <h1 className="translation-gate__head">Translation in&nbsp;progress</h1>
        <p className="translation-gate__body">
          The {name} edition of this page is being prepared with our
          facilitators so the language stays true to the classroom. For now,
          the full site is available in English.
        </p>
      </div>
    </section>
  );
}
