"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { Button } from "@/shared/components/ui/Button";
import { cn } from "@/shared/utils/cn";
import { NoProductFoundProps } from "../types/product.type";

export default function NoProductFound({ className, onGoBack }: NoProductFoundProps) {
  const t = useTranslations("product");
  const router = useRouter();

  return (
    <div
      className={cn("flex h-[80vh] w-full flex-col items-center justify-center gap-4.5", className)}
    >
      <div className="relative flex size-18 items-center justify-center rounded-full bg-[#F8F8F8]">
        <svg
          aria-hidden="true"
          className="size-7.5"
          fill="none"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 22.5C18.5825 22.5 22.5 18.5825 22.5 13.75C22.5 8.91751 18.5825 5 13.75 5C8.91751 5 5 8.91751 5 13.75C5 18.5825 8.91751 22.5 13.75 22.5Z"
            stroke="#BBBBBB"
            strokeWidth="2.25"
          />
          <path d="M26.25 26.25L20.875 20.875" stroke="#BBBBBB" strokeWidth="2.25" />
        </svg>
      </div>

      <div className="flex w-full max-w-73.5 flex-col items-center gap-4 text-center">
        <h3 className="text-[24px] leading-normal font-semibold text-[#0E0E0E]">
          {t("noProductsFound")}
        </h3>
        <p className="text-[15px] leading-6 font-normal text-[#737373]">{t("noProductsDesc")}</p>
        <Button
          className="mt-0 h-11.75 w-42 cursor-pointer rounded-[86px] text-[15px] font-medium"
          onClick={() => (onGoBack ? onGoBack() : router.push("/product"))}
          type="button"
          variant="primary"
        >
          {t("goBack")}
        </Button>
      </div>
    </div>
  );
}
