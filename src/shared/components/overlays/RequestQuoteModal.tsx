"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/shared/components/ui/Input";
import { Textarea } from "@/shared/components/ui/Textarea";
import { quoteSchema, type QuoteFormData } from "@/shared/validation/overlays.schema";
import OverlayPanel, { FormSubmitFooter, Sent } from "./OverlayPanel";

type PanelProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function RequestQuoteModal({ open, onOpenChange }: PanelProps) {
  const [sent, setSent] = React.useState(false);
  const [fileName, setFileName] = React.useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({ resolver: zodResolver(quoteSchema) });

  const close = (next: boolean) => {
    if (!next) {
      setSent(false);
      setFileName("");
      reset();
    }
    onOpenChange(next);
  };

  return (
    <OverlayPanel
      open={open}
      onOpenChange={close}
      title="Request a quote"
      description="Tell us about the project and we'll come back with a fixed price."
    >
      {sent ? (
        <Sent message="We will come back with a fixed price, usually the same day." />
      ) : (
        <form
          onSubmit={handleSubmit(() => setSent(true))}
          noValidate
          className="flex flex-col gap-4"
        >
          {/* Row 1: First name and Last name */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              {...register("firstName")}
              label="First name"
              error={errors.firstName?.message}
            />
            <Input {...register("lastName")} label="Last name" error={errors.lastName?.message} />
          </div>

          {/* Row 2: Email address */}
          <Input
            {...register("email")}
            type="email"
            label="Email address"
            error={errors.email?.message}
          />

          {/* Row 3: Phone number */}
          <Input
            {...register("phone")}
            type="tel"
            label="Phone number"
            error={errors.phone?.message}
          />

          {/* Row 4: Attach a file (optional) */}
          <div>
            <label className="flex h-[54px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-dashed border-[#d5d8da] bg-[#f8f8f8] px-6 transition-all hover:border-primary">
              <Upload className="size-4 text-[#5a5f63]" />
              <span className="truncate text-[15px] text-[#5a5f63]">
                {fileName || "Attach a file (optional)"}
              </span>
              <input
                type="file"
                className="sr-only"
                onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
              />
            </label>
          </div>

          {/* Row 5: Project description */}
          <Textarea
            {...register("description")}
            label="Project description"
            error={errors.description?.message}
          />

          {/* Shared Common Footer */}
          <FormSubmitFooter pending={isSubmitting} />
        </form>
      )}
    </OverlayPanel>
  );
}
