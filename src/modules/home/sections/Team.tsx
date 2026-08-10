import { Phone } from "lucide-react";
import TeamCard from "../components/TeamCard";

const teamMembers = [
  {
    name: "Olivia Bennett",
    role: "CEO",
    image: "/images/team/olivia-bennett.png",
  },
  {
    name: "Michael Anderson",
    role: "Site Supervisor",
    image: "/images/team/michael-anderson.png",
  },
  {
    name: "Sophia Martinez",
    role: "Site Supervisor",
    image: "/images/team/sophia-martinez.png",
  },
  {
    name: "Daniel Brooks",
    role: "Project Manager",
    image: "/images/team/expert-1.jpg",
  },
];

export default function Team() {
  return (
    <section className="section-space overflow-hidden bg-[#0a0e1c] py-[90px]">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <div className="rounded-[6px] bg-primary/[0.14] px-[16px] py-[8px] text-[10.5px] font-bold tracking-[1.26px] text-primary uppercase">
            Meet our experts
          </div>
          <h2 className="mt-5 text-[32px] leading-[normal] font-bold tracking-[-0.704px] text-primary sm:text-[38px]">
            Experienced Leaders <span className="text-white">Driving Construction Excellence</span>
          </h2>
          <p className="mt-4 max-w-[620px] text-[14.5px] leading-[23.93px] text-white/50">
            Our team of experienced professionals brings together technical expertise, industry
            knowledge, and a commitment to excellence.
          </p>
        </div>

        <div className="mt-10 grid gap-[18px] md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-[8px] rounded-full bg-primary px-[18px] py-[10px] text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <span className="flex size-[22px] items-center justify-center rounded-full bg-white text-primary">
              <Phone className="size-[14px]" aria-hidden="true" />
            </span>
            Request a call
          </a>
        </div>
      </div>
    </section>
  );
}
