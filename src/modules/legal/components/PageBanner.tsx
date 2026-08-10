interface PageBannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

const PageBanner = ({ eyebrow, title, description, className = "" }: PageBannerProps) => {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: "url('/images/section-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="relative z-10 container py-13">
        <div className="max-w-155">
          {eyebrow && (
            <span className="mb-3.5 block text-[11px] font-medium tracking-[1.2px] text-[#00A9A5] uppercase">
              {eyebrow}
            </span>
          )}

          <h1 className="text-[40px] leading-[1.15] font-semibold tracking-[-1.5px] text-[#111111]">
            {title}
          </h1>

          {description && (
            <p className="mt-2.5 max-w-150 text-[14px] leading-[1.6] font-normal text-[#777777]">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
