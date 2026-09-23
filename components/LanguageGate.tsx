"use client";

import type { ReactNode } from "react";
import { useLanguage, LANGS } from "./LanguageContext";
import { TEXTBOOK_EDITIONS } from "@/lib/textbooks";

/**
 * The English site is fully populated. Hindi and Bengali are not translated
 * yet, so selecting हिं or বাং swaps the page body for an honest
 * "Translation in progress" notice rather than fake-translated content.
 * The notice still offers what already exists in that language (the
 * textbook) and a one-tap way back to English.
 */
export function LanguageGate({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLanguage();

  if (lang === "EN") return <>{children}</>;

  const meta = LANGS.find((l) => l.id === lang);
  const name = meta?.name ?? "";
  const edition = TEXTBOOK_EDITIONS.find((e) => e.id === meta?.htmlLang);

  return (
    <section className="section translation-gate">
      <div className="container">
        <p className="translation-gate__eyebrow">
          <span lang={meta?.htmlLang}>{meta?.label}</span> &nbsp;·&nbsp; {name}
        </p>
        <h1 className="translation-gate__head">Translation in&nbsp;progress</h1>
        <p className="translation-gate__body">
          The {name} edition of this page is being prepared with our
          facilitators so the language stays true to the classroom. For now,
          the full site is available in English.
        </p>
        {edition?.available && (
          <p className="translation-gate__book">
            The <em>Knowing Your Money</em> textbook is already free in {name}:{" "}
            <a href={edition.file} download lang={meta?.htmlLang}>
              {edition.title}
            </a>{" "}
            ({edition.meta}, {edition.size}).
          </p>
        )}
        <div className="translation-gate__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => setLang("EN")}
          >
            Read in English <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
