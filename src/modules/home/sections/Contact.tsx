"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Mail, MapPin, MessageSquare } from "lucide-react";
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

/** Fields are a translucent wash on the brand panel — no border in the reference. */
const FIELD =
  "h-13 w-full rounded-[8px] bg-white/18 px-4 text-[15px] text-white outline-none transition-colors placeholder:text-white/75 focus:bg-white/25";

export default function Contact() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <section className="section-space">
      <div className="container-narrow">
        <div className="grid overflow-hidden rounded-[14px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          {/* Left: the brand panel. Its bottom-right corner is cut away in the
              reference, and the mint panel shows through the notch. */}
          <div className="bg-primary px-7 py-10 sm:px-10 lg:px-12 lg:py-14 lg:[clip-path:polygon(0_0,100%_0,100%_81%,90.6%_100%,0_100%)]">
            <h2 className="text-[clamp(1.4rem,2vw,1.75rem)] leading-[1.24] font-bold tracking-[-0.015em] text-white">
              Request a Free Consultation
            </h2>
            <p className="mt-3 max-w-[380px] text-[14px] leading-[1.6] text-white/85">
              Fill out the form below and one of our specialists will get back to you within 24
              hours.
            </p>

            {sent ? (
              <p className="mt-8 text-[15px] font-semibold text-white">
                Thanks — a specialist will be in touch within 24 hours.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit(() => setSent(true))}
                noValidate
                className="mt-7 flex flex-col gap-4 lg:max-w-[530px]"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    {...register("firstName")}
                    placeholder="Name"
                    aria-label="Name"
                    className={FIELD}
                  />
                  <input
                    {...register("lastName")}
                    placeholder="Last name"
                    aria-label="Last name"
                    className={FIELD}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    {...register("email")}
                    placeholder="Email Address"
                    aria-label="Email address"
                    className={FIELD}
                  />
                  <input
                    {...register("phone")}
                    placeholder="Phone Number"
                    aria-label="Phone number"
                    className={FIELD}
                  />
                </div>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Message"
                  aria-label="Message"
                  className={`${FIELD} h-auto resize-none py-3.5 leading-[1.6]`}
                />

                {(errors.firstName || errors.email || errors.message) && (
                  <p className="text-[13px] text-white">
                    {errors.firstName?.message ?? errors.email?.message ?? errors.message?.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-1 inline-flex h-12 w-fit items-center gap-2.5 rounded-full bg-white ps-6 pe-2 text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Send Message
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary text-white">
                    <ArrowUpRight className="size-4" strokeWidth={2.2} />
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right: the pale mint panel. */}
          <div className="bg-brand-tint px-7 py-10 sm:px-10 lg:px-12 lg:py-14">
            <p className="text-eyebrow font-semibold text-primary uppercase">Get in touch</p>
            <h3 className="mt-3 text-[clamp(1.4rem,2.1vw,1.9rem)] leading-[1.24] font-bold tracking-[-0.015em] text-ink">
              Let&apos;s Build Your <span className="text-primary">Next Project</span> Together
            </h3>
            <p className="mt-4 max-w-[470px] text-[14.5px] leading-[1.66] text-body-soft">
              Fill out the form and our team will get back to you shortly. Whether it&apos;s a new
              construction, renovation, or consultation, we&apos;re here to help.
            </p>

            <ul className="mt-8 flex flex-col gap-6">
              {DETAILS.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <span className="flex size-11 flex-none items-center justify-center rounded-[8px] bg-primary text-white">
                    <detail.icon className="size-5" strokeWidth={1.9} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11.5px] font-semibold tracking-[0.1em] text-primary uppercase">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-[15px] text-ink transition-opacity hover:opacity-70"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="mt-1 block text-[15px] whitespace-pre-line text-ink">
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
