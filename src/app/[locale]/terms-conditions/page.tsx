import type { Metadata } from "next";
import { TermsConditionsView } from "@/modules/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions | Rapid",
  description: "The rules that apply when you shop with Rapid.",
};

export default function TermsConditionsPage() {
  return <TermsConditionsView />;
}
