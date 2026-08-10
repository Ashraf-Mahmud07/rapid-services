"use client";

import { ArrowRightToLine } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import type { ReactNode } from "react";

import { cn } from "@/shared/utils/cn";

/**
 * The shell shared by Book an Appointment, Request a Quote and Request a Call.
 * All three are the same panel in the references — navy header with a collapse
 * affordance, white body, right-anchored on desktop — so only the width and the
 * fields differ.
 */
export default function OverlayPanel({
  open,
  onOpenChange,
  title,
  description,
  width = "narrow",
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  /** The quote panel is wider to fit its two-column row. */
  width?: "narrow" | "wide";
  children: ReactNode;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-100 animate-[fadeIn_0.18s_ease] bg-[rgba(20,22,24,0.55)]" />
        <DialogPrimitive.Content
          className={cn(
            // Full-height sheet on small screens, right-anchored card above it.
            "fixed inset-x-0 bottom-0 z-100 max-h-[92dvh] animate-[modalIn_0.22s_ease] overflow-y-auto rounded-t-[16px] bg-white shadow-[0_28px_70px_rgba(10,17,40,0.32)] focus:outline-none",
            "sm:inset-x-auto sm:top-[132px] sm:right-11 sm:bottom-auto sm:max-h-[calc(100dvh-176px)] sm:rounded-[14px]",
            width === "wide" ? "sm:w-[525px]" : "sm:w-[440px]"
          )}
        >
          <div className="bg-[#141a2e] px-7 py-6">
            <div className="flex items-start justify-between gap-4">
              <DialogPrimitive.Title className="text-[25px] leading-tight font-bold tracking-[-0.01em] text-white">
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Close
                aria-label="Close"
                className="flex size-9 flex-none items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ArrowRightToLine className="size-[18px]" strokeWidth={2} />
              </DialogPrimitive.Close>
            </div>
            <DialogPrimitive.Description className="mt-2 text-[14.5px] text-white/60">
              {description}
            </DialogPrimitive.Description>
          </div>

          <div className="px-7 py-7">{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

/* ── Field primitives, shared by all three forms ──────────────────────── */

export const FIELD =
  "h-13 w-full rounded-[10px] border border-[#edeff1] bg-[#f7f8f9] px-4 text-[15px] text-[#17181a] outline-none transition-colors placeholder:text-[#9aa0a6] focus:border-primary";

export const LABEL = "mb-2 block text-[14px] font-semibold text-[#2a2d30]";

export function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className={LABEL}>{label}</label>
      {children}
      {error && <p className="mt-1.5 text-[13px] text-destructive">{error}</p>}
    </div>
  );
}

export function SubmitButton({ children, pending }: { children: ReactNode; pending?: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-14 w-full rounded-full bg-primary text-[17px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Sending…" : children}
    </button>
  );
}

export function Footnote({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-center text-[13px] text-[#9aa0a6]">{children}</p>;
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
