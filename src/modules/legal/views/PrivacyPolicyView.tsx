"use client";

import serviceBanner from "@/shared/assets/png/service-banner.jpg";
import { Footer, HeroSection, Navbar } from "@/shared/components/layout";
import LegalDocumentView from "../components/LegalDocumentView";
import { useLegal } from "../hooks/useLegal";

export default function PrivacyPolicyView() {
  const { t, privacyPolicy } = useLegal();

  return (
    <main>
      <Navbar />
      {/* <PageBanner
        title={t("privacyTitle")}
        subtitle={t("privacySubtitle")}
        date={t("privacyDate")}
      /> */}
      <HeroSection
        title={t("privacyTitle")}
        descriptionClassName="max-w-[509px] font-[17px] font-normal"
        subtitle={t("privacySubtitle")}
        backgroundImage={serviceBanner}
      />
      <LegalDocumentView document={privacyPolicy} />
      <Footer />
    </main>
  );
}
