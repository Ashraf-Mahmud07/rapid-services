import { z } from "zod";

export const jobApplicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  portfolio: z.string().optional(),
  resume: z.string().min(1, "Attach your resume"),
  motivation: z.string().optional(),
});

export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
