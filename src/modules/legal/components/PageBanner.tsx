"use client";

interface PageBannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  date?: string;
  className?: string;
}

const PageBanner = ({
  eyebrow,
  title,
  subtitle,
  description,
  date,
  className = "",
}: PageBannerProps) => {
  const displaySub = subtitle || description;

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: "url('/images/section-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/30" />

      <div className="relative z-10 container py-13">
        <div className="max-w-155">
          {eyebrow && (
            <span className="mb-3.5 block text-[11px] font-medium tracking-[1.2px] text-primary uppercase">
              {eyebrow}
            </span>
          )}

          <h1 className="text-[40px] leading-[1.15] font-semibold tracking-[-1.5px] text-[#111111]">
            {title}
          </h1>

          {displaySub && (
            <p className="mt-2.5 max-w-150 text-[14px] leading-[1.6] font-normal text-[#777777]">
              {displaySub}
            </p>
          )}

          {date && <p className="mt-2 text-[12px] font-medium text-primary">{date}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
