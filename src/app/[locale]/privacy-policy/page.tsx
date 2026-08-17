import type { Metadata } from "next";
import { PrivacyPolicyView } from "@/modules/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Rapid",
  description: "What we collect, why we collect it, and the controls you have.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
