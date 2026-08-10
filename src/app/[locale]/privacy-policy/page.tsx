import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/modules/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Rapid",
  description: "What Rapid collects, why we collect it, and the controls you have.",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
