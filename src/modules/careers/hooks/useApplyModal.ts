"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { jobApplicationSchema, type JobApplicationFormData } from "../validation/careers.schema";
import { DEFAULT_JOB_APPLICATION_VALUES } from "../constants/careers.constants";

interface UseApplyModalProps {
  onOpenChange: (open: boolean) => void;
}

export function useApplyModal({ onOpenChange }: UseApplyModalProps) {
  const t = useTranslations("careers");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: DEFAULT_JOB_APPLICATION_VALUES,
  });

  const resumeName = useWatch({ control, name: "resume" });

  const handleOpenChangeInternal = (next: boolean) => {
    if (!next) {
      setSubmitted(false);
      reset();
    }
    onOpenChange(next);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setValue("resume", file?.name ?? "", { shouldValidate: true });
  };

  const onSubmit = handleSubmit(async () => {
    setSubmitted(true);
  });

  const getFieldError = (field: keyof JobApplicationFormData): string | undefined => {
    const error = errors[field];
    if (!error?.message) return undefined;
    return t(error.message as Parameters<typeof t>[0]);
  };

  return {
    register,
    onSubmit,
    errors,
    getFieldError,
    isSubmitting,
    submitted,
    resumeName,
    handleOpenChangeInternal,
    handleFileChange,
    t,
  };
}
