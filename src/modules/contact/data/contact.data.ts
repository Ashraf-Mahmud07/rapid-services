/** TEMPORARY SAMPLE DATA **/

import type { ContactDetail } from "../types/contact.types";

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    values: ["Al Muteena, Fish Roundabout", "Deira, Dubai, United Arab Emirates"],
    icon: "location",
  },
  {
    values: ["+971 55 516 4777", "+971 55 516 4777"],
    icon: "call",
  },
  {
    values: ["info@rapidsmarterp.com", "career@rapidsmarterp.com"],
    icon: "email",
  },
  {
    values: ["Sat – Thu, Friday: Closed", "9:00 AM – 6:00 PM"],
    icon: "hour",
  },
];

export const CONTACT_TOPICS = ["General enquiry", "Support", "Careers"];

/** Centred lead-in that introduces the contact form. */
export const CONTACT_INTRO = {
  title: "Get in touch",
  description:
    "Have a question, need support, or want to learn more about our services? Get in touch with our team, and we'll be happy to assist you as quickly as possible.",
} as const;

export const CONTACT_MAP = {
  title: "Al Muteena, Fish Roundabout, Deira, Dubai, United Arab Emirates",
  embedUrl:
    "https://www.google.com/maps?q=Al+Muteena,+Fish+Roundabout,+Deira,+Dubai,+United+Arab+Emirates&z=15&output=embed",
  /** Rendered in the address card pinned to the centre of the map. */
  addressLines: ["Al Muteena, Fish Roundabout", "Deira, Dubai", "United Arab Emirates"],
};
