"use client";

import ProductsFilter from "../components/ProductsFilter";
import ProductView from "../components/ProductView";

export default function ProductsView() {
  return (
    <div className="container flex items-start gap-[49] py-6">
      <aside className="hidden shrink-0 basis-[288px] lg:block">
        <ProductsFilter />
      </aside>
      <ProductView />
    </div>
  );
}
