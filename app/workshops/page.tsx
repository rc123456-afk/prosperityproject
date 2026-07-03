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
    "How a workshop runs — the ten Knowing Your Money modules and the follow-up after, in Bengali with Hindi alongside it, in West Bengal, taught with Bandhan-Konnagar and supported by Bandhan Bank Ltd.",
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
