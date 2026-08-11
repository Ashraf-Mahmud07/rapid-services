import { Footer, Navbar } from "@/shared/components/layout";
import { COOKIE_POLICY } from "../data/cookie-policy";
import LegalDocumentView from "./LegalDocumentView";
import PageBanner from "./PageBanner";

export default function CookiePolicyPage() {
  return (
    <div className="animate-rp-screen text-[#1a1a1a]">
      <Navbar variant="solid" />
      <PageBanner
        eyebrow="Cookie Policy"
        title="Cookie Policy"
        description="What we store on your device, why, and how to change it."
      />
      <LegalDocumentView document={COOKIE_POLICY} />
      <Footer />
    </div>
  );
}
