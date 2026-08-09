import type { EngineeringSafetyItem } from "@/modules/home/data/engineeringSafety.data";
import { Building2, Factory, House, Landmark, Plane, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<EngineeringSafetyItem["icon"], ReactNode> = {
  residential: <House className="size-6" aria-hidden="true" />,
  commercial: <Building2 className="size-6" aria-hidden="true" />,
  industrial: <Factory className="size-6" aria-hidden="true" />,
  aviation: <Plane className="size-6" aria-hidden="true" />,
  infrastructure: <Landmark className="size-6" aria-hidden="true" />,
  government: <ShieldCheck className="size-6" aria-hidden="true" />,
};

interface EngineeringSafetyCardProps {
  item: EngineeringSafetyItem;
}

const EngineeringSafetyCard = ({ item }: EngineeringSafetyCardProps) => {
  return (
    <article className="flex min-h-[121px] items-center rounded-[6px] border border-[#efefef] bg-[#fafafa] px-[24px] py-[24px] shadow-[0_0_0_1px_rgba(0,0,0,0.01)]">
      <div className="mr-[20px] flex size-[52px] shrink-0 items-center justify-center rounded-[12px] bg-primary text-white">
        {iconMap[item.icon]}
      </div>

      <div className="min-w-0">
        <h3 className="text-[18px] leading-[1.2] font-medium text-[#0e0e0e]">{item.title}</h3>
        <p className="mt-[6px] text-[13px] leading-[20px] text-[#8a8a8a]">
          {item.descriptionLine1}
          <br />
          {item.descriptionLine2}
        </p>
      </div>
    </article>
  );
};

export default EngineeringSafetyCard;
