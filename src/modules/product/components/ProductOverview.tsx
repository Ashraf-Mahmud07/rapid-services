import { Product } from "../types/product.type";

export default function ProductOverview({ product }: { product?: Product }) {
  if (!product) return null;

  return (
    <section className="flex scroll-m-18 flex-col gap-4" id="product-overview">
      <div
        className="space-y-4 text-[16px] leading-7 font-normal text-[#5b5b5b]"
        dangerouslySetInnerHTML={{ __html: product.overview }}
      />
    </section>
  );
}
