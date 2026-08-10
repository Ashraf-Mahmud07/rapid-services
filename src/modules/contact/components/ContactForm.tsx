"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/Select";
import contactFormBackground from "../assets/images/contact-form-bg.png";
import contactSupportImage from "../assets/images/contact-support.png";
import { CONTACT_TOPICS } from "../data/contact.data";
import { contactSchema, type ContactFormData } from "../validation/contact.schema";

const FIELD_CLASSNAME =
  "h-auto rounded-none rounded-b-[10px] border-0 border-b border-b-primary bg-transparent py-2 pe-0 ps-3 text-base text-[#333] placeholder:text-[#a9adb1] focus-visible:border-b-primary focus-visible:ring-0 md:text-base";

export default function ContactForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", topic: "", message: "" },
  });

  function onSubmit() {
    reset();
  }

  return (
    <div
      id="contact-form"
      className="mt-6 grid scroll-mt-24 items-stretch gap-6 rounded-[14px] border border-[#bfe3dd] p-4 sm:mt-8 sm:gap-8 sm:p-6 lg:mt-[34px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-[34px]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('${contactFormBackground.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        src={contactSupportImage}
        alt=""
        className="h-full min-h-[240px] w-full rounded-xl object-cover sm:min-h-[340px] lg:min-h-105"
      />

      <div className="pe-0 pb-2 lg:py-2 lg:pe-2">
        <h2 className="mb-2 text-[26px] font-semibold text-[#17181a] sm:text-[30px] lg:text-[34px]">
          Contact
        </h2>
        <p className="mb-7 text-sm text-[#7c8288] lg:mb-[34px] lg:text-[15px]">
          Send a message and our team will get back to within 24 hrs
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 lg:gap-[26px]">
          <div>
            <label htmlFor="name" className="mb-1.5 block ps-3 text-[13px] text-[#9aa0a5]">
              Name
            </label>
            <Input
              id="name"
              placeholder="Type full name here..."
              className={FIELD_CLASSNAME}
              error={errors.name?.message}
              {...register("name")}
            />
          </div>

          <Input
            id="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            className={FIELD_CLASSNAME}
            error={errors.email?.message}
            {...register("email")}
          />

          <Controller
            control={control}
            name="topic"
            render={({ field }) => (
              <div className="w-full">
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    aria-label="What are you looking for"
                    className="h-auto w-full rounded-none rounded-b-[10px] border-0 border-b border-b-primary bg-transparent py-2 ps-3 pe-0 text-base text-[#333] focus-visible:ring-0 data-placeholder:text-[#7c8288] data-[size=default]:h-auto"
                  >
                    <SelectValue placeholder="Select what you are looking for" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONTACT_TOPICS.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.topic && (
                  <p className="mt-1 text-xs text-destructive">{errors.topic.message}</p>
                )}
              </div>
            )}
          />

          <Input
            id="message"
            placeholder="Message"
            aria-label="Message"
            className={`${FIELD_CLASSNAME} pt-2 pb-9`}
            error={errors.message?.message}
            {...register("message")}
          />

          <Button
            type="submit"
            isLoading={isSubmitting}
            className="h-auto w-full self-start rounded-full px-10 py-3.5 text-[15px] font-semibold sm:w-auto"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
