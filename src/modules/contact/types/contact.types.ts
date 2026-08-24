export type ContactIconName = "location" | "call" | "hour" | "email";

export interface ContactDetail {
  label?: string; // Optional if you decide to keep it for screen readers, but UI removes it
  values: string[];
  icon: ContactIconName;
}
