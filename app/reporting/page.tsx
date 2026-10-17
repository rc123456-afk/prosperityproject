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

export const metadata: Metadata = {
  title: "Reporting",
  description:
    "Results of a short before-and-after assessment with 400+ learners in four programmes: 420 learner records, 368 complete pairs, and an average score that rose from 51.71% to 80.43%. With the full October 2026 report to download.",
  alternates: { canonical: "/reporting" },
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
