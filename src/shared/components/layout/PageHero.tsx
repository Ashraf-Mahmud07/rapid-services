import { cn } from "@/shared/utils/cn";

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

export default function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex h-90 flex-col items-center justify-center px-5 text-center sm:h-100 sm:px-6 lg:h-110",
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
      <p className="max-w-155 text-sm leading-[1.7] text-white/80 sm:text-[15px]">{description}</p>
    </section>
  );
}
