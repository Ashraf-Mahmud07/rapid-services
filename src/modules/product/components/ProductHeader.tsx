"use client";

import { Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/Sheet";
import PageSelectIcon from "../icons/PageSelectIcon";
import ViewListIcon from "../icons/ViewListIcon";
import ViewToggleIcon from "../icons/ViewToggleIcon";
import ProductsFilter from "./ProductsFilter";
import { useProductHeader } from "../hooks/useProductHeader";

export type ViewMode = "grid" | "list";

export interface ProductHeaderProps {
  activeView: ViewMode;
  setActiveView: (view: ViewMode) => void;
  productCount?: number;
}

export default function ProductHeader({
  activeView,
  setActiveView,
  productCount,
}: ProductHeaderProps) {
  const {
    t,
    itemsPerPage,
    isPageMenuOpen,
    setIsPageMenuOpen,
    headerTitle,
    count,
    handleSelectPageSize,
    pageOptions,
  } = useProductHeader({ productCount });

  return (
    <header className="relative flex min-h-21.25 flex-wrap items-start justify-between gap-4 border-b border-[#f2f2f2] pb-4 sm:pb-0">
      <div>
        <h1 className="text-[30px] leading-9.75 font-semibold tracking-[-0.6px] text-[#0e0e0e]">
          {headerTitle}
        </h1>
        <p className="mt-0.5 text-[14px] leading-4.25 font-normal text-[#737373]">
          {t("productsFound", { count })}
        </p>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label={t("openFilterMenu")}
              className="flex h-10.25 items-center gap-2 rounded-[36px] border border-[#e5e7eb] bg-[#f8f8f8] px-4 font-medium text-[#0e0e0e] transition-colors hover:bg-[#f0f0f0] lg:hidden"
            >
              <Filter className="size-4 text-[#0e0e0e]" />
              <span className="text-[14px] leading-4.25">{t("filter")}</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-85 overflow-y-auto p-6 sm:w-100">
            <SheetHeader className="mb-4 text-left">
              <SheetTitle className="text-[18px] font-semibold text-[#0e0e0e]">
                {t("filterProducts")}
              </SheetTitle>
            </SheetHeader>
            <ProductsFilter />
          </SheetContent>
        </Sheet>

        <div
          aria-label={t("toggleProductView")}
          className="flex h-11.5 w-21.5 items-center rounded-full border border-[#f2f2f2] bg-[#f8f8f8] px-1.5"
        >
          <ViewButton isActive={activeView === "grid"} onClick={() => setActiveView("grid")}>
            <ViewToggleIcon />
          </ViewButton>
          <ViewButton isActive={activeView === "list"} onClick={() => setActiveView("list")}>
            <ViewListIcon />
          </ViewButton>
        </div>

        <div className="flex items-center gap-2.25">
          <span className="hidden text-[13px] leading-4 font-normal text-[#737373] sm:inline">
            {t("showPage")}
          </span>
          <div
            className="relative"
            onBlur={(event: React.FocusEvent<HTMLDivElement>) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsPageMenuOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-label={t("openPageSelector")}
              aria-expanded={isPageMenuOpen}
              aria-haspopup="menu"
              onClick={() => setIsPageMenuOpen((isOpen: boolean) => !isOpen)}
              className="flex h-10.25 w-16.5 cursor-pointer items-center justify-center rounded-[36px] border border-[#e5e7eb] bg-[#f8f8f8] transition-colors hover:bg-[#f0f0f0] focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <span className="flex items-center gap-2">
                <span className="text-[14px] leading-4.25 font-medium text-[#0e0e0e]">
                  {itemsPerPage}
                </span>
                <PageSelectIcon />
              </span>
            </button>
            {isPageMenuOpen ? (
              <div
                role="menu"
                aria-label="Page options"
                className="absolute top-full right-0 z-50 mt-0.5 flex w-16.5 flex-col items-end overflow-hidden rounded-sm"
              >
                {pageOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="menuitem"
                    onClick={() => handleSelectPageSize(option)}
                    className="h-10.25 w-full cursor-pointer rounded-sm border border-[#e5e7eb] bg-[#f8f8f8] pr-6 text-right text-[14px] leading-4.25 font-medium text-[#0e0e0e] transition-colors hover:bg-[#f0f0f0] focus:bg-[#f0f0f0] focus:outline-none"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

interface ViewButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
}

function ViewButton({ onClick, isActive, children }: ViewButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full ${isActive ? "bg-primary text-white" : "text-black"}`}
    >
      {children}
    </button>
  );
}
