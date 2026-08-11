import { BadgeCheck, Clock, Receipt } from "lucide-react";
import type { ReactNode } from "react";
import { CertifiedIcon } from "../icons/CertifiedIcon";
import type { AboutCard as AboutCardItem } from "../types/about.types";

const iconMap: Record<AboutCardItem["icon"], ReactNode> = {
  certified: <CertifiedIcon />,
  pricing: <Receipt className="size-8" aria-hidden="true" />,
  response: <Clock className="size-8" aria-hidden="true" />,
  guarantee: <BadgeCheck className="size-8" aria-hidden="true" />,
};

interface AboutCardProps {
  item: AboutCardItem;
}

const AboutCard = ({ item }: AboutCardProps) => {
  return (
    <div className="flex-1 basis-[230px] rounded-md bg-[#FAFAFA] px-[21px] py-[27px]">
      <div className="mb-2.5 flex size-12 content-center items-center rounded-md bg-primary p-2 text-white">
        {iconMap[item.icon]}
      </div>
      <h3 className="mb-3 text-base font-medium text-[#0E0E0E]">{item.title}</h3>
      <p className="text-sm text-[#737373]">{item.description}</p>
    </div>
  );
};

export default AboutCard;
