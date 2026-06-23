import type { Metadata } from "next";
import {
  WorkshopsHero,
  WorkshopsFormat,
  WorkshopsPillars,
  CRPModel,
  InTheRoom,
  WhatChanged,
  BandhanPartnership,
} from "@/components/workshops/sections";

export const metadata: Metadata = {
  title: "Workshops — The Prosperity Project",
  description:
    "How a workshop runs — twice a week for ten weeks, in Bengali with Hindi translation, across West Bengal, taught by Community Resource Persons in partnership with Bandhan NGO.",
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
      <BandhanPartnership />
    </>
  );
}
