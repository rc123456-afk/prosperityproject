/* Curriculum — shared structural sections for the two sub-pages.
   Both compose Hero / Origin / Premise; the centre differs (ModuleList +
   TextbookRail for women, InDevelopmentSection for blue-collar).
   Ported from CurriculumPage.jsx + CurriculumModules.jsx. */

import type { ReactNode } from "react";
import Link from "next/link";
import { Photo, SectionMarker } from "@/components/primitives";

export type Cohort = "women" | "blue-collar";

type CohortCopy = {
  kicker: string;
  standfirst: string;
  placeholderBadge?: string;
  heroTag: string;
  heroStamp: string;
  heroTone: "warm" | "dusk";
  heroMeta: string;
  origin: ReactNode;
  interviewSlot: string;
  premise: ReactNode;
};

const COHORT_COPY: Record<Cohort, CohortCopy> = {
  women: {
    kicker: "Curriculum · For Women",
    standfirst:
      "For the women's cohorts in West Bengal — delivered in Bengali and Hindi, in partnership with Bandhan NGO.",
    heroTag: "workshop · Module 02 · Howrah, West Bengal",
    heroStamp: "PHOTO · WORKSHOP · WOMEN",
    heroTone: "warm",
    heroMeta: "South 24 Parganas · 2025 · [ PHOTOGRAPHER ]",
    origin: (
      <>
        <em>Knowing Your Money</em> began at a kitchen table. The founder spent
        two years interviewing women across West Bengal — beginning with her
        family&rsquo;s longtime nanny — about how money moved through their
        lives: who held it, who decided, what they wished they had been taught.
        Every one of the ten modules carries a question a real woman asked, and
        an answer worked out alongside her. The curriculum is not adapted from a
        Western framework. It was built, sentence by sentence, in the rooms it is
        now taught in.
      </>
    ),
    interviewSlot: "Interview analysis document — coming soon",
    premise: (
      <>
        Every module opens with a story — a recurring cast of characters drawn
        from the original interviews, whose households we follow across the ten
        weeks. A facilitator from the same district leads the room; live
        translation between Bengali and Hindi runs through every session, so no
        student is asked to stretch for language. Each student leaves with the{" "}
        <em>Knowing Your Money</em> textbook in her own script. A short video
        explainer accompanies each module, recorded for households where a
        daughter or son can sit with their mother and watch together at home. The
        work travels in the voice it was learned in.
      </>
    ),
  },
  "blue-collar": {
    kicker: "Curriculum · For Blue-Collar Workers",
    standfirst:
      "An adaptation in development for blue-collar workers in the UAE — Hindi and English, with material for Malayalam, Tamil, and Bengali speakers in progress.",
    placeholderBadge: "PLACEHOLDER COPY",
    heroTag: "pilot session · Karama · Dubai",
    heroStamp: "PHOTO · PILOT · UAE",
    heroTone: "dusk",
    heroMeta: "Dubai · 2025 pilot · [ PHOTOGRAPHER ]",
    origin: (
      <>
        The UAE adaptation begins the same way the women&rsquo;s curriculum
        began: with interviews. Over the past year, the team has been sitting
        with construction workers in Karama labour camps, drivers in Sharjah, and
        factory hands in Jebel Ali — asking how money moves through a month away
        from home, where it leaks, and where the formal system fails them. The
        modular spine of <em>Knowing Your Money</em> stays; the stories, the
        examples, and the legal frameworks are being rebuilt around the migrant
        blue-collar life.
      </>
    ),
    interviewSlot: "UAE interview analysis — in progress",
    premise: (
      <>
        Sessions are planned for evenings and Fridays, in halls and community
        rooms the cohort already trusts — labour-camp common areas, partner
        gurdwaras and mosques, the back of a friendly cafeteria. Live translation
        will run in Hindi and English at minimum, with the goal of pairing every
        workshop with a Malayalam, Tamil, or Bengali interpreter as the cohort
        requires. Each student will receive a pocket-sized textbook designed for
        a worker&rsquo;s kit-bag, and a short video explainer per module that
        travels well over WhatsApp. The work meets the worker where the work
        already is.
      </>
    ),
  },
};

/* ---------- HERO ---------- */
export function CurriculumHero({ cohort }: { cohort: Cohort }) {
  const c = COHORT_COPY[cohort];
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.kicker}</p>
        <h1 className="curr-hero__headline">Knowing Your Money</h1>
        <p className="curr-hero__standfirst">
          {c.standfirst}
          {c.placeholderBadge && (
            <span className="ph-stamp" style={{ marginLeft: 14 }}>
              [ {c.placeholderBadge} ]
            </span>
          )}
        </p>
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

/* ---------- ORIGIN ---------- */
export function CurriculumOrigin({ cohort }: { cohort: Cohort }) {
  const c = COHORT_COPY[cohort];
  return (
    <section className="section curr-origin">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label="Where it came from" />
          </div>
          <div>
            <p className="curr-origin__body">{c.origin}</p>
            <p className="curr-origin__link">
              <Link href="/about">
                Read the full origin story <span aria-hidden="true">→</span>
              </Link>
            </p>
            <div className="curr-origin__slot">
              <span className="curr-origin__slot-icon" aria-hidden="true">
                [ ]
              </span>
              <span className="curr-origin__slot-label">{c.interviewSlot}</span>
              <span className="curr-origin__slot-meta">PDF · forthcoming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PEDAGOGICAL PREMISE ---------- */
export function CurriculumPremise({ cohort }: { cohort: Cohort }) {
  const c = COHORT_COPY[cohort];
  return (
    <section className="section section--alt curr-premise">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker
              index={cohort === "women" ? "04" : "03"}
              label="How it is taught"
            />
          </div>
          <div>
            <p className="curr-premise__body">{c.premise}</p>

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

/* ---------- TEXTBOOK ROUTING (Women) ---------- */
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
              Every student in the women&rsquo;s cohort receives the textbook in
              her own script — 184 pages, typeset for reading aloud, with
              module-by-module worksheets at the back. All three editions are
              freely downloadable.
            </p>

            <ul className="textbook-list">
              {editions.map((e) => (
                <li key={e.id} className="textbook-row">
                  <Link
                    href={`/resources/women#textbook-${e.id}`}
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
              <Link href="/resources/women" className="tertiary">
                All resources for the women&rsquo;s cohort{" "}
                <span aria-hidden="true">→</span>
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

/* ---------- BCW: IN DEVELOPMENT ---------- */
export function InDevelopmentSection() {
  return (
    <section className="section curr-indev">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="02" label="The ten modules" />
          </div>
          <div>
            <h2 className="curr-indev__head">In development.</h2>
            <p className="curr-indev__body">
              The UAE curriculum keeps the same modular spine as the
              women&rsquo;s
              <em> Knowing Your Money</em> — ten modules, paced across ten weeks —
              and is being rebuilt around the lives of construction workers,
              drivers, factory workers, and others in informal-sector labour.
              Modules currently in progress cover{" "}
              <strong>
                wage negotiation under contractor pay structures
              </strong>{" "}
              (and the legal protections of the UAE Wage Protection System),{" "}
              <strong>accident and injury preparation</strong> for site work,
              <strong> remittance logistics</strong> — which corridor, which
              provider, which day of the week — and{" "}
              <strong>access to schemes for migrant workers</strong>, including
              ICWF assistance, end-of-service gratuity, and the protections that
              travel with a worker between Gulf states.
            </p>
            <p className="curr-indev__body">
              We are looking for partners on its development — labour-rights
              lawyers in the UAE, remittance providers willing to share
              unit-economics, and foundations interested in financial literacy
              for migrant labour. If you would like to help, or be notified when
              the curriculum launches, please
              <Link href="/contact"> write to us.</Link>
            </p>

            <div className="curr-indev__cta-row">
              <Link href="/contact" className="btn btn--secondary">
                Partner on development <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="tertiary">
                Notify me at launch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
