import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import blog1Image from "@/modules/blogs/assets/1.jpg";
import blog2Image from "@/modules/blogs/assets/2.jpg";
import blog3Image from "@/modules/blogs/assets/3.jpg";
import blog4Image from "@/modules/blogs/assets/4.jpg";

export function BlogsCTA() {
  const t = useTranslations("blogs");

  return (
    <div className="container-page pb-16 md:pb-24">
      <div className="flex flex-col overflow-hidden rounded-3xl bg-[#F8F9FA] lg:flex-row lg:items-center">
        {/* Left Side: Image Collage */}
        <div className="relative w-full p-6 lg:w-1/2 lg:p-12">
          <div className="relative grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
            <div className="relative aspect-[1.5] w-full overflow-hidden rounded-xl rounded-bl-[4rem] sm:rounded-bl-[6rem]">
              <Image src={blog1Image} alt="Project 1" fill className="object-cover" />
            </div>

            <div className="relative aspect-[1.5] w-full overflow-hidden rounded-xl">
              <Image src={blog2Image} alt="Project 2" fill className="object-cover" />
            </div>

            <div className="relative aspect-[1.5] w-full overflow-hidden rounded-xl">
              <Image src={blog3Image} alt="Project 3" fill className="object-cover" />
            </div>

            <div className="relative aspect-[1.5] w-full overflow-hidden rounded-xl rounded-tr-[4rem] sm:rounded-tr-[6rem]">
              <Image src={blog4Image} alt="Project 4" fill className="object-cover" />
            </div>

            {/* Central Badge */}
            <div className="absolute top-1/2 left-1/2 z-10 flex size-[110px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[6px] border-white bg-primary text-white shadow-lg sm:size-[140px] sm:border-[8px]">
              <span className="text-2xl font-bold sm:text-4xl">50+</span>
              <span className="mt-0.5 text-[10px] font-bold tracking-wider sm:mt-1 sm:text-[12px]">
                PROJECT
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex w-full flex-col p-8 lg:w-1/2 lg:py-16 lg:pr-12 lg:pl-8 xl:pr-16">
          <h2 className="mb-4 text-[24px] leading-tight font-extrabold text-[#2A2A2A] sm:text-[28px] lg:mb-6 lg:text-[34px] xl:text-[38px]">
            {t("ctaTitle")}
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-gray-500 lg:mb-10 lg:text-[16px]">
            {t("ctaSubtitle")}
          </p>
          <div>
            <button className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-bold text-white transition-all hover:bg-primary/90">
              {t("ctaButton")} <ArrowRight className="size-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
