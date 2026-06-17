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
  title: "Workshops · For Women — The Prosperity Project",
  description:
    "How a workshop runs — twice a week for ten weeks, in Bengali with Hindi translation, across West Bengal, taught by Community Resource Persons in partnership with Bandhan NGO.",
};

export default function WorkshopsWomen() {
  return (
    <>
      <WorkshopsHero cohort="women" />
      <WorkshopsFormat cohort="women" />
      <WorkshopsPillars cohort="women" />
      <CRPModel cohort="women" />
      <InTheRoom cohort="women" />
      <WhatChanged cohort="women" />
      <BandhanPartnership cohort="women" />
    </>
  );
}
