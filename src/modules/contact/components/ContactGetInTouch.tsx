import { CONTACT_INTRO } from "../data/contact.data";

export default function ContactGetInTouch() {
  return (
    <section className="mt-12 text-center lg:mt-16">
      <h2 className="text-[28px] leading-[1.2] font-bold tracking-[-0.02em] text-primary sm:text-[32px] lg:text-[36px]">
        {CONTACT_INTRO.title}
      </h2>
      <p className="mx-auto mt-4 max-w-[560px] text-[14.5px] leading-[1.7] text-[#4a4a4a]">
        {CONTACT_INTRO.description}
      </p>
    </section>
  );
}
