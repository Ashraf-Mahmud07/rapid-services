import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Panel upgrades & rewires",
    description: "Fuse boards, circuit testing and full rewires, certified before we leave.",
    tag: "Electrical",
    image: "/images/services/panel-upgrades.jpg",
  },
  {
    title: "Leak tracing & repair",
    description: "We find the source before opening the wall, then repair and reseal.",
    tag: "Plumbing",
    image: "/images/projects/pipework-repair.jpg",
  },
  {
    title: "Interior repaints",
    description: "Filled, sanded and primed properly, then two trade coats per room.",
    tag: "Painting",
    image: "/images/services/maintenance-repairs.jpg",
  },
  {
    title: "Professional Cleaning",
    description:
      "We clean homes and workplaces, leaving every space fresh, hygienic, and spotless.",
    tag: "Cleaning",
    image: "/images/projects/move-out-clean.jpg",
  },
];

export default function Services() {
  return (
    <section className="section-space">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[518px]">
            <p className="text-[16px] font-semibold tracking-[0.72px] text-primary uppercase">
              Our services
            </p>
            <h2 className="mt-3 text-[34px] leading-[40.8px] font-semibold tracking-[-1.728px] text-[#0e0e0e] sm:text-[38px]">
              Every Service You Need, One Team <span className="text-primary">You Can Trust.</span>
            </h2>
          </div>

          <a
            href="#"
            className="text-[15px] font-medium text-primary transition-opacity hover:opacity-80"
          >
            View All
          </a>
        </div>

        <div className="mt-9 grid gap-[20px] lg:grid-cols-2 2xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
