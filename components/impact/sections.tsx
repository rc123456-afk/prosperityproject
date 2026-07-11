/* Impact — placeholder build. Numbers live as editorial sentences with
   bracketed slots, never as tiles. Annual report list is extensible.
   Ported verbatim from ImpactPage.jsx. Server components. */

import { SectionMarker } from "@/components/primitives";
import { renderInline } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.impact;

/* ---------- HERO ---------- */
export function ImpactHero() {
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

/* ---------- LEAD — bracketed number slots ---------- */
export function ImpactLead() {
  return (
    <section className="section">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="01" label={c.lead.sectionLabel} />
            <p className="curr-modules__hint">{c.lead.sectionHint}</p>
          </div>
          <p className="impact-lead">
            The figures from our first year — workshops run, students who
            completed the full <em>Knowing Your Money</em> curriculum, and
            savings accounts opened — will be published with the first annual
            report. <span className="impact-soon">Coming soon</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- THREE SUB-SECTIONS ---------- */
const IMPACT_SUBS: { num: string; label: string; head: string; note: string }[] = [
  {
    num: "02",
    label: "Reach",
    head: "Reach",
    note: "Where the work runs, and who it reaches — communities named, cohorts active, and facilitators teaching.",
  },
  {
    num: "03",
    label: "Outcomes",
    head: "Outcomes",
    note: "What changed for students after the ten modules — completion, accounts opened, and what holds months later.",
  },
  {
    num: "04",
    label: "Methodology",
    head: "Methodology",
    note: "How outcomes are measured — what is counted, by whom, and where the counting honestly stops.",
  },
];

export function ImpactSubsections() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="—" label={c.subs.sectionLabel} />
            <p className="curr-modules__hint">{c.subs.sectionHint}</p>
          </div>
          <div className="impact-subs">
            {IMPACT_SUBS.map((s) => (
              <div key={s.num}>
                <p className="impact-sub__num">{s.label}</p>
                <h2 className="impact-sub__head">{s.head}</h2>
                <div className="impact-sub__body">
                  <p>
                    {s.note}{" "}
                    <span className="impact-soon">Coming soon</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PULL QUOTE ---------- */
export function ImpactPullQuote() {
  return (
    <section className="pullquote-section">
      <div className="container">
        <figure className="pullquote">
          <p className="pullquote__mark">{c.pullQuote.mark}</p>
          <blockquote className="pullquote__text">
            &ldquo;{c.pullQuote.text}&rdquo;
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

/* ---------- ANNUAL REPORTS — extensible vertical list ---------- */
const ANNUAL_REPORTS = [
  { year: "2025", title: "Annual Report", status: "Coming soon", soon: true },
];

export function AnnualReports() {
  return (
    <section className="section">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="05" label={c.reports.sectionLabel} />
            <p className="curr-modules__hint">{c.reports.sectionHint}</p>
          </div>
          <div>
            <ul className="reports-list">
              {ANNUAL_REPORTS.map((r) => (
                <li className="report-row" key={r.year}>
                  <span className="report-row__year">{r.year}</span>
                  <span className="report-row__title">{r.title}</span>
                  <span
                    className={`report-row__status${r.soon ? " report-row__status--soon" : ""}`}
                  >
                    {r.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CLOSING ---------- */
export function ImpactClosing() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="curr-origin__grid">
          <div className="curr-origin__label">
            <SectionMarker index="—" label={c.closing.sectionLabel} />
          </div>
          <p className="impact-closing">
            <em>{renderInline(c.closing.text)}</em>
          </p>
        </div>
      </div>
    </section>
  );
}
