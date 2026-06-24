/* Curriculum — shared structural sections.
   Composes Hero / Origin / ModuleList / TextbookRail / Premise.
   Ported from CurriculumPage.jsx + CurriculumModules.jsx. */

import Link from "next/link";
import { Photo, SectionMarker } from "@/components/primitives";
import { renderInline } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.curriculum;
const HERO = {
  heroTag: "workshop · Module 02 · Howrah, West Bengal",
  heroStamp: "PHOTO · WORKSHOP · WOMEN",
  heroTone: "warm" as const,
  heroMeta: "South 24 Parganas · 2025 · [ PHOTOGRAPHER ]",
};
const ROMAN = ["i.", "ii.", "iii.", "iv.", "v.", "vi.", "vii.", "viii.", "ix.", "x."];

/* ---------- HERO ---------- */
export function CurriculumHero() {
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

/* ---------- ORIGIN ---------- */
export function CurriculumOrigin() {
  return (
    <section className="section curr-origin">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label={c.origin.sectionLabel} />
          </div>
          <div>
            <p className="curr-origin__body">{renderInline(c.origin.body)}</p>
            <p className="curr-origin__link">
              <Link href="/about">
                {c.origin.linkLabel} <span aria-hidden="true">→</span>
              </Link>
            </p>
            <div className="curr-origin__slot">
              <span className="curr-origin__slot-icon" aria-hidden="true">
                [ ]
              </span>
              <span className="curr-origin__slot-label">
                {c.origin.interviewSlot}
              </span>
              <span className="curr-origin__slot-meta">PDF · forthcoming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PEDAGOGICAL PREMISE ---------- */
export function CurriculumPremise() {
  return (
    <section className="section section--alt curr-premise">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="04" label={c.premise.sectionLabel} />
          </div>
          <div>
            <p className="curr-premise__body">{renderInline(c.premise.body)}</p>

            <ul className="curr-premise__list">
              {c.premise.points.map((point, i) => (
                <li key={i}>
                  <span className="curr-premise__list-num">{ROMAN[i]}</span>
                  <span>{renderInline(point)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TEXTBOOK ROUTING ---------- */
export function TextbookRail() {
  const editions = [
    {
      id: "bn",
      script: "বাং",
      lang: "Bengali",
      lang_native: "বাংলা",
      title: "নিজের টাকা চেনা",
      meta: "Edition 02 · 2025 · 184 pp · PDF",
    },
    {
      id: "hi",
      script: "हिं",
      lang: "Hindi",
      lang_native: "हिन्दी",
      title: "अपना पैसा जानना",
      meta: "Edition 02 · 2025 · 184 pp · PDF",
    },
    {
      id: "en",
      script: "EN",
      lang: "English",
      lang_native: "English",
      title: "Knowing Your Money",
      meta: "Edition 02 · 2025 · 184 pp · PDF",
    },
  ];

  return (
    <section className="section curr-textbook">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="03" label={c.textbook.sectionLabel} />
            <p className="curr-modules__hint">{c.textbook.sectionHint}</p>
          </div>

          <div>
            <h2 className="curr-textbook__head">
              {renderInline(c.textbook.heading)}
            </h2>
            <p className="curr-textbook__intro">
              {renderInline(c.textbook.intro)}
            </p>

            <ul className="textbook-list">
              {editions.map((e) => (
                <li key={e.id} className="textbook-row">
                  <Link
                    href={`/resources#textbook-${e.id}`}
                    className="textbook-row__link"
                    aria-label={`Download ${e.lang} edition from the resources page`}
                  >
                    <span
                      className={`textbook-row__script textbook-row__script--${e.id}`}
                    >
                      {e.script}
                    </span>
                    <span className="textbook-row__body">
                      <span className="textbook-row__lang">
                        {e.lang}{" "}
                        <span className="textbook-row__native">
                          / {e.lang_native}
                        </span>
                      </span>
                      <span className="textbook-row__title">{e.title}</span>
                      <span className="textbook-row__meta">{e.meta}</span>
                    </span>
                    <span className="textbook-row__action" aria-hidden="true">
                      <span className="textbook-row__action-label">
                        Open in resources
                      </span>
                      <span className="textbook-row__arrow">↓</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="curr-textbook__foot">
              <Link href="/resources" className="tertiary">
                {c.textbook.linkLabel} <span aria-hidden="true">→</span>
              </Link>
              <span className="curr-textbook__note">{c.textbook.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
