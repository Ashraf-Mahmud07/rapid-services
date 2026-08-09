"use client";

import AboutCard from "../components/AboutCard";
import AboutSlider from "../components/AboutSlider";
import { aboutCards } from "../data/about.data";

const About = () => {
  return (
    <section className="">
      <div className="container mx-auto section-space flex flex-col gap-[53px] lg:flex-row">
        <AboutSlider />
        <div className="min-w-0 flex-1">
          <h2 className="mb-4 max-w-[590px] text-[34px] leading-[1.24] font-semibold tracking-[-1.4px] text-[#0E0E0E]">
            {" "}
            Reliable maintenance, priced before we start.
          </h2>
          <p className="mb-8 max-w-[525px] text-[18px] text-[#5B5B5B]">
            Reliable auto and home maintenance by certified technicians with transparent pricing and
            quality service.
          </p>
          <div className="mt-8 flex flex-wrap gap-[14px]">
            {aboutCards.map((card) => (
              <AboutCard key={card.title} item={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
