"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const counters = [
  {
    value: 20,
    suffix: "+",
    label: "Successfully completed projects",
    icon: "/icons/counter-projects.svg",
  },
  {
    value: 17,
    suffix: "+",
    label: "Years of industry experience",
    icon: "/icons/counter-experience.svg",
  },
  {
    value: 10,
    suffix: "M+",
    label: "Total project investment value",
    icon: "/icons/counter-investment.svg",
  },
  {
    value: 120,
    suffix: "+",
    label: "Skilled professionals & engineers",
    icon: "/icons/counter-professionals.svg",
  },
];

const animationDuration = 1400;

export default function CounterSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-space bg-primary py-[87.5px]"
      aria-label="Company numbers"
    >
      <div className="container mx-auto grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-12">
        {counters.map((counter) => (
          <div key={counter.label} className="flex items-center gap-4">
            <div className="relative flex size-[77.5px] shrink-0 items-center justify-center rounded-md bg-[rgba(45,212,191,0.16)]">
              <Image
                className="text-white"
                src={counter.icon}
                width={35}
                height={35}
                alt=""
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[48px] leading-[0.87] font-medium tracking-[-1.26px] text-white">
                <CountUpNumber
                  target={counter.value}
                  suffix={counter.suffix}
                  shouldAnimate={shouldAnimate}
                />
              </p>
              <p className="mt-1 max-w-58 text-[12.5px] leading-[17.5px] font-semibold tracking-[0.75px] text-[rgba(255,255,255,0.5)] uppercase">
                {counter.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CountUpNumber({
  target,
  suffix,
  shouldAnimate,
}: {
  target: number;
  suffix: string;
  shouldAnimate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      startTime ??= timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [shouldAnimate, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
