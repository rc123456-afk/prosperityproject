import type { Metadata } from "next";
import {
  ImpactHero,
  ImpactLead,
  ImpactSubsections,
  ImpactPullQuote,
  AnnualReports,
  ImpactClosing,
} from "@/components/impact/sections";

export const metadata: Metadata = {
  title: "Reporting",
  description:
    "We count what we can, honestly, and we say where the counting stops: reach, outcomes, methodology and the annual report, with numbers as a floor, not a verdict.",
  alternates: { canonical: "/reporting" },
};

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <ImpactLead />
      <ImpactSubsections />
      <ImpactPullQuote />
      <AnnualReports />
      <ImpactClosing />
    </>
  );
}
