"use client";

import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { MegaMenu as MegaMenuConfig, MegaMenuItem } from "@/shared/constants/navigation";
import { cn } from "@/shared/utils/cn";

type IconStyle = "solid" | "tint";
type IconShape = "circle" | "square";

function MenuIcon({
  icon: Icon,
  style,
  shape,
}: {
  icon: LucideIcon;
  style: IconStyle;
  shape: IconShape;
}) {
  return (
    <span
      className={cn(
        "flex size-11 flex-none items-center justify-center",
        shape === "circle" ? "rounded-full" : "rounded-[10px]",
        style === "solid" ? "bg-primary text-white" : "bg-primary/15 text-primary"
      )}
    >
      <Icon className="size-5" strokeWidth={1.8} />
    </span>
  );
}

function Row({
  item,
  style,
  shape,
  arrow,
  onNavigate,
}: {
  item: MegaMenuItem;
  style: IconStyle;
  shape: IconShape;
  arrow?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group/row flex items-center gap-3 rounded-[10px] p-2.5 transition-colors hover:bg-white/5"
    >
      <MenuIcon icon={item.icon} style={style} shape={shape} />
      <span className="min-w-0 flex-1">
        <span className="block text-[16px] leading-tight font-semibold text-white">
          {item.title}
        </span>
        <span className="mt-0.5 block text-[13px] leading-[1.35] whitespace-nowrap text-white/55">
          {item.subtitle}
        </span>
      </span>
      {arrow && (
        <ArrowRight className="size-4 flex-none text-primary opacity-70 transition-transform group-hover/row:translate-x-0.5" />
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
      className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-[15px] font-semibold whitespace-nowrap text-white transition-opacity hover:opacity-90"
    >
      {label}
      <ArrowRight className="size-4" />
    </Link>
  );
}

const PANEL = "rounded-b-[14px] bg-[#0f1320] shadow-[0_24px_60px_rgba(0,0,0,0.45)]";
const STRIP = "bg-[#0b1622]";
const EYEBROW = "text-[11.5px] font-semibold tracking-[0.16em] text-primary uppercase";
const HAIRLINE = "border-white/8";

export default function MegaMenu({
  config,
  onNavigate,
}: {
  config: MegaMenuConfig;
  onNavigate: () => void;
}) {
  const { layout, iconStyle, iconShape, items } = config;

  if (layout === "list") {
    return (
      <div className={cn(PANEL, "w-[314px] p-2")}>
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <Row
              key={item.title}
              item={item}
              style={iconStyle}
              shape={iconShape}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    );
  }

  if (layout === "split") {
    return (
      <div
        className={cn(
          PANEL,
          "grid w-[1034px] max-w-full grid-cols-[284px_minmax(0,1fr)] overflow-hidden"
        )}
      >
        <div className="flex flex-col justify-center gap-4 bg-[#0b1622] p-7">
          <p className={EYEBROW}>{config.eyebrow}</p>
          <h3 className="text-[27px] leading-[1.15] font-semibold tracking-[-0.02em] text-white">
            {config.title}
          </h3>
          <p className="text-[14.5px] leading-[1.6] text-white/55">{config.blurb}</p>
          <div className="mt-1">
            <CtaPill {...config.cta} onNavigate={onNavigate} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 p-4">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={cn("border-b", HAIRLINE, index >= items.length - 2 && "border-b-0")}
            >
              <Row item={item} style={iconStyle} shape={iconShape} arrow onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // "cards" and "grid" share the strip-header / body / strip-footer frame.
  return (
    <div className={cn(PANEL, "w-[892px] max-w-full overflow-hidden")}>
      <div
        className={cn(
          STRIP,
          "flex items-center justify-between gap-6 border-b px-7 py-4",
          HAIRLINE
        )}
      >
        <p className={EYEBROW}>{config.eyebrow}</p>
        <p className="text-[14px] text-white/55">{config.note}</p>
      </div>

      {layout === "cards" ? (
        <div className="grid grid-cols-3 gap-3.5 p-5">
          {items.map((item) => (
            <div key={item.title} className={cn("rounded-xl border", HAIRLINE)}>
              <Row item={item} style={iconStyle} shape={iconShape} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-5 px-5 py-2">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={cn("border-b", HAIRLINE, index >= items.length - 2 && "border-b-0")}
            >
              <Row item={item} style={iconStyle} shape={iconShape} arrow onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      )}

      <div
        className={cn(
          STRIP,
          "flex items-center justify-between gap-6 border-t px-7 py-4",
          HAIRLINE
        )}
      >
        <p className="text-[14px] text-white/55">{config.footnote}</p>
        <CtaPill {...config.cta} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
