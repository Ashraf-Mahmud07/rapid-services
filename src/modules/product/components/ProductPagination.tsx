"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export interface ProductPaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductPagination({
  currentPage,
  itemsPerPage,
  totalItems,
  totalPages,
  onPageChange,
}: ProductPaginationProps) {
  const t = useTranslations("product");

  if (totalPages <= 1) return null;

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 2) {
      pages.push(1, 2, "...", totalPages);
    } else if (currentPage >= totalPages - 1) {
      pages.push(1, "...", totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage, "...", totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();
  const firstItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <nav
      aria-label="Pagination Navigation"
      className="mt-10 flex flex-col items-start justify-between gap-4 py-4 sm:flex-row sm:items-center"
    >
      <div className="flex items-start gap-[11.158px] text-[14.877px] leading-[22.315px] whitespace-nowrap">
        <span className="font-light text-[rgba(0,0,0,0.6)]">{t("showing")}</span>
        <span className="font-normal text-[#0f0f0f]">
          {firstItem} {t("to")} {lastItem} {t("of")} {totalItems}
        </span>
      </div>

      <div className="flex items-start gap-[8.788px]">
        <PaginationControl
          ariaLabel={t("firstPage")}
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          <Image
            src="/icons/pagination-first.svg"
            alt=""
            width={15}
            height={15}
            aria-hidden="true"
            className="size-[14]"
          />
        </PaginationControl>

        {pages.map((page, index) => {
          if (typeof page === "string") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex h-[44] w-[44] items-center justify-center overflow-hidden rounded-[6] border border-[rgba(0,0,0,0.2)] bg-white p-[12] text-center leading-[18] font-normal text-[#0f0f0f] text-[12]"
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`flex h-[44] w-[44] cursor-pointer items-center justify-center overflow-hidden rounded-[6] border p-[11] text-center leading-[18] font-normal text-[#0f0f0f] text-[12] transition-colors ${
                isActive
                  ? "border-[#00a79d] bg-[#dffffd]"
                  : "border-[rgba(0,0,0,0.2)] bg-white hover:border-[#00a79d] hover:bg-[#dffffd]"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}

        <PaginationControl
          ariaLabel={t("lastPage")}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          <Image
            src="/icons/pagination-last.svg"
            alt=""
            width={15}
            height={15}
            aria-hidden="true"
            className="size-[14]"
          />
        </PaginationControl>
      </div>
    </nav>
  );
}

function PaginationControl({
  ariaLabel,
  children,
  disabled,
  onClick,
}: {
  ariaLabel: string;
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="flex h-[44] w-[44] cursor-pointer items-center justify-center overflow-hidden rounded-[5.859px] border border-[rgba(0,0,0,0.2)] bg-white px-[11.717px] py-[13.182px] transition-colors hover:border-[#00a79d] hover:bg-[#dffffd] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-[rgba(0,0,0,0.2)] disabled:hover:bg-white"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
