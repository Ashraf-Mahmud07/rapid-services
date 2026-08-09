import { z } from "zod";

export const serviceEnquirySchema = z.object({
  name: z.string().min(2, "enquiryNameRequired"),
  email: z.string().email("enquiryEmailInvalid"),
  phone: z.string().min(7, "enquiryPhoneRequired"),
  message: z.string().min(10, "enquiryMessageRequired"),
});

export type ServiceEnquiryFormData = z.infer<typeof serviceEnquirySchema>;
