import type { SVGProps } from "react";

import { CallIcon } from "@/shared/assets/icons";
import { HourIcon, LocationIcon } from "../assets/icons";
import { CONTACT_DETAILS } from "../data/contact.data";
import type { ContactIconName } from "../types/contact.types";

const ICONS: Record<ContactIconName, (props: SVGProps<SVGSVGElement>) => React.ReactElement> = {
  location: LocationIcon,
  call: CallIcon,
  hour: HourIcon,
};

export default function ContactDetailCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[26px]">
      {CONTACT_DETAILS.map((detail) => {
        const Icon = ICONS[detail.icon];
        return (
          <div
            key={detail.label}
            className="flex items-center gap-4 rounded-md border border-[#7fcabf] px-4 py-4 lg:px-[26px] lg:py-[22px]"
          >
            <span className="flex size-[46px] flex-none items-center justify-center rounded-lg bg-primary">
              <Icon className="size-[22px] text-white" />
            </span>
            <div>
              <p className="mb-1 text-[13px] font-bold tracking-[0.5px] text-[#17181a]">
                {detail.label}
              </p>
              <p className="text-sm text-[#7c8288]">{detail.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
