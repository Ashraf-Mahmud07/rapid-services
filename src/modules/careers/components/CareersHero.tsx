export default function CareersHero() {
  return (
    <section
      className="relative flex h-[420px] flex-col items-center justify-center px-5 text-center sm:h-[480px] sm:px-6 lg:h-[560px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(10,12,14,0.55),rgba(10,12,14,0.55)),url('/images/careers-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "40% center",
      }}
    >
      <h1 className="mb-4 text-[30px] leading-[1.15] font-semibold tracking-[-0.5px] text-white sm:text-[38px] lg:mb-[22px] lg:text-[50px] lg:leading-[1.32]">
        Build Your Career With Us
      </h1>
      <p className="max-w-[682px] text-[15px] leading-[1.6] font-normal text-white/[0.82] sm:text-base lg:text-[17px]">
        Explore rewarding career opportunities and grow with a company committed to innovation,
        excellence, and your success.
      </p>
    </section>
  );
}
