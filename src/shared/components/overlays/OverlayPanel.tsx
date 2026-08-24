"use client";

import { ArrowRightToLine } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import type { ReactNode } from "react";

import { cn } from "@/shared/utils/cn";

export const NO_CALLOUT = "No callout fee. Fixed pricing before any work begins.";

/**
 * The shell shared by Book an Appointment, Request a Quote and Request a Call.
 * All three use the unified Figma design — teal header with close button,
 * white body, right-anchored card on desktop.
 */
export default function OverlayPanel({
  open,
  onOpenChange,
  title,
  description,
  width = "figma",
  headerClassName = "bg-primary px-7 py-6 flex justify-between items-center gap-4",
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  width?: "narrow" | "wide" | "figma";
  headerClassName?: string;
  children: ReactNode;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-100 animate-[fadeIn_0.18s_ease] bg-[rgba(20,22,24,0.55)]" />
        <DialogPrimitive.Content
          className={cn(
            // Full-height sheet on small screens, right-anchored card above it.
            "fixed inset-x-0 bottom-0 z-100 max-h-[92dvh] animate-[modalIn_0.22s_ease] overflow-y-auto rounded-t-[20px] bg-white shadow-[0_28px_70px_rgba(10,17,40,0.32)] focus:outline-none",
            "sm:inset-x-auto sm:top-[120px] sm:right-11 sm:bottom-auto sm:max-h-[calc(100dvh-150px)] sm:rounded-[20px]",
            width === "wide" ? "sm:w-[525px]" : width === "narrow" ? "sm:w-[440px]" : "sm:w-[660px]"
          )}
        >
          <div className={cn("px-7 py-6", headerClassName)}>
            <div className="flex flex-col items-start gap-1">
              <DialogPrimitive.Title className="text-[26px] leading-tight font-medium tracking-[-0.624px] text-white">
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-[14.5px] text-white/80">
                {description}
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close
              aria-label="Close"
              className="flex size-10 flex-none items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus:outline-none"
            >
              <ArrowRightToLine className="size-5" strokeWidth={2} />
            </DialogPrimitive.Close>
          </div>

          <div className="px-7 py-7">{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

/* ── Common Form Footer ────────────────────────────────────────────────── */

export function FormSubmitFooter({
  pending,
  label = "Submit request",
  footnote = NO_CALLOUT,
}: {
  pending?: boolean;
  label?: string;
  footnote?: string;
}) {
  return (
    <div className="mt-2">
      <button
        type="submit"
        disabled={pending}
        className="h-[55px] w-full rounded-full bg-primary text-[17px] font-semibold text-white shadow-sm transition-all hover:opacity-90 focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:opacity-60"
      >
        {pending ? "Sending…" : label}
      </button>
      {footnote && <Footnote>{footnote}</Footnote>}
    </div>
  );
}

/* ── Feedback & Footnote primitives ───────────────────────────────────── */

export function Footnote({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-center text-[13px] text-[#8e959e]">{children}</p>;
}

export function Sent({ message }: { message: string }) {
  return (
    <div className="py-6 text-center">
      <span className="mx-auto mb-4 flex size-14 animate-[pop_0.35s_ease] items-center justify-center rounded-full bg-primary/12 text-primary">
        <svg viewBox="0 0 24 24" fill="none" className="size-7">
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="text-[17px] font-semibold text-[#17181a]">Thanks — we have it.</p>
      <p className="mt-1.5 text-[14.5px] text-[#5a5f63]">{message}</p>
    </div>
  );
}
