import { cn } from "@/shared/utils/cn";

interface PageHeroProps {
  title: string;
  description: string;
  /** Override the default height or spacing when a page needs a taller band. */
  className?: string;
}

export default function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex h-[360px] flex-col items-center justify-center px-5 text-center sm:h-[400px] sm:px-6 lg:h-[440px]",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(10,12,14,0.5),rgba(10,12,14,0.55)),url('/images/careers-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="mb-4 text-[30px] font-bold text-white sm:text-[36px] lg:text-[40px]">
        {title}
      </h1>
      <p className="max-w-[620px] text-sm leading-[1.7] text-white/80 sm:text-[15px]">
        {description}
      </p>
    </section>
  );
}
