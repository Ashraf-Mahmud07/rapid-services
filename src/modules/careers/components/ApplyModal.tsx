"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { Button } from "@/shared/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/Dialog";
import { Input } from "@/shared/components/ui/Input";
import { Label } from "@/shared/components/ui/Label";
import { Textarea } from "@/shared/components/ui/Textarea";
import { jobApplicationSchema, type JobApplicationFormData } from "../validation/careers.schema";

const FIELD_CLASSNAME =
  "h-auto rounded-lg border-[#E4E6E8] px-3.5 py-[13px] text-[15px] text-[#333] md:text-[15px]";
const LABEL_CLASSNAME = "mb-2 block text-[13px] font-medium text-[#3a3d40]";

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ApplyModal({ open, onOpenChange }: ApplyModalProps) {
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
    <Dialog open={open} onOpenChange={onOpenChangeInternal}>
      <DialogContent
        showCloseButton={false}
        className="px-5 pt-6 pb-6 font-poppins sm:px-8 sm:pt-8 lg:px-10 lg:pt-[38px] lg:pb-[34px]"
      >
        <DialogHeader>
          <div>
            <DialogTitle className="mb-2 text-xl font-bold text-[#17181a] lg:text-2xl">
              Apply for this role
            </DialogTitle>
            <DialogDescription className="text-[13px] text-[#8b9096] lg:text-sm">
              No cover letter needed. Six fields, then a real human reads it.
            </DialogDescription>
          </div>
          <DialogClose
            aria-label="Close"
            className="flex size-9 flex-none cursor-pointer items-center justify-center rounded-full bg-[#f2f3f4] transition-colors hover:bg-[#e7e9eb]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#3a3d40"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </DialogClose>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center px-0 pt-8 pb-6 text-center sm:px-5 lg:pt-11 lg:pb-10">
            <div className="flex size-[74px] animate-[pop_0.4s_ease] items-center justify-center rounded-full bg-[#22B14C]">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#fff"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-[22px] text-[13px] font-semibold tracking-[2px] text-primary">
              CONFIRMED
            </p>
            <h3 className="mt-4 text-[24px] font-semibold text-[#17181a] lg:text-[30px]">
              Application received
            </h3>
            <p className="mt-4 max-w-[430px] text-sm leading-[1.6] text-[#7c8288] lg:text-[15px]">
              Rapid team reviews every application within five business days — you&apos;ll hear from
              us either way.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-5 lg:mt-[30px] lg:gap-[22px]"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              <div>
                <Label htmlFor="firstName" className={LABEL_CLASSNAME}>
                  First name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Ethan"
                  className={FIELD_CLASSNAME}
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />
              </div>
              <div>
                <Label htmlFor="lastName" className={LABEL_CLASSNAME}>
                  Last name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Brooks"
                  className={FIELD_CLASSNAME}
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              <div>
                <Label htmlFor="email" className={LABEL_CLASSNAME}>
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={FIELD_CLASSNAME}
                  error={errors.email?.message}
                  {...register("email")}
                />
              </div>
              <div>
                <Label htmlFor="portfolio" className={LABEL_CLASSNAME}>
                  Portfolio or GitHub
                </Label>
                <Input
                  id="portfolio"
                  placeholder="github.com/you"
                  className={FIELD_CLASSNAME}
                  error={errors.portfolio?.message}
                  {...register("portfolio")}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="resume" className={LABEL_CLASSNAME}>
                Resume
              </Label>
              <label
                htmlFor="resume"
                className="flex cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-[#E4E6E8] bg-[#fafbfb] p-[18px] text-sm text-[#6b7075] transition-colors hover:bg-[#f4f6f6]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6b7075"
                  strokeWidth="1.8"
                >
                  <path d="M12 15V4M8 8l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" />
                </svg>
                {resumeName || "Drop a PDF or click to upload"}
              </label>
              <input
                id="resume"
                type="file"
                accept="application/pdf"
                className="sr-only"
                onChange={onFileChange}
              />
              {errors.resume && (
                <p className="mt-1 text-xs text-destructive">{errors.resume.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="motivation" className={LABEL_CLASSNAME}>
                Why this role? (optional)
              </Label>
              <Textarea
                id="motivation"
                placeholder="A few sentences is plenty."
                className="field-sizing-fixed min-h-24 resize-y rounded-lg border-[#E4E6E8] px-3.5 py-[13px] text-[15px] text-[#333] md:text-[15px]"
                error={errors.motivation?.message}
                {...register("motivation")}
              />
            </div>

            <Button
              type="submit"
              isLoading={isSubmitting}
              className="h-auto w-full rounded-full p-4 text-base font-semibold"
            >
              Submit application
            </Button>
            <p className="text-center text-[13px] text-[#9aa0a5]">
              We keep your application on file for 12 months unless you ask us not to.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
