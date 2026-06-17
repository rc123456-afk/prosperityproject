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
  title: "Impact — The Prosperity Project",
  description:
    "We count what we can, honestly, and we say where the counting stops. Reach, outcomes, methodology, and the annual report — numbers as a floor, not a verdict.",
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
