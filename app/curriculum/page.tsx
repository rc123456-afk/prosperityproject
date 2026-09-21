import type { Metadata } from "next";
import {
  CurriculumHero,
  CurriculumOrigin,
  CurriculumPremise,
  TextbookRail,
} from "@/components/curriculum/sections";
import { ModuleList } from "@/components/curriculum/ModuleList";

export const metadata: Metadata = {
  title: "Curriculum — The Prosperity Project",
  description:
    "Knowing Your Money — a ten-module financial literacy curriculum delivered in Bengali, Hindi and Marathi, in West Bengal and Maharashtra, with Bandhan-Konnagar and Indo Count Industries.",
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
