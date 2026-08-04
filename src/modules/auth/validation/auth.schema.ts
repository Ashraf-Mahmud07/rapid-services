import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("emailInvalid"),
  password: z.string().min(1, "passwordRequired"),
  remember: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    fullName: z.string().min(2, "fullNameMin"),
    email: z.string().email("emailInvalid"),
    password: z.string().min(8, "passwordMin"),
    confirmPassword: z.string().min(1, "confirmPasswordRequired"),
    agreeTerms: z.literal(true, { message: "agreeTermsRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsMustMatch",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
