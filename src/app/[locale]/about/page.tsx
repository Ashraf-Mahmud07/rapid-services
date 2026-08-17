import type { Metadata } from "next";
import { AboutView } from "@/modules/about";

export const metadata: Metadata = {
  title: "About Us | Rapid",
  description:
    "One crew covering six trades. A Sharjah maintenance contractor that employs its own technicians and quotes the job before it starts.",
};

export default function AboutPage() {
  return <AboutView />;
}
