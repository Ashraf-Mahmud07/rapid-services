"use client";

import { useTranslations } from "next-intl";
import { COOKIE_POLICY } from "../data/cookie-policy";
import { PRIVACY_POLICY } from "../data/privacy-policy";
import { TERMS_CONDITIONS } from "../data/terms-conditions";

export function useLegal() {
  const t = useTranslations("legal");

  return {
    t,
    termsConditions: TERMS_CONDITIONS,
    privacyPolicy: PRIVACY_POLICY,
    cookiePolicy: COOKIE_POLICY,
  };
}
