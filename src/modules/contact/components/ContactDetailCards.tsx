import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { ElementType } from "react";

import { CONTACT_DETAILS } from "../data/contact.data";
import type { ContactIconName } from "../types/contact.types";

const ICONS: Record<ContactIconName, ElementType> = {
  location: MapPin,
  call: Phone,
  hour: Clock,
  email: Mail,
};

export default function ContactDetailCards() {
  return (
    <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:mb-14 xl:grid-cols-4 xl:gap-6">
      {CONTACT_DETAILS.map((detail, idx) => {
        const Icon = ICONS[detail.icon];
        return (
          <div
            key={idx}
            className="flex items-start gap-4 rounded-xl bg-[#fafafa] px-5 py-6 transition-all"
          >
            <span className="mt-0.5 flex size-10 flex-none items-center justify-center rounded-lg bg-[#D8FFFD]">
              <Icon className="size-[18px] text-primary" strokeWidth={2} />
            </span>
            <div className="flex flex-col gap-1">
              {detail.values.map((line, i) => (
                <p key={i} className="text-[12.5px] leading-relaxed text-[#7c8288] lg:text-[13px]">
                  {line}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
