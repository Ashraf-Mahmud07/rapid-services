"use client";

import { getErrorMessage } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DEFAULT_REGISTER_VALUES } from "../constants/auth.constants";
import { useRegisterMutation } from "../services/authApi";
import { registerSchema, type RegisterFormData } from "../validation/auth.schema";

export function useRegisterForm() {
  const t = useTranslations("auth");
  const [registerAccount, { isLoading }] = useRegisterMutation();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: DEFAULT_REGISTER_VALUES,
  });

  const onSubmit = handleSubmit(async (data: RegisterFormData) => {
    setApiError(null);
    try {
      await registerAccount(data).unwrap();
    } catch (err: unknown) {
      setApiError(getErrorMessage(err, "Registration failed. Please try again."));
    }
  });

  const isPending = isSubmitting || isLoading;

  const getFieldError = (field: keyof RegisterFormData): string | undefined => {
    const error = errors[field];
    if (!error?.message) return undefined;
    return t(error.message as Parameters<typeof t>[0]);
  };

  return {
    register,
    onSubmit,
    errors,
    getFieldError,
    isPending,
    apiError,
    t,
  };
}
