"use client";

import LegalDocumentView from "../components/LegalDocumentView";
import PageBanner from "../components/PageBanner";
import { useLegal } from "../hooks/useLegal";
import { Footer, Navbar } from "@/shared/components/layout";

export default function CookiePolicyView() {
  const { t, cookiePolicy } = useLegal();

  return (
    <main>
      <Navbar />
      <PageBanner title={t("cookieTitle")} subtitle={t("cookieSubtitle")} date={t("cookieDate")} />
      <LegalDocumentView document={cookiePolicy} />
      <Footer />
    </main>
  );
}
