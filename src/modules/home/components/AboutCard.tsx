import { Clock, DollarSign, PenTool, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import type { AboutCard as AboutCardItem } from "../types/about.types";

const iconMap: Record<AboutCardItem["icon"], ReactNode> = {
  certified: <ShieldCheck className="size-6 text-white" aria-hidden="true" />,
  pricing: <DollarSign className="size-6 text-white" aria-hidden="true" />,
  visits: <Clock className="size-6 text-white" aria-hidden="true" />,
  trades: <PenTool className="size-6 text-white" aria-hidden="true" />,
};

interface AboutCardProps {
  item: AboutCardItem;
}

const AboutCard = ({ item }: AboutCardProps) => {
  return (
    <div className="flex-1 basis-[240px] rounded-[14px] bg-[#FAFAFA] p-6 transition-all duration-200 hover:shadow-md">
      <div className="mb-4 flex size-12 items-center justify-center rounded-[10px] bg-primary text-white shadow-sm">
        {iconMap[item.icon]}
      </div>
      <h3 className="mb-2 text-[17px] font-bold text-[#0E0E0E]">{item.title}</h3>
      <p className="text-[14px] leading-[1.6] text-[#737373]">{item.description}</p>
    </div>
  );
};

export default AboutCard;
