import type { Metadata } from "next";

import { ContactDetailCards, ContactForm, ContactHero, ContactMap } from "@/modules/contact";
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
      <div className="section-background">
        <div className="container-page py-10 sm:py-12 lg:py-15">
          <ContactDetailCards />
          <ContactForm />
          <ContactMap />
        </div>
      </div>
      <Footer />
    </div>
  );
}
