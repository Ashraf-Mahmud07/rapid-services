"use client";

import ProductGridCardSkeleton from "../skeleton/ProductGridCardSkeleton";
import ProductListCardSkeleton from "../skeleton/ProductListCardSkeleton";
import { Product } from "../types/product.type";
import NoProductFound from "./NoProductFound";
import ProductGridCard from "./ProductGridCard";
import ProductHeader from "./ProductHeader";
import ProductListCard from "./ProductListCard";
import ProductPagination from "./ProductPagination";
import { useProductView } from "../hooks/useProductView";

export default function ProductView() {
  const {
    activeView,
    itemsPerPage,
    currentPage,
    isLoading,
    filteredProducts,
    displayedProducts,
    totalPages,
    handlePageChange,
    handleViewChange,
  } = useProductView();

  return (
    <main className="min-w-0 flex-1">
      <ProductHeader
        activeView={activeView}
        setActiveView={handleViewChange}
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
    <section className="mt-6 grid grid-cols-2 gap-3.5 sm:gap-[31px] md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
    <section className="mt-6 grid grid-cols-2 gap-3.5 sm:gap-[31px] md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
