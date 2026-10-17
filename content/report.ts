/* ---------------------------------------------------------------------------
   The October 2026 report, as data, for the charts and tables on /reporting.

   Every number here is copied from the PDF itself,
   public/downloads/prosperity-project-impact-report-2026-10.pdf, and the page
   and table it comes from sit above each block. Strings are the report's own
   printed values, so the page never rounds differently from the PDF. Chart
   positions may use the report's counts (e.g. 195 of 398), but nothing derived
   from them is printed.

   The prose around these lives in copy.impact (content/copy.ts).
   --------------------------------------------------------------------------- */

/* Cohorts. Records, pairs and coverage: Table 1, p.2. Before/after and the
   one-decimal gain: Figure 2, p.4. Two-decimal gain, CI and outcomes: Table 3,
   p.4. Names follow the report, which calls them institutional cohorts. */
export type Cohort = {
  id: string;
  name: string;
  records: number;
  pairs: number;
  coverage: string;
  pre: number;
  post: number;
  gainShort: string;
  gain: string;
  ci: string;
  improved: number;
  same: number;
  declined: number;
};

export const COHORTS: Cohort[] = [
  { id: "indo-count", name: "Indo Count, Kolhapur", records: 200, pairs: 172, coverage: "86.0%", pre: 51.6, post: 79.3, gainShort: "+27.7", gain: "+27.74", ci: "21.99 to 33.49", improved: 113, same: 22, declined: 37 },
  { id: "shristi", name: "Shristi Corp, Asansol", records: 70, pairs: 59, coverage: "84.3%", pre: 66.1, post: 85.7, gainShort: "+19.6", gain: "+19.61", ci: "13.28 to 25.94", improved: 41, same: 10, declined: 8 },
  { id: "feed", name: "FEED, Asansol", records: 110, pairs: 99, coverage: "90.0%", pre: 36.1, post: 75.9, gainShort: "+39.8", gain: "+39.83", ci: "33.88 to 45.77", improved: 80, same: 13, declined: 6 },
  { id: "bandhan", name: "Bandhan-Konnagar, Baruipur", records: 40, pairs: 38, coverage: "95.0%", pre: 70.7, post: 89.1, gainShort: "+18.4", gain: "+18.42", ci: "11.88 to 24.96", improved: 28, same: 7, declined: 3 },
];

/* Table 1, p.2: the "All cohorts" row. */
export const ALL_COHORTS = { records: 420, pairs: 368, coverage: "87.6%" };

/* Figure 1, p.3: change in score (after minus before, out of 7) for the 368
   complete pairs. Counts sum to 368; their mean is 740 / 368 = 2.011. */
export const SCORE_CHANGE: { change: number; count: number }[] = [
  { change: -7, count: 0 },
  { change: -6, count: 0 },
  { change: -5, count: 0 },
  { change: -4, count: 2 },
  { change: -3, count: 4 },
  { change: -2, count: 14 },
  { change: -1, count: 34 },
  { change: 0, count: 52 },
  { change: 1, count: 67 },
  { change: 2, count: 39 },
  { change: 3, count: 32 },
  { change: 4, count: 65 },
  { change: 5, count: 38 },
  { change: 6, count: 16 },
  { change: 7, count: 5 },
];

/* Outcome table, p.3. */
export const OUTCOMES = [
  { id: "improved", label: "Improved", count: 262, share: "71.2%", pct: 71.2 },
  { id: "unchanged", label: "Unchanged", count: 52, share: "14.1%", pct: 14.1 },
  { id: "declined", label: "Declined", count: 54, share: "14.7%", pct: 14.7 },
] as const;

/* Starting-score bands. Gain in points: Figure 3, p.5. Mean before and after
   (out of 7) and outcomes: Table 4, p.5. The report prints no values for the
   figure's confidence intervals, so none are drawn. */
export const BANDS = [
  { id: "low", label: "0–2", n: 128, gain: "+55.1", value: 55.1, prePost: "1.27 → 5.12", improved: 112, same: 9, declined: 7 },
  { id: "mid", label: "3–4", n: 91, gain: "+33.9", value: 33.9, prePost: "3.38 → 5.76", improved: 76, same: 10, declined: 5 },
  { id: "high", label: "5–7", n: 149, gain: "+2.9", value: 2.9, prePost: "5.79 → 5.99", improved: 74, same: 33, declined: 42 },
];

/* Questions. Names: Figure 4, p.6. One-decimal gain: Figure 4. Pairs, correct
   before and after, change, CI and transitions: Table A1, p.11. */
export type Concept = {
  code: string;
  name: string;
  pairs: number;
  before: number;
  after: number;
  gainShort: string;
  change: string;
  ci: string;
  wrongToRight: number;
  rightToWrong: number;
};

export const CONCEPTS: Concept[] = [
  { code: "S01", name: "Budgeting for variable income", pairs: 398, before: 195, after: 273, gainShort: "+19.6", change: "+19.60", ci: "13.33 to 25.87", wrongToRight: 127, rightToWrong: 49 },
  { code: "S02", name: "Fixed Deposits for lump sums", pairs: 394, before: 246, after: 332, gainShort: "+21.8", change: "+21.83", ci: "16.75 to 26.90", wrongToRight: 104, rightToWrong: 18 },
  { code: "S03", name: "Monthly interest costs", pairs: 399, before: 168, after: 326, gainShort: "+39.6", change: "+39.60", ci: "34.07 to 45.12", wrongToRight: 173, rightToWrong: 15 },
  { code: "S04", name: "OTP and scam protection", pairs: 396, before: 260, after: 352, gainShort: "+23.2", change: "+23.23", ci: "18.15 to 28.32", wrongToRight: 109, rightToWrong: 17 },
  { code: "S05", name: "Accessible emergency savings", pairs: 394, before: 245, after: 307, gainShort: "+15.7", change: "+15.74", ci: "9.49 to 21.98", wrongToRight: 114, rightToWrong: 52 },
  { code: "S06", name: "Diversification", pairs: 396, before: 191, after: 316, gainShort: "+31.6", change: "+31.57", ci: "26.27 to 36.86", wrongToRight: 139, rightToWrong: 14 },
  { code: "S07", name: "UPI payment safety", pairs: 391, before: 150, after: 282, gainShort: "+33.8", change: "+33.76", ci: "27.90 to 39.62", wrongToRight: 156, rightToWrong: 24 },
];

/* Table 2, p.2: unscored context questions at the start. Baseline
   descriptions, not programme outcomes. */
export const BASELINE = [
  { id: "saves", label: "Saves in most months", yes: 347, valid: 417, share: "83.2%" },
  { id: "account", label: "Has a bank account in their own name", yes: 411, valid: 418, share: "98.3%" },
  { id: "deposit", label: "Has used a Fixed or Recurring Deposit", yes: 104, valid: 418, share: "24.9%" },
];

/* S05 sensitivity: Figure 5 and Table 6, p.7. */
export const S05_SENSITIVITY = [
  { id: "primary", label: "All seven questions", note: "The main result", n: 368, gain: "+28.73", ci: "25.32 to 32.14" },
  { id: "same", label: "Without S05", note: "Same 368 learners", n: 368, gain: "+30.30", ci: "26.90 to 33.70" },
  { id: "expanded", label: "Without S05", note: "Wider eligible sample", n: 371, gain: "+30.01", ci: "26.62 to 33.40" },
];

/* The original Asansol group, p.8 (text and Figure 6): the same 24 learners,
   9 from Shristi and 15 from FEED, scored on seven questions and on six.
   The seven-question result stays primary. */
export const ASANSOL_S05 = [
  { id: "seven", label: "All seven questions", note: "9 from Shristi, 15 from FEED", n: 24, gain: "+3.57", ci: "−2.39 to +9.54" },
  { id: "six", label: "Without S05", note: "Same 24 learners", n: 24, gain: "+7.64", ci: "+2.16 to +13.12" },
];

/* Table 7, p.9: what was learned and the next delivery decision. The evidence
   lines repeat facts the page has already shown (S05's points to the Shristi
   session described on p.8). */
export const LESSONS = [
  {
    learned: "Budgeting and UPI safety need practice.",
    evidence: "After the workshops, 125 of 398 answered budgeting incorrectly, and 109 of 391 UPI safety.",
    next: "Use short scenarios, learner explanations and fresh examples. Recheck understanding after practice.",
  },
  {
    learned: "High starters need more challenge.",
    evidence: "Learners who started on 5 to 7 (149) gained 0.20 answers on average; 44.0% of all pairs reached 7 of 7.",
    next: "Keep common core questions and add harder application tasks to detect deeper learning.",
  },
  {
    learned: "Some learners need follow-through.",
    evidence: "54 of 368 scored lower, including 37 of 172 at Indo Count.",
    next: "Examine concept reversals and gather neutral feedback about wording, pace and assessment conditions.",
  },
  {
    learned: "S05 needs comprehension testing.",
    evidence: "In the original Shristi session, correct answers fell from 12 of 12 to 5 of 12.",
    next: "Pilot wording and translations with learner explanations. Record the version actually used.",
  },
  {
    learned: "Partial forms still hold information.",
    evidence: "52 of 420 records lack a complete pair; each question still draws on 391 to 399 answers.",
    next: "Check missing responses at collection without coaching answers. Preserve every usable answer.",
  },
  {
    learned: "Longer-term outcomes remain open.",
    evidence: "The results here are before-and-after test scores.",
    next: "Add consistently timed follow-up and consented measures of applied knowledge and behaviour.",
  },
];

/* Appendix A, p.10: overall statistics. */
export const METHOD_STATS = [
  { label: "Matched pairs", value: "368", note: "Same learners before and after" },
  { label: "Mean change; SD of change", value: "2.011; 2.330", note: "Correct answers out of 7" },
  { label: "Paired t-test", value: "t(367) = 16.56; p < .001", note: "Tests zero mean recorded change" },
  { label: "Exact sign test", value: "262 gains; 54 declines; p < .001", note: "Excludes 52 ties" },
  { label: "Paired effect size (dz)", value: "0.86", note: "Mean change / SD of changes" },
  { label: "Bootstrap 95% interval", value: "+25.31 to +32.18 points", note: "10,000 learner resamples" },
];
