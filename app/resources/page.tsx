import type { Metadata } from "next";
import {
  ResourcesHero,
  TextbookDownloads,
  LicenseNote,
} from "@/components/resources/sections";
import { VideoCurriculum } from "@/components/resources/VideoCurriculum";

export const metadata: Metadata = {
  title: "Resources — The Prosperity Project",
  description:
    "Free materials — the Knowing Your Money textbook in Bengali, Hindi, and English, plus a short video for every module.",
};

export default function Resources() {
  return (
    <>
      <ResourcesHero />
      <TextbookDownloads />
      <VideoCurriculum />
      <LicenseNote />
    </>
  );
}
