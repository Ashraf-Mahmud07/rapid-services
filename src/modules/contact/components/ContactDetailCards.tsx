import Image from "next/image";

import { CONTACT_DETAILS } from "../data/contact.data";

export default function ContactDetailCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[26px]">
      {CONTACT_DETAILS.map((detail) => (
        <div
          key={detail.label}
          className="flex items-center gap-4 rounded-md border border-[#7fcabf] px-4 py-4 lg:px-[26px] lg:py-[22px]"
        >
          <span className="flex size-[46px] flex-none items-center justify-center rounded-lg bg-primary">
            <Image src={detail.icon} alt="" width={22} height={22} className="size-[22px]" />
          </span>
          <div>
            <p className="mb-1 text-[13px] font-bold tracking-[0.5px] text-[#17181a]">
              {detail.label}
            </p>
            <p className="text-sm text-[#7c8288]">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
