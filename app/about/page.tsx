import type { Metadata } from "next";
import {
  AboutHero,
  FounderStory,
  VisionMission,
  Organizations,
  PressSlot,
} from "@/components/about/sections";

export const metadata: Metadata = {
  title: "About — The Prosperity Project",
  description:
    "Why this exists. The founder's story, the vision and mission, and the organisations the work is built with — beginning with Bandhan in West Bengal.",
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
