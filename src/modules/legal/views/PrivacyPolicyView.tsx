"use client";

import LegalDocumentView from "../components/LegalDocumentView";
import PageBanner from "../components/PageBanner";
import { useLegal } from "../hooks/useLegal";
import { Footer, Navbar } from "@/shared/components/layout";

export default function PrivacyPolicyView() {
  const { t, privacyPolicy } = useLegal();

  return (
    <main>
      <Navbar />
      <PageBanner
        title={t("privacyTitle")}
        subtitle={t("privacySubtitle")}
        date={t("privacyDate")}
      />
      <LegalDocumentView document={privacyPolicy} />
      <Footer />
    </main>
  );
}
