"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { products } from "../data/product.data";
import { setActiveView, setCurrentPage } from "../productFilterSlice";
import ProductGridCardSkeleton from "../skeleton/ProductGridCardSkeleton";
import ProductListCardSkeleton from "../skeleton/ProductListCardSkeleton";
import { Product } from "../types/product.type";
import NoProductFound from "./NoProductFound";
import ProductGridCard from "./ProductGridCard";
import ProductHeder from "./ProductHeder";
import ProductListCard from "./ProductListCard";
import ProductPagination from "./ProductPagination";

export default function ProductView() {
  const dispatch = useAppDispatch();
  const { activeView, selectedCategories, selectedRating, itemsPerPage, currentPage, isLoading } =
    useAppSelector((state) => state.productFilter);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);

    const productRating = Number(product.reviews?.average || 0);
    const requiredRating = Number(selectedRating);
    const matchesRating =
      selectedRating === "any" || isNaN(requiredRating) || productRating >= requiredRating;

    return matchesCategory && matchesRating;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-w-0 flex-1">
      <ProductHeder
        activeView={activeView}
        setActiveView={(view) => dispatch(setActiveView(view))}
        productCount={filteredProducts.length}
      />
      {isLoading ? (
        activeView === "grid" ? (
          <GridSkeletonView count={itemsPerPage > 8 ? 8 : itemsPerPage} />
        ) : (
          <ListSkeletonView count={itemsPerPage > 8 ? 8 : itemsPerPage} />
        )
      ) : displayedProducts.length === 0 ? (
        <NoProductFound />
      ) : (
        <>
          {activeView === "grid" && <GridView productsList={displayedProducts} />}
          {activeView === "list" && <ListView productsList={displayedProducts} />}
          <ProductPagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredProducts.length}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </main>
  );
}

const GridSkeletonView = ({ count = 8 }: { count?: number }): React.JSX.Element => {
  return (
    <section className="mt-6 grid gap-7 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProductGridCardSkeleton key={index} />
      ))}
    </section>
  );
};

const ListSkeletonView = ({ count = 8 }: { count?: number }): React.JSX.Element => {
  return (
    <section className="mt-6 grid grid-cols-1 gap-7 space-y-4 gap-y-0 md:grid-cols-2">
      {Array.from({ length: count }).map((_, index) => (
        <ProductListCardSkeleton key={index} />
      ))}
    </section>
  );
};

const GridView = ({ productsList }: { productsList: Product[] }): React.JSX.Element => {
  return (
    <section className="mt-6 grid gap-7 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {productsList.map((product) => (
        <div key={product.id} className="">
          <ProductGridCard product={product} />
        </div>
      ))}
    </section>
  );
};

export const ListView = ({ productsList }: { productsList: Product[] }): React.JSX.Element => {
  return (
    <section className="mt-6 grid grid-cols-1 gap-7 space-y-4 gap-y-0 md:grid-cols-2">
      {productsList.map((product) => (
        <div key={product.id} className="flex-1 basis-[280px]">
          <ProductListCard product={product} />
        </div>
      ))}
    </section>
  );
};
