import Image from "next/image";

const recentWorks = [
  {
    title: "Leaking cistern and full bathroom reseal",
    category: "Plumbing",
    image: "/images/recent-works/plumbing.svg",
  },
  {
    title: "Move-out deep clean, two-bed apartment",
    category: "Cleaning",
    image: "/images/recent-works/cleaning.svg",
  },
  {
    title: "Consumer unit upgrade and RCD test",
    category: "Electrical",
    image: "/images/recent-works/electrical.svg",
  },
];

export default function RecentWork() {
  return (
    <section className="section-space overflow-hidden bg-[#0a0e1c] py-[72px]">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <div className="max-w-[320px]">
            <h2 className="text-[34px] leading-[38px] font-semibold tracking-[-1.02px] text-white">
              Our <span className="text-primary">Recent Work</span>
            </h2>
            <p className="mt-4 text-[16px] leading-[24.65px] text-[rgba(255,255,255,0.56)]">
              We take pride in offering you the best services available, backed by full
              documentation on every job.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex rounded-full bg-primary px-[24px] py-[12px] text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              View More
            </a>
            <div className="mt-8 flex items-center gap-2">
              <span className="h-[6px] w-[38px] rounded-full bg-primary" />
              <span className="h-[6px] w-[18px] rounded-full bg-white/20" />
              <span className="h-[6px] w-[18px] rounded-full bg-white/20" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {recentWorks.map((work) => (
              <article
                key={work.title}
                className="group relative h-[320px] overflow-hidden rounded-[12px] bg-[#1a1a1a]"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.25)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-[20px]">
                  <p className="text-[11px] font-semibold tracking-[1.1px] text-primary uppercase">
                    {work.category}
                  </p>
                  <h3 className="mt-2 text-[18px] leading-[24px] font-semibold tracking-[-0.27px] text-white">
                    {work.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
