/** TEMPORARY SAMPLE DATA **/

import type { ContactDetail } from "../types/contact.types";

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    label: "ADDRESS",
    value: "Al Muteena, Fish Roundabout, Deira, Dubai, UAE",
    icon: "location",
  },
  { label: "CALL US", value: "+971 55 516 4777", icon: "call" },
  { label: "HOURS", value: "Sat – Thu, 9:00 AM – 6:00 PM", icon: "hour" },
];

export const CONTACT_TOPICS = ["General enquiry", "Support", "Careers"];

export const CONTACT_MAP = {
  title: "Al Muteena, Fish Roundabout, Deira, Dubai, United Arab Emirates",
  embedUrl:
    "https://www.google.com/maps?q=Al+Muteena,+Fish+Roundabout,+Deira,+Dubai,+United+Arab+Emirates&z=15&output=embed",
  /** Rendered in the address card pinned to the centre of the map. */
  addressLines: ["Al Muteena, Fish Roundabout", "Deira, Dubai", "United Arab Emirates"],
};
