import type { Metadata } from "next";

import {
  ApprovalGrid,
  CertificationCredentials,
  MunicipalityHighlight,
} from "@/modules/certification";
import FAQCTASection from "@/modules/service/components/FAQCTASection";
import { Footer, Navbar, PageHero } from "@/shared/components/layout";

export const metadata: Metadata = {
  title: "Certification | Rapid",
  description:
    "Our internationally recognized certifications reflect our commitment to quality, safety, and industry-leading standards.",
};

export default function CertificationPage() {
  return (
    <div className="relative w-full overflow-x-hidden font-poppins">
      <Navbar />
      <PageHero
        title="Certification"
        description="Our internationally recognized certifications reflect our commitment to quality, safety, and industry-leading standards."
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <CertificationCredentials />
        <MunicipalityHighlight />
        <ApprovalGrid />
      </div>
      <FAQCTASection />
      <Footer />
    </div>
  );
}
