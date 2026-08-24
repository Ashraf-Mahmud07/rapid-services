"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import newsletterDiscountImg from "../assets/images/newsletter-discount.png";
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
    <section className="py-12 lg:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0B2C4D] px-6 py-10 shadow-2xl sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[345px_minmax(0,1fr)] lg:gap-14 xl:gap-20">
            {/* Left Column: 3D Discount Illustration */}
            <div className="mx-auto w-full max-w-[260px] sm:max-w-[310px] lg:mx-0 lg:max-w-[345px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={newsletterDiscountImg}
                  alt="Special discounts and promotional offers"
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 310px, 345px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column: Title & Input Form */}
            <div>
              <h2 className="max-w-[660px] text-[26px] leading-[1.25] font-bold tracking-tight text-white sm:text-[32px] lg:text-[38px] xl:text-[40px]">
                {newsletterData.title}
              </h2>

              {sent ? (
                <div className="mt-8 rounded-full bg-white/10 px-6 py-4 backdrop-blur-sm">
                  <p className="text-[15px] font-semibold text-white">
                    {newsletterData.successMessage}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(() => setSent(true))}
                  noValidate
                  className="mt-8 max-w-[685px]"
                >
                  <div className="flex w-full items-center rounded-full bg-white p-1.5 shadow-lg sm:p-[3px]">
                    <input
                      {...register("email")}
                      type="email"
                      placeholder={newsletterData.placeholder}
                      aria-label={newsletterData.placeholder}
                      className="w-full min-w-0 flex-1 bg-transparent px-4 py-2.5 text-[15px] text-[#0E0E0E] outline-none placeholder:text-[#9CA3AF] sm:px-6 sm:text-[16px]"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98] sm:h-12 sm:px-8 sm:text-[16px]"
                    >
                      {newsletterData.buttonLabel}
                    </button>
                  </div>

                  <p className="mt-3 text-[13px] text-white/70 sm:text-[14px]">
                    {errors.email?.message ?? newsletterData.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
