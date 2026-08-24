import ContactUsPage from "@/modules/contact/views/ContactUsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Rapid",
  description: "Get in touch with our team and we'll assist you as quickly as possible.",
};

export default function ContactPage() {
  return <ContactUsPage />;
}
