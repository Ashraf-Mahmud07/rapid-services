import Image from "next/image";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";

/** Navy used for the first half of the tagline — the only non-teal accent in the footer. */
const TAGLINE_ACCENT = "#123A7A";

const FOOTER_LINKS = [
  { label: "Sectors", href: ROUTES.INDUSTRY },
  { label: "Products", href: ROUTES.PRODUCT },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Services", href: ROUTES.SERVICE },
  { label: "Projects", href: ROUTES.PROJECT },
  { label: "Career", href: ROUTES.CAREER },
  { label: "Contact", href: ROUTES.CONTACT },
];

/** The four link columns carry the same set in the design; kept per-column so they can diverge. */
const LINK_COLUMNS = [
  { title: "Industry", links: FOOTER_LINKS },
  { title: "Projects", links: FOOTER_LINKS },
  { title: "Services", links: FOOTER_LINKS },
  { title: "Resources", links: FOOTER_LINKS },
];

const LEGAL_LINKS = [
  { label: "Privacy & Policy", href: ROUTES.PRIVACY },
  { label: "Terms & Condition", href: ROUTES.TERMS },
  { label: "Cookie Policy", href: ROUTES.COOKIE_POLICY },
];

const SOCIAL_LINKS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
        <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.3-1.3 1.5-1.3H16V5.6c-.3 0-1.2-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8v2.8h2.4V21z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        className="size-4"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
        <path d="M21 6.2c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9a3.6 3.6 0 0 0-6.2 3.3A10.3 10.3 0 0 1 4.5 5a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.1-.2-1.6-.4a3.6 3.6 0 0 0 2.9 3.6c-.5.1-1 .2-1.6.1a3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 3 17.1a10.2 10.2 0 0 0 5.6 1.6c6.7 0 10.4-5.6 10.4-10.4v-.5c.7-.5 1.3-1.1 1.8-1.8z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
        <path d="M6.9 8.7H4.2V20h2.7zM5.6 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2M20 13.5c0-2.9-1.6-4.3-3.7-4.3-1.7 0-2.5.9-2.9 1.6V8.7H10.7V20h2.7v-6c0-1.3.6-2.1 1.8-2.1s1.6.8 1.6 2.1v6H20z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
        <path d="M21.6 8.2a2.5 2.5 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8M10.2 14.7V9.3L14.8 12z" />
      </svg>
    ),
  },
];

const CONTACT_ICONS = {
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2m0 1.8a8.2 8.2 0 0 1 0 16.4 8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8m-3.3 4c-.2 0-.5 0-.7.4l-.5 1c-.3.7 0 1.6.2 2a9 9 0 0 0 3.8 3.7c1.2.5 1.9.5 2.5.3.4-.1 1-.5 1.2-1s.2-.9.1-1l-1.5-.8c-.2 0-.4-.1-.6.1l-.7.8c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-2.9-2.7c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3 0-.5l-.6-1.2c-.1-.2-.2-.2-.4-.2z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  hours: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 1.9" strokeLinecap="round" />
    </svg>
  ),
} as const;

const CONTACT_DETAILS: {
  icon: keyof typeof CONTACT_ICONS;
  lines: { text: string; href?: string }[];
}[] = [
  {
    icon: "location",
    lines: [
      { text: "Al Muteena, Fish Roundabout" },
      { text: "Deira, Dubai, United Arab Emirates" },
    ],
  },
  {
    icon: "whatsapp",
    lines: [
      { text: "+971 55 516 4777", href: "tel:+971555164777" },
      { text: "+971 55 516 4777", href: "tel:+971555164777" },
    ],
  },
  {
    icon: "mail",
    lines: [
      { text: "info@rapidsmarterp.com", href: "mailto:info@rapidsmarterp.com" },
      { text: "career@rapidsmarterp.com", href: "mailto:career@rapidsmarterp.com" },
    ],
  },
  {
    icon: "hours",
    lines: [{ text: "Sat – Thu, Friday: Closed" }, { text: "9:00 AM – 6:00 PM" }],
  },
];

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-5 inline-block border-b-2 border-white/70 pb-2.5 text-[17px] tracking-[0.3px] text-white uppercase">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary pt-12 font-poppins sm:pt-14 lg:pt-16">
      <div className="container-wide grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1.55fr] xl:gap-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="mb-5 text-[15px] leading-[1.5] text-white">
            <span style={{ color: TAGLINE_ACCENT }}>Building Better</span> Spaces For Tomorrow
          </p>

          <Link
            href={ROUTES.HOME}
            aria-label="Home"
            className="mb-5 inline-flex size-19 items-center justify-center rounded-full bg-white"
          >
            <Image
              src="/images/logo.png"
              alt="Rapid"
              width={2633}
              height={1904}
              className="h-auto w-[78%]"
            />
          </Link>

          <p className="mb-6 max-w-72.5 text-[14.5px] leading-[1.85] text-white">
            RAPID Company, we deliver expert electrical, plumbing, painting, cleaning, and heating &
            cooling solutions with quality workmanship and dependable{" "}
            <Link href={ROUTES.ABOUT} className="underline underline-offset-2 hover:no-underline">
              Read more
            </Link>
          </p>

          <ul className="flex flex-wrap items-center gap-2.5">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-8.5 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-primary"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {LINK_COLUMNS.map((column) => (
          <div key={column.title}>
            <ColumnHeading>{column.title}</ColumnHeading>
            <ul className="flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[14.5px] text-white transition-opacity hover:opacity-75"
                  >
                    <span aria-hidden="true" className="text-white/70">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="sm:col-span-2 lg:col-span-1">
          <ColumnHeading>Contact</ColumnHeading>
          <ul className="flex flex-col gap-4.5">
            {CONTACT_DETAILS.map((detail) => (
              <li key={detail.icon} className="flex items-start gap-3">
                <span className="flex size-9 flex-none items-center justify-center rounded-full border border-white/60 text-white">
                  {CONTACT_ICONS[detail.icon]}
                </span>
                <span className="min-w-0 text-[13px] leading-[1.62] text-white">
                  {/* Indexed because a detail can repeat a line — the design lists
                      the same WhatsApp number twice. */}
                  {detail.lines.map((line, index) =>
                    line.href ? (
                      <a
                        key={index}
                        href={line.href}
                        className="block transition-opacity hover:opacity-75"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <span key={index} className="block">
                        {line.text}
                      </span>
                    )
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 bg-black/5 lg:mt-14">
        {/* Extra bottom padding keeps the legal links clear of the fixed
            Ask AI / Request a call pills, which otherwise sit on top of them
            once the page is scrolled to the end. */}
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-4.5 pb-24 sm:flex-row sm:pb-4.5 lg:pe-56">
          <p className="text-[13px] tracking-[0.6px] text-white uppercase">
            © Copyright 2026 <span className="font-bold">Rapid ERP</span>. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] text-white">
            {LEGAL_LINKS.map((link, index) => (
              <li key={link.href} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="text-white/45">
                    |
                  </span>
                )}
                <Link href={link.href} className="transition-opacity hover:opacity-75">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
