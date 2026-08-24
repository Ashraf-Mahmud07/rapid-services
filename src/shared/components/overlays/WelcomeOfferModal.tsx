"use client";

import Image from "next/image";
import { Dialog as DialogPrimitive } from "radix-ui";
import * as React from "react";

const WELCOME_POPUP_STORAGE_KEY = "taj_welcome_offer_dismissed";

export default function WelcomeOfferModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [sent, setSent] = React.useState(false);

  React.useEffect(() => {
    try {
      const isDismissed = localStorage.getItem(WELCOME_POPUP_STORAGE_KEY);
      if (!isDismissed) {
        // Show after a brief delay on initial page load
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage availability issues (SSR / private mode)
    }
  }, []);

  const handleDismiss = () => {
    try {
      localStorage.setItem(WELCOME_POPUP_STORAGE_KEY, "true");
    } catch {
      // Ignore
    }
    setIsOpen(false);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }

    setSent(true);
    try {
      localStorage.setItem(WELCOME_POPUP_STORAGE_KEY, "true");
    } catch {
      // Ignore
    }

    setTimeout(() => {
      setIsOpen(false);
    }, 2200);
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && handleDismiss()}>
      <DialogPrimitive.Portal>
        {/* Backdrop */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-100 animate-[fadeIn_0.2s_ease] bg-[rgba(10,14,24,0.65)] backdrop-blur-[4px]" />

        {/* Modal Window */}
        <DialogPrimitive.Content
          aria-describedby="welcome-offer-description"
          className="fixed top-1/2 left-1/2 z-100 w-[calc(100vw-32px)] max-w-[880px] -translate-x-1/2 -translate-y-1/2 animate-[modalIn_0.25s_ease] overflow-hidden rounded-[24px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.4)] focus:outline-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-[44%_56%]">
            {/* Left Column: 3D Discount Illustration & Background */}
            <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-gradient-to-b from-[#143354] via-[#0B2C4D] to-[#081F37] p-6 sm:p-7 md:min-h-[490px] md:p-8">
              {/* Radial glow backdrop */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,167,157,0.18)_0%,_transparent_70%)]"
              />

              {/* 3D Discount Illustration */}
              <div className="relative z-10 mx-auto my-auto aspect-square w-[200px] sm:w-[240px] md:w-[270px]">
                <Image
                  src="/images/popup/welcome-discount.png"
                  alt="Welcome 15% discount coupon"
                  fill
                  priority
                  sizes="(max-width: 768px) 240px, 280px"
                  className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
                />
              </div>

              {/* Bottom tag: Members only */}
              <div className="relative z-10 pt-3">
                <span className="block text-[11px] font-bold tracking-[0.14em] text-primary uppercase">
                  Members only
                </span>
                <p className="mt-1 text-[13.5px] leading-[1.4] text-[#E5E7EB]">
                  Early access to launches and 48-hour flash deals.
                </p>
              </div>
            </div>

            {/* Right Column: Copy, Input & CTA */}
            <div className="relative flex flex-col justify-center bg-white p-6 sm:p-8 md:p-10 lg:p-11">
              {/* Close Button */}
              <DialogPrimitive.Close asChild>
                <button
                  type="button"
                  onClick={handleDismiss}
                  aria-label="Close"
                  className="absolute top-4 right-4 flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#EFEFEF] bg-white text-[20px] font-light text-[#737373] transition-all duration-200 hover:bg-neutral-100 hover:text-[#0E0E0E] active:scale-95 sm:top-6 sm:right-6"
                >
                  <span className="leading-none select-none">×</span>
                </button>
              </DialogPrimitive.Close>

              {/* Eyebrow Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-[11.5px] font-semibold tracking-[0.06em] text-[#5B5B5B] uppercase">
                  Welcome offer
                </span>
              </div>

              {/* Main Heading */}
              <DialogPrimitive.Title className="mt-4 text-[28px] leading-[1.14] font-bold tracking-tight text-[#0E0E0E] sm:text-[32px] lg:text-[36px]">
                Take <span className="text-primary">15% off</span>
                <br />
                your first order.
              </DialogPrimitive.Title>

              {/* Description */}
              <DialogPrimitive.Description
                id="welcome-offer-description"
                className="max-w[370px] mt-3 text-[16px] leading-[1.6] text-[#737373]"
              >
                Join the list and we&apos;ll send a single-use code straight to your inbox. One
                email a week after that, nothing else.
              </DialogPrimitive.Description>

              {/* Form or Success State */}
              {sent ? (
                <div className="mt-6 rounded-2xl border border-[#C5F5F0] bg-[#E6FAF8] p-5 text-center">
                  <p className="text-[15px] font-semibold text-primary">
                    Thank you! Check your inbox for your 15% discount code.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="you@email.com"
                      aria-label="Email address"
                      className="h-[51px] w-full rounded-full border border-[#E5E7EB] bg-[#F8F8F8] px-6 text-[15px] text-[#0E0E0E] transition-colors outline-none placeholder:text-[#9CA3AF] focus:border-primary focus:bg-white"
                    />
                    {error && <p className="mt-1.5 px-3 text-[12px] text-red-500">{error}</p>}
                  </div>

                  <button
                    type="submit"
                    className="h-[51px] w-full cursor-pointer rounded-full bg-primary text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
                  >
                    Subscribe
                  </button>

                  {/* Anti-spam note */}
                  <div className="mt-1 flex items-center justify-center gap-3.5 text-[12.5px] text-[#7B7B7B]">
                    <span>No spam</span>
                    <span className="size-1 rounded-full bg-[#E5E7EB]" aria-hidden="true" />
                    <span>Unsubscribe anytime</span>
                  </div>

                  {/* "No thanks" dismiss button */}
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="mt-2 cursor-pointer text-center text-[13.5px] text-[#8A8A8A] underline transition-colors hover:text-[#0E0E0E]"
                  >
                    No thanks, I&apos;ll pay full price
                  </button>
                </form>
              )}
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
