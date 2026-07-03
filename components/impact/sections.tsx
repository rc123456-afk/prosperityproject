/* Impact — placeholder build. Numbers live as editorial sentences with
   bracketed slots, never as tiles. Annual report list is extensible.
   Ported verbatim from ImpactPage.jsx. Server components. */

import type { ReactNode } from "react";
import { SectionMarker } from "@/components/primitives";
import { renderInline, RichText } from "@/components/Rich";
import { copy } from "@/content/copy";

const c = copy.impact;

/* ---------- HERO ---------- */
export function ImpactHero() {
  return (
    <section className="curr-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.hero.kicker}</p>
        <h1 className="curr-hero__headline">
          {c.hero.headline}
          <span className="ph-stamp" style={{ marginLeft: 16, verticalAlign: "middle" }}>
            [ PLACEHOLDER HEADLINE ]
          </span>
        </h1>
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
            In <span className="slot">[ YEAR ]</span>, we ran{" "}
            <span className="slot">[ X ]</span> workshops across{" "}
            <span className="slot">[ Y ]</span> districts of{" "}
            <span className="slot">[ REGION ]</span>.{" "}
            <span className="slot">[ Z ]</span> students completed the full{" "}
            <em>Knowing Your Money</em> curriculum.{" "}
            <span className="slot">[ N% ]</span> opened a savings account during
            Module&nbsp;04.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- THREE SUB-SECTIONS ---------- */
const IMPACT_SUBS: { num: string; label: string; head: string; body: ReactNode }[] = [
  {
    num: "02",
    label: "Reach",
    head: "Reach",
    body: (
      <>
        <p>
          Placeholder. This section describes where the work runs and who it
          reaches — the blocks and villages across{" "}
          <span className="slot">[ REGION ]</span>, the number of active cohorts,
          and the share of students reached through Bandhan-Konnagar&rsquo;s
          Self-Help Group network.
        </p>
        <p>
          Reach is reported as <em>communities named</em> —{" "}
          <span className="slot">[ list of districts ]</span> rather than
          &ldquo;rural India&rdquo;. What matters is how many rooms the curriculum
          is taught in, by how many facilitators.
        </p>
      </>
    ),
  },
  {
    num: "03",
    label: "Outcomes",
    head: "Outcomes",
    body: (
      <>
        <p>
          Placeholder. This section reports what changed for students —
          completion rates, accounts opened during Module&nbsp;04, and the share
          still keeping a household notebook <span className="slot">[ N ]</span>{" "}
          months after graduating.
        </p>
        <p>
          Where we have follow-up data we say so; where we&rsquo;re relying on a
          facilitator&rsquo;s count rather than a verified record, we say that too.
          An outcome we can&rsquo;t stand behind isn&rsquo;t reported as one.
        </p>
      </>
    ),
  },
  {
    num: "04",
    label: "Methodology",
    head: "Methodology",
    body: <RichText items={c.subs.methodologyBody} />,
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
                <div className="impact-sub__body">{s.body}</div>
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
          <p className="pullquote__mark">
            {c.pullQuote.mark}
            <span className="ph-stamp" style={{ marginLeft: 12 }}>
              [ PLACEHOLDER ]
            </span>
          </p>
          <blockquote className="pullquote__text">
            &ldquo;{c.pullQuote.text}&rdquo;
          </blockquote>
          <figcaption className="pullquote__cite">
            [ ATTRIBUTION ] &nbsp;·&nbsp;{" "}
            <span className="accent">to be confirmed</span>
          </figcaption>
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
