"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { Textarea } from "@/shared/components/ui/Textarea";
import contactSupportImage from "../assets/images/contact-support.png";
import { contactSchema, type ContactFormData } from "../validation/contact.schema";

const FIELD_CLASSNAME =
  "h-12 w-full rounded-full border border-gray-100 bg-[#f9f9f9] px-5 py-3 text-[14.5px] text-[#333] transition-colors placeholder:text-gray-400 focus-visible:border-primary focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-primary";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { firstName: "", lastName: "", phone: "", email: "", subject: "", message: "" },
  });

  function onSubmit() {
    reset();
    setIsSubmitted(true);
  }

  function handleSendAnother() {
    setIsSubmitted(false);
  }

  return (
    <div
      id="contact-form"
      className="mt-6 grid scroll-mt-24 items-stretch gap-6 rounded-2xl border border-gray-100 bg-white p-4 sm:mt-8 sm:p-6 lg:mt-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-10 xl:p-12"
    >
      <div className="relative min-h-[300px] w-full overflow-hidden rounded-xl lg:h-full">
        <Image src={contactSupportImage} alt="Contact Support" fill className="object-cover" />
      </div>

      <div className="flex flex-col justify-center py-2 lg:pe-2">
        {isSubmitted ? (
          <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
            <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-8 text-primary"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <h2 className="mb-2 text-[26px] font-semibold text-[#17181a] sm:text-[30px] lg:text-[34px]">
              Message sent
            </h2>
            <p className="mb-7 max-w-[380px] text-sm text-[#7c8288] lg:text-[15px]">
              Thanks for reaching out. Our team will get back to you within 24 hrs.
            </p>

            <Button
              type="button"
              onClick={handleSendAnother}
              className="h-auto rounded-full px-10 py-3.5 text-[15px] font-semibold"
            >
              Send another message
            </Button>
          </div>
        ) : (
          <>
            <h2 className="mb-3 text-[26px] font-semibold text-gray-900 sm:text-[30px] lg:text-[32px]">
              Contact
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-500 lg:mb-10 lg:text-[14.5px]">
              Send us a message with your questions or requirements, and our team will get back to
              you within 24 hours with the information you need.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 lg:gap-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
                <Input
                  id="firstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  className={FIELD_CLASSNAME}
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />

                <Input
                  id="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  className={FIELD_CLASSNAME}
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>

              <Input
                id="phone"
                placeholder="Phone"
                aria-label="Phone"
                className={FIELD_CLASSNAME}
                error={errors.phone?.message}
                {...register("phone")}
              />

              <Input
                id="email"
                type="email"
                placeholder="Email"
                aria-label="Email"
                className={FIELD_CLASSNAME}
                error={errors.email?.message}
                {...register("email")}
              />

              <Input
                id="subject"
                placeholder="Subject"
                aria-label="Subject"
                className={FIELD_CLASSNAME}
                error={errors.subject?.message}
                {...register("subject")}
              />

              <Textarea
                id="message"
                placeholder="Message"
                aria-label="Message"
                className="min-h-[140px] w-full resize-none rounded-3xl border border-gray-100 bg-[#f9f9f9] px-6 py-4 text-[14.5px] text-[#333] transition-colors placeholder:text-gray-400 focus-visible:border-primary focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-primary"
                error={errors.message?.message}
                {...register("message")}
              />

              <Button
                type="submit"
                isLoading={isSubmitting}
                className="mt-2 h-auto w-full rounded-full bg-[#00a69c] px-10 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#00a69c]/90"
              >
                Send Message
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
