import Image from "next/image";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";

import {
  LINK_COLUMNS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
  CONTACT_DETAILS,
} from "@/shared/constants/footer";

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-[13px] font-bold tracking-widest text-white uppercase">{children}</h3>
      <div className="mt-3 h-[2px] w-8 bg-primary"></div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="pt-12 font-poppins sm:pt-14 lg:pt-16"
      style={{
        background:
          "radial-gradient(circle at top left, #073A37 0%, #052A28 40%, transparent 70%), radial-gradient(circle at top right, #073A37 0%, #052A28 40%, transparent 70%), #04211F",
      }}
    >
      <div className="container-wide grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1.55fr] xl:gap-5">
        {/* Brand Column */}
        <div className="pr-4 sm:col-span-2 lg:col-span-1">
          <Link href={ROUTES.HOME} aria-label="Home" className="mb-6 flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Rapid"
                width={200}
                height={200}
                className="h-auto w-[65%]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-white">Building Better</span>
              <span className="text-[15px] font-bold text-primary">Spaces For Tomorrow</span>
            </div>
          </Link>

          <p className="mb-8 max-w-sm text-[13px] leading-relaxed text-white/70">
            Taj Al Rahmah Technical Services, we deliver expert electrical, plumbing, painting,
            cleaning, repairs, and heating & cooling solutions with quality workmanship and
            dependable service.
          </p>

          <div className="mb-3 text-[11px] font-bold tracking-wider text-white/50 uppercase">
            Follow Us
          </div>
          <ul className="flex flex-wrap items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-[#0E504C] bg-[#0E504C]/50 text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Columns */}
        {LINK_COLUMNS.map((column) => (
          <div key={column.title}>
            <ColumnHeading>{column.title}</ColumnHeading>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <ColumnHeading>Contact</ColumnHeading>
          <ul className="flex flex-col gap-5">
            {CONTACT_DETAILS.map((detail, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0E504C] text-primary">
                  {detail.icon}
                </span>
                <div className="flex flex-col text-[12px] leading-relaxed text-white/80">
                  {detail.lines.map((line, i) =>
                    line.href ? (
                      <a key={i} href={line.href} className="transition-colors hover:text-white">
                        {line.text}
                      </a>
                    ) : (
                      <span key={i}>{line.text}</span>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 bg-[#0E504C]">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-5 md:flex-row">
          <p className="text-[13px] text-white/80">
            © 2026 Taj Al Rahmah Technical Services. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-white/80">
            {LEGAL_LINKS.map((link, index) => (
              <li key={link.href} className="flex items-center gap-4">
                {index > 0 && (
                  <span aria-hidden="true" className="text-white/30">
                    |
                  </span>
                )}
                <Link href={link.href} className="transition-colors hover:text-white">
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
