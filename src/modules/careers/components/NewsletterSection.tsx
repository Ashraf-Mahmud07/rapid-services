"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
    <section className="my-14 grid items-center gap-8 rounded-[20px] bg-[#F6F7F7] px-5 py-10 sm:my-20 sm:px-8 sm:py-12 lg:my-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-[72px] lg:py-14">
      <div className="flex justify-center">
        <Image
          src="/images/newsletter.png"
          alt=""
          width={512}
          height={402}
          className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]"
        />
      </div>
      <div>
        <h2 className="mb-4 font-inter text-[26px] leading-[1.15] font-medium tracking-[-0.5px] text-[#17181a] sm:text-[32px] lg:mb-[18px] lg:text-[40px] lg:leading-none lg:tracking-[-1px]">
          Subscribe to our email newsletter and get{" "}
          <span className="text-primary">best deals or offers</span>
        </h2>
        <p className="mb-6 max-w-[600px] text-sm leading-[1.6] text-[#6c7176] lg:mb-7 lg:text-[15px]">
          Stay in the loop with the latest updates, exclusive offers, and exciting product launches
          by subscribing to our email newsletter.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-[640px] flex-col gap-3 sm:flex-row lg:gap-3.5"
        >
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              error={errors.email?.message}
              className="h-auto rounded-full border-[#E6E8EA] bg-white px-6 py-4 text-[15px] text-[#333] md:text-[15px]"
              {...register("email")}
            />
          </div>
          <Button
            type="submit"
            className="h-auto flex-none rounded-full px-[38px] py-4 text-[15px] font-semibold"
          >
            Subscribe
          </Button>
        </form>
        <p className="mt-4 text-[13px] text-[#9aa0a5]">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
