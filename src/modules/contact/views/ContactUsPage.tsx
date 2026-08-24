import ContactDetailCards from "../components/ContactDetailCards";
import ContactForm from "../components/ContactForm";
import ContactGetInTouch from "../components/ContactGetInTouch";
import ContactHero from "../components/ContactHero";
import ContactMap from "../components/ContactMap";

export default function ContactUsPage() {
  return (
    <div className="w-full">
      <ContactHero />
      <div className="section-background">
        <div className="container-page py-10 sm:py-12 lg:py-15">
          <ContactDetailCards />
          <ContactGetInTouch />
          <ContactForm />
          <ContactMap />
        </div>
      </div>
    </div>
  );
}
