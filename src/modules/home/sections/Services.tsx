import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { HOME_SERVICES } from "../data/home.data";

export default function Services() {
  return (
    <section className="section-space">
      <div className="container-page">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h2 className="max-w-[420px] text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.21] font-bold tracking-[-0.026em] text-ink">
            Every Service You Need, One Team <span className="text-primary">You Can Trust.</span>
          </h2>
          <p className="max-w-[380px] text-[14px] leading-[1.62] text-body-soft lg:mt-1">
            Comprehensive solutions for homes and businesses, delivered with safety, efficiency, and
            precision.
          </p>
          <Link
            href={ROUTES.SERVICE}
            className="inline-flex h-11 flex-none items-center self-start rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            View All Services
          </Link>
        </div>

        <ul className="mt-9 grid gap-x-13 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">
          {HOME_SERVICES.map((service) => (
            <li key={service.title}>
              <Link href={ROUTES.SERVICE} className="group block">
                <div className="relative aspect-[292/193] w-full overflow-hidden rounded-[8px]">
                  <Image
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-3.5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold text-ink">{service.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-[1.55] text-body-soft">
                      {service.description}
                    </p>
                  </div>

                  <span className="mt-1 flex size-7 flex-none items-center justify-center rounded-full border border-[#d5d8da] text-[#5a5f63] transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
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
