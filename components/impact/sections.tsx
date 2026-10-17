/* Reporting (served at /reporting; formerly "Impact"). A summary of the
   October 2026 report, with the PDF itself one click away at the top and the
   foot of the page. The report is the only source for every number here:
   charts and tables read content/report.ts, sentences read copy.impact.
   Server components. */

import { SectionMarker } from "@/components/primitives";
import { renderInline, RichText } from "@/components/Rich";
import { copy } from "@/content/copy";
import {
  ALL_COHORTS,
  ASANSOL_S05,
  BANDS,
  BASELINE,
  COHORTS,
  CONCEPTS,
  LESSONS,
  METHOD_STATS,
  S05_SENSITIVITY,
  SCORE_CHANGE,
} from "@/content/report";
import { LATEST_REPORT, REPORTS } from "@/lib/reports";
import {
  BandBars,
  Dumbbell,
  OutcomeSplit,
  ScoreHistogram,
  TableWrap,
  signed,
} from "./charts";

const c = copy.impact;

/* "dz" in a statistic label renders as d with a subscript z. */
function withSubscript(label: string) {
  const [before, after] = label.split("dz");
  if (after === undefined) return label;
  return (
    <>
      {before}d<sub>z</sub>{after}
    </>
  );
}

/* ---------- DOWNLOAD — used at the top and the foot of the page ---------- */
function ReportDownload() {
  const r = LATEST_REPORT;
  return (
    <div className="rp-download">
      <a className="btn btn--primary rp-download__btn" href={r.file} download={r.downloadName}>
        <span>{c.downloadLabel}</span>
        <span className="rp-download__arrow" aria-hidden="true">↓</span>
      </a>
      <p className="rp-download__meta">
        {r.date} · {r.pages} pages · PDF, {r.size}
      </p>
    </div>
  );
}

/* Section header for the two-column grid: marker + hint on the left. */
function Label({ index, label, hint, asHeading }: { index: string; label: string; hint?: string; asHeading?: boolean }) {
  return (
    <div className="curr-origin__label">
      <SectionMarker index={index} label={label} as={asHeading ? "h2" : "p"} />
      {hint && <p className="curr-modules__hint">{hint}</p>}
    </div>
  );
}

/* ---------- HERO ---------- */
export function ImpactHero() {
  return (
    <section className="curr-hero rp-hero">
      <div className="container">
        <p className="curr-hero__kicker">{c.hero.kicker}</p>
        <h1 className="curr-hero__headline">{c.hero.headline}</h1>
        <p className="curr-hero__standfirst">{c.hero.standfirst}</p>
        <ReportDownload />
      </div>
    </section>
  );
}

/* ---------- 01 IN SHORT — four numbers and the scope line ---------- */
export function InShort() {
  const s = c.inShort;
  return (
    <section className="section rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="01" label={s.sectionLabel} hint={s.sectionHint} asHeading />
          <div>
            <ul className="rp-stats">
              {s.stats.map((t) => (
                <li className="rp-stat" key={t.value}>
                  <p className="rp-stat__value">{t.value}</p>
                  <p className="rp-stat__label">{t.label}</p>
                  <p className="rp-stat__note">{t.note}</p>
                </li>
              ))}
            </ul>
            <p className="rp-scope">{s.scope}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 WHO TOOK PART ---------- */
export function WhoTookPart() {
  const s = c.who;
  return (
    <section className="section section--alt rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="02" label={s.sectionLabel} hint={s.sectionHint} />
          <div>
            <h2 className="rp-head">{s.heading}</h2>
            <div className="rp-body">
              <RichText items={s.body} />
            </div>

            <TableWrap label={s.tableCaption}>
              <table className="rp-table">
                <caption>{s.tableCaption}</caption>
                <thead>
                  <tr>
                    <th scope="col">Cohort</th>
                    <th scope="col" className="rp-num">Learner records</th>
                    <th scope="col" className="rp-num">Complete pairs</th>
                    <th scope="col" className="rp-num">Pair coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {COHORTS.map((k) => (
                    <tr key={k.id}>
                      <th scope="row">{k.name}</th>
                      <td className="rp-num">{k.records}</td>
                      <td className="rp-num">{k.pairs}</td>
                      <td className="rp-num">{k.coverage}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">All cohorts</th>
                    <td className="rp-num">{ALL_COHORTS.records}</td>
                    <td className="rp-num">{ALL_COHORTS.pairs}</td>
                    <td className="rp-num">{ALL_COHORTS.coverage}</td>
                  </tr>
                </tfoot>
              </table>
            </TableWrap>
            <p className="rp-note">{s.tableNote}</p>

            <h3 className="rp-subhead">{s.testedHeading}</h3>
            <ol className="rp-concepts">
              {CONCEPTS.map((q) => (
                <li key={q.code}>
                  <span className="rp-code">{q.code}</span>
                  {q.name}
                </li>
              ))}
            </ol>

            <h3 className="rp-subhead">{s.baselineHeading}</h3>
            <ul className="rp-baseline">
              {BASELINE.map((b) => (
                <li key={b.id}>
                  <span className="rp-baseline__share">{b.share}</span>
                  <span className="rp-baseline__label">
                    {b.label}
                    <span className="rp-baseline__count">
                      {b.yes} of {b.valid} who answered
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="rp-note">{s.baselineNote}</p>
            <p className="rp-body-p">{s.baselineClose}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 OVERALL ---------- */
export function Overall() {
  const s = c.overall;
  return (
    <section className="section rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="03" label={s.sectionLabel} hint={s.sectionHint} />
          <div>
            <h2 className="rp-head">{s.heading}</h2>
            <div className="rp-body">
              <RichText items={s.body} />
            </div>

            <figure className="rp-figure">
              <ScoreHistogram axisTitle={s.axisTitle} legend={s.legend} />
              <figcaption className="rp-caption">{s.figCaption}</figcaption>
              <details className="rp-details">
                <summary>{s.tableToggle}</summary>
                <TableWrap label={s.figCaption}>
                  <table className="rp-table rp-table--narrow">
                    <caption>{s.figCaption}</caption>
                    <thead>
                      <tr>
                        <th scope="col">Change (out of 7)</th>
                        <th scope="col" className="rp-num">Learners</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SCORE_CHANGE.map((d) => (
                        <tr key={d.change}>
                          <th scope="row" className="rp-num-cell">{signed(d.change)}</th>
                          <td className="rp-num">{d.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableWrap>
              </details>
            </figure>

            <OutcomeSplit />
            <p className="rp-note">{s.summaryLine}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PULL QUOTE — the report's own words ---------- */
export function ImpactPullQuote() {
  return (
    <section className="pullquote-section section--alt">
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

/* ---------- 04 BY COHORT, then by starting score ---------- */
export function ByCohort() {
  const s = c.byCohort;
  return (
    <section className="section rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="04" label={s.sectionLabel} hint={s.sectionHint} />
          <div>
            <h2 className="rp-head">{s.heading}</h2>
            <p className="rp-body-p">{s.intro}</p>

            <figure className="rp-figure">
              <Dumbbell
                withValues
                rows={COHORTS.map((k) => ({
                  key: k.id,
                  label: k.name,
                  sub: `${k.pairs} learners`,
                  pre: k.pre,
                  post: k.post,
                  gain: k.gainShort,
                  preLabel: k.pre.toFixed(1),
                  postLabel: k.post.toFixed(1),
                }))}
              />
              <figcaption className="rp-caption">{s.figCaption}</figcaption>
            </figure>

            <TableWrap label={s.tableCaption}>
              <table className="rp-table">
                <caption>{s.tableCaption}</caption>
                <thead>
                  <tr>
                    <th scope="col">Cohort</th>
                    <th scope="col" className="rp-num">Gain (95% CI)</th>
                    <th scope="col" className="rp-num">Improved / same / lower</th>
                  </tr>
                </thead>
                <tbody>
                  {COHORTS.map((k) => (
                    <tr key={k.id}>
                      <th scope="row">
                        {k.name}
                        <span className="rp-cell-sub">{k.pairs} learners</span>
                      </th>
                      <td className="rp-num">
                        {k.gain}
                        <span className="rp-cell-sub">{k.ci}</span>
                      </td>
                      <td className="rp-num">
                        {k.improved} / {k.same} / {k.declined}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>

            <div className="rp-notes">
              {s.notes.map((n, i) => (
                <p key={i}>{renderInline(n)}</p>
              ))}
            </div>
            <p className="rp-note">{s.caveat}</p>

            <h3 className="rp-subhead">{s.bandsHeading}</h3>
            <p className="rp-body-p">{s.bandsIntro}</p>
            <figure className="rp-figure">
              <BandBars axisTitle="Average change (percentage points)" />
              <figcaption className="rp-caption">{s.bandsCaption}</figcaption>
              <details className="rp-details">
                <summary>{c.overall.tableToggle}</summary>
                <TableWrap label={s.bandsTableCaption}>
                  <table className="rp-table">
                    <caption>{s.bandsTableCaption}</caption>
                    <thead>
                      <tr>
                        <th scope="col">Starting score</th>
                        <th scope="col" className="rp-num">Change (points)</th>
                        <th scope="col" className="rp-num">Average, before → after</th>
                        <th scope="col" className="rp-num">Improved / same / lower</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BANDS.map((b) => (
                        <tr key={b.id}>
                          <th scope="row">
                            {b.label} of 7
                            <span className="rp-cell-sub">{b.n} learners</span>
                          </th>
                          <td className="rp-num">{b.gain}</td>
                          <td className="rp-num">{b.prePost}</td>
                          <td className="rp-num">
                            {b.improved} / {b.same} / {b.declined}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableWrap>
              </details>
            </figure>
            <div className="rp-body">
              <RichText items={s.bandsBody} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 BY QUESTION ---------- */
export function ByQuestion() {
  const s = c.byQuestion;
  return (
    <section className="section section--alt rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="05" label={s.sectionLabel} hint={s.sectionHint} />
          <div>
            <h2 className="rp-head">{s.heading}</h2>
            <p className="rp-body-p">{s.intro}</p>

            <figure className="rp-figure">
              <Dumbbell
                rows={CONCEPTS.map((q) => ({
                  key: q.code,
                  label: q.name,
                  sub: `${q.code} · ${q.pairs} answered both times`,
                  pre: (q.before / q.pairs) * 100,
                  post: (q.after / q.pairs) * 100,
                  gain: q.gainShort,
                }))}
              />
              <figcaption className="rp-caption">{s.figCaption}</figcaption>
              <details className="rp-details">
                <summary>{s.tableToggle}</summary>
                <TableWrap label={s.tableCaption}>
                  <table className="rp-table rp-table--wide">
                    <caption>{s.tableCaption}</caption>
                    <thead>
                      <tr>
                        <th scope="col">Question</th>
                        <th scope="col" className="rp-num">Correct, before → after</th>
                        <th scope="col" className="rp-num">Change (95% CI)</th>
                        <th scope="col" className="rp-num">Wrong → right</th>
                        <th scope="col" className="rp-num">Right → wrong</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONCEPTS.map((q) => (
                        <tr key={q.code}>
                          <th scope="row">
                            {q.code} {q.name}
                          </th>
                          <td className="rp-num">
                            {q.before} → {q.after}
                            <span className="rp-cell-sub">of {q.pairs}</span>
                          </td>
                          <td className="rp-num">
                            {q.change}
                            <span className="rp-cell-sub">{q.ci}</span>
                          </td>
                          <td className="rp-num">{q.wrongToRight}</td>
                          <td className="rp-num">{q.rightToWrong}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableWrap>
              </details>
            </figure>

            <div className="rp-notes">
              {s.notes.map((n, i) => (
                <p key={i}>{renderInline(n)}</p>
              ))}
            </div>
            <p className="rp-note">{s.cohortNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 06 CHECKING THE MEASURE (S05) ---------- */
/* Gain with and without S05. The first row is the seven-question result,
   which stays primary, so it is set in bold. */
function S05Table({
  caption,
  rows,
}: {
  caption: string;
  rows: { id: string; label: string; note: string; n: number; gain: string; ci: string }[];
}) {
  return (
    <TableWrap label={caption}>
      <table className="rp-table rp-table--gain">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Scored on</th>
            <th scope="col" className="rp-num">Learners</th>
            <th scope="col" className="rp-num">Gain (95% CI)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id} className={i === 0 ? "rp-row--key" : undefined}>
              <th scope="row">
                {r.label}
                <span className="rp-cell-sub">{r.note}</span>
              </th>
              <td className="rp-num">{r.n}</td>
              <td className="rp-num">
                {r.gain}
                <span className="rp-cell-sub">{r.ci}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrap>
  );
}

export function CheckingTheMeasure() {
  const s = c.measure;
  return (
    <section className="section rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="06" label={s.sectionLabel} hint={s.sectionHint} />
          <div>
            <h2 className="rp-head">{s.heading}</h2>
            <div className="rp-body">
              <RichText items={s.body} />
            </div>

            <S05Table caption={s.tableCaption} rows={S05_SENSITIVITY} />
            <div className="rp-body">
              <RichText items={s.after} />
            </div>

            <h3 className="rp-subhead">{s.asansol.heading}</h3>
            <p className="rp-body-p">{renderInline(s.asansol.body)}</p>
            <S05Table caption={s.asansol.tableCaption} rows={ASANSOL_S05} />
            <div className="rp-body">
              <p>{s.asansol.explain}</p>
              <p>{s.close}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 07 NEXT ROUND — the report's recommendations ---------- */
export function NextRound() {
  const s = c.next;
  return (
    <section className="section section--alt rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="07" label={s.sectionLabel} hint={s.sectionHint} />
          <div>
            <h2 className="rp-head">{s.heading}</h2>
            <p className="rp-body-p">{s.intro}</p>
            <ol className="rp-lessons">
              {LESSONS.map((l, i) => (
                <li className="rp-lesson" key={i}>
                  <div className="rp-lesson__learned">
                    <p className="rp-lesson__head">{l.learned}</p>
                    <p className="rp-lesson__evidence">{l.evidence}</p>
                  </div>
                  <div className="rp-lesson__next">
                    <p className="rp-lesson__label">{s.nextLabel}</p>
                    <p>{l.next}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="rp-body-p">{s.close}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 08 SCOPE — what the evidence supports ---------- */
export function Scope() {
  const s = c.scope;
  return (
    <section className="section rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="08" label={s.sectionLabel} hint={s.sectionHint} />
          <div>
            <h2 className="rp-head">{s.heading}</h2>
            <div className="rp-body rp-scope-list">
              <RichText items={s.items} />
            </div>
            <details className="rp-details rp-details--methods">
              <summary>{s.methodsToggle}</summary>
              <div className="rp-body">
                <RichText items={s.methods} />
              </div>
              <TableWrap label={s.methodsTableCaption}>
                <table className="rp-table">
                  <caption>{s.methodsTableCaption}</caption>
                  <thead>
                    <tr>
                      <th scope="col">Statistic</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {METHOD_STATS.map((m) => (
                      <tr key={m.label}>
                        <th scope="row">
                          {withSubscript(m.label)}
                          <span className="rp-cell-sub">{m.note}</span>
                        </th>
                        <td className="rp-mono">{m.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableWrap>
              <p className="rp-note">{s.methodsClose}</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 09 THE FULL REPORT — list + second download ---------- */
export function FullReport() {
  const s = c.reports;
  return (
    <section className="section section--alt rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="09" label={s.sectionLabel} hint={s.sectionHint} asHeading />
          <div>
            <ul className="reports-list">
              {REPORTS.map((r) => (
                <li className="report-row" key={r.id}>
                  <span className="report-row__year">{r.date}</span>
                  <span className="report-row__title">{r.title}</span>
                  <span className="report-row__status">
                    {r.pages} pages · {r.size}
                  </span>
                </li>
              ))}
            </ul>
            <p className="rp-body-p rp-report-body">{s.body}</p>
            <ReportDownload />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10 CLOSING ---------- */
export function ImpactClosing() {
  return (
    <section className="section rp-section">
      <div className="container">
        <div className="curr-origin__grid">
          <Label index="10" label={c.closing.sectionLabel} />
          <p className="impact-closing">
            <em>{renderInline(c.closing.text)}</em>
          </p>
        </div>
      </div>
    </section>
  );
}
