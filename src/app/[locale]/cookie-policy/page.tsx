import type { Metadata } from "next";
import { CookiePolicyView } from "@/modules/legal";

export const metadata: Metadata = {
  title: "Cookie Policy | Rapid",
  description: "How we use cookies and similar tracking technologies to improve your experience.",
};

export default function CookiePolicyPage() {
  return <CookiePolicyView />;
}
