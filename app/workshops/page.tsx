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
  title: "Workshops",
  description:
    "How a workshop runs: the ten Knowing Your Money modules, taught in Bengali and Hindi in Baruipur, in Marathi at Indo Count Industries in Kolhapur, and online.",
  alternates: { canonical: "/workshops" },
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
