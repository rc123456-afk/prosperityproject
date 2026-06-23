import type { Metadata } from "next";
import { GalleryHero, PhotoDump } from "@/components/gallery/sections";

export const metadata: Metadata = {
  title: "Gallery — The Prosperity Project",
  description:
    "From the rooms where the work happens: workshops, graduations, hands, materials, and the walk to the bank — across West Bengal.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <PhotoDump />
    </>
  );
}
