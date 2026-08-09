import { z } from "zod";

export const projectEnquirySchema = z.object({
  name: z.string().min(2, "enquiryNameRequired"),
  email: z.string().email("enquiryEmailInvalid"),
  phone: z.string().min(7, "enquiryPhoneRequired"),
  message: z.string().min(10, "enquiryMessageRequired"),
});

export type ProjectEnquiryFormData = z.infer<typeof projectEnquirySchema>;
