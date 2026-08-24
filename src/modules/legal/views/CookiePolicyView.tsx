"use client";

import serviceBanner from "@/shared/assets/png/service-banner.jpg";
import { Footer, HeroSection, Navbar } from "@/shared/components/layout";
import LegalDocumentView from "../components/LegalDocumentView";
import { useLegal } from "../hooks/useLegal";

export default function CookiePolicyView() {
  const { t, cookiePolicy } = useLegal();

  return (
    <main>
      <Navbar />
      {/* <PageBanner title={t("cookieTitle")} subtitle={t("cookieSubtitle")} date={t("cookieDate")} /> */}
      <HeroSection
        title={t("cookieTitle")}
        subtitle={t("cookieSubtitle")}
        descriptionClassName="max-w-[509px]"
        backgroundImage={serviceBanner}
      />
      <LegalDocumentView document={cookiePolicy} />
      <Footer />
    </main>
  );
}
