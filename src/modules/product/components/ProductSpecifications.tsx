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
    <section className="flex scroll-m-18 flex-col gap-4" id="product-specifications">
      <h2 className="h-9 text-[28px] font-semibold tracking-[-0.02em] text-ink">
        {t("specifications")}
      </h2>

      <div className="grid gap-x-26 gap-y-0 md:grid-cols-2">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col">
            {column.map((specification) => (
              <div
                key={specification.name}
                className="flex h-13.5 items-center justify-between border-b border-[#f2f2f2] bg-white px-6 py-2 text-[14px] font-medium"
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
