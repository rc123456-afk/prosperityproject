import type { Metadata } from "next";
import {
  StoriesHero,
  ConsentNote,
  StorySection,
  StoryPullQuote,
  VideoTestimonials,
} from "@/components/stories/sections";

export const metadata: Metadata = {
  title: "Stories · For Blue-Collar Workers — The Prosperity Project",
  description:
    "The UAE pilot is just beginning. The first workers' stories will be published here as they finish the curriculum — in their words, with their permission.",
};

export default function StoriesBlueCollar() {
  return (
    <>
      <StoriesHero cohort="blue-collar" />
      <ConsentNote />
      <StorySection kind="crp" cohort="blue-collar" />
      <StoryPullQuote cohort="blue-collar" />
      <StorySection kind="beneficiary" cohort="blue-collar" />
      <VideoTestimonials cohort="blue-collar" />
    </>
  );
}
