import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";

const EXPERTS = [
  { name: "Ryan Mitchell", role: "Installation Specialist", image: "/images/team/expert-1.jpg" },
  { name: "Adam Carter", role: "Senior Technician", image: "/images/team/expert-2.jpg" },
  { name: "Luis Romero", role: "Site Electrician", image: "/images/team/expert-3.jpg" },
  { name: "Owen Hayes", role: "Maintenance Lead", image: "/images/team/expert-4.jpg" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.3-1.3 1.5-1.3H16V5.6c-.3 0-1.2-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8v2.8h2.4V21z",
    accent: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6.9 8.7H4.2V20h2.7zM5.6 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2M20 13.5c0-2.9-1.6-4.3-3.7-4.3-1.7 0-2.5.9-2.9 1.6V8.7H10.7V20h2.7v-6c0-1.3.6-2.1 1.8-2.1s1.6.8 1.6 2.1v6H20z",
    accent: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2m0 1.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6M17.4 5.5a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5m0 1.8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8z",
    accent: false,
  },
];

export default function MeetTheExperts() {
  return (
    <section className="section-space">
      <div className="container-narrow">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <h2 className="text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.21] font-bold tracking-[-0.026em] text-ink">
            Meet the Experts
          </h2>
          <p className="max-w-117.5 text-[14.5px] leading-[1.66] text-body-soft">
            Our skilled team of certified electricians is dedicated to delivering safe, efficient,
            and high-quality electrical services you can trust.
          </p>
          <Link
            href={ROUTES.SERVICE}
            className="inline-flex h-11 flex-none items-center self-start rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 lg:self-auto"
          >
            View All Services
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {EXPERTS.map((expert) => (
            <li key={expert.name}>
              <div className="group relative aspect-10/11 overflow-hidden rounded-[10px] focus-within:ring-2 focus-within:ring-primary">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[rgba(10,20,26,0.72)] opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100">
                  <p className="text-[19px] font-semibold text-white">{expert.name}</p>
                  <p className="-mt-2 text-[13.5px] text-white/80">{expert.role}</p>
                  <ul className="mt-1 flex items-center gap-2.5">
                    {SOCIALS.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${expert.name} on ${social.label}`}
                          className={
                            social.accent
                              ? "flex size-8 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-110"
                              : "flex size-8 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-110"
                          }
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path d={social.path} />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
