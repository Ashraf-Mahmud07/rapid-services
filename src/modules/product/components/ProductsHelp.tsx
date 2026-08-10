import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/utils/cn";

const helpIcon = "/helpIcon.svg";

type ProductsHelpProps = {
  className?: string;
};

export default function ProductsHelp({ className }: ProductsHelpProps) {
  const t = useTranslations("product");

  return (
    <section
      className={cn(
        "mt-[18] flex h-[250] w-full max-w-[288px] flex-col rounded-md bg-primary px-7 py-7 text-white",
        className
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)]">
        <div className="size-5">
          <Image
            alt=""
            className="block size-full max-w-none"
            height={20}
            unoptimized
            width={20}
            src={helpIcon}
          />
        </div>
      </div>

      <h2 className="mt-4 text-[19px] leading-[23.75px] font-semibold tracking-[-0.02em] text-white">
        {t("notSureWhereToStart")}
      </h2>

      <p className="mt-3.5 max-w-55.5 text-[13px] leading-[20.15px] font-normal text-[#ffffff]">
        {t("helpDesc")}
      </p>

      <Link
        href={ROUTES.CONTACT}
        className="mt-5 inline-flex w-fit items-center gap-3 border-b border-primary pb-1 text-[14px] leading-none font-medium text-white transition-colors"
      >
        <span>{t("talkToExpert")}</span>
        <span aria-hidden="true" className="text-primary">
          →
        </span>
      </Link>
    </section>
  );
}
