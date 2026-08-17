"use client";

import LegalDocumentView from "../components/LegalDocumentView";
import PageBanner from "../components/PageBanner";
import { useLegal } from "../hooks/useLegal";
import { Footer, Navbar } from "@/shared/components/layout";

export default function TermsConditionsView() {
  const { t, termsConditions } = useLegal();

  return (
    <main>
      <Navbar />
      <PageBanner title={t("termsTitle")} subtitle={t("termsSubtitle")} date={t("termsDate")} />
      <LegalDocumentView document={termsConditions} />
      <Footer />
    </main>
  );
}
