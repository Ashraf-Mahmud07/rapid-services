import React from "react";
import { Footer, Navbar, PageHero } from "@/shared/components/layout";
import CTASection from "@/modules/service/components/CTASection";
import { CertificationList } from "../components/CertificationList";

export function CertificationView() {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#fafafa] font-poppins">
      <Navbar />
      <PageHero
        title="Certification"
        description="Our internationally recognized certifications reflect our commitment to quality, safety, and industry-leading standards."
      />

      <div className="w-full">
        <CertificationList />
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
