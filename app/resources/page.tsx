import type { Metadata } from "next";
import {
  ResourcesHero,
  TextbookDownloads,
  LicenseNote,
} from "@/components/resources/sections";
import { VideoCurriculum } from "@/components/resources/VideoCurriculum";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free materials: the Knowing Your Money textbook in Bengali, Hindi and English, and short companion videos for the modules.",
  alternates: { canonical: "/resources" },
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
