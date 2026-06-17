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
  title: "Workshops · For Blue-Collar Workers — The Prosperity Project",
  description:
    "How a workshop will run for blue-collar workers in the UAE — evenings and Fridays for ten weeks, in Hindi and English with partner-language translation, across Dubai and Sharjah.",
};

export default function WorkshopsBlueCollar() {
  return (
    <>
      <WorkshopsHero cohort="blue-collar" />
      <WorkshopsFormat cohort="blue-collar" />
      <WorkshopsPillars cohort="blue-collar" />
      <CRPModel cohort="blue-collar" />
      <InTheRoom cohort="blue-collar" />
      <WhatChanged cohort="blue-collar" />
      <BandhanPartnership cohort="blue-collar" />
    </>
  );
}
