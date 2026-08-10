import { Footer, Navbar } from "@/shared/components/layout";
import { PRIVACY_POLICY } from "../data/privacy-policy";
import LegalDocumentView from "./LegalDocumentView";
import PageBanner from "./PageBanner";

export default function PrivacyPolicyPage() {
  return (
    <div className="animate-rp-screen text-[#1a1a1a]">
      <Navbar variant="solid" />
      <PageBanner
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your information."
      />
      <LegalDocumentView document={PRIVACY_POLICY} />
      <Footer />
    </div>
  );
}
