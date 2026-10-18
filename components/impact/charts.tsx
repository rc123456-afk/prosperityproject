/* Charts for /impact, drawn in plain HTML and CSS from content/report.ts.
   Server components: no chart library and no client JavaScript. Positions are
   inline percentages; everything else is in the `.rp-*` rules in pages.css.

   Each plot is aria-hidden. Its values are always available as text: as
   direct labels, a visible table beside it, or a "Show as a table" toggle,
   so nothing depends on colour or hover.

   Colours stay inside the site's three-colour palette, matching the report's
   own charts: marigold-deep for "after" and gains, ink for "no change",
   ink-55 for declines. Before/after dots differ in shape (hollow vs filled),
   not just colour. */

import type { ReactNode } from "react";
import { BANDS, OUTCOMES, SCORE_CHANGE } from "@/content/report";

/* "−4" with a true minus sign, "+4" with a plus, "0" bare. */
export function signed(n: number) {
  if (n > 0) return `+${n}`;
  if (n < 0) return `−${Math.abs(n)}`;
  return "0";
}

/* A table that can scroll sideways on a narrow phone without the page
   itself ever doing so. Focusable so keyboard users can scroll it too. */
export function TableWrap({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rp-table-wrap" role="region" aria-label={label} tabIndex={0}>
      {children}
    </div>
  );
}

/* ---------- FIGURE 1: change in score, one column per value -7..+7 ---------- */
const HIST_TOP = 70; // just above the tallest column (67)

export function ScoreHistogram({
  axisTitle,
  legend,
}: {
  axisTitle: string;
  legend: { lower: string; none: string; higher: string };
}) {
  return (
    <div className="rp-hist">
      <ul className="rp-legend" aria-hidden="true">
        <li><span className="rp-swatch rp-swatch--lower" />{legend.lower}</li>
        <li><span className="rp-swatch rp-swatch--none" />{legend.none}</li>
        <li><span className="rp-swatch rp-swatch--higher" />{legend.higher}</li>
      </ul>
      <div className="rp-hist__plot" aria-hidden="true">
        {SCORE_CHANGE.map((d) => {
          const tone = d.change < 0 ? "lower" : d.change === 0 ? "none" : "higher";
          const pct = (d.count / HIST_TOP) * 100;
          return (
            <div className={`rp-hist__col rp-hist__col--${tone}`} key={d.change}>
              <span className="rp-hist__bar" style={{ height: `${pct}%` }} />
              <span className="rp-hist__count" style={{ bottom: `${pct}%` }}>
                {d.count}
              </span>
            </div>
          );
        })}
      </div>
      <div className="rp-hist__axis" aria-hidden="true">
        {SCORE_CHANGE.map((d) => (
          <span key={d.change}>{signed(d.change)}</span>
        ))}
      </div>
      <p className="rp-axis-title" aria-hidden="true">{axisTitle}</p>
    </div>
  );
}

/* ---------- Improved / unchanged / declined, as one split bar ---------- */
const SPLIT_TONE = { improved: "higher", unchanged: "none", declined: "lower" } as const;

export function OutcomeSplit() {
  return (
    <div className="rp-split">
      <div className="rp-split__bar" aria-hidden="true">
        {OUTCOMES.map((o) => (
          <span
            key={o.id}
            className={`rp-split__seg rp-swatch--${SPLIT_TONE[o.id]}`}
            style={{ flexGrow: o.pct }}
          />
        ))}
      </div>
      <ul className="rp-split__legend">
        {OUTCOMES.map((o) => (
          <li key={o.id}>
            <span className={`rp-swatch rp-swatch--${SPLIT_TONE[o.id]}`} aria-hidden="true" />
            <span className="rp-split__label">{o.label}</span>
            <span className="rp-split__value">
              {o.count} <span className="rp-split__share">({o.share})</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Dumbbell: before (hollow) to after (filled), 0 to 100% ---------- */
export type DumbbellRow = {
  key: string;
  label: ReactNode;
  sub?: ReactNode;
  pre: number;
  post: number;
  gain: string;
  preLabel?: string;
  postLabel?: string;
};

const PCT_TICKS = [0, 25, 50, 75, 100];

export function Dumbbell({
  rows,
  gainLabel = "Gain (points)",
  withValues = false,
}: {
  rows: DumbbellRow[];
  gainLabel?: string;
  withValues?: boolean;
}) {
  return (
    <div className={`rp-db${withValues ? " rp-db--values" : ""}`} aria-hidden="true">
      <div className="rp-db__head">
        <ul className="rp-legend rp-db__legend">
          <li><span className="rp-dot rp-dot--pre" />Before</li>
          <li><span className="rp-dot rp-dot--post" />After</li>
        </ul>
        <span className="rp-db__gain-head">{gainLabel}</span>
      </div>
      {rows.map((r) => (
        <div className="rp-db__row" key={r.key}>
          <div className="rp-db__label">
            {r.label}
            {r.sub && <span className="rp-db__sub">{r.sub}</span>}
          </div>
          <div className="rp-db__track">
            <span
              className="rp-db__line"
              style={{ left: `${r.pre}%`, width: `${r.post - r.pre}%` }}
            />
            <span className="rp-dot rp-dot--pre rp-db__dot" style={{ left: `${r.pre}%` }}>
              {withValues && r.preLabel && <span className="rp-db__val">{r.preLabel}</span>}
            </span>
            <span className="rp-dot rp-dot--post rp-db__dot" style={{ left: `${r.post}%` }}>
              {withValues && r.postLabel && (
                <span className="rp-db__val rp-db__val--post">{r.postLabel}</span>
              )}
            </span>
          </div>
          <div className="rp-db__gain">{r.gain}</div>
        </div>
      ))}
      <div className="rp-db__axis">
        <div className="rp-db__ticks">
          {PCT_TICKS.map((t) => (
            <span key={t} style={{ left: `${t}%` }}>{t}%</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- FIGURE 3: average change by starting score ---------- */
const BAND_TOP = 60;
const BAND_TICKS = [0, 20, 40, 60];

export function BandBars({ axisTitle }: { axisTitle: string }) {
  return (
    <div className="rp-bars" aria-hidden="true">
      {BANDS.map((b) => (
        <div className="rp-bars__row" key={b.id}>
          <div className="rp-bars__label">
            Started on {b.label} of 7
            <span className="rp-db__sub">{b.n} learners</span>
          </div>
          <div className="rp-bars__track">
            <span className="rp-bars__bar" style={{ width: `${(b.value / BAND_TOP) * 100}%` }} />
          </div>
          <div className="rp-bars__value">{b.gain}</div>
        </div>
      ))}
      <div className="rp-bars__axis">
        <div className="rp-bars__ticks">
          {BAND_TICKS.map((t) => (
            <span key={t} style={{ left: `${(t / BAND_TOP) * 100}%` }}>{t}</span>
          ))}
        </div>
      </div>
      <p className="rp-axis-title">{axisTitle}</p>
    </div>
  );
}
