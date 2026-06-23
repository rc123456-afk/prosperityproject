/* Contact — all outward connection on one page: one inbox per reason, two
   get-involved paths, press, and social. Ported verbatim from ContactPage.jsx.
   Server components; mailto + social links stay plain anchors. */

import { SectionMarker } from "@/components/primitives";

/* ---------- HERO ---------- */
export function ContactHero() {
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">Contact</p>
        <h1 className="curr-hero__headline">Reach out.</h1>
        <p className="curr-hero__standfirst">
          One inbox per reason. We read everything and reply to most things —
          partnership, press, and anyone who wants to run the curriculum.
        </p>
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
            <SectionMarker index="01" label="General" />
            <p className="curr-modules__hint">For everything else.</p>
          </div>
          <div>
            <p className="contact-block__body">
              Questions about the curriculum, the workshops, or the project — write
              to us. No form; a real person reads this inbox.
            </p>
            <a className="contact-email" href="mailto:hello@theprosperityproject.org">
              hello@theprosperityproject.org{" "}
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
    label: "Run a workshop",
    body:
      "Organisations, CSR teams, college societies, and Resident Welfare Associations can teach Knowing Your Money directly. We'll send the facilitator's edition, a short licence, and a one-day onboarding — so a workshop in your community is run the way it's meant to be.",
    email: "adopt@theprosperityproject.org",
  },
  {
    num: "02",
    label: "Partner with us",
    body:
      "NGOs, foundations, and institutions wanting to partner formally — the way Bandhan delivers the work across West Bengal — should write here. The model is simple: you bring the halls, the trust, and the relationships; we bring the curriculum and the training.",
    email: "partner@theprosperityproject.org",
  },
];

export function GetInvolved() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="02" label="Get involved" />
            <p className="curr-modules__hint">Two ways the work travels further.</p>
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
                    <p className="involve-path__body">{p.body}</p>
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
            <SectionMarker index="03" label="Press" />
            <p className="curr-modules__hint">Journalists welcome.</p>
          </div>
          <div>
            <p className="contact-block__body">
              We welcome press enquiries and are glad to arrange interviews,
              photographs with consent, and workshop visits. For a media kit or to
              speak with the founder, write to us.
            </p>
            <a className="contact-email" href="mailto:press@theprosperityproject.org">
              press@theprosperityproject.org{" "}
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
            <SectionMarker index="04" label="Elsewhere" />
          </div>
          <div className="elsewhere-links">
            <a className="elsewhere-link" href="#" target="_blank" rel="noopener">
              Instagram <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <a className="elsewhere-link" href="#" target="_blank" rel="noopener">
              LinkedIn <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
