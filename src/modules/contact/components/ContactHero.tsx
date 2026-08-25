export default function ContactHero() {
  return (
    <section
      className="relative flex h-95 flex-col items-center justify-center px-5 text-center sm:h-107.5 sm:px-6 lg:h-120"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(10,12,14,0.5),rgba(10,12,14,0.55)),url('/images/careers-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="mb-4 text-[32px] font-bold text-white sm:text-[38px] lg:mb-5 lg:text-[48px]">
        Contact Us to Start Your Project
      </h1>
      <p className="max-w-130 text-[15px] leading-[1.6] text-white/85 sm:text-base lg:text-[17px]">
        Tell us about your project, and our team will be in touch to discuss your needs and next
        steps.
      </p>
    </section>
  );
}
