"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import newsletterArt from "@/modules/careers/assets/images/newsletter-update.png";

const schema = z.object({ email: z.string().email("Enter a valid email address") });
type FormData = z.infer<typeof schema>;

export default function Newsletter() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <section className="section-space">
      <div className="container-narrow px-4 sm:px-6 lg:px-0">
        <div className="grid items-center gap-6 rounded-[14px] bg-primary px-5 py-7 sm:gap-8 sm:px-10 sm:py-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12 lg:px-14 lg:py-10">
          <div className="mx-auto w-full max-w-50 sm:max-w-70 lg:mx-0 lg:max-w-[320px]">
            <Image
              src={newsletterArt}
              alt=""
              aria-hidden="true"
              className="h-auto w-full"
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 320px"
            />
          </div>

          <div>
            <h2 className="max-w-160 text-[clamp(1.375rem,5vw,2rem)] leading-tight font-bold tracking-[-0.015em] text-white">
              Subscribe to our email newsletter and get best deals or offers
            </h2>
            <p className="mt-3 max-w-155 text-[13.5px] leading-[1.6] text-white/80 sm:text-[14.5px]">
              Stay in the loop with the latest updates, exclusive offers, and exciting product
              launches by subscribing to our email newsletter.
            </p>

            {sent ? (
              <p className="mt-6 text-[15px] font-semibold text-white">
                You are on the list — thanks for subscribing.
              </p>
            ) : (
              <form onSubmit={handleSubmit(() => setSent(true))} noValidate className="mt-6">
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:border sm:border-white/45 sm:bg-white/12 sm:py-1.5 sm:ps-6 sm:pe-1.5">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    className="w-full min-w-0 rounded-full border border-white/45 bg-white/12 px-5 py-3 text-[15px] text-white outline-none placeholder:text-white/75 sm:flex-1 sm:border-0 sm:bg-transparent sm:px-0 sm:py-2"
                  />
                  <button
                    type="submit"
                    className="h-12 w-full flex-none rounded-full bg-white px-6 text-[15px] font-semibold text-primary transition-opacity hover:opacity-90 sm:h-11 sm:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-2.5 text-[13px] text-white/75">
                  {errors.email?.message ?? "No spam. Unsubscribe anytime."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
