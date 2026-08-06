import type { Metadata } from "next";

import {
  ContactDetailCards,
  ContactForm,
  ContactHero,
  ContactMap,
  FaqSection,
} from "@/modules/contact";
import { Footer, Navbar } from "@/shared/components/layout";

export const metadata: Metadata = {
  title: "Contact Us | Rapid",
  description: "Get in touch with our team and we'll assist you as quickly as possible.",
};

export default function ContactUsPage() {
  return (
    <div className="relative w-full overflow-x-hidden font-poppins">
      <Navbar />
      <ContactHero />

      <div className="container-page pt-10 sm:pt-12 lg:pt-15">
        <ContactDetailCards />
        <ContactForm />
        <ContactMap />
        <FaqSection />
      </div>

      <Footer />
    </div>
  );
}
