import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { CallIcon, OfficeChairIcon } from "@/shared/assets/icons";
import { ROUTES } from "@/shared/constants/routes";

const QUICK_LINKS = [
  { label: "Certification", href: ROUTES.CERTIFICATION },
  { label: "Blogs", href: ROUTES.BLOG },
  { label: "Media", href: "/media" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Condition", href: "/terms" },
];

const OPENING_HOURS = [
  "Saturday-Thursday 8:00 am-9:00 pm",
  "Break : 1:30 pm–3:30 pm",
  "Friday : Closed",
];

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] pt-12 font-poppins sm:pt-16 lg:pt-20">
      <div className="container-page grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.15fr_1.35fr] lg:gap-12">
        <div>
          <Link
            href={ROUTES.HOME}
            aria-label="Home"
            className="mb-5.5 inline-flex size-20 items-center justify-center rounded-full bg-white lg:size-23.5"
          >
            <Image
              src="/images/logo.png"
              alt="Rapid"
              width={2633}
              height={1904}
              className="h-auto w-[80%]"
            />
          </Link>
          <p className="mb-6.5 max-w-75 text-sm leading-[1.75] text-[#9a9c9e]">
            Bab Al Bustan Auto Maintenance Workshop, our workshop stands as a symbol of precision,
            quality, and trust for all your car care needs.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-[#e4e6e8]">Follow us :</span>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="flex size-8.5 items-center justify-center rounded-full bg-[#242424] transition-colors hover:bg-[#2f2f2f]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#d0d2d4">
                <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.3-1.3 1.5-1.3H16V5.6c-.3 0-1.2-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8v2.8h2.4V21z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="flex size-8.5 items-center justify-center rounded-full bg-[#242424] transition-colors hover:bg-[#2f2f2f]"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d0d2d4"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="3.6" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="#d0d2d4" stroke="none" />
              </svg>
            </a>
            <a
              href="https://tiktok.com"
              aria-label="TikTok"
              className="flex size-8.5 items-center justify-center rounded-full bg-[#242424] transition-colors hover:bg-[#2f2f2f]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#d0d2d4">
                <path d="M15 4c.3 2 1.6 3.4 3.5 3.6v2.4c-1.2 0-2.4-.4-3.4-1v5.6a4.9 4.9 0 11-4.9-4.9c.3 0 .5 0 .8.1v2.5a2.4 2.4 0 102 2.3V4z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 inline-block border-b-2 border-primary pb-2 text-[15px] font-semibold tracking-[0.5px] text-white">
            QUICK LINKS
          </h3>
          <ul className="flex flex-col gap-3.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-[#a7a9ab] transition-colors hover:text-white"
                >
                  <span className="text-primary">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 inline-block border-b-2 border-primary pb-2 text-[15px] font-semibold tracking-[0.5px] text-white">
            OPENING HOURS
          </h3>
          <ul className="flex flex-col gap-3.5">
            {OPENING_HOURS.map((entry) => (
              <li key={entry} className="text-sm text-[#a7a9ab]">
                {entry}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 inline-block border-b-2 border-primary pb-2 text-[15px] font-semibold tracking-[0.5px] text-white">
            CONTACT INFO
          </h3>
          <ul className="flex flex-col gap-4.5">
            <li className="flex items-start gap-3 text-sm leading-normal text-[#a7a9ab]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00A79D"
                strokeWidth="1.8"
                className="mt-0.5 flex-none"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                Industrial Area No 5 ,<br />
                Sharjah, UAE
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm leading-normal text-[#a7a9ab]">
              <CallIcon className="mt-0.5 size-4.5 flex-none text-primary" strokeWidth={1.8} />
              <span>
                +971564406456
                <br />
                +971557636994
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm leading-normal text-[#a7a9ab]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00A79D"
                strokeWidth="1.8"
                className="mt-0.5 flex-none"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span>
                info@babalbustanuae.com
                <br />
                babalbustan1@gmail.com
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm leading-normal text-[#a7a9ab]">
              <OfficeChairIcon className="mt-0.5 size-4.5 flex-none text-primary" />
              <span>
                Saturday-Thursday
                <br />
                8:00 am-9:00 pm
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-[#232323] lg:mt-17.5">
        <div className="container-page py-5.5 text-center">
          <span className="text-xs tracking-[0.6px] text-[#7a7c7e]">
            © COPYRIGHT 2026{" "}
            <span className="font-bold text-primary">BAB AL BUSTAN AUTO MAINTENANCE WORKSHOP</span>.
            ALL RIGHTS RESERVED.&nbsp;&nbsp;&nbsp;&nbsp;ADMIN
          </span>
        </div>
      </div>
    </footer>
  );
}
