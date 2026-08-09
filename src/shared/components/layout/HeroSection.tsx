import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string | StaticImageData;
}

export default function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-125 flex-col overflow-hidden bg-slate-900 pt-0">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/50 mix-blend-multiply" />
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

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-16 pb-24 text-center text-white sm:pt-20 sm:pb-32 md:pt-28 md:pb-40">
        <h1 className="mb-5 text-3xl font-bold tracking-tight drop-shadow-sm md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed font-medium text-white/90 drop-shadow-sm md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
