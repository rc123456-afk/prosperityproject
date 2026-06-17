import type { Metadata } from "next";
import {
  StoriesHero,
  ConsentNote,
  StorySection,
  StoryPullQuote,
  VideoTestimonials,
} from "@/components/stories/sections";

export const metadata: Metadata = {
  title: "Stories · For Women — The Prosperity Project",
  description:
    "Students who finished Knowing Your Money, and the Community Resource Persons who came back to teach. Told in their own words, in West Bengal.",
};

export default function StoriesWomen() {
  return (
    <>
      <StoriesHero cohort="women" />
      <ConsentNote />
      <StorySection kind="crp" cohort="women" />
      <StoryPullQuote cohort="women" />
      <StorySection kind="beneficiary" cohort="women" />
      <VideoTestimonials cohort="women" />
    </>
  );
}
