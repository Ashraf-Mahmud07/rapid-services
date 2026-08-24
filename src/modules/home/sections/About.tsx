"use client";

import AboutCard from "../components/AboutCard";
import AboutSlider from "../components/AboutSlider";
import { aboutCards } from "../data/about.data";

const About = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-page flex flex-col items-center gap-10 lg:flex-row lg:gap-14 xl:gap-16">
        <AboutSlider />
        <div className="min-w-0 flex-1">
          <h2 className="mb-4 max-w-[590px] text-[32px] leading-[1.2] font-bold tracking-tight text-[#0E0E0E] sm:text-[38px] lg:text-[42px]">
            Reliable maintenance, <span className="text-primary">priced before we start.</span>
          </h2>
          <p className="mb-8 max-w-[525px] text-[15px] leading-[1.65] text-[#737373] sm:text-[16px]">
            Reliable auto and home maintenance by certified technicians with transparent pricing and
            quality service.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
