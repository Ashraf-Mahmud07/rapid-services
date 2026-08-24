import { Product } from "../types/product.type";

export default function ProductOverview({ product }: { product?: Product }) {
  if (!product) return null;

  return (
    <section className="flex scroll-m-18 flex-col gap-4" id="product-overview">
      <h2 className="text-[22px] font-semibold tracking-[-0.56px] text-[#0e0e0e] sm:text-[28px]">
        Designed to disappear into your desk.
      </h2>
      <div
        className="space-y-4 text-[14px] leading-relaxed font-normal text-[#5b5b5b] sm:text-[16px] sm:leading-[27.2px]"
        dangerouslySetInnerHTML={{ __html: product.overview }}
      />
    </section>
  );
}
