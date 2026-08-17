import type { JobApplicationFormData, NewsletterFormData } from "../validation/careers.schema";

export const DEFAULT_JOB_APPLICATION_VALUES: JobApplicationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  portfolio: "",
  resume: "",
  motivation: "",
} as const;

export const DEFAULT_NEWSLETTER_VALUES: NewsletterFormData = {
  email: "",
} as const;
