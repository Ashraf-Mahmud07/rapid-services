"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CeoQuote() {
  const t = useTranslations("about");

  return (
    <section className="section-space">
      <div className="container-page">
        <div className="grid gap-8 rounded-[14px] bg-[#F8F8F8] p-6 sm:p-9 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)] lg:gap-11 lg:p-12">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg lg:aspect-4/5">
            <Image
              src="/images/about/ceo.png"
              alt={t("ceoImageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover"
            />
          </div>

          <figure className="flex flex-col justify-center">
            <figcaption className="text-eyebrow font-semibold text-primary uppercase">
              {t("ceoEyebrow")}
            </figcaption>

            <blockquote className="mt-4 text-[clamp(1.125rem,1.9vw,1.6rem)] leading-[1.34] font-semibold tracking-[-0.015em] text-ink">
              {t("ceoQuote")}
            </blockquote>

            <p className="mt-5 max-w-[720px] text-[14.5px] leading-[1.7] text-body-soft">
              {t("ceoBio")}
            </p>

            <div className="mt-6 border-t border-black/10 pt-5">
              <p className="text-[15px] font-semibold text-ink">{t("ceoName")}</p>
              <p className="mt-0.5 text-[13.5px] text-body-soft">{t("ceoTitle")}</p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
