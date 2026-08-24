import Image from "next/image";
import { INDUSTRIES_LEFT, INDUSTRIES_RIGHT } from "../data/home.data";
import type { IndustrySplitItem } from "../types/home.types";

function Item({ item, align }: { item: IndustrySplitItem; align: "start" | "end" }) {
  const end = align === "end";
  return (
    <li className={end ? "text-center lg:text-end" : "text-center lg:text-start"}>
      <span
        className={`mb-3.5 inline-flex size-12 items-center justify-center rounded-[12px] bg-[#C5F5F0] text-primary shadow-sm ${
          end ? "lg:ms-auto" : ""
        }`}
      >
        <item.icon className="size-6" strokeWidth={1.9} />
      </span>
      <h3 className="text-[18px] font-bold text-[#0E0E0E]">{item.title}</h3>
      <p className="mt-1.5 text-[14px] leading-[1.6] text-[#737373]">{item.body}</p>
    </li>
  );
}

export default function IndustriesSplit() {
  return (
    <section className="bg-[#E6FAF8] py-14 lg:py-20">
      <div className="container-page">
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
          <div className="inline-flex rounded-md bg-[#C5F5F0] px-3.5 py-1.5">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase sm:text-[12px]">
              Industries we serve
            </span>
          </div>
          <h2 className="mt-4 text-[32px] leading-[1.2] font-bold tracking-tight text-[#0E0E0E] sm:text-[38px] lg:text-[42px]">
            Delivering Excellence Across Every Industry
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-12 xl:gap-14">
          <ul className="flex flex-col gap-8 lg:gap-12">
            {INDUSTRIES_LEFT.map((item) => (
              <Item key={item.title} item={item} align="end" />
            ))}
          </ul>

          <div className="relative aspect-[552/638] w-full overflow-hidden rounded-[24px] bg-neutral-100 shadow-lg">
            <Image
              src="/images/services/electrical-installation.jpg"
              alt="Technician delivering precision work"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover"
            />
          </div>

          <ul className="flex flex-col gap-8 lg:gap-12">
            {INDUSTRIES_RIGHT.map((item) => (
              <Item key={item.title} item={item} align="start" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
