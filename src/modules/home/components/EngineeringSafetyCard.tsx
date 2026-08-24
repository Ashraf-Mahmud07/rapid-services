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
    <article className="flex items-center rounded-[16px] border border-[#F0F0F0] bg-[#FAFAFA] p-6 transition-all duration-200 hover:shadow-md">
      <div className="mr-5 flex size-[52px] shrink-0 items-center justify-center rounded-[12px] bg-primary text-white shadow-sm">
        {iconMap[item.icon]}
      </div>

      <div className="min-w-0">
        <h3 className="text-[17px] font-bold text-[#0E0E0E]">{item.title}</h3>
        <p className="mt-1 text-[13.5px] leading-[1.5] text-[#737373]">
          {item.descriptionLine1} {item.descriptionLine2}
        </p>
      </div>
    </article>
  );
};

export default EngineeringSafetyCard;
