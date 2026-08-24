import type { Metadata } from "next";
import { CertificationView } from "@/modules/certification";

export const metadata: Metadata = {
  title: "Certification | Rapid",
  description:
    "Our internationally recognized certifications reflect our commitment to quality, safety, and industry-leading standards.",
};

export default function CertificationPage() {
  return <CertificationView />;
}
