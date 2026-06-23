/* Curriculum — shared structural sections.
   Composes Hero / Origin / ModuleList / TextbookRail / Premise.
   Ported from CurriculumPage.jsx + CurriculumModules.jsx. */

import Link from "next/link";
import { Photo, SectionMarker } from "@/components/primitives";

const COPY = {
  kicker: "Curriculum",
  standfirst:
    "For the women's cohorts in West Bengal — delivered in Bengali and Hindi, in partnership with Bandhan NGO.",
  heroTag: "workshop · Module 02 · Howrah, West Bengal",
  heroStamp: "PHOTO · WORKSHOP · WOMEN",
  heroTone: "warm" as const,
  heroMeta: "South 24 Parganas · 2025 · [ PHOTOGRAPHER ]",
  interviewSlot: "Interview analysis document — coming soon",
};

/* ---------- HERO ---------- */
export function CurriculumHero() {
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{COPY.kicker}</p>
        <h1 className="curr-hero__headline">Knowing Your Money</h1>
        <p className="curr-hero__standfirst">{COPY.standfirst}</p>
      </div>
      <div className="container">
        <Photo
          aspect="cinema"
          tone={COPY.heroTone}
          tag={COPY.heroTag}
          stamp={COPY.heroStamp}
          style={{ marginTop: 64 }}
        />
        <p className="curr-hero__credit">{COPY.heroMeta}</p>
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
            <SectionMarker index="01" label="Where it came from" />
          </div>
          <div>
            <p className="curr-origin__body">
              <em>Knowing Your Money</em> began at a kitchen table. The founder
              spent two years interviewing women across West Bengal — beginning
              with her family&rsquo;s longtime nanny — about how money moved
              through their lives: who held it, who decided, what they wished
              they had been taught. Every one of the ten modules carries a
              question a real woman asked, and an answer worked out alongside
              her. The curriculum is not adapted from a Western framework. It
              was built, sentence by sentence, in the rooms it is now taught in.
            </p>
            <p className="curr-origin__link">
              <Link href="/about">
                Read the full origin story <span aria-hidden="true">→</span>
              </Link>
            </p>
            <div className="curr-origin__slot">
              <span className="curr-origin__slot-icon" aria-hidden="true">
                [ ]
              </span>
              <span className="curr-origin__slot-label">
                {COPY.interviewSlot}
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
            <SectionMarker index="04" label="How it is taught" />
          </div>
          <div>
            <p className="curr-premise__body">
              Every module opens with a story — a recurring cast of characters
              drawn from the original interviews, whose households we follow
              across the ten weeks. A facilitator from the same district leads
              the room; live translation between Bengali and Hindi runs through
              every session, so no student is asked to stretch for language.
              Each student leaves with the <em>Knowing Your Money</em> textbook
              in her own script. A short video explainer accompanies each
              module, recorded for households where a daughter or son can sit
              with their mother and watch together at home. The work travels in
              the voice it was learned in.
            </p>

            <ul className="curr-premise__list">
              <li>
                <span className="curr-premise__list-num">i.</span>
                <span>Real interviews shape every module.</span>
              </li>
              <li>
                <span className="curr-premise__list-num">ii.</span>
                <span>
                  Recurring story characters carry the lessons across the ten
                  weeks.
                </span>
              </li>
              <li>
                <span className="curr-premise__list-num">iii.</span>
                <span>Live translation runs through every workshop.</span>
              </li>
              <li>
                <span className="curr-premise__list-num">iv.</span>
                <span>Every student keeps the textbook.</span>
              </li>
              <li>
                <span className="curr-premise__list-num">v.</span>
                <span>One short video explainer per module, for home.</span>
              </li>
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
            <SectionMarker index="03" label="The textbook" />
            <p className="curr-modules__hint">
              Three editions — Bengali, Hindi, English. Each routes to the
              resources page.
            </p>
          </div>

          <div>
            <h2 className="curr-textbook__head">
              <em>Knowing Your Money,</em> in the language of the room.
            </h2>
            <p className="curr-textbook__intro">
              Every student receives the textbook in her own script — 184 pages,
              typeset for reading aloud, with module-by-module worksheets at the
              back. All three editions are freely downloadable.
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
                All resources <span aria-hidden="true">→</span>
              </Link>
              <span className="curr-textbook__note">
                Print copies are distributed in workshops — not available by
                post.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
