import Image from "next/image";
import { useTranslations } from "next-intl";

import { Navbar } from "@/shared/components/layout";
import heroBg from "@/shared/assets/png/service-banner.jpg";

export default function MediaHero() {
  const t = useTranslations("media");

  return (
    <section className="relative flex min-h-[350px] w-full flex-col lg:min-h-[450px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/60" />
        <Image src={heroBg} alt="Media Hero" fill className="h-full w-full object-cover" priority />
      </div>

      {/* Navbar at the top of the hero */}
      <div className="relative z-50 w-full">
        <Navbar variant="transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-page flex w-full flex-1 flex-col items-center justify-center pt-16 pb-20 text-center text-white sm:pt-20 sm:pb-24">
        <h1 className="mb-4 text-3xl leading-tight font-bold tracking-tight drop-shadow-sm md:text-4xl lg:text-5xl">
          {t("title")}
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed font-medium text-white/90 md:text-[15px]">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
