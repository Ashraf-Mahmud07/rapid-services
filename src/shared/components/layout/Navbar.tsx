"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/utils/cn";

export type NavLink = { label: string; href: string };

type Props = {
  links?: NavLink[];
  logo?: React.ReactNode;
  variant?: "transparent" | "solid";
  appointmentHref?: string;
};

const DEFAULT_LINKS: NavLink[] = [
  { label: "Product", href: ROUTES.PRODUCT },
  { label: "Project", href: ROUTES.PROJECT },
  { label: "Service", href: ROUTES.SERVICE },
  { label: "Industry", href: ROUTES.INDUSTRY },
  { label: "Career", href: ROUTES.CAREER },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Contact Us", href: ROUTES.CONTACT },
];

export default function Navbar({
  links = DEFAULT_LINKS,
  logo,
  variant = "transparent",
  appointmentHref = ROUTES.APPOINTMENT,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === ROUTES.HOME ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      className={cn(
        "z-40 font-poppins",
        variant === "transparent" ? "absolute top-0 right-0 left-0" : "relative w-full bg-[#0C0C0C]"
      )}
    >
      <div className="relative container-page flex items-center justify-between py-4 sm:py-5 lg:py-6">
        <Link href={ROUTES.HOME} aria-label="Home" className="flex-none">
          {logo ?? (
            <span className="flex size-14 items-center justify-center rounded-full bg-white sm:size-16 lg:size-18.5">
              <Image
                src="/images/logo.png"
                alt="Rapid"
                width={2633}
                height={1904}
                priority
                className="h-auto w-[80%]"
              />
            </span>
          )}
        </Link>

        <div className="hidden items-center gap-9.5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-semibold tracking-[1.2px] whitespace-nowrap uppercase transition-colors",
                isActive(link.href)
                  ? "border-b-2 border-white pb-1.5 text-white"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={appointmentHref}
            className="hidden rounded-full bg-white px-7.5 py-3.5 text-[13px] font-semibold tracking-[1px] text-primary uppercase transition-colors hover:bg-white/90 xl:inline-flex"
          >
            Appointment
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 xl:hidden"
          >
            {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="absolute top-full right-5 left-5 z-50 rounded-[10px] bg-[#0C0C0C] p-5 sm:right-6 sm:left-6 sm:p-6 md:right-10 md:left-10 lg:right-12 lg:left-12 xl:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-11 items-center text-[13px] font-semibold tracking-[1.2px] uppercase transition-colors",
                    isActive(link.href) ? "text-primary" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={appointmentHref}
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-white px-7.5 py-3.5 text-center text-[13px] font-semibold tracking-[1px] text-primary uppercase"
              >
                Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
