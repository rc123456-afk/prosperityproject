import type { Metadata } from "next";
import {
  StoriesHero,
  ConsentNote,
  StorySection,
  StoryPullQuote,
  VideoTestimonials,
} from "@/components/stories/sections";

export const metadata: Metadata = {
  title: "Stories — The Prosperity Project",
  description:
    "Students who finished Knowing Your Money, and the Community Resource Persons who came back to teach. Told in their own words, in West Bengal.",
};

export default function Stories() {
  return (
    <>
      <StoriesHero />
      <VideoTestimonials />
      <StorySection kind="crp" />
      <StoryPullQuote />
      <StorySection kind="beneficiary" />
      <ConsentNote />
    </>
  );
}
