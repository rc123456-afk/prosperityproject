/* Resources — hero, textbook downloads, and license note.
   Ported from ResourcesPage.jsx. (VideoCurriculum is a separate client
   component.) Copy lives in content/copy.ts. */

import { Photo, Caption, SectionMarker } from "@/components/primitives";
import { renderInline, RichText } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.resources;
const HERO = {
  heroTag: "textbook · classroom · Howrah",
  heroStamp: "PHOTO · RESOURCES",
  heroTone: "ledger" as const,
  heroMeta: "Howrah · 2025 · [ PHOTOGRAPHER ]",
  photoTag: "textbook · second edition · 2025",
  photoStamp: "PHOTO · TEXTBOOK",
  photoMeta: "Second edition · 2025 · [ PHOTOGRAPHER ]",
};

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
          tag={HERO.heroTag}
          stamp={HERO.heroStamp}
          style={{ marginTop: 64 }}
        />
        <p className="curr-hero__credit">{HERO.heroMeta}</p>
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
    title: "নিজের টাকা চেনা",
    meta: "Edition 02 · 2025 · 184 pp · PDF",
    size: "8.2 MB",
    file: "/downloads/knowing-your-money-bn.pdf",
  },
  {
    id: "hi",
    script: "हिं",
    lang: "Hindi",
    lang_native: "हिन्दी",
    title: "अपना पैसा जानना",
    meta: "Edition 02 · 2025 · 184 pp · PDF",
    size: "8.0 MB",
    file: "/downloads/knowing-your-money-hi.pdf",
  },
  {
    id: "en",
    script: "EN",
    lang: "English",
    lang_native: "English",
    title: "Knowing Your Money",
    meta: "Edition 02 · 2025 · 184 pp · PDF",
    size: "7.8 MB",
    file: "/downloads/knowing-your-money-en.pdf",
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

            <div className="res-textbook__split">
              <Photo
                aspect="landscape"
                tone="ledger"
                tag={HERO.photoTag}
                stamp={HERO.photoStamp}
              />
              <Caption meta={HERO.photoMeta} />
            </div>

            <div className="downloads">
              {TEXTBOOK_EDITIONS.map((e) => (
                <a
                  key={e.id}
                  id={`textbook-${e.id}`}
                  href={e.file}
                  className="download-card"
                  download
                >
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
                  <span className="download-card__action" aria-hidden="true">
                    <span className="download-card__action-label">
                      Download · {e.size}
                    </span>
                    <span className="download-card__arrow">↓</span>
                  </span>
                </a>
              ))}
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
