"use client";

import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { PasswordInput } from "@/shared/components/ui/PasswordInput";
import { Checkbox } from "@/shared/components/ui/Checkbox";
import { Label } from "@/shared/components/ui/Label";
import { GoogleIcon } from "@/shared/assets/icons";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { useLoginForm } from "../hooks/useLoginForm";

export default function LoginForm() {
  const { register, onSubmit, getFieldError, isPending, apiError, t } = useLoginForm();

  return (
    <div className="flex min-h-dvh items-center justify-center bg-neutral-50 p-4">
      <div className="w-full max-w-sm">
        <div className="rounded-lg border border-border bg-background px-8 py-10 shadow-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              RE
            </div>
            <h1 className="text-xl font-semibold text-foreground">{t("signInTitle")}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{t("signInSubtitle")}</p>
          </div>

          {apiError && (
            <div className="mb-4 rounded-md bg-destructive/15 p-3 text-xs text-destructive">
              {apiError}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("emailPlaceholder")}
                autoComplete="email"
                error={getFieldError("email")}
                {...register("email")}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t("password")}</Label>
                <Link
                  href={ROUTES.AUTH.FORGOT_PASSWORD}
                  className="text-xs font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {t("forgotPassword")}
                </Link>
              </div>
              <PasswordInput
                id="password"
                placeholder={t("passwordPlaceholder")}
                autoComplete="current-password"
                error={getFieldError("password")}
                {...register("password")}
              />
            </div>

            <Checkbox id="remember" label={t("rememberMe")} {...register("remember")} />

            <Button type="submit" className="w-full" size="lg" isLoading={isPending}>
              {isPending ? t("signingIn") : t("signIn")}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {t("orContinueWith")}
              </span>
            </div>
          </div>

          <Button variant="outline" className="w-full" type="button">
            <GoogleIcon className="h-4 w-4" />
            Google
          </Button>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t("dontHaveAccount")}{" "}
            <Link
              href={ROUTES.AUTH.REGISTER}
              className="font-medium text-primary transition-colors hover:text-primary/80"
            >
              {t("signUp")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
