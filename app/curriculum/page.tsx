import type { Metadata } from "next";
import {
  CurriculumHero,
  CurriculumOrigin,
  CurriculumPremise,
  TextbookRail,
} from "@/components/curriculum/sections";
import { ModuleList } from "@/components/curriculum/ModuleList";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Knowing Your Money, a ten-module financial literacy curriculum built from real interviews and taught in Bengali, Hindi and Marathi in West Bengal and Maharashtra.",
  alternates: { canonical: "/curriculum" },
};

export default function Curriculum() {
  return (
    <>
      <CurriculumHero />
      <CurriculumOrigin />
      <ModuleList />
      <TextbookRail />
      <CurriculumPremise />
    </>
  );
}
