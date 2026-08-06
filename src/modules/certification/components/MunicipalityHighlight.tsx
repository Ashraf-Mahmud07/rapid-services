import { CheckIcon, ShieldCheckIcon } from "lucide-react";
import Image from "next/image";

import { MUNICIPALITY_HIGHLIGHT } from "../data/certification.data";

export default function MunicipalityHighlight() {
  const content = MUNICIPALITY_HIGHLIGHT;

  return (
    <section className="mt-10 rounded-xl bg-[#0A1128] p-6 sm:p-8 lg:mt-14 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
        <div className="relative pb-4">
          <div className="flex items-center justify-center rounded-lg bg-white p-8 lg:min-h-52.5">
            <Image
              src={content.logo}
              alt={content.logoAlt}
              width={435}
              height={175}
              className="h-auto w-full max-w-65"
            />
          </div>
          <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[11px] font-semibold text-white">
            <ShieldCheckIcon className="size-3.5" strokeWidth={2} />
            {content.badge}
          </span>
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold tracking-[1px] text-primary uppercase">
            <ShieldCheckIcon className="size-3" strokeWidth={2} />
            {content.eyebrow}
          </span>

          <h2 className="mt-4 text-[26px] leading-[1.2] font-bold text-white lg:text-[30px]">
            {content.title}
            <span className="block text-primary">{content.titleAccent}</span>
          </h2>

          <p className="mt-4 text-[13px] leading-[1.75] text-[#94A3B8]">{content.description}</p>

          <div className="mt-6 flex items-start gap-3 rounded-lg bg-white/6 p-4">
            <span className="flex size-6 flex-none items-center justify-center rounded-full bg-primary">
              <CheckIcon className="size-3.5 text-white" strokeWidth={2.6} />
            </span>
            <p className="text-[13px] leading-[1.6] text-[#cbd5e1]">{content.highlight}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
