"use client";

import serviceBanner from "@/shared/assets/png/service-banner.jpg";
import { Footer, HeroSection, Navbar } from "@/shared/components/layout";
import LegalDocumentView from "../components/LegalDocumentView";
import { useLegal } from "../hooks/useLegal";

export default function TermsConditionsView() {
  const { t, termsConditions } = useLegal();

  return (
    <main>
      <Navbar />
      {/* <PageBanner title={t("termsTitle")} subtitle={t("termsSubtitle")} date={t("termsDate")} /> */}
      <HeroSection
        title={t("termsTitle")}
        subtitle={t("termsSubtitle")}
        descriptionClassName="max-w-[509px] font-[17px]"
        backgroundImage={serviceBanner}
      />
      <LegalDocumentView document={termsConditions} />
      <Footer />
    </main>
  );
}
