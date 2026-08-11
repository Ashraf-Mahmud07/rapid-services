import type { Metadata } from "next";
import { CookiePolicyPage } from "@/modules/legal";

export const metadata: Metadata = {
  title: "Cookie Policy | Rapid",
  description: "What Rapid stores on your device, why, and how to change it.",
};

export default function CookiePolicy() {
  return <CookiePolicyPage />;
}
