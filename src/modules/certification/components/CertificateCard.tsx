import type { Certificate } from "../types/certification.types";
import { CERTIFICATION_ICONS } from "./certificationIcons";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const Icon = CERTIFICATION_ICONS[certificate.icon];

  return (
    <article className="rounded-xl border border-[#EDEFF1] bg-panel-soft p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-10 flex-none items-center justify-center rounded-[10px] bg-primary">
          <Icon className="size-5.25 text-white" />
        </span>
        <span className="inline-flex items-center rounded-full bg-[#E6F7F4] px-2.5 py-1 text-[10px] leading-none font-bold tracking-[1px] text-primary uppercase">
          {certificate.status}
        </span>
      </div>

      <h3 className="mt-4 text-base font-bold text-[#17181a]">{certificate.code}</h3>
      <p className="mt-2 text-[13px] text-[#8b9096]">{certificate.name}</p>
      <p className="mt-5 border-t border-[#EDEFF1] pt-4 text-[11px] text-[#a9adb1]">
        {certificate.issuer}
      </p>
    </article>
  );
}
