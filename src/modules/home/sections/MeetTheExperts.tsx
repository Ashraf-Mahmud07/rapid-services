"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

import { useOverlays } from "@/shared/components/overlays/OverlayProvider";
import { EXPERTS, EXPERT_SOCIALS } from "../data/home.data";

export default function MeetTheExperts() {
  const overlays = useOverlays();

  return (
    <section className="bg-[#E6FAF8] py-14 lg:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div>
            <span className="text-[12px] font-bold tracking-[0.14em] text-primary uppercase">
              Our Team
            </span>
            <h2 className="mt-2 text-[32px] leading-[1.2] font-bold tracking-tight text-[#0E0E0E] sm:text-[38px] lg:text-[42px]">
              Meet the Experts
            </h2>
          </div>
          <p className="max-w-[500px] text-[15px] leading-[1.65] text-[#737373]">
            Our skilled team of certified electricians is dedicated to delivering safe, efficient,
            and high-quality electrical services you can trust.
          </p>
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => overlays.open("quote")}
              className="inline-flex h-11 items-center gap-2.5 rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-white text-primary">
                <Phone className="size-3.5" aria-hidden="true" />
              </span>
              Request a call
            </button>
          </div>
        </div>

        <ul className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {EXPERTS.map((expert) => (
            <li key={expert.name}>
              <div className="group relative aspect-[297/450] w-full overflow-hidden rounded-[20px] bg-neutral-100 shadow-md focus-within:ring-2 focus-within:ring-primary">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0C1B2A]/85 p-6 text-center opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100">
                  <h3 className="text-[20px] font-bold text-white">{expert.name}</h3>
                  <p className="mt-1 text-[13.5px] text-white/80">{expert.role}</p>
                  <ul className="mt-5 flex items-center gap-3">
                    {EXPERT_SOCIALS.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${expert.name} on ${social.label}`}
                          className={
                            social.accent
                              ? "flex size-8 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-transform hover:scale-110"
                              : "flex size-8 items-center justify-center rounded-full bg-white text-[#0E0E0E] shadow-sm transition-transform hover:scale-110"
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
