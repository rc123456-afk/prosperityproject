import type { Metadata } from "next";
import {
  ProgrammesHero,
  ProgrammeList,
  ProgrammesClosing,
} from "@/components/programmes/sections";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Where Knowing Your Money has run: Baruipur with Bandhan-Konnagar, around two hundred women at Indo Count Industries in Kolhapur, and online into Asansol with Shristi Corp and FEED.",
  alternates: { canonical: "/programmes" },
};

export default function Programmes() {
  return (
    <>
      <ProgrammesHero />
      <ProgrammeList />
      <ProgrammesClosing />
    </>
  );
}
