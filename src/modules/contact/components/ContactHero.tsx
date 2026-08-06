export default function ContactHero() {
  return (
    <section
      className="relative flex h-[380px] flex-col items-center justify-center px-5 text-center sm:h-[430px] sm:px-6 lg:h-[480px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(10,12,14,0.5),rgba(10,12,14,0.55)),url('/images/careers-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="mb-4 text-[32px] font-bold text-white sm:text-[38px] lg:mb-5 lg:text-[48px]">
        Contact Us
      </h1>
      <p className="max-w-[720px] text-[15px] leading-[1.6] text-white/85 sm:text-base lg:text-[17px]">
        Have a question, need support, or want to learn more about our services? Get in touch with
        our team, and we&apos;ll be happy to assist you as quickly as possible.
      </p>
    </section>
  );
}
