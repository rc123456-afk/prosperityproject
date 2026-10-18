import type { Metadata } from "next";
import {
  ImpactHero,
  InShort,
  WhoTookPart,
  Overall,
  ImpactPullQuote,
  ByCohort,
  ByQuestion,
  CheckingTheMeasure,
  NextRound,
  Scope,
  FullReport,
  ImpactClosing,
} from "@/components/impact/sections";

/* Also served, unchanged, at /reporting: see app/reporting/page.tsx. */
export const metadata: Metadata = {
  title: "Impact",
  description:
    "Results of a short before-and-after assessment with 400+ learners in four programmes: 420 learner records, 368 complete pairs, and an average score that rose from 51.71% to 80.43%. With the full October 2026 report to download.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <InShort />
      <WhoTookPart />
      <Overall />
      <ImpactPullQuote />
      <ByCohort />
      <ByQuestion />
      <CheckingTheMeasure />
      <NextRound />
      <Scope />
      <FullReport />
      <ImpactClosing />
    </>
  );
}
