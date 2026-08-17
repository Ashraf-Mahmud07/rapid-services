"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";

export default function AboutHero() {
  const t = useTranslations("about");

  return (
    <section className="relative isolate flex min-h-95 items-center overflow-hidden lg:min-h-120">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/careers-hero.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,10,12,0.92)_0%,rgba(8,10,12,0.74)_42%,rgba(8,10,12,0.3)_100%)]"
      />

      <div className="container-page grid gap-8 pt-28 pb-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:items-center lg:gap-16 lg:pt-32 lg:pb-20">
        <div>
          <h1 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.18] font-bold tracking-[-0.02em] text-white">
            {t("heroTitlePrefix")}
            <br />
            <span className="text-primary">{t("heroTitleSuffix")}</span>
          </h1>
          <p className="mt-4 max-w-155 text-[15px] leading-[1.72] text-white/80">
            {t("heroSubtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href={ROUTES.PRODUCT}
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t("openProducts")}
          </Link>
          <Link
            href={ROUTES.CAREER}
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {t("workWithUs")}
          </Link>
        </div>
      </div>
    </section>
  );
}
