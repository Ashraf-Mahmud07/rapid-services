"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "Name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Tell us what you need"),
});
type FormData = z.infer<typeof schema>;

type Detail = { label: string; value: string; href?: string; icon: LucideIcon };

const DETAILS: Detail[] = [
  {
    label: "For project inquiries",
    value: "info@rapidsmarterp.com",
    href: "mailto:info@rapidsmarterp.com",
    icon: Mail,
  },
  { label: "Expert consultation", value: "Connect with our team today", icon: MessageSquare },
  {
    label: "Visit our office",
    value: "Al Muteena, Fish Roundabout\nDeira, Dubai, United Arab Emirates",
    icon: MapPin,
  },
];

const FIELD =
  "h-13 w-full rounded-full border border-white/20 bg-white/10 px-5 text-[15px] text-white outline-none transition-all placeholder:text-white/60 focus:border-white/40 focus:bg-white/15";

export default function Contact() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <section className="py-12 lg:py-20">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-[24px] shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Dark Navy panel */}
          <div className="bg-[#0B2C4D] p-8 sm:p-10 lg:p-14 lg:[clip-path:polygon(0_0,100%_0,100%_86%,90%_100%,0_100%)]">
            <h2 className="text-[28px] leading-[1.2] font-bold tracking-tight text-white sm:text-[32px]">
              Request a Free Consultation
            </h2>
            <p className="mt-3 max-w-[440px] text-[14.5px] leading-[1.6] text-white/80">
              Fill out the form below and one of our specialists will get back to you within 24
              hours.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-[15px] font-semibold text-white">
                  Thanks — a specialist will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(() => setSent(true))}
                noValidate
                className="mt-8 flex flex-col gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    {...register("firstName")}
                    placeholder="First name"
                    aria-label="First name"
                    className={FIELD}
                  />
                  <input
                    {...register("lastName")}
                    placeholder="Last name"
                    aria-label="Last name"
                    className={FIELD}
                  />
                </div>
                <input
                  {...register("email")}
                  placeholder="Email address"
                  aria-label="Email address"
                  className={FIELD}
                />
                <input
                  {...register("phone")}
                  placeholder="Phone number"
                  aria-label="Phone number"
                  className={FIELD}
                />
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Message"
                  aria-label="Message"
                  className="w-full resize-none rounded-[20px] border border-white/20 bg-white/10 p-5 text-[15px] leading-[1.6] text-white transition-all outline-none placeholder:text-white/60 focus:border-white/40 focus:bg-white/15"
                />

                {(errors.firstName || errors.email || errors.message) && (
                  <p className="text-[13px] text-red-300">
                    {errors.firstName?.message ?? errors.email?.message ?? errors.message?.message}
                  </p>
                )}

                <div className="mt-2">
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-9 text-[15px] font-bold text-[#0B2C4D] transition-all duration-200 hover:bg-white/90 hover:shadow-lg active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Ice-blue panel */}
          <div className="bg-[#EDF7FF] p-8 sm:p-10 lg:p-14">
            <span className="text-[12px] font-bold tracking-[0.14em] text-[#16385C] uppercase">
              Get in touch
            </span>
            <h3 className="mt-2 text-[30px] leading-[1.2] font-bold tracking-tight text-[#0E0E0E] sm:text-[34px]">
              Let&apos;s Build Your <span className="text-[#16385C]">Next Project</span> Together
            </h3>
            <p className="mt-3.5 max-w-[460px] text-[14.5px] leading-[1.65] text-[#737373]">
              Fill out the form and our team will get back to you shortly. Whether it&apos;s a new
              construction, renovation, or consultation, we&apos;re here to help.
            </p>

            <ul className="mt-8 flex flex-col gap-6">
              {DETAILS.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <span className="flex size-12 flex-none items-center justify-center rounded-[12px] bg-[#0B2C4D] text-white shadow-sm">
                    <detail.icon className="size-5.5" strokeWidth={1.9} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold tracking-[0.1em] text-[#16385C] uppercase">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-[15px] font-medium text-[#0E0E0E] transition-opacity hover:opacity-70"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="mt-1 block text-[15px] font-medium whitespace-pre-line text-[#0E0E0E]">
                        {detail.value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
