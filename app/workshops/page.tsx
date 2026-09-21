import type { Metadata } from "next";
import {
  WorkshopsHero,
  WorkshopsFormat,
  WorkshopsPillars,
  CRPModel,
  InTheRoom,
  WhatChanged,
  Partnerships,
} from "@/components/workshops/sections";

export const metadata: Metadata = {
  title: "Workshops — The Prosperity Project",
  description:
    "How a workshop runs — the ten Knowing Your Money modules and the follow-up after. In Baruipur, West Bengal with Bandhan-Konnagar; in Marathi at Indo Count Industries in Kolhapur, Maharashtra; and online.",
};

export default function Workshops() {
  return (
    <>
      <WorkshopsHero />
      <WorkshopsFormat />
      <WorkshopsPillars />
      <CRPModel />
      <InTheRoom />
      <WhatChanged />
      <Partnerships />
    </>
  );
}
