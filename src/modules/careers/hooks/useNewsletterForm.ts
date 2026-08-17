"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { newsletterSchema, type NewsletterFormData } from "../validation/careers.schema";
import { DEFAULT_NEWSLETTER_VALUES } from "../constants/careers.constants";

export function useNewsletterForm() {
  const t = useTranslations("careers");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: DEFAULT_NEWSLETTER_VALUES,
  });

  const onSubmit = handleSubmit(async () => {
    reset();
  });

  const getFieldError = (field: keyof NewsletterFormData): string | undefined => {
    const error = errors[field];
    if (!error?.message) return undefined;
    return t(error.message as Parameters<typeof t>[0]);
  };

  return {
    register,
    onSubmit,
    getFieldError,
    isSubmitting,
    t,
  };
}
