/* About — the founder's story and organizational origin. Ported verbatim from
   AboutPage.jsx. Server components. PressSlot keeps the architecture in place
   but renders nothing until PRESS_ITEMS is populated. */

import { Photo, SectionMarker } from "@/components/primitives";
import { SmartLink } from "@/components/SmartLink";
import { renderInline } from "@/components/Rich";
import { copy } from "@/content/copy";

/* ---------- HERO ---------- */
export function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero__grid">
          <div>
            <p className="about-hero__kicker">{copy.about.hero.kicker}</p>
            <h1 className="about-hero__head">{copy.about.hero.heading}</h1>
            <p className="about-hero__byline">
              By {copy.about.hero.bylineName} &nbsp;·&nbsp;{" "}
              <span className="accent">{copy.about.hero.bylineRole}</span>
              <span className="ph-stamp" style={{ marginLeft: 14 }}>
                [ PLACEHOLDER ]
              </span>
            </p>
          </div>
          <div>
            <Photo
              aspect="portrait"
              tone="warm"
              src="/photos/about/founder.jpg"
              alt="Rehaan Chowdhary, the founder, speaking at a workshop"
              objectPosition="center 28%"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOUNDER — long-form first person, dropcap, narrow column ---------- */
export function FounderStory() {
  return (
    <section className="section">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label={copy.about.founder.sectionLabel} />
            <p className="curr-modules__hint">
              {copy.about.founder.sectionHint}
            </p>
            <span id="facilitators"></span>
          </div>
          <div>
            <div className="founder__body">
              {copy.about.founder.story.map((para, i) => (
                <p key={i}>
                  {renderInline(para)}
                  {i === copy.about.founder.story.length - 1 && (
                    <span className="ph-stamp" style={{ marginLeft: 12 }}>
                      [ PLACEHOLDER PROSE ]
                    </span>
                  )}
                </p>
              ))}
            </div>

            <figure className="founder__figure">
              <Photo
                aspect="landscape"
                tone="ledger"
                src="/photos/about/hall.jpg"
                alt="The cohort gathered at a workshop hall"
              />
            </figure>

            <figure className="founder__figure founder__figure--wide">
              <Photo
                aspect="cinema"
                tone="warm"
                src="/photos/about/walk.jpg"
                alt="A wide view of a workshop session in progress"
              />
            </figure>

            <figure className="founder__figure">
              <Photo
                aspect="square"
                tone="cool"
                src="/photos/about/notebook.jpg"
                alt="Worksheets and the printed booklet on the workshop table"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- VISION & MISSION — pull-quote treatment ---------- */
export function VisionMission() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="02" label={copy.about.mission.sectionLabel} />
          </div>
          <p className="vision__text">{renderInline(copy.about.mission.text)}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- ORGANIZATIONS — flexible vertical list ---------- */
const ORGANIZATIONS = [
  {
    name: copy.about.organizations.partnerName,
    role: copy.about.organizations.partnerRole,
    body: copy.about.organizations.partnerBody,
    photo: { tone: "green" as const, src: "/photos/about/partner.jpg", alt: "A Bandhan Financial Literacy Programme workshop hall during a session" },
    link: { label: copy.about.organizations.partnerLinkLabel, href: "#partners" },
  },
];

export function Organizations() {
  return (
    <section className="section" id="partners">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="03" label={copy.about.organizations.sectionLabel} />
            <p className="curr-modules__hint">
              {copy.about.organizations.sectionHint}
            </p>
          </div>
          <div>
            <div className="orgs">
              {ORGANIZATIONS.map((o, i) => (
                <article key={i} className={`org${o.photo ? "" : " org--no-photo"}`}>
                  <div>
                    <h3 className="org__name">{o.name}</h3>
                    <p className="org__role">{o.role}</p>
                    <p className="org__body">{renderInline(o.body)}</p>
                    {o.link && (
                      <p className="org__link">
                        <SmartLink className="tertiary" href={o.link.href}>
                          {o.link.label} <span aria-hidden="true">→</span>
                        </SmartLink>
                      </p>
                    )}
                  </div>
                  {o.photo && (
                    <Photo
                      aspect="landscape"
                      tone={o.photo.tone}
                      src={o.photo.src}
                      alt={o.photo.alt}
                    />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRESS SLOT — architecture in place, not visibly rendered ---------- */
type PressItem = { outlet: string; title: string; date: string; href: string };
const PRESS_ITEMS: PressItem[] = [
  /* populate to surface a press strip */
];

export function PressSlot() {
  if (PRESS_ITEMS.length === 0) return null;
  return (
    <section className="section press-slot" id="press">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="04" label="Press" />
          </div>
          <ul className="reports-list">
            {PRESS_ITEMS.map((p, i) => (
              <li className="report-row" key={i}>
                <span className="report-row__year">{p.date}</span>
                <span className="report-row__title">{p.title}</span>
                <span className="report-row__status">{p.outlet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
