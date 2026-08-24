import subBellIcon from "@/shared/assets/svg/sub-bell.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function NewsletterSection() {
  const t = useTranslations("common");

  return (
    <section className="w-full bg-[#fafafa] py-10 md:py-12">
      <div className="container-page mx-auto flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
        {/* Left Side: Icon & Text */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          {/* New Custom Icon */}
          <div className="mr-0 mb-4 flex shrink-0 items-center justify-center sm:mr-5 sm:mb-0">
            <Image src={subBellIcon} alt="Subscribe" className="h-[64px] w-[64px] object-contain" />
          </div>

          <div className="flex flex-col justify-center pt-1">
            <h3 className="mb-1.5 text-[14px] font-bold tracking-tight text-[#111] md:text-[15px]">
              SUBSCRIBE & <span className="text-primary">GET 15% DISCOUNT</span>
            </h3>
            <p className="max-w-[380px] text-[11px] leading-[1.6] text-gray-500 md:text-[12px]">
              Get 15% off your first purchase! Plus, be the first to know about sales new product
              launches and exclusive offers!
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full shrink-0 lg:w-auto">
          <form
            className="flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full flex-1 rounded-full border border-gray-200 bg-white px-6 py-3 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-primary/40 focus:ring-1 focus:ring-primary/40 lg:w-[540px] lg:flex-none"
              required
            />
            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-primary px-8 py-3 text-[13px] font-bold tracking-wide text-white transition-all hover:bg-primary/90 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
