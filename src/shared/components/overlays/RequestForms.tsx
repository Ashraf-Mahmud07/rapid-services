"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Paperclip } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";

import {
  appointmentSchema,
  callbackSchema,
  quoteSchema,
  type AppointmentFormData,
  type CallbackFormData,
  type QuoteFormData,
} from "@/shared/validation/overlays.schema";
import OverlayPanel, { FIELD, Field, Footnote, Sent, SubmitButton } from "./OverlayPanel";

/** Shared footnote from the references. */
const NO_CALLOUT = "No callout fee. Fixed pricing before any work begins.";

type PanelProps = { open: boolean; onOpenChange: (open: boolean) => void };

/* ── Book an Appointment ──────────────────────────────────────────────── */

export function AppointmentModal({ open, onOpenChange }: PanelProps) {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({ resolver: zodResolver(appointmentSchema) });

  const close = (next: boolean) => {
    if (!next) {
      setSent(false);
      reset();
    }
    onOpenChange(next);
  };

  return (
    <OverlayPanel
      open={open}
      onOpenChange={close}
      title="Book an Appointment"
      description="Leave your details to book your appointment."
    >
      {sent ? (
        <Sent message="We will confirm your slot by phone within one working day." />
      ) : (
        <form
          onSubmit={handleSubmit(() => setSent(true))}
          noValidate
          className="flex flex-col gap-5"
        >
          <Field label="Full name" error={errors.fullName?.message}>
            <input {...register("fullName")} placeholder="Jordan Smith" className={FIELD} />
          </Field>
          <Field label="Phone number" error={errors.phone?.message}>
            <input {...register("phone")} placeholder="(718) 555-0142" className={FIELD} />
          </Field>
          <Field label="Email address" error={errors.email?.message}>
            <input {...register("email")} placeholder="jordan@email.com" className={FIELD} />
          </Field>
          <div className="mt-1">
            <SubmitButton pending={isSubmitting}>Submit</SubmitButton>
            <Footnote>{NO_CALLOUT}</Footnote>
          </div>
        </form>
      )}
    </OverlayPanel>
  );
}

/* ── Request a quote ──────────────────────────────────────────────────── */

export function RequestQuoteModal({ open, onOpenChange }: PanelProps) {
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
      width="wide"
      title="Request a quote"
      description="Tell us about the project and we'll come back with a fixed price."
    >
      {sent ? (
        <Sent message="We will come back with a fixed price, usually the same day." />
      ) : (
        <form
          onSubmit={handleSubmit(() => setSent(true))}
          noValidate
          className="flex flex-col gap-5"
        >
          <Field label="Full name" error={errors.fullName?.message}>
            <input {...register("fullName")} placeholder="Jordan Smith" className={FIELD} />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email address" error={errors.email?.message}>
              <input {...register("email")} placeholder="jordan@email.com" className={FIELD} />
            </Field>
            <Field label="Phone number" error={errors.phone?.message}>
              <input {...register("phone")} placeholder="(718) 555-0142" className={FIELD} />
            </Field>
          </div>

          <Field label="Project description" error={errors.description?.message}>
            <textarea
              {...register("description")}
              rows={4}
              placeholder="Tell us what needs doing, and the address..."
              className={`${FIELD} h-auto resize-none py-3.5 leading-[1.6]`}
            />
          </Field>

          <div>
            <label className="mb-2 block text-[14px] font-semibold text-[#2a2d30]">
              Attach a file <span className="font-normal text-[#5a5f63]">(optional)</span>
            </label>
            <label className="flex h-13 cursor-pointer items-center gap-3 rounded-[10px] border border-dashed border-[#d5d8da] px-4 transition-colors hover:border-primary">
              <span className="flex size-8 flex-none items-center justify-center rounded-lg bg-[#f1f2f4] text-[#5a5f63]">
                <Paperclip className="size-4" />
              </span>
              <span className="truncate text-[15px] text-[#9aa0a6]">
                {fileName || "Choose a file (photos, plans...)"}
              </span>
              <input
                type="file"
                className="sr-only"
                onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
              />
            </label>
          </div>

          <div className="mt-1">
            <SubmitButton pending={isSubmitting}>Submit request</SubmitButton>
          </div>
        </form>
      )}
    </OverlayPanel>
  );
}

/* ── Request a call ───────────────────────────────────────────────────── */

export function RequestCallModal({ open, onOpenChange }: PanelProps) {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CallbackFormData>({ resolver: zodResolver(callbackSchema) });

  const close = (next: boolean) => {
    if (!next) {
      setSent(false);
      reset();
    }
    onOpenChange(next);
  };

  return (
    <OverlayPanel
      open={open}
      onOpenChange={close}
      title="Request a Call"
      description="Fill in your details and we'll contact you shortly."
    >
      {sent ? (
        <Sent message="One of our team will call you back shortly." />
      ) : (
        <form
          onSubmit={handleSubmit(() => setSent(true))}
          noValidate
          className="flex flex-col gap-5"
        >
          <Field label="Full name" error={errors.fullName?.message}>
            <input {...register("fullName")} placeholder="Jordan Smith" className={FIELD} />
          </Field>
          <Field label="Phone number" error={errors.phone?.message}>
            <input {...register("phone")} placeholder="(718) 555-0142" className={FIELD} />
          </Field>
          <Field label="Email address" error={errors.email?.message}>
            <input {...register("email")} placeholder="jordan@email.com" className={FIELD} />
          </Field>
          <Field label="Project description" error={errors.description?.message}>
            <textarea
              {...register("description")}
              rows={3}
              placeholder="Tell us what needs doing, and the address..."
              className={`${FIELD} h-auto resize-none py-3.5 leading-[1.6]`}
            />
          </Field>
          <div className="mt-1">
            <SubmitButton pending={isSubmitting}>Submit request</SubmitButton>
            <Footnote>{NO_CALLOUT}</Footnote>
          </div>
        </form>
      )}
    </OverlayPanel>
  );
}
