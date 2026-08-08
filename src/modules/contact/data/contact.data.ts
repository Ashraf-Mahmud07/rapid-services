/** TEMPORARY SAMPLE DATA **/

import type { ContactDetail } from "../types/contact.types";

export const CONTACT_DETAILS: ContactDetail[] = [
  { label: "ADDRESS", value: "Industrial Area No 5, Sharjah, UAE", icon: "location" },
  { label: "CALL US", value: "+971564406456", icon: "call" },
  { label: "HOURS", value: "Sat-Thu: 8am - 9pm", icon: "hour" },
];

export const CONTACT_TOPICS = ["General enquiry", "Support", "Careers"];

export const CONTACT_MAP = {
  title: "14 King Street, Manchester M2 6AQ, United Kingdom",
  embedUrl:
    "https://www.google.com/maps?q=14+King+Street,+Manchester+M2+6AQ,+United+Kingdom&z=15&output=embed",
  /** Rendered in the address card pinned to the centre of the map. */
  addressLines: ["14 King Street", "Manchester M2 6AQ", "United Kingdom"],
};
