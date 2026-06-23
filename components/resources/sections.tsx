/* Resources — hero, textbook downloads, and license note.
   Ported from ResourcesPage.jsx. (VideoCurriculum is a separate client
   component.) */

import type { ReactNode } from "react";
import { Photo, Caption, SectionMarker } from "@/components/primitives";

const RESOURCES_COPY: {
  kicker: string;
  headline: string;
  standfirst: string;
  heroTag: string;
  heroStamp: string;
  heroTone: "ledger" | "dusk";
  heroMeta: string;
  textbook: {
    body: ReactNode;
    photoTag: string;
    photoStamp: string;
    photoMeta: string;
  };
} = {
  kicker: "Resources",
  headline: "Materials, free to use.",
  standfirst:
    "The textbook in three scripts. A short video for every module. Free for any household, classroom, or partner organisation that can use them.",
  heroTag: "textbook · classroom · Howrah",
  heroStamp: "PHOTO · RESOURCES",
  heroTone: "ledger",
  heroMeta: "Howrah · 2025 · [ PHOTOGRAPHER ]",
  textbook: {
    body: (
      <>
        <p>
          <em>Knowing Your Money</em> is a 184-page textbook covering all ten
          modules — the book the cohorts use, typeset for reading aloud, with
          worksheets and a glossary of Indian banking terms in every edition.
          Three editions are in circulation, each freely downloadable below.
        </p>
        <p>
          Households can use it as a guide; partner organisations can teach from
          it directly. We ask only that it be passed on intact — cover and
          credits attached — and that anyone running a formal cohort lets us
          know.
        </p>
      </>
    ),
    photoTag: "textbook · second edition · 2025",
    photoStamp: "PHOTO · TEXTBOOK",
    photoMeta: "Second edition · 2025 · [ PHOTOGRAPHER ]",
  },
};

/* ---------- HERO ---------- */
export function ResourcesHero() {
  const c = RESOURCES_COPY;
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.kicker}</p>
        <h1 className="curr-hero__headline">{c.headline}</h1>
        <p className="curr-hero__standfirst">{c.standfirst}</p>
      </div>
      <div className="container">
        <Photo
          aspect="cinema"
          tone={c.heroTone}
          tag={c.heroTag}
          stamp={c.heroStamp}
          style={{ marginTop: 64 }}
        />
        <p className="curr-hero__credit">{c.heroMeta}</p>
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
  const c = RESOURCES_COPY.textbook;

  return (
    <section className="section curr-origin res-textbook">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label="The textbook" />
            <p className="curr-modules__hint">
              184 pages. Three editions, freely downloadable.
            </p>
          </div>

          <div>
            <div className="res-textbook__body">{c.body}</div>

            <div className="res-textbook__split">
              <Photo
                aspect="landscape"
                tone="ledger"
                tag={c.photoTag}
                stamp={c.photoStamp}
              />
              <Caption meta={c.photoMeta} />
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

            <p className="res-textbook__note">
              Print copies are distributed in workshops — not available by post.
              Partner organisations using the book in formal cohorts: please
              write to us.
            </p>
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
            <SectionMarker index="03" label="License" />
          </div>
          <div>
            <p className="res-license__line">
              <em>
                Free for educational use — household, classroom, or community.
                Pass it on intact.
              </em>
            </p>
            <p className="res-license__line">
              Organisations adopting the curriculum into a formal programme —
              schools, NGOs, government departments, livelihood missions — should
              write to <a href="mailto:adopt@prosperity.in">adopt@prosperity.in</a>.
              We will send you the facilitator's edition, a brief licence, and an
              invitation to a one-day onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
