"use client";

import { ChevronDownIcon, MenuIcon, SearchIcon, XIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { AskAiIcon } from "@/shared/assets/icons";
import { useOverlays } from "@/shared/components/overlays/OverlayProvider";
import { MEGA_MENUS } from "@/shared/constants/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/utils/cn";
import MegaMenu from "./MegaMenu";
import SearchModal from "./SearchModal";

export type NavLink = { label: string; href: string };

type Props = {
  links?: NavLink[];
  logo?: React.ReactNode;
  variant?: "transparent" | "solid";
  appointmentHref?: string;
  onSearchClick?: () => void;
  onAskAiClick?: () => void;
};

const DEFAULT_LINKS: NavLink[] = [
  { label: "Product", href: ROUTES.PRODUCT },
  { label: "Project", href: ROUTES.PROJECT },
  { label: "Service", href: ROUTES.SERVICE },
  { label: "Industry", href: ROUTES.INDUSTRY },
  { label: "Career", href: ROUTES.CAREER },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Contact", href: ROUTES.CONTACT },
];

export default function Navbar({
  links = DEFAULT_LINKS,
  logo,
  variant = "transparent",
  appointmentHref,
  onSearchClick,
  onAskAiClick,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = React.useState<string | null>(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileGroup, setMobileGroup] = React.useState<string | null>(null);
  const [arrowOffset, setArrowOffset] = React.useState(0);
  const overlays = useOverlays();
  const pathname = usePathname();
  const isSolid = variant === "solid";

  const linksWrapRef = React.useRef<HTMLDivElement>(null);
  const linkBoxRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(null);
      if (event.key?.toLowerCase() === "k" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        setMenu(null);
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openSearch = () => {
    setMenu(null);
    setOpen(false);
    if (onSearchClick) onSearchClick();
    else setSearchOpen(true);
  };

  const closeAll = () => {
    setMenu(null);
    setOpen(false);
    setMobileGroup(null);
  };

  const isActive = (href: string) =>
    href === ROUTES.HOME ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  // Measures the hovered/focused link's horizontal center *relative to the
  // links row's own center* (not its left edge). The wide panel is centered
  // on that same point via `left-1/2 -translate-x-1/2`, so its horizontal
  // midpoint always equals the links row's center too — meaning this offset
  // can be applied inside the panel as `calc(50% + offset)` and stay correct
  // no matter how wide the panel is or where the viewport puts the row.
  const activateMenu = (href: string, hasConfig: boolean) => {
    setMenu(hasConfig ? href : null);
    if (!hasConfig) return;

    const linkBox = linkBoxRefs.current[href];
    const wrap = linksWrapRef.current;
    if (!linkBox || !wrap) return;

    const linkRect = linkBox.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    const wrapCenter = wrapRect.left + wrapRect.width / 2;
    const linkCenter = linkRect.left + linkRect.width / 2;
    setArrowOffset(linkCenter - wrapCenter);
  };

  const openMenu = menu ? MEGA_MENUS[menu] : undefined;
  const wideMenu = openMenu && openMenu.layout !== "list" ? openMenu : undefined;

  const appointmentClass = cn(
    "hidden h-11 items-center gap-2 rounded-full px-5.5 text-[15px] font-semibold whitespace-nowrap transition-opacity hover:opacity-90 xl:inline-flex",
    isSolid ? "bg-white text-primary" : "bg-primary text-white"
  );

  const openAppointment = () => {
    closeAll();
    overlays.open("appointment");
  };

  const control = cn(
    "hidden h-11 items-center cursor-pointer justify-center text-white transition-colors xl:inline-flex",
    isSolid ? "hover:text-priamry" : ""
  );

  return (
    <nav
      className={cn(
        open ? "z-100" : "z-40",
        variant === "transparent" ? "absolute top-0 right-0 left-0" : "relative w-full bg-primary"
      )}
    >
      <div
        className="relative container-page flex h-18 items-center justify-between gap-4 sm:h-20 lg:h-24"
        onMouseLeave={() => setMenu(null)}
      >
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

        {/* This wrapper is the shared positioning anchor for every dropdown:
            its height matches the link text only (not the full navbar row),
            so `top-full` gives the same tight gap for every menu type, and
            it's also the reference box that arrowOffset is measured against. */}
        <div ref={linksWrapRef} className="relative hidden items-center gap-10 xl:flex">
          {links.map((link) => {
            const config = MEGA_MENUS[link.href];
            const isOpen = menu === link.href;

            return (
              <div
                key={link.href}
                ref={(el) => {
                  linkBoxRefs.current[link.href] = el;
                }}
                className="relative"
                onMouseEnter={() => activateMenu(link.href, !!config)}
              >
                <Link
                  href={link.href}
                  aria-expanded={config ? isOpen : undefined}
                  aria-haspopup={config ? "menu" : undefined}
                  onFocus={() => activateMenu(link.href, !!config)}
                  onClick={closeAll}
                  className={cn(
                    "block border-b-2 border-transparent pb-0.5 text-[15px] font-semibold tracking-[0.3px] whitespace-nowrap transition-colors",
                    isActive(link.href) || isOpen
                      ? isSolid
                        ? "border-white text-white"
                        : "border-primary text-primary"
                      : isSolid
                        ? "text-white hover:border-white"
                        : "text-white hover:border-primary hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>

                {config?.layout === "list" && isOpen && (
                  <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-[18px]">
                    <MegaMenu
                      config={config}
                      activeHref={link.href}
                      onNavigate={() => setMenu(null)}
                    />
                  </div>
                )}
              </div>
            );
          })}

          {/* Wide (grid) menus are centered on the links row itself, and use
              the same top-full + pt-[18px] anchor as the list menu above,
              so the gap is identical for every menu type. */}
          {wideMenu && (
            <div className="absolute top-full left-1/2 z-50 hidden -translate-x-1/2 pt-[18px] xl:flex">
              <MegaMenu
                config={wideMenu}
                activeHref={menu ?? undefined}
                onNavigate={() => setMenu(null)}
                arrowOffset={arrowOffset}
              />
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 xl:gap-5">
          <button
            type="button"
            aria-label="Search"
            aria-haspopup="dialog"
            onClick={openSearch}
            className={cn(control, "w-11")}
          >
            <SearchIcon className="size-5" strokeWidth={1.8} />
          </button>

          {/* Language dropdown hidden for this version */}
          {/* <div className="hidden xl:block">
            <LanguageSelector variant={variant} />
          </div> */}

          <button
            type="button"
            aria-haspopup="dialog"
            onClick={onAskAiClick ?? (() => overlays.open("ai"))}
            className={cn(control, "px-4 text-[15px] font-medium")}
          >
            <AskAiIcon />
          </button>

          {appointmentHref ? (
            <Link href={appointmentHref} onClick={closeAll} className={appointmentClass}>
              Appointment
              <ChevronDownIcon className="size-4" strokeWidth={2.4} />
            </Link>
          ) : (
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={openAppointment}
              className={`${appointmentClass} cursor-pointer hover:text-primary`}
            >
              Appointment
              <ChevronDownIcon className="size-4" strokeWidth={2.4} />
            </button>
          )}

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex size-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 xl:hidden"
          >
            {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="absolute top-full right-5 left-5 z-100 rounded-[10px] bg-[#0C0C0C] p-5 sm:right-6 sm:left-6 sm:p-6 md:right-10 md:left-10 lg:right-12 lg:left-12 xl:hidden">
            <div className="flex flex-col">
              {links.map((link) => {
                const config = MEGA_MENUS[link.href];
                const expanded = mobileGroup === link.href;

                return (
                  <div key={link.href} className="border-b border-white/8 last:border-b-0">
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        onClick={closeAll}
                        className={cn(
                          "flex min-h-12 flex-1 items-center text-[15px] font-semibold tracking-[0.3px] transition-colors",
                          isActive(link.href) ? "text-primary" : "text-white/90 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>

                      {config && (
                        <button
                          type="button"
                          aria-label={`${expanded ? "Collapse" : "Expand"} ${link.label}`}
                          aria-expanded={expanded}
                          onClick={() => setMobileGroup(expanded ? null : link.href)}
                          className="flex size-10 flex-none items-center justify-center text-white/70 transition-colors hover:text-white"
                        >
                          <ChevronDownIcon
                            className={cn("size-4 transition-transform", expanded && "rotate-180")}
                          />
                        </button>
                      )}
                    </div>

                    {config && expanded && (
                      <ul className="mb-2 flex flex-col gap-0.5 ps-1 pb-1">
                        {config.items.map((item) => (
                          <li key={item.title}>
                            <Link
                              href={item.href}
                              onClick={closeAll}
                              className="flex items-center gap-3 rounded-lg py-2.5 ps-2 text-[14px] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              <item.icon
                                className="size-4 flex-none text-primary"
                                strokeWidth={1.9}
                              />
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}

              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={openSearch}
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/25 text-[15px] font-medium text-white"
                >
                  <SearchIcon className="size-4" strokeWidth={1.8} />
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => {
                    closeAll();
                    if (onAskAiClick) onAskAiClick();
                    else overlays.open("ai");
                  }}
                  className="flex h-11 flex-1 items-center justify-center rounded-full border border-white/25 text-[15px] font-medium text-white"
                >
                  Ask AI
                </button>
              </div>

              {appointmentHref ? (
                <Link
                  href={appointmentHref}
                  onClick={closeAll}
                  className="mt-2 flex h-11 items-center justify-center rounded-full bg-primary text-[15px] font-semibold text-white"
                >
                  Appointment
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={openAppointment}
                  className="mt-2 flex h-11 items-center justify-center rounded-full bg-primary text-[15px] font-semibold text-white"
                >
                  Appointment
                </button>
              )}

              {/* Language dropdown hidden for this version */}
              {/* <div className="mt-4 border-t border-white/10 pt-4">
                <LanguageSelector variant="solid" />
              </div> */}
            </div>
          </div>
        )}
      </div>

      <SearchModal
        open={searchOpen}
        onOpenChange={setSearchOpen}
        onAskAi={onAskAiClick ?? (() => overlays.open("ai"))}
      />
    </nav>
  );
}
