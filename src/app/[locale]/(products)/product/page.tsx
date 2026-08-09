import ProductsFilter from "@/modules/product/components/ProductsFilter";
import ProductView from "@/modules/product/components/ProductView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Rapid",
  description:
    "Browse parts, tools and equipment supplied and fitted by our certified technicians.",
};

const AllProductsPage = () => {
  return (
    <div className="container flex items-start gap-6 py-6">
      <aside className="hidden shrink-0 basis-[288px] lg:block">
        <ProductsFilter />
      </aside>
      <ProductView />
    </div>
  );
};

export default AllProductsPage;
