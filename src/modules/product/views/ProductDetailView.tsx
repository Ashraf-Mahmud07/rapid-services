"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import ProductOverview from "../components/ProductOverview";
import ProductRatings from "../components/ProductRatings";
import ProductsBreadcrumb from "../components/ProductsBreadcrumb";
import ProductScrollspyNav from "../components/ProductScrollspyNav";
import ProductShortOverview from "../components/ProductShortOverview";
import ProductSpecifications from "../components/ProductSpecifications";
import { products } from "../data/product.data";

export interface ProductDetailViewProps {
  productSlug: string;
}

export function findProductBySlug(productSlug: string) {
  return products.find((p) => p.slug === productSlug || p.id === productSlug);
}

export default function ProductDetailView({ productSlug }: ProductDetailViewProps) {
  const product = findProductBySlug(productSlug) || products[0];

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-6">
      <ProductsBreadcrumb product={product} />
      <div className="flex gap-13 pt-7 pb-8">
        <div className="relative flex h-158.75 w-137.5 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F8F8F8] p-6">
          <Image src={product.thumb} fill className="object-contain p-6" alt={product.title} />
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
