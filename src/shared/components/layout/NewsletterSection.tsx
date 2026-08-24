import Image from "next/image";
import { useTranslations } from "next-intl";
import subsIcon from "@/shared/assets/svg/subs.svg";

export function NewsletterSection() {
  const t = useTranslations("common");

  return (
    <section className="container-page pb-16 md:pb-24">
      <div className="flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-[#C6D5FF] px-8 py-10 md:flex-row md:px-12 md:py-12 lg:px-16 lg:py-16">
        {/* Left Side: Illustration */}
        <div className="flex w-full justify-center md:w-4/12 lg:w-5/12 lg:justify-start">
          <div className="relative flex w-full max-w-[320px] items-center justify-center lg:max-w-[420px]">
            {/* The SVG from the designer */}
            <Image
              src={subsIcon}
              alt="Subscribe to our newsletter"
              className="h-auto w-full drop-shadow-sm"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex w-full flex-col pt-8 md:w-8/12 md:pt-0 lg:w-7/12 lg:pl-12">
          <h3 className="mb-8 max-w-xl text-[22px] leading-snug font-semibold text-[#1C2C5A] sm:text-[26px] lg:mb-10 lg:text-[30px]">
            {t("newsletter.title")}
          </h3>

          <form
            className="flex w-full max-w-xl items-center rounded-full bg-white p-1.5 shadow-sm sm:p-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="flex-1 border-none bg-transparent px-4 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 sm:px-5 sm:text-[14px]"
              required
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-primary px-6 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-primary/90 sm:px-8 sm:py-2.5 sm:text-[14px]"
            >
              {t("newsletter.button")}
            </button>
          </form>

          <p className="mt-3 pl-4 text-[11px] font-medium text-[#1C2C5A]/60 sm:mt-4 sm:text-[12px]">
            {t("newsletter.subtext")}
          </p>
        </div>
      </div>
    </section>
  );
}
