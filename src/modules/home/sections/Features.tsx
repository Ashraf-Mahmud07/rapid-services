import { FEATURE_PROMISES, HOME_FEATURES } from "../data/home.data";

export default function Features() {
  return (
    <section className="section-space">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-[60px]">
          <div className="max-w-[520px]">
            <p className="text-[11px] font-semibold tracking-[1.1px] text-primary uppercase">
              Why choose us
            </p>
            <h2 className="mt-4 text-[34px] leading-[41px] font-semibold tracking-[-0.884px] text-[#0e0e0e] sm:text-[38px]">
              Fixed prices, certified work, <span className="text-primary">no surprises</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-[24.65px] text-[#737373]">
              We quote the job, not the hour. Every visit is carried out by a licensed technician,
              tested before handover and backed by a written guarantee.
            </p>

            <ul className="mt-8 flex flex-col gap-[14px]">
              {FEATURE_PROMISES.map((promise) => (
                <li key={promise} className="flex items-start gap-3">
                  <span className="mt-[3px] flex size-[18px] shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      aria-hidden="true"
                    >
                      <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14.5px] leading-[23.2px] text-[#5b5b5b]">{promise}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-[20px] sm:grid-cols-2">
            {HOME_FEATURES.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="flex h-full flex-col rounded-md border border-[#efefef] bg-[#fafafa] px-[24px] py-[26px]"
                >
                  <span className="mb-[18px] flex size-[52px] items-center justify-center rounded-[12px] bg-primary text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-[18px] leading-[1.2] font-medium text-[#0e0e0e]">
                    {feature.title}
                  </h3>
                  <p className="mt-[10px] text-[13px] leading-[20px] text-[#8a8a8a]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
