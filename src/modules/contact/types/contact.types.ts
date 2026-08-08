export type ContactIconName = "location" | "call" | "hour";

export interface ContactDetail {
  label: string;
  value: string;
  icon: ContactIconName;
}
