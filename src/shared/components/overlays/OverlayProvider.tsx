"use client";

import { Phone, Sparkles } from "lucide-react";
import * as React from "react";

import AskAiPanel from "./AskAiPanel";
import { AppointmentModal, RequestCallModal, RequestQuoteModal } from "./RequestForms";

type OverlayId = "appointment" | "quote" | "call" | "ai";

type OverlayContextValue = {
  open: (id: OverlayId) => void;
  close: () => void;
  current: OverlayId | null;
};

const OverlayContext = React.createContext<OverlayContextValue | null>(null);

/**
 * One coordinator for the four overlays, because their triggers are scattered:
 * the navbar opens Appointment and Ask AI, the Commitment section opens the
 * quote panel, and two floating pills open the call panel and Ask AI. Only one
 * can be open at a time.
 */
export function useOverlays() {
  const context = React.useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlays must be used inside <OverlayProvider>");
  }
  return context;
}

export default function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = React.useState<OverlayId | null>(null);

  const value = React.useMemo<OverlayContextValue>(
    () => ({
      current,
      open: (id) => setCurrent(id),
      close: () => setCurrent(null),
    }),
    [current]
  );

  const toggle = (id: OverlayId) => (next: boolean) => setCurrent(next ? id : null);

  return (
    <OverlayContext.Provider value={value}>
      {children}

      {/* Floating triggers, bottom-right, as the references show. Hidden while
          a panel is open so they do not sit on top of it. */}
      <div className="pointer-events-none fixed right-5 bottom-5 z-90 flex flex-col items-end gap-2.5 sm:right-8 sm:bottom-8">
        {current === null && (
          <>
            <button
              type="button"
              onClick={() => setCurrent("ai")}
              className="pointer-events-auto inline-flex h-11 items-center gap-2 rounded-full bg-[#1a1a1a] px-4 text-[14px] font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-transform hover:-translate-y-0.5"
            >
              <Sparkles className="size-4" />
              Ask AI
            </button>
            <button
              type="button"
              onClick={() => setCurrent("call")}
              className="pointer-events-auto inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-[14px] font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-white/20">
                <Phone className="size-3.5" />
              </span>
              Request a call
            </button>
          </>
        )}
      </div>

      <AppointmentModal open={current === "appointment"} onOpenChange={toggle("appointment")} />
      <RequestQuoteModal open={current === "quote"} onOpenChange={toggle("quote")} />
      <RequestCallModal open={current === "call"} onOpenChange={toggle("call")} />
      <AskAiPanel open={current === "ai"} onOpenChange={toggle("ai")} />
    </OverlayContext.Provider>
  );
}
