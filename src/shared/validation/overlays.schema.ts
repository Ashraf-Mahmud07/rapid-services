import { z } from "zod";

/** Book an Appointment — fields matching Figma design. */
export const appointmentSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  description: z.string().min(1, "Tell us what needs doing"),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

/** Request a quote — fields matching Figma design. */
export const quoteSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  description: z.string().min(1, "Tell us what needs doing"),
  attachment: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

/** Request a call — fields matching Figma design. */
export const callbackSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  description: z.string().min(1, "Tell us what needs doing"),
});

export type CallbackFormData = z.infer<typeof callbackSchema>;
