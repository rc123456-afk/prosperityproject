/* Contact — all outward connection on one page: one inbox per reason, two
   get-involved paths, press, and social. Ported verbatim from ContactPage.jsx.
   Server components; mailto + social links stay plain anchors.
   Copy lives in content/copy.ts. */

import { SectionMarker } from "@/components/primitives";
import { renderInline } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.contact;

/* ---------- HERO ---------- */
export function ContactHero() {
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.hero.kicker}</p>
        <h1 className="curr-hero__headline">{c.hero.headline}</h1>
        <p className="curr-hero__standfirst">{c.hero.standfirst}</p>
      </div>
    </section>
  );
}

export function GeneralContact() {
  return (
    <section className="section">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label={c.general.sectionLabel} />
            <p className="curr-modules__hint">{c.general.sectionHint}</p>
          </div>
          <div>
            <p className="contact-block__body">{renderInline(c.general.body)}</p>
            <a className="contact-email" href={`mailto:${c.general.email}`}>
              {c.general.email}{" "}
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- GET INVOLVED — two stacked paths ---------- */
const INVOLVE_PATHS = [
  {
    num: "01",
    label: c.getInvolved.runLabel,
    body: c.getInvolved.runBody,
    email: c.getInvolved.runEmail,
  },
  {
    num: "02",
    label: c.getInvolved.partnerLabel,
    body: c.getInvolved.partnerBody,
    email: c.getInvolved.partnerEmail,
  },
];

export function GetInvolved() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="02" label={c.getInvolved.sectionLabel} />
            <p className="curr-modules__hint">{c.getInvolved.sectionHint}</p>
          </div>
          <div>
            <div className="involve-paths">
              {INVOLVE_PATHS.map((p) => (
                <article className="involve-path" key={p.num}>
                  <h3 className="involve-path__label">
                    <span className="involve-path__num">{p.num}</span>
                    {p.label}
                  </h3>
                  <div>
                    <p className="involve-path__body">{renderInline(p.body)}</p>
                    <a
                      className="contact-email"
                      href={`mailto:${p.email}`}
                      style={{ fontSize: "clamp(18px, 1.8vw, 24px)" }}
                    >
                      {p.email}{" "}
                      <span className="arrow" aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PressContact() {
  return (
    <section className="section">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="03" label={c.press.sectionLabel} />
            <p className="curr-modules__hint">{c.press.sectionHint}</p>
          </div>
          <div>
            <p className="contact-block__body">{renderInline(c.press.body)}</p>
            <a className="contact-email" href={`mailto:${c.press.email}`}>
              {c.press.email}{" "}
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Elsewhere() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="04" label={c.elsewhere.sectionLabel} />
          </div>
          <div className="elsewhere-links">
            <a className="elsewhere-link" href="#" target="_blank" rel="noopener">
              {c.elsewhere.instagramLabel}{" "}
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <a className="elsewhere-link" href="#" target="_blank" rel="noopener">
              {c.elsewhere.linkedinLabel}{" "}
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
