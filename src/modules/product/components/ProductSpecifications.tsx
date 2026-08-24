import { useTranslations } from "next-intl";
import { Product } from "../types/product.type";

export default function ProductSpecifications({ product }: { product?: Product }) {
  const t = useTranslations("product");
  const specs = product?.specifications || [];
  const half = Math.ceil(specs.length / 2);
  const col1 = specs.slice(0, half);
  const col2 = specs.slice(half);
  const columns = [col1, col2];

  return (
    <section className="flex scroll-m-18 flex-col gap-3 sm:gap-4" id="product-specifications">
      <h2 className="h-auto text-[22px] font-semibold tracking-[-0.02em] text-ink sm:h-9 sm:text-[28px]">
        {t("specifications")}
      </h2>

      <div className="grid gap-x-6 gap-y-0 md:grid-cols-2 lg:gap-x-26">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col">
            {column.map((specification) => (
              <div
                key={specification.name}
                className="flex h-auto min-h-[44px] items-center justify-between border-b border-[#f2f2f2] bg-[#f8f8f8] px-3 py-2 text-[13px] font-medium sm:h-13.5 sm:px-6 sm:text-[14px]"
              >
                <span className="text-body-soft">{specification.name}</span>
                <span className="text-right text-ink">{specification.value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
