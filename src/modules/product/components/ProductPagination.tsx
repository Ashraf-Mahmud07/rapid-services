"use client";

import { useTranslations } from "next-intl";

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

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 2) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 1) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
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
      <div className="flex items-center gap-1.5 text-[14.88px] leading-[22.3px] font-normal text-[#0f0f0f]">
        <span>
          {t("showing")} {firstItem} {t("to")} {lastItem} {t("of")} {totalItems}
        </span>
      </div>

      <div className="flex items-center gap-[8.8px]">
        <PaginationControl
          ariaLabel={t("firstPage")}
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          <FirstPageIcon />
        </PaginationControl>

        {pages.map((page, index) => {
          if (typeof page === "string") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex h-[41.4px] w-[43.9px] items-center justify-center rounded-[8px] border border-[#B3ECE8] bg-[#E6F7F6] text-center text-xs font-normal text-[#00A79D]"
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
              className={`flex h-[41.4px] w-[43.9px] cursor-pointer items-center justify-center rounded-[8px] border text-center text-xs font-normal transition-all duration-200 ${
                isActive
                  ? "border-[#00A79D] bg-[#00A79D] text-white"
                  : "border-[#B3ECE8] bg-[#E6F7F6] text-[#00A79D] hover:border-[#00A79D] hover:bg-[#00A79D] hover:text-white"
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
          <LastPageIcon />
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
      className="flex h-[41.4px] w-[43.9px] cursor-pointer items-center justify-center rounded-[8px] border border-[#B3ECE8] bg-[#E6F7F6] text-[#00A79D] transition-all duration-200 hover:border-[#00A79D] hover:bg-[#00A79D] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#B3ECE8] disabled:hover:bg-[#E6F7F6] disabled:hover:text-[#00A79D]"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

function FirstPageIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 12.3273 12.3273"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0.366159 6.16367C0.366159 3.4307 0.366159 2.06421 1.21518 1.21518C2.06421 0.366159 3.4307 0.366159 6.16367 0.366159C8.89664 0.366159 10.2631 0.366159 11.1121 1.21518C11.9612 2.06421 11.9612 3.4307 11.9612 6.16367C11.9612 8.89664 11.9612 10.2631 11.1121 11.1121C10.2631 11.9612 8.89664 11.9612 6.16367 11.9612C3.4307 11.9612 2.06421 11.9612 1.21518 11.1121C0.366159 10.2631 0.366159 8.89664 0.366159 6.16367Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M5.45169 3.72261L4.20417 5.01294C3.67971 5.5554 3.41748 5.82663 3.41748 6.16367C3.41748 6.50071 3.67971 6.77193 4.20417 7.31439L5.45169 8.60472M8.90986 3.72261L7.66233 5.01294C7.13787 5.5554 6.87564 5.82663 6.87564 6.16367C6.87564 6.50071 7.13787 6.77193 7.66233 7.31439L8.90986 8.60472"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LastPageIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 12.3273 12.3273"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0.366159 6.16367C0.366159 3.4307 0.366159 2.06421 1.21518 1.21518C2.06421 0.366159 3.4307 0.366159 6.16367 0.366159C8.89664 0.366159 10.2631 0.366159 11.1121 1.21518C11.9612 2.06421 11.9612 3.4307 11.9612 6.16367C11.9612 8.89664 11.9612 10.2631 11.1121 11.1121C10.2631 11.9612 8.89664 11.9612 6.16367 11.9612C3.4307 11.9612 2.06421 11.9612 1.21518 11.1121C0.366159 10.2631 0.366159 8.89664 0.366159 6.16367Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M6.87564 3.72261L8.12316 5.01294C8.64762 5.5554 8.90985 5.82663 8.90985 6.16367C8.90985 6.50071 8.64762 6.77193 8.12316 7.31439L6.87564 8.60472M3.41748 3.72261L4.665 5.01294C5.18946 5.5554 5.45169 5.82663 5.45169 6.16367C5.45169 6.50071 5.18946 6.77193 4.665 7.31439L3.41748 8.60472"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
