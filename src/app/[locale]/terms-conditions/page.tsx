import type { Metadata } from "next";
import { TermsConditionsPage } from "@/modules/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions | Rapid",
  description: "The rules that apply when you shop with Rapid.",
};

export default function TermsConditions() {
  return <TermsConditionsPage />;
}
