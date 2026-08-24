"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/components/ui/Button";
import { cn } from "@/shared/utils/cn";
import NoProductFoundIcon from "../icons/NoProductFoundIcon";
import { NoProductFoundProps } from "../types/product.type";

export default function NoProductFound({ className, onGoBack }: NoProductFoundProps) {
  const t = useTranslations("product");
  const router = useRouter();

  return (
    <div
      className={cn("flex h-[80vh] w-full flex-col items-center justify-center gap-4.5", className)}
    >
      <div className="relative flex size-[112px] items-center justify-center rounded-full bg-[#F8F8F8]">
        <NoProductFoundIcon />
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
