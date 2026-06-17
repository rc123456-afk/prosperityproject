import type { Metadata } from "next";
import {
  ContactHero,
  GeneralContact,
  GetInvolved,
  PressContact,
  Elsewhere,
} from "@/components/contact/sections";

export const metadata: Metadata = {
  title: "Contact — The Prosperity Project",
  description:
    "Reach out. One inbox per reason — general questions, running a workshop, partnering with us, and press. A real person reads every inbox.",
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
