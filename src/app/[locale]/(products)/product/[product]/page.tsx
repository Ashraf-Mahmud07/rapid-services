import ProductOverview from "@/modules/product/components/ProductOverview";
import ProductRatings from "@/modules/product/components/ProductRatings";
import ProductsBreadcrumb from "@/modules/product/components/ProductsBreadcrumb";
import ProductScrollspyNav from "@/modules/product/components/ProductScrollspyNav";
import ProductShortOverview from "@/modules/product/components/ProductShortOverview";
import ProductSpecifications from "@/modules/product/components/ProductSpecifications";
import { products } from "@/modules/product/data/product.data";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ locale: string; product: string }>;
}

const findProduct = (productSlug: string) =>
  products.find((p) => p.slug === productSlug || p.id === productSlug);

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { product: productSlug } = await params;
  const product = findProduct(productSlug);

  if (!product) return { title: "Product not found | Rapid" };

  return {
    title: `${product.title} | Rapid`,
    description: product.shortOverview,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { product: productSlug } = await params;

  const product = findProduct(productSlug) || products[0];

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-6">
      <ProductsBreadcrumb product={product} />
      <div className="flex gap-13 pt-7 pb-8">
        <div className="relative flex h-[635px] w-[550px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F8F8F8] p-6">
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
