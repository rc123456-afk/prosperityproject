import type { Metadata } from "next";
import {
  CurriculumHero,
  CurriculumOrigin,
  CurriculumPremise,
  InDevelopmentSection,
} from "@/components/curriculum/sections";

export const metadata: Metadata = {
  title: "Curriculum · For Blue-Collar Workers — The Prosperity Project",
  description:
    "Knowing Your Money — an adaptation in development for blue-collar workers in the UAE, with workshops planned in Hindi, English, and partner languages.",
};

export default function CurriculumBlueCollar() {
  return (
    <>
      <CurriculumHero cohort="blue-collar" />
      <CurriculumOrigin cohort="blue-collar" />
      <InDevelopmentSection />
      <CurriculumPremise cohort="blue-collar" />
    </>
  );
}
