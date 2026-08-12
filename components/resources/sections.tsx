/* Resources — hero, textbook downloads, and license note.
   Ported from ResourcesPage.jsx. (VideoCurriculum is a separate client
   component.) Copy lives in content/copy.ts. */

import { Photo, SectionMarker } from "@/components/primitives";
import { renderInline, RichText } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.resources;
const HERO = {
  heroTone: "ledger" as const,
};
const TEXTBOOK_META = "Edition 1 · 2025/2026";

/* ---------- HERO ---------- */
export function ResourcesHero() {
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.hero.kicker}</p>
        <h1 className="curr-hero__headline">{c.hero.headline}</h1>
        <p className="curr-hero__standfirst">{c.hero.standfirst}</p>
      </div>
      <div className="container">
        <Photo
          aspect="cinema"
          tone={HERO.heroTone}
          src="/photos/resources/hero.jpg"
          alt="A facilitator presenting the Knowing Your Money curriculum on screen"
          priority
          style={{ marginTop: 64 }}
        />
      </div>
    </section>
  );
}

/* ---------- TEXTBOOK DOWNLOADS ---------- */
const TEXTBOOK_EDITIONS = [
  {
    id: "bn",
    script: "বাং",
    lang: "Bengali",
    lang_native: "বাংলা",
    title: "টাকার পরিচয়",
    meta: "23 pages · PDF",
    size: "466 KB",
    file: "/downloads/knowing-your-money-bn.pdf",
    available: true,
  },
  {
    id: "hi",
    script: "हिं",
    lang: "Hindi",
    lang_native: "हिन्दी",
    title: "पैसा पहचान",
    meta: "23 pages · PDF",
    size: "446 KB",
    file: "/downloads/knowing-your-money-hi.pdf",
    available: true,
  },
  {
    id: "en",
    script: "EN",
    lang: "English",
    lang_native: "English",
    title: "Knowing Your Money",
    meta: "24 pages · PDF",
    size: "366 KB",
    file: "/downloads/knowing-your-money-en.pdf",
    available: true,
  },
];

export function TextbookDownloads() {
  return (
    <section className="section curr-origin res-textbook">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label={c.textbook.sectionLabel} />
            <p className="curr-modules__hint">{c.textbook.sectionHint}</p>
          </div>

          <div>
            <div className="res-textbook__body">
              <RichText items={c.textbook.body} />
            </div>
            <p className="res-textbook__edition">{TEXTBOOK_META}</p>

            <div className="res-textbook__split">
              <Photo
                aspect="landscape"
                tone="ledger"
                src="/photos/resources/textbook.jpg"
                alt="The printed booklet and worksheets on a workshop table"
              />
            </div>

            <div className="downloads">
              {TEXTBOOK_EDITIONS.map((e) => {
                const body = (
                  <>
                    <span
                      className={`download-card__script download-card__script--${e.id}`}
                    >
                      {e.script}
                    </span>
                    <span className="download-card__body">
                      <span className="download-card__lang">
                        {e.lang}{" "}
                        <span className="download-card__native">
                          / {e.lang_native}
                        </span>
                      </span>
                      <span
                        className={`download-card__title download-card__title--${e.id}`}
                      >
                        {e.title}
                      </span>
                      <span className="download-card__meta">{e.meta}</span>
                    </span>
                  </>
                );
                return e.available ? (
                  <a
                    key={e.id}
                    id={`textbook-${e.id}`}
                    href={e.file ?? undefined}
                    className="download-card"
                    download
                  >
                    {body}
                    <span className="download-card__action" aria-hidden="true">
                      <span className="download-card__action-label">
                        Download · {e.size}
                      </span>
                      <span className="download-card__arrow">↓</span>
                    </span>
                  </a>
                ) : (
                  <div
                    key={e.id}
                    id={`textbook-${e.id}`}
                    className="download-card download-card--soon"
                    aria-disabled="true"
                  >
                    {body}
                    <span className="download-card__action" aria-hidden="true">
                      <span className="download-card__action-label">
                        Coming soon
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="res-textbook__note">{c.textbook.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- LICENSE NOTE ---------- */
export function LicenseNote() {
  return (
    <section className="section res-license">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="03" label={c.license.sectionLabel} />
          </div>
          <div>
            <p className="res-license__line">
              <em>{renderInline(c.license.line1)}</em>
            </p>
            <p className="res-license__line">{renderInline(c.license.line2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
