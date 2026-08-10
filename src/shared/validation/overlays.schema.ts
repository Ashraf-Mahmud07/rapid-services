import { z } from "zod";

/** Book an Appointment — the three fields the reference panel shows. */
export const appointmentSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(6, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

/** Request a quote — adds a description and an optional attachment. */
export const quoteSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  description: z.string().min(1, "Tell us what needs doing"),
  attachment: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

/** Request a call — same as the quote minus the attachment. */
export const callbackSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(6, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  description: z.string().min(1, "Tell us what needs doing"),
});

export type CallbackFormData = z.infer<typeof callbackSchema>;
