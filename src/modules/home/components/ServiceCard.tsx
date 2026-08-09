import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  tag: string;
  image: string;
}

export default function ServiceCard({ title, description, tag, image }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-[#e3e3e3] bg-[#fafafa]">
      <div className="relative h-[268px] overflow-hidden rounded-t-[6px] bg-[#f4f4f4]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-[14px] left-[14px] rounded-[6px] bg-primary px-[10px] py-[6px] text-[11px] font-bold tracking-[0.66px] text-white uppercase">
          {tag}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-[24px] pt-[24px] pb-[24px]">
        <h3 className="text-[21px] leading-[26px] font-semibold tracking-[-0.462px] text-[#0e0e0e]">
          {title}
        </h3>
        <p className="mt-[10px] flex-1 text-[14.5px] leading-[23.2px] text-[#737373]">
          {description}
        </p>

        <div className="mt-[20px] border-t border-[#f2f2f2] pt-[18px]">
          <div className="flex items-center justify-end">
            <span className="flex size-[28px] items-center justify-center rounded-full bg-[#d6eae9] text-primary">
              <ArrowRight className="size-[13px]" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
