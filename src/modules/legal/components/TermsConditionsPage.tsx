import { Navbar } from "@/shared/components/layout";
import { TERMS_CONDITIONS } from "../data/terms-conditions";
import LegalDocumentView from "./LegalDocumentView";
import PageBanner from "./PageBanner";

export default function TermsConditionsPage() {
  return (
    <div className="animate-rp-screen text-[#1a1a1a]">
      <Navbar variant="solid" />
      <PageBanner
        eyebrow="Terms and Conditions"
        title="Terms and Conditions"
        description="Please read these terms and conditions carefully before using our services."
      />
      <LegalDocumentView document={TERMS_CONDITIONS} />
    </div>
  );
}
