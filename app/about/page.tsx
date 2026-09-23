import type { Metadata } from "next";
import {
  AboutHero,
  FounderStory,
  VisionMission,
  Organizations,
  PressSlot,
} from "@/components/about/sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why this exists: the founder's story, the vision and mission, and the organisations the work is built with, from Bandhan-Konnagar in West Bengal to Indo Count Industries in Maharashtra.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <VisionMission />
      <Organizations />
      <PressSlot />
    </>
  );
}
