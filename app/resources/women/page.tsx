import type { Metadata } from "next";
import {
  ResourcesHero,
  TextbookDownloads,
  LicenseNote,
} from "@/components/resources/sections";
import { VideoCurriculum } from "@/components/resources/VideoCurriculum";

export const metadata: Metadata = {
  title: "Resources · For Women — The Prosperity Project",
  description:
    "Free materials for the women's cohort — the Knowing Your Money textbook in Bengali, Hindi, and English, plus a short video for every module.",
};

export default function ResourcesWomen() {
  return (
    <>
      <ResourcesHero cohort="women" />
      <TextbookDownloads cohort="women" />
      <VideoCurriculum cohort="women" />
      <LicenseNote cohort="women" />
    </>
  );
}
