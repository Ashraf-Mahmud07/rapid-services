import { Phone } from "lucide-react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[18px] bg-[#1a1a1a]">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>

      <div className="absolute right-0 bottom-0 left-0 p-[18px]">
        <h3 className="text-[17px] font-bold text-white">{name}</h3>
        <p className="mt-1 text-[12.5px] text-white/60">{role}</p>
      </div>

      <div className="absolute right-[18px] bottom-[18px] flex size-[32px] items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
        <Phone className="size-[13px] text-white" aria-hidden="true" />
      </div>
    </article>
  );
}
