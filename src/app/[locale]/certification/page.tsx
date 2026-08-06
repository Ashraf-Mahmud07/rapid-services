import type { Metadata } from "next";

import {
  ApprovalGrid,
  CertificationCredentials,
  MunicipalityHighlight,
} from "@/modules/certification";
import { FaqSection } from "@/modules/contact";
import { Footer, Navbar, PageHero } from "@/shared/components/layout";
import { ROUTES } from "@/shared/constants/routes";

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

      <div className="container-page">
        <CertificationCredentials />
        <MunicipalityHighlight />
        <ApprovalGrid />
        <FaqSection askHref={ROUTES.CONTACT} />
      </div>

      <Footer />
    </div>
  );
}
