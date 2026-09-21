import type { Metadata } from "next";
import { GalleryHero, PhotoDump } from "@/components/gallery/sections";

export const metadata: Metadata = {
  title: "Gallery — The Prosperity Project",
  description:
    "From the rooms where the work happens: workshops, hands, materials and the people in the room — in Baruipur, West Bengal, and at a mill in Kolhapur, Maharashtra.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <PhotoDump />
    </>
  );
}
