"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog as DialogPrimitive } from "radix-ui";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { Input } from "@/shared/components/ui/Input";
import { Textarea } from "@/shared/components/ui/Textarea";
import { CloseIcon } from "../icons/CloseIcon";
import { UploadIcon } from "../icons/UploadIcon";
import type { Job } from "../types/careers.types";
import { jobApplicationSchema, type JobApplicationFormData } from "../validation/careers.schema";
import ApplicationSubmitted from "./ApplicationSubmitted";

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  job?: Job;
}

export default function ApplyModal({ open, onOpenChange, job }: ApplyModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      portfolio: "",
      resume: "",
      motivation: "",
    },
  });

  const resumeName = useWatch({ control, name: "resume" });

  function onOpenChangeInternal(next: boolean) {
    if (!next) {
      setSubmitted(false);
      reset();
    }
    onOpenChange(next);
  }

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setValue("resume", file?.name ?? "", { shouldValidate: true });
  }

  function onSubmit() {
    setSubmitted(true);
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChangeInternal}>
      <DialogPrimitive.Portal>
        {/* Dark Backdrop Overlay */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-100 animate-[fadeIn_0.2s_ease] bg-black/50 backdrop-blur-xs" />

        {/* Modal Window Container */}
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 z-100 w-[802px] max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 animate-[modalIn_0.25s_ease] overflow-hidden rounded-[20px] border border-gray-100 bg-white font-poppins shadow-2xl outline-none">
          {/* Top Header Strip with soft cyan gradient */}
          <div className="relative flex items-center justify-between border-b border-gray-100/80 bg-gradient-to-r from-[#E6F7F5] via-[#EAF9F7] to-[#E6F7F5] px-7 py-6">
            <div>
              <h2 className="text-[19px] leading-tight font-semibold text-[#111827] sm:text-[20px]">
                {job?.title ?? "Senior Frontend Engineer, Storefront"}
              </h2>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-[13.5px] text-[#6B7280]">
                <span>{job?.department ?? "Engineering"}</span>
                <span className="text-gray-300">|</span>
                <span>{job?.location ?? "San Francisco or Remote (US)"}</span>
                <span className="text-gray-300">|</span>
                <span>{job?.employmentType ?? "Full-time"}</span>
              </div>
            </div>

            {/* Circular Close Button */}
            <DialogPrimitive.Close
              aria-label="Close"
              className="flex size-9 flex-none cursor-pointer items-center justify-center rounded-full bg-white text-gray-500 shadow-xs transition-colors outline-none hover:bg-gray-100"
            >
              <CloseIcon className="size-4 text-gray-600" />
            </DialogPrimitive.Close>
          </div>

          {/* Modal Body */}
          <div className="p-7 sm:p-8">
            {submitted ? (
              <ApplicationSubmitted />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4.5">
                {/* Row 1: First name & Last name */}
                <div className="grid gap-4.5 sm:grid-cols-2">
                  <Input
                    label="First name"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                  />
                  <Input
                    label="Last name"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                  />
                </div>

                {/* Row 2: Email address */}
                <Input
                  label="Email address"
                  type="email"
                  error={errors.email?.message}
                  {...register("email")}
                />

                {/* Row 3: Portfolio link */}
                <Input
                  label="Portfolio link"
                  error={errors.portfolio?.message}
                  {...register("portfolio")}
                />

                {/* Row 4: Upload Resume */}
                <div>
                  <label
                    htmlFor="resume-upload"
                    className="flex h-[56px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[24px] border border-dashed border-gray-300 bg-[#F8F9FA] px-5 text-[15px] font-medium text-gray-500 transition-colors hover:bg-[#F3F4F6]"
                  >
                    <UploadIcon className="size-4 text-gray-500" />
                    <span>{resumeName || "Upload Resume"}</span>
                  </label>
                  <input
                    id="resume-upload"
                    type="file"
                    accept="application/pdf"
                    className="sr-only"
                    onChange={onFileChange}
                  />
                  {errors.resume && (
                    <p className="mt-1 pl-3 text-xs text-red-500">{errors.resume.message}</p>
                  )}
                </div>

                {/* Row 5: Cover Letter */}
                <Textarea
                  label="Cover Letter"
                  error={errors.motivation?.message}
                  {...register("motivation")}
                />

                {/* Row 6 & 7: Submit button & Footnote */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-[54px] w-full cursor-pointer rounded-full bg-[#00A99D] text-[16px] font-semibold text-white shadow-xs transition-all hover:bg-[#008f84] hover:shadow-md disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "Submit application"}
                  </button>
                  <p className="mt-3 text-center text-[13px] text-gray-400">
                    We keep your application on file for 12 months unless you ask us not to.
                  </p>
                </div>
              </form>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
