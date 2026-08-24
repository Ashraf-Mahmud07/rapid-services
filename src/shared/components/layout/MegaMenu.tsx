"use client";

import type { LucideIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { MegaMenu as MegaMenuConfig, MegaMenuItem } from "@/shared/constants/navigation";
import { cn } from "@/shared/utils/cn";

function ArrowRightSvg({ className }: { className?: string }) {
  return (
    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M-0.000488281 2.22461H9.87744L8.85645 1.22852V0L11.5127 2.75586V2.78906L8.85645 5.54492V4.31641L9.86084 3.33691H-0.000488281V2.22461Z"
        fill="#00A79D"
      />
    </svg>
  );
}

function MenuIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex size-11 flex-none items-center justify-center rounded-[12px] bg-[#E6F7F5] text-[#00A99D] transition-transform group-hover/row:scale-105">
      <Icon className="size-5" strokeWidth={1.8} />
    </span>
  );
}

function Row({
  item,
  arrow = true,
  onNavigate,
}: {
  item: MegaMenuItem;
  arrow?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group/row flex items-center gap-3.5 rounded-[12px] p-2.5 transition-all hover:bg-gray-50/80"
    >
      <MenuIcon icon={item.icon} />
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] leading-tight font-semibold text-gray-900 transition-colors group-hover/row:text-[#00A99D]">
          {item.title}
        </span>
        <span className="mt-0.5 block truncate text-[13px] leading-tight whitespace-nowrap text-gray-500">
          {item.subtitle}
        </span>
      </span>
      {arrow && (
        <ArrowRightSvg className="text-[#00A99D] opacity-70 transition-all group-hover/row:translate-x-1 group-hover/row:opacity-100" />
      )}
    </Link>
  );
}

function CtaPill({
  label,
  href,
  onNavigate,
}: {
  label: string;
  href: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#00A99D] px-6 text-[14px] font-semibold text-white shadow-xs transition-all hover:bg-[#008f84] hover:shadow-md"
    >
      {label}
      <ArrowRightSvg />
    </Link>
  );
}

const PANEL =
  "relative rounded-[16px] bg-white border border-gray-100/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] text-gray-900";

const ARROW =
  "absolute -top-2 z-10 size-3.5 rotate-45 border-t border-l border-gray-200/80 bg-white";

export default function MegaMenu({
  config,
  activeHref,
  onNavigate,
  arrowOffset,
}: {
  config: MegaMenuConfig;
  activeHref?: string;
  onNavigate: () => void;

  arrowOffset?: number;
}) {
  const { layout, items } = config;

  if (layout === "list") {
    return (
      <div className={cn(PANEL, "w-[364px] p-4")}>
        <div className={cn(ARROW, "left-1/2 -translate-x-1/2")} />
        <div className="relative z-20 flex flex-col gap-1">
          {items.map((item) => (
            <Row key={item.title} item={item} arrow={false} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(PANEL, "w-[940px] max-w-full")}>
      <div
        className={cn(ARROW, "-translate-x-1/2")}
        style={{ left: `calc(50% + ${arrowOffset ?? 0}px)` }}
      />

      {/* overflow-hidden lives on this inner wrapper only, so it never
          clips the arrow sitting on the outer panel above. */}
      <div className="relative z-20 overflow-hidden rounded-[16px]">
        {/* Top Header Strip with gradient background */}
        <div className="flex h-[54px] items-center justify-between gap-6 border-b border-gray-100/80 bg-gradient-to-r from-[#E6F7F5] via-[#EAF9F7] to-white px-7">
          <span className="text-[12px] font-bold tracking-[0.08em] text-[#00A99D] uppercase">
            {"headerEyebrow" in config && config.headerEyebrow
              ? config.headerEyebrow
              : config.eyebrow}
          </span>
          <span className="text-[13px] font-normal text-gray-500">
            {"headerNote" in config && config.headerNote
              ? config.headerNote
              : "note" in config
                ? config.note
                : "Six Key Divisions — One Proven Expertise"}
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto_310px]">
          {/* Left main content area */}
          <div className="flex flex-col p-6">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {items.map((item) => (
                <Row key={item.title} item={item} arrow onNavigate={onNavigate} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 w-px bg-gray-100" />

          {/* Right sidebar info box */}
          <div className="flex flex-col justify-center p-7">
            <p className="mb-2 text-[12px] font-bold tracking-[0.08em] text-[#00A99D] uppercase">
              {config.eyebrow}
            </p>
            <h3 className="mb-3 text-[24px] leading-tight font-bold text-gray-900">
              {config.title}
            </h3>
            <p className="mb-6 text-[13.5px] leading-relaxed text-gray-500">{config.blurb}</p>
            <div>
              <CtaPill {...config.cta} onNavigate={onNavigate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
