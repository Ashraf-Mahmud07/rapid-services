import type { LoginFormData, RegisterFormData } from "../validation/auth.schema";

export const DEFAULT_LOGIN_VALUES: LoginFormData = {
  email: "",
  password: "",
  remember: false,
} as const;

export const DEFAULT_REGISTER_VALUES: RegisterFormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
} as const;

export const AUTH_CONSTANTS = {
  MIN_PASSWORD_LENGTH: 8,
  MIN_NAME_LENGTH: 2,
} as const;
