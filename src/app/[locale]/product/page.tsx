import type { Metadata } from "next";
import { ProductsView } from "@/modules/product";

export const metadata: Metadata = {
  title: "Products | Rapid",
  description:
    "Browse parts, tools and equipment supplied and fitted by our certified technicians.",
};

export default function AllProductsPage() {
  return <ProductsView />;
}
