import { CheckIcon } from "lucide-react";

import type { Approval } from "../types/certification.types";
import { CERTIFICATION_ICONS } from "./certificationIcons";

interface ApprovalCardProps {
  approval: Approval;
}

export default function ApprovalCard({ approval }: ApprovalCardProps) {
  const Icon = CERTIFICATION_ICONS[approval.icon];

  return (
    <article className="flex flex-col rounded-xl border border-[#EDEFF1] bg-panel-soft p-5 sm:p-6">
      <span className="flex size-10 flex-none items-center justify-center rounded-[10px] bg-primary">
        <Icon className="size-5 text-white" />
      </span>

      <h3 className="mt-3 text-[18px] leading-[1.35] font-bold text-primary">{approval.title}</h3>
      <p className="mt-3 text-[13px] leading-normal text-[#6c7176]">{approval.description}</p>

      <div className="mt-auto pt-4">
        <span className="block h-px w-[72%] bg-[#EDEFF1]" />
        <p className="mt-4 flex items-start gap-2 text-[11px] leading-normal font-bold tracking-[0.3px] text-[#17181a] uppercase">
          <span className="flex size-4 flex-none items-center justify-center rounded-sm bg-primary">
            <CheckIcon className="size-2.5 text-white" strokeWidth={3} />
          </span>
          {approval.highlight}
        </p>
      </div>
    </article>
  );
}
