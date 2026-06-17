/* Resources — hero, textbook downloads, and license note for the two
   sub-pages. Ported from ResourcesPage.jsx. (VideoCurriculum is a separate
   client component.) */

import type { ReactNode } from "react";
import { Photo, Caption, SectionMarker } from "@/components/primitives";

export type Cohort = "women" | "blue-collar";

const RESOURCES_COPY: Record<
  Cohort,
  {
    kicker: string;
    headline: string;
    standfirst: string;
    heroTag: string;
    heroStamp: string;
    heroTone: "ledger" | "dusk";
    heroMeta: string;
    placeholderBadge?: string;
    textbook: {
      body: ReactNode;
      photoTag: string;
      photoStamp: string;
      photoMeta: string;
    };
  }
> = {
  women: {
    kicker: "Resources · For Women",
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
            modules — the book the women's cohorts use, typeset for reading
            aloud, with worksheets and a glossary of Indian banking terms in
            every edition. Three editions are in circulation, each freely
            downloadable below.
          </p>
          <p>
            Households can use it as a guide; partner organisations can teach
            from it directly. We ask only that it be passed on intact — cover and
            credits attached — and that anyone running a formal cohort lets us
            know.
          </p>
        </>
      ),
      photoTag: "textbook · second edition · 2025",
      photoStamp: "PHOTO · TEXTBOOK",
      photoMeta: "Second edition · 2025 · [ PHOTOGRAPHER ]",
    },
  },
  "blue-collar": {
    kicker: "Resources · For Blue-Collar Workers",
    headline: "Materials, free to use.",
    standfirst:
      "A textbook and a video for every module — sized for a kit-bag, paced for a worker's evening. In development for the UAE cohort.",
    heroTag: "pocket textbook · mock-up · Karama",
    heroStamp: "PHOTO · MOCK-UP",
    heroTone: "dusk",
    heroMeta: "Dubai · 2025 pilot · [ PHOTOGRAPHER ]",
    placeholderBadge: "PLACEHOLDER COPY",
    textbook: {
      body: (
        <>
          <p>
            The UAE edition of <em>Knowing Your Money</em> is being adapted from
            the West Bengal textbook — same modular spine, rewritten around the
            life of a migrant blue-collar worker. The pocket-sized format is
            designed to live in a kit-bag and survive a building site: bound on
            tear-resistant paper, with a worksheet block at the back for tracking
            remittance, savings, and end-of-service entitlement.
          </p>
          <p>
            The first edition will be published in <strong>Hindi</strong> and
            <strong> English</strong>; Bengali, Malayalam, and Tamil editions
            follow in year two. All editions will be freely downloadable from
            this page when the pilot graduates its first cohort.
          </p>
        </>
      ),
      photoTag: "pocket textbook · mock-up",
      photoStamp: "PHOTO · MOCK-UP",
      photoMeta: "Mock-up · 2025 · [ PHOTOGRAPHER ]",
    },
  },
};

/* ---------- HERO ---------- */
export function ResourcesHero({ cohort }: { cohort: Cohort }) {
  const c = RESOURCES_COPY[cohort];
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.kicker}</p>
        <h1 className="curr-hero__headline">{c.headline}</h1>
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

export function TextbookDownloads({ cohort }: { cohort: Cohort }) {
  const c = RESOURCES_COPY[cohort].textbook;
  const isWomen = cohort === "women";

  return (
    <section className="section curr-origin res-textbook">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label="The textbook" />
            <p className="curr-modules__hint">
              184 pages.{" "}
              {isWomen
                ? "Three editions, freely downloadable."
                : "Three editions in development."}
            </p>
          </div>

          <div>
            <div className="res-textbook__body">{c.body}</div>

            <div className="res-textbook__split">
              <Photo
                aspect="landscape"
                tone={isWomen ? "ledger" : "dusk"}
                tag={c.photoTag}
                stamp={c.photoStamp}
              />
              <Caption meta={c.photoMeta} />
            </div>

            {isWomen ? (
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
            ) : (
              <div className="downloads downloads--soon">
                {TEXTBOOK_EDITIONS.map((e) => (
                  <div
                    key={e.id}
                    className="download-card download-card--soon"
                    id={`textbook-${e.id}`}
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
                      <span className="download-card__meta download-card__meta--soon">
                        Coming soon &nbsp;·&nbsp; PDF
                      </span>
                    </span>
                    <span
                      className="download-card__action download-card__action--soon"
                      aria-hidden="true"
                    >
                      <span className="download-card__action-label">
                        In development
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            )}

            <p className="res-textbook__note">
              {isWomen
                ? "Print copies are distributed in workshops — not available by post. Partner organisations using the book in formal cohorts: please write to us."
                : "When the first UAE edition publishes, all three language editions will appear here. Subscribe below to be notified."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- LICENSE NOTE ---------- */
export function LicenseNote({ cohort }: { cohort: Cohort }) {
  const isWomen = cohort === "women";
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
                {isWomen
                  ? "Free for educational use — household, classroom, or community. Pass it on intact."
                  : "When published, the UAE edition will be free for educational use under the same terms — household, labour camp, classroom. Pass it on intact."}
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
