"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import missionVisionImage from "../assets/our-mission.jpg";

export default function MissionVision() {
  const t = useTranslations("about");

  return (
    <section className="section-space">
      <div className="container-page">
        <div className="grid items-center gap-10 rounded-[14px] bg-[#F8F8F8] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.53fr)_minmax(0,1fr)] lg:gap-5 lg:p-10">
          <div>
            <h2 className="border-b border-black/10 pb-3.5 text-[17px] font-bold tracking-[0.06em] text-primary uppercase">
              {t("ourMission")}
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.75] text-body-soft">{t("missionText")}</p>
          </div>

          <div className="relative order-first aspect-380/255 w-full overflow-hidden rounded-md lg:order-0">
            <Image
              src={missionVisionImage}
              alt={t("missionVisionImageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>

          <div className="lg:text-end">
            <h2 className="border-b border-black/10 pb-3.5 text-[17px] font-bold tracking-[0.06em] text-primary uppercase">
              {t("ourVision")}
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.75] text-body-soft">{t("visionText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
