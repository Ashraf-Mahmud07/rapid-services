import type { LucideIcon } from "lucide-react";
import { Building, Building2, Factory, Home, Landmark, Wrench } from "lucide-react";
import Image from "next/image";

type Industry = { title: string; body: string; icon: LucideIcon };

/** Left column is right-aligned against the photograph, right column left-aligned. */
const LEFT: Industry[] = [
  {
    title: "Residential Spaces",
    body: "Crafting Comfortable, Functional & Elegant Homes",
    icon: Home,
  },
  {
    title: "Commercial Projects",
    body: "Innovative Spaces Designed for Business Success",
    icon: Building2,
  },
  {
    title: "Industrial Facilities",
    body: "Engineered for Efficiency, Safety & Operational Excellence",
    icon: Factory,
  },
];

const RIGHT: Industry[] = [
  {
    title: "Civil Infrastructure",
    body: "Building Strong Foundations for Sustainable Communities",
    icon: Landmark,
  },
  {
    title: "Government Projects",
    body: "Delivering Trusted Infrastructure for Public Excellence",
    icon: Building,
  },
  {
    title: "Custom Developments",
    body: "Tailored Solutions Designed Around Your Vision",
    icon: Wrench,
  },
];

function Item({ item, align }: { item: Industry; align: "start" | "end" }) {
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
            {LEFT.map((item) => (
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
            {RIGHT.map((item) => (
              <Item key={item.title} item={item} align="start" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
