"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { newsletterSchema, type NewsletterFormData } from "../validation/careers.schema";

export default function NewsletterSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  function onSubmit() {
    reset();
  }

  return (
    <section className="my-14 grid items-center gap-8 rounded-xl bg-[#0A1128] px-5 py-10 sm:my-20 sm:px-8 sm:py-12 lg:my-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-18 lg:py-7">
      <div className="flex justify-center">
        <Image
          src="/images/newsletter-subscribe.png"
          alt=""
          width={920}
          height={861}
          className="w-full max-w-65 sm:max-w-[320px] lg:max-w-98"
        />
      </div>
      <div>
        <h2 className="mb-4 font-inter text-[26px] leading-[1.2] font-normal tracking-[-0.5px] text-white sm:text-[32px] lg:mb-5 lg:text-[40px]">
          Subscribe to our email newsletter and get{" "}
          <span className="text-primary">best deals or offers</span>
        </h2>
        <p className="mb-6 max-w-170 text-sm leading-[1.35] text-[#A3ADBA] lg:mb-8 lg:text-[15px]">
          Stay in the loop with the latest updates, exclusive offers, and exciting product launches
          by subscribing to our email newsletter.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-186 flex-col gap-3 sm:flex-row"
        >
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              error={errors.email?.message}
              className="h-11 rounded-full border-transparent bg-white px-5 text-sm text-[#333] md:text-sm"
              {...register("email")}
            />
          </div>
          <Button type="submit" className="h-11 flex-none rounded-full px-7 text-sm font-semibold">
            Subscribe
          </Button>
        </form>
        <p className="mt-5 text-[13px] text-[#A3ADBA]">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
