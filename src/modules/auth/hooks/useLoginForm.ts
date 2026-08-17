"use client";
import { getErrorMessage } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DEFAULT_LOGIN_VALUES } from "../constants/auth.constants";
import { useLoginMutation } from "../services/authApi";
import { loginSchema, type LoginFormData } from "../validation/auth.schema";

export function useLoginForm() {
  const t = useTranslations("auth");
  const [login, { isLoading }] = useLoginMutation();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: DEFAULT_LOGIN_VALUES,
  });

  const onSubmit = handleSubmit(async (data: LoginFormData) => {
    setApiError(null);
    try {
      await login(data).unwrap();
    } catch (err: unknown) {
      setApiError(getErrorMessage(err, "Login failed. Please check your credentials."));
    }
  });

  const isPending = isSubmitting || isLoading;

  const getFieldError = (field: keyof LoginFormData): string | undefined => {
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
