"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Bell, Mail } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { newsletterData } from "../data/newsletter.data";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

export default function Newsletter() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <section className="border-t border-[#EFEFEF] bg-[#F8F8F8] py-10 lg:py-12">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left Column: Icon + Title & Subtitle */}
          <div className="flex items-center gap-5">
            <div className="relative flex size-14 shrink-0 items-center justify-center rounded-[14px] border border-[#E5E7EB] bg-white shadow-sm sm:size-16">
              <Mail className="size-7 text-[#0E0E0E]" strokeWidth={1.8} />
              <span className="absolute -top-1.5 -right-1.5 flex size-5.5 items-center justify-center rounded-full bg-[#0E0E0E] text-white shadow-sm">
                <Bell className="size-3" strokeWidth={2.2} />
              </span>
            </div>

            <div className="min-w-0">
              <h2 className="text-[19px] leading-[1.2] font-bold text-[#0E0E0E] sm:text-[22px]">
                SUBSCRIBE &amp; <span className="text-primary">GET 15% DISCOUNT</span>
              </h2>
              <p className="mt-1 max-w-[500px] text-[13px] leading-[1.5] text-[#737373] sm:text-[14px]">
                {newsletterData.disclaimer}
              </p>
            </div>
          </div>

          {/* Right Column: Input Form */}
          <div className="w-full lg:max-w-[500px]">
            {sent ? (
              <div className="rounded-full border border-[#C5F5F0] bg-[#E6FAF8] px-6 py-3.5">
                <p className="text-[14px] font-semibold text-primary">
                  {newsletterData.successMessage}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(() => setSent(true))}
                noValidate
                className="flex flex-col gap-2"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={newsletterData.placeholder}
                    aria-label={newsletterData.placeholder}
                    className="h-12 w-full min-w-0 rounded-full border border-[#E5E7EB] bg-white px-5 text-[14px] text-[#0E0E0E] shadow-sm outline-none placeholder:text-[#9CA3AF] focus:border-primary sm:h-13 sm:px-6 sm:text-[15px]"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary px-8 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.98] sm:h-13"
                  >
                    {newsletterData.buttonLabel}
                  </button>
                </div>

                {errors.email && (
                  <p className="px-3 text-[12px] text-red-500">{errors.email.message}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
