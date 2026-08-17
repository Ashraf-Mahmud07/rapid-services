"use client";

import { useOverlays } from "@/shared/components/overlays/OverlayProvider";
import { Phone } from "lucide-react";
import TeamCard from "../components/TeamCard";
import { TEAM_MEMBERS } from "../data/home.data";

export default function Team() {
  const overlays = useOverlays();
  return (
    <section className="relative isolate overflow-hidden py-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 section-background bg-cover opacity-30"
      />
      <div className="container-narrow">
        <div className="mx-auto flex max-w-175 flex-col items-center text-center">
          <div className="rounded-md bg-primary/[0.14] px-4 py-2 text-[10.5px] font-bold tracking-[1.26px] text-primary uppercase">
            Meet our experts
          </div>
          <h2 className="mt-5 text-[32px] leading-[normal] font-bold tracking-[-0.704px] text-primary sm:text-[38px]">
            Experienced Leaders <span className="text-black">Driving Construction Excellence</span>
          </h2>
          <p className="mt-4 max-w-155 text-[14.5px] leading-[23.93px] text-black/50">
            Our team of experienced professionals brings together technical expertise, industry
            knowledge, and a commitment to excellence.
          </p>
        </div>

        <div className="mt-10 grid gap-4.5 md:grid-cols-2 xl:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <p
            onClick={() => overlays.open("quote")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4.5 py-2.5 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <span className="flex size-5.5 items-center justify-center rounded-full bg-white text-primary">
              <Phone className="size-3.5" aria-hidden="true" />
            </span>
            Request a call
          </p>
        </div>
      </div>
    </section>
  );
}
