import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import ShareButton from "./ShareButton";

interface JobDetailHeroProps {
  title: string;
}

export default function JobDetailHero({ title }: JobDetailHeroProps) {
  return (
    <section
      className="relative h-[360px] sm:h-[420px] lg:h-[461px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(10,12,14,0.35),rgba(10,12,14,0.62)),url('/images/careers-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mx-auto h-full w-full max-w-page">
        <Link
          href={ROUTES.CAREER}
          className="absolute top-[104px] left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-primary transition-colors hover:bg-white/90 sm:top-[126px] sm:left-6 sm:px-5 sm:text-sm md:left-10 lg:top-[150px] lg:left-12 lg:px-[22px] lg:py-3"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M11 6l-6 6 6 6"
              stroke="#00A79D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>

        <ShareButton
          title={title}
          className="absolute top-[104px] right-5 flex min-h-11 items-center gap-2 text-sm text-white sm:top-[126px] sm:right-6 md:right-10 lg:top-[196px] lg:right-12 lg:min-h-0 lg:gap-2.5 lg:text-[15px]"
        />

        <h1 className="absolute top-[164px] left-5 max-w-[640px] pe-5 text-[26px] leading-[1.2] font-bold text-white sm:top-[190px] sm:left-6 sm:text-[32px] md:left-10 lg:top-[214px] lg:left-12 lg:text-[42px] lg:leading-[1.15]">
          {title}
        </h1>
      </div>
    </section>
  );
}
