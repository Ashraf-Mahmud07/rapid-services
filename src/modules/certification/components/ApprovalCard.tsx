import { CheckIcon } from "lucide-react";

import type { Approval } from "../types/certification.types";
import { CERTIFICATION_ICONS } from "./certificationIcons";

interface ApprovalCardProps {
  approval: Approval;
}

/** Re-colours a Figma SVG to the current text colour, matching the Footer pattern. */
const maskIcon = (src: string) => ({
  WebkitMaskImage: `url('${src}')`,
  maskImage: `url('${src}')`,
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
});

export default function ApprovalCard({ approval }: ApprovalCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-[#EDEFF1] bg-[#FAFAFA] p-5 sm:p-6">
      <span className="flex size-10 flex-none items-center justify-center rounded-[10px] bg-primary">
        <span
          className="size-5 bg-white"
          style={maskIcon(CERTIFICATION_ICONS[approval.icon])}
          aria-hidden="true"
        />
      </span>

      <h3 className="mt-5 text-base font-bold text-primary">{approval.title}</h3>
      <p className="mt-3 text-[13px] leading-[1.75] text-[#8b9096]">{approval.description}</p>

      <p className="mt-auto flex items-start gap-2 border-t border-[#EDEFF1] pt-4 text-[11px] leading-[1.5] font-bold tracking-[0.5px] text-[#3f4245] uppercase">
        <CheckIcon className="mt-px size-3.5 flex-none text-primary" strokeWidth={2.6} />
        {approval.highlight}
      </p>
    </article>
  );
}
