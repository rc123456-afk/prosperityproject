import type { Metadata } from "next";
import {
  ContactHero,
  GeneralContact,
  GetInvolved,
  PressContact,
  Elsewhere,
} from "@/components/contact/sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out. One inbox for partnerships, press, and anyone who wants to run the curriculum. A real person reads every message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <GeneralContact />
      <GetInvolved />
      <PressContact />
      <Elsewhere />
    </>
  );
}
