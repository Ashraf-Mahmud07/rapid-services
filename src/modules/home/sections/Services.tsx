import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { HOME_SERVICES } from "../data/home.data";

export default function Services() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-[480px]">
            <h2 className="text-[32px] leading-[1.2] font-bold tracking-tight text-[#0E0E0E] sm:text-[38px] lg:text-[42px]">
              Every Service You Need, One Team <span className="text-primary">You Can Trust.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-[1.65] text-[#737373]">
            Comprehensive solutions for homes and businesses, delivered with safety, efficiency, and
            precision.
          </p>
          <div className="shrink-0">
            <Link
              href={ROUTES.SERVICE}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
            >
              View All Services
            </Link>
          </div>
        </div>

        <ul className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {HOME_SERVICES.map((service) => (
            <li key={service.title}>
              <Link href={ROUTES.SERVICE} className="group block">
                <div className="relative aspect-[430/287] w-full overflow-hidden rounded-[16px] bg-neutral-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-[18px] font-bold text-[#0E0E0E] transition-colors group-hover:text-primary sm:text-[19px]">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-[1.6] text-[#737373]">
                      {service.description}
                    </p>
                  </div>

                  <span className="mt-1 flex size-9 flex-none items-center justify-center rounded-full border border-[#D5D8DA] text-[#5A5F63] transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                    <ArrowUpRight className="size-4" strokeWidth={2.2} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
