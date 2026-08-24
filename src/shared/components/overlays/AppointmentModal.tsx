"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/shared/components/ui/Input";
import { Textarea } from "@/shared/components/ui/Textarea";
import { appointmentSchema, type AppointmentFormData } from "@/shared/validation/overlays.schema";
import OverlayPanel, { FormSubmitFooter, Sent } from "./OverlayPanel";

type PanelProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function AppointmentModal({ open, onOpenChange }: PanelProps) {
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

          {/* Row 4: Project description */}
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
