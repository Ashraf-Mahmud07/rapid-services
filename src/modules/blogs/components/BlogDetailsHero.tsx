import { Link } from "@/i18n/navigation";
import Navbar from "@/shared/components/layout/Navbar";
import { ROUTES } from "@/shared/constants/routes";
import { ChevronLeft, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

interface BlogDetailsHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string | StaticImageData;
}

export function BlogDetailsHero({ title, subtitle, backgroundImage }: BlogDetailsHeroProps) {
  const t = useTranslations("blogs");

  return (
    <section className="relative flex min-h-112.5 flex-col overflow-hidden bg-slate-900 pt-0">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/60 mix-blend-multiply" />
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="absolute inset-0 z-0 h-full w-full object-cover"
            priority
          />
        )}
      </div>

      {/* Navbar at the top of the hero */}
      <div className="relative z-50 w-full">
        <Navbar variant="transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-page flex w-full flex-1 flex-col justify-center pt-16 pb-20 text-white sm:pt-20 sm:pb-24">
        <Link
          href={ROUTES.BLOG}
          className="mb-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
          {t("back")}
        </Link>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl leading-tight font-bold tracking-tight drop-shadow-sm md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-base leading-relaxed font-medium text-white/80 md:text-lg">
              {subtitle}
            </p>
          </div>

          <button className="group flex w-fit items-center gap-2 text-sm font-semibold transition-colors hover:text-gray-300">
            {t("share")} <Share2 className="h-4 w-4 transition-transform group-hover:scale-110" />
          </button>
        </div>
      </div>
    </section>
  );
}
