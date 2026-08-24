"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import ProductOverview from "../components/ProductOverview";
import ProductRatings from "../components/ProductRatings";
import ProductsBreadcrumb from "../components/ProductsBreadcrumb";
import ProductScrollspyNav from "../components/ProductScrollspyNav";
import ProductShortOverview from "../components/ProductShortOverview";
import ProductSpecifications from "../components/ProductSpecifications";
import { findProductBySlug, products } from "../data/product.data";

export interface ProductDetailViewProps {
  productSlug: string;
}

export default function ProductDetailView({ productSlug }: ProductDetailViewProps) {
  const product = findProductBySlug(productSlug) || products[0];

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-4 !pt-[58px] sm:py-6">
      <ProductsBreadcrumb product={product} />
      <div className="flex flex-col gap-6 pt-4 pb-6 sm:pt-7 sm:pb-8 lg:flex-row lg:gap-12">
        <div className="xs:h-[360px] relative flex h-[280px] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F8F8F8] p-4 sm:h-[480px] sm:p-6 lg:h-[clamp(400px,calc(400px+235*(100vw-1024px)/375),635px)] lg:w-[clamp(350px,calc(350px+200*(100vw-1024px)/375),550px)]">
          <Image
            src={product.thumb}
            fill
            className="object-contain p-4 sm:p-6"
            alt={product.title}
            priority
          />
        </div>
        <ProductShortOverview product={product} />
      </div>
      <ProductScrollspyNav />
      <div className="space-y-16">
        <ProductOverview product={product} />
        <ProductSpecifications product={product} />
        <ProductRatings product={product} />
      </div>
    </div>
  );
}
