import type { Metadata } from "next";
import {
  ResourcesHero,
  TextbookDownloads,
  LicenseNote,
} from "@/components/resources/sections";
import { VideoCurriculum } from "@/components/resources/VideoCurriculum";

export const metadata: Metadata = {
  title: "Resources · For Blue-Collar Workers — The Prosperity Project",
  description:
    "Materials in development for the UAE cohort — a pocket-sized Knowing Your Money textbook and a short video for every module, in Hindi, English, and partner languages.",
};

export default function ResourcesBlueCollar() {
  return (
    <>
      <ResourcesHero cohort="blue-collar" />
      <TextbookDownloads cohort="blue-collar" />
      <VideoCurriculum cohort="blue-collar" />
      <LicenseNote cohort="blue-collar" />
    </>
  );
}
