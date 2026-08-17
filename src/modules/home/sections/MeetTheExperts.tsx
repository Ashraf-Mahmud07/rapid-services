import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { EXPERTS, EXPERT_SOCIALS } from "../data/home.data";

export default function MeetTheExperts() {
  return (
    <section className="section-space">
      <div className="container-narrow">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <h2 className="text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.21] font-bold tracking-[-0.026em] text-ink">
            Meet the Experts
          </h2>
          <p className="max-w-117.5 text-[14.5px] leading-[1.66] text-body-soft">
            Our skilled team of certified electricians is dedicated to delivering safe, efficient,
            and high-quality electrical services you can trust.
          </p>
          <Link
            href={ROUTES.SERVICE}
            className="inline-flex h-11 flex-none items-center self-start rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 lg:self-auto"
          >
            View All Services
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {EXPERTS.map((expert) => (
            <li key={expert.name}>
              <div className="group relative aspect-10/11 overflow-hidden rounded-[10px] focus-within:ring-2 focus-within:ring-primary">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[rgba(10,20,26,0.72)] opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100">
                  <p className="text-[19px] font-semibold text-white">{expert.name}</p>
                  <p className="-mt-2 text-[13.5px] text-white/80">{expert.role}</p>
                  <ul className="mt-1 flex items-center gap-2.5">
                    {EXPERT_SOCIALS.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${expert.name} on ${social.label}`}
                          className={
                            social.accent
                              ? "flex size-8 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-110"
                              : "flex size-8 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-110"
                          }
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path d={social.path} />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
