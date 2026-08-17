import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  fullName: z.string(),
});

export const loginResponseSchema = z.object({
  user: userSchema,
  token: z.string(),
});

export const registerResponseSchema = z.object({
  user: userSchema,
  token: z.string(),
});

export const loginSchema = z.object({
  email: z.string().email("emailInvalid"),
  password: z.string().min(1, "passwordRequired"),
  remember: z.boolean().optional(),
});

export const registerSchema = z
  .object({
    fullName: z.string().min(2, "fullNameMin"),
    email: z.string().email("emailInvalid"),
    password: z.string().min(8, "passwordMin"),
    confirmPassword: z.string().min(1, "confirmPasswordRequired"),
    agreeTerms: z.boolean().refine((val) => val === true, { message: "agreeTermsRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsMustMatch",
    path: ["confirmPassword"],
  });

export type UserSchema = z.infer<typeof userSchema>;
export type LoginResponseSchema = z.infer<typeof loginResponseSchema>;
export type RegisterResponseSchema = z.infer<typeof registerResponseSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
