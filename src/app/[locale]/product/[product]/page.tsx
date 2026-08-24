import type { Metadata } from "next";
import { ProductDetailView, findProductBySlug, products } from "@/modules/product";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  const uniqueProducts = Array.from(new Set(products.map((p) => p.slug || p.id)));

  return routing.locales.flatMap((locale) =>
    uniqueProducts.map((product) => ({
      locale,
      product,
    }))
  );
}

interface ProductPageProps {
  params: Promise<{ locale: string; product: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { product: productSlug } = await params;
  const product = findProductBySlug(productSlug);

  if (!product) return { title: "Product not found | Rapid" };

  return {
    title: `${product.title} | Rapid`,
    description: product.shortOverview,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { product: productSlug } = await params;
  return <ProductDetailView productSlug={productSlug} />;
}
