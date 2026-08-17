"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function MissionVision() {
  const t = useTranslations("about");

  return (
    <section className="section-space">
      <div className="container-page">
        <div className="grid items-center gap-10 rounded-[14px] surface-wash p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_380px_minmax(0,1fr)] lg:gap-12 lg:p-14">
          <div>
            <h2 className="border-b border-primary/35 pb-3 text-[17px] font-bold tracking-[0.06em] text-primary uppercase">
              {t("ourMission")}
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.75] text-body-soft">{t("missionText")}</p>
          </div>

          <div className="relative order-first aspect-380/255 w-full overflow-hidden rounded-lg lg:order-0">
            <Image
              src="/images/about/mission-vision.jpg"
              alt={t("missionVisionImageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
          </div>

          <div className="lg:text-end">
            <h2 className="border-b border-primary/35 pb-3 text-[17px] font-bold tracking-[0.06em] text-primary uppercase">
              {t("ourVision")}
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.75] text-body-soft">{t("visionText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
