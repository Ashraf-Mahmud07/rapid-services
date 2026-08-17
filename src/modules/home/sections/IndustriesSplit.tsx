import Image from "next/image";
import { INDUSTRIES_LEFT, INDUSTRIES_RIGHT } from "../data/home.data";
import type { IndustrySplitItem } from "../types/home.types";

function Item({ item, align }: { item: IndustrySplitItem; align: "start" | "end" }) {
  const end = align === "end";
  return (
    <li className={end ? "lg:text-end" : ""}>
      <span
        className={`mb-4 flex size-12 items-center justify-center rounded-[10px] bg-brand-tint text-primary ${
          end ? "lg:ms-auto" : ""
        }`}
      >
        <item.icon className="size-5" strokeWidth={1.9} />
      </span>
      <h3 className="text-[17px] font-semibold text-ink">{item.title}</h3>
      <p className="mt-2 text-[14px] leading-[1.62] text-body-soft">{item.body}</p>
    </li>
  );
}

export default function IndustriesSplit() {
  return (
    <section className="relative isolate overflow-hidden surface-wash py-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 section-background bg-cover opacity-30"
      />
      <div className="container-narrow">
        <div className="mx-auto flex max-w-160 flex-col items-center text-center">
          <p className="inline-flex rounded-md bg-brand-tint px-3 py-1.5 text-[10.5px] font-bold tracking-[0.13em] text-primary uppercase">
            Industries we serve
          </p>
          <h2 className="mt-4 text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.21] font-bold tracking-[-0.026em] text-ink">
            Delivering Excellence Across Every Industry
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 py-5 lg:grid-cols-[minmax(0,1fr)_380px_minmax(0,1fr)] lg:gap-12">
          <ul className="flex flex-col gap-10">
            {INDUSTRIES_LEFT.map((item) => (
              <Item key={item.title} item={item} align="end" />
            ))}
          </ul>

          <div className="relative order-first aspect-380/445 w-full overflow-hidden rounded-[10px] lg:order-0">
            <Image
              src="/images/services/electrical-installation.jpg"
              alt="Technician working on an electrical installation"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
          </div>

          <ul className="flex flex-col gap-10">
            {INDUSTRIES_RIGHT.map((item) => (
              <Item key={item.title} item={item} align="start" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
