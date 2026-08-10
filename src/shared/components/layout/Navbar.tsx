"use client";

import { ChevronDownIcon, MenuIcon, SearchIcon, XIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { MEGA_MENUS } from "@/shared/constants/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/utils/cn";
import { useOverlays } from "@/shared/components/overlays/OverlayProvider";
import LanguageSelector from "./LanguageSelector";
import MegaMenu from "./MegaMenu";
import SearchModal from "./SearchModal";

export type NavLink = { label: string; href: string };

type Props = {
  links?: NavLink[];
  logo?: React.ReactNode;
  /**
   * `transparent` sits over a hero image and outlines each control in brand
   * teal. `solid` is the teal bar used on the product, legal and 404 pages,
   * where the outlines are dropped and the Appointment pill inverts to white.
   */
  variant?: "transparent" | "solid";
  /**
   * Escape hatch. Left unset, Appointment opens the booking panel as the
   * references show; set it and the control navigates instead.
   */
  appointmentHref?: string;
  onSearchClick?: () => void;
  onAskAiClick?: () => void;
};

/**
 * Blogs is deliberately absent — the reference header lists About in that slot
 * and files Blogs under the Contact mega-menu.
 */
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
  /** href of the link whose mega-menu is showing, or null. */
  const [menu, setMenu] = React.useState<string | null>(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const overlays = useOverlays();
  const pathname = usePathname();
  const isSolid = variant === "solid";

  // Escape closes an open panel; Ctrl/Cmd+K opens search, as the panel advertises.
  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(null);
      if (event.key.toLowerCase() === "k" && (event.ctrlKey || event.metaKey)) {
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

  /** Navigating from anywhere inside the header closes whatever is open. */
  const closeAll = () => {
    setMenu(null);
    setOpen(false);
  };

  const isActive = (href: string) =>
    href === ROUTES.HOME ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  /** The open panel, when it is one of the wide layouts. */
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

  /** Outlined on the hero, bare on the teal bar. Shared by search and Ask AI. */
  const control = cn(
    "hidden h-11 items-center justify-center text-white transition-colors xl:inline-flex",
    isSolid ? "hover:text-white/75" : "rounded-full border border-primary hover:bg-white/10"
  );

  return (
    <nav
      className={cn(
        "z-40",
        variant === "transparent" ? "absolute top-0 right-0 left-0" : "relative w-full bg-primary"
      )}
    >
      {/* The hover region has to enclose the panels as well as the links, or
          moving the pointer down into a panel would count as leaving. */}
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

        <div className="hidden items-center gap-10 xl:flex">
          {links.map((link) => {
            const config = MEGA_MENUS[link.href];
            const isOpen = menu === link.href;

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMenu(config ? link.href : null)}
              >
                <Link
                  href={link.href}
                  aria-expanded={config ? isOpen : undefined}
                  aria-haspopup={config ? "menu" : undefined}
                  onFocus={() => setMenu(config ? link.href : null)}
                  onClick={closeAll}
                  className={cn(
                    "block border-b-2 border-transparent pb-0.5 text-[15px] font-semibold tracking-[0.3px] whitespace-nowrap transition-colors",
                    // On the teal bar a teal active state would be invisible, so
                    // the underline carries the state in white instead.
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

                {/* Narrow list panels centre on their trigger. The wide ones
                    are rendered once outside this row — centring a 1034px
                    panel on a trigger pushed it off the left edge below
                    ~1500px. */}
                {config?.layout === "list" && isOpen && (
                  <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-[18px]">
                    <MegaMenu config={config} onNavigate={() => setMenu(null)} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Wide panels span the page container and centre inside it, so they
            stay on screen at every desktop width instead of tracking the
            trigger. */}
        {wideMenu && (
          <div className="absolute top-full right-0 left-0 z-50 hidden justify-center px-[var(--gutter)] pt-4.5 xl:flex">
            <MegaMenu config={wideMenu} onNavigate={() => setMenu(null)} />
          </div>
        )}

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

          <div className="hidden xl:block">
            <LanguageSelector variant={variant} />
          </div>

          <button
            type="button"
            aria-haspopup="dialog"
            onClick={onAskAiClick ?? (() => overlays.open("ai"))}
            className={cn(control, "px-4 text-[15px] font-medium")}
          >
            Ask AI
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
              className={appointmentClass}
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
          <div className="absolute top-full right-5 left-5 z-50 rounded-[10px] bg-[#0C0C0C] p-5 sm:right-6 sm:left-6 sm:p-6 md:right-10 md:left-10 lg:right-12 lg:left-12 xl:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-11 items-center text-[15px] font-semibold tracking-[0.3px] transition-colors",
                    isActive(link.href) ? "text-primary" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}

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

              <div className="mt-4 border-t border-white/10 pt-4">
                <LanguageSelector variant="solid" />
              </div>
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
