import { useTranslations } from "next-intl";
import Image from "next/image";
import { Product } from "../types/product.type";

const shareIcon = "/shareIcon.svg";

export default function ProductShortOverview({ product }: { product: Product }) {
  const t = useTranslations("product");
  const ratingAvg = product.reviews?.average || "4.5";
  const reviewCount = product.reviews?.reviewList?.length || 0;

  return (
    <section className="flex items-start gap-4">
      <div className="min-w-0 flex-1">
        <p className="text-[12px] leading-3.75 font-semibold tracking-[0.12em] text-primary uppercase">
          {product.category}
        </p>

        <h2 className="mt-6 text-[34px] leading-[46.2px] font-semibold tracking-[-0.039em] text-[#0e0e0e]">
          {product.title}
        </h2>

        <div className="mt-2 flex flex-wrap items-center gap-2.5">
          <span className="text-[15px] leading-none tracking-[2px] text-[#ff3b30]">★★★★★</span>
          <p className="text-[14px] leading-none text-[#737373]">
            {ratingAvg}{" "}
            <span className="text-[#bbb]">{t("reviewsCount", { count: reviewCount })}</span>
          </p>
        </div>

        <div
          className="mt-4 space-y-4 text-[16px] leading-[27.2px] text-[#5b5b5b]"
          dangerouslySetInnerHTML={{ __html: product.shortOverview }}
        />
      </div>

      <button
        type="button"
        aria-label={t("shareProduct")}
        className="mt-6 inline-flex size-10.5 shrink-0 items-center justify-center rounded-full bg-[#f8f8f8] backdrop-blur-[2.529px]"
      >
        <Image alt="" src={shareIcon} width={24} height={24} className="block max-w-none" />
      </button>
    </section>
  );
}
