"use client";

import {
  Briefcase,
  Building2,
  ChevronRight,
  Package,
  Phone,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import * as React from "react";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/utils/cn";

type Entry = {
  title: string;
  subtitle?: string;
  href: string;
  icon: LucideIcon;
  group: "services" | "products" | "projects";
};

/**
 * The reference panel is populated with another product's navigation, so the
 * shape is reproduced exactly and the content is Rapid's own.
 */
const ENTRIES: Entry[] = [
  {
    title: "Services",
    subtitle: "Trades we cover",
    href: ROUTES.SERVICE,
    icon: Wrench,
    group: "services",
  },
  {
    title: "Products",
    subtitle: "Parts & equipment",
    href: ROUTES.PRODUCT,
    icon: Package,
    group: "products",
  },
  {
    title: "Projects",
    subtitle: "Recent work",
    href: ROUTES.PROJECT,
    icon: Building2,
    group: "projects",
  },
  {
    title: "Industries",
    subtitle: "Sectors we serve",
    href: ROUTES.INDUSTRY,
    icon: Building2,
    group: "services",
  },
  {
    title: "Careers",
    subtitle: "Open roles",
    href: ROUTES.CAREER,
    icon: Briefcase,
    group: "services",
  },
  {
    title: "Contact us",
    subtitle: "Get in touch",
    href: ROUTES.CONTACT,
    icon: Phone,
    group: "services",
  },
];

const FILTERS = [
  { id: "overview", label: "Overview" },
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export default function SearchModal({
  open,
  onOpenChange,
  onAskAi,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAskAi?: () => void;
}) {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<FilterId>("overview");

  const term = query.trim().toLowerCase();
  const matches = ENTRIES.filter((entry) => {
    const inFilter = filter === "overview" || entry.group === filter;
    const inTerm =
      !term ||
      entry.title.toLowerCase().includes(term) ||
      (entry.subtitle?.toLowerCase().includes(term) ?? false);
    return inFilter && inTerm;
  });

  // The reference lists four shortcuts under "Most used"; the rest stay
  // reachable by typing.
  const results = term ? matches : matches.slice(0, 4);

  // Reset back to a clean panel each time it is dismissed.
  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setQuery("");
      setFilter("overview");
    }
    onOpenChange(next);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-100 animate-[fadeIn_0.18s_ease] bg-[rgba(20,22,24,0.55)]" />
        <DialogPrimitive.Content
          aria-label="Search"
          className="fixed top-[120px] left-1/2 z-100 w-[calc(100vw-40px)] max-w-[720px] -translate-x-1/2 animate-[modalIn_0.2s_ease] rounded-[14px] bg-white p-6 shadow-[0_28px_70px_rgba(10,17,40,0.28)] focus:outline-none sm:p-7"
        >
          <DialogPrimitive.Title className="sr-only">Search Rapid Services</DialogPrimitive.Title>

          <div className="flex items-center gap-3 rounded-[10px] border border-[#e7e9eb] px-4">
            <Search className="size-[18px] flex-none text-[#8b9096]" strokeWidth={2} />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
              aria-label="Search"
              className="min-w-0 flex-1 bg-transparent py-3.5 text-[15px] text-[#17181a] outline-none placeholder:text-[#8b9096]"
            />
            <span className="hidden flex-none items-center gap-1.5 sm:flex" aria-hidden="true">
              <kbd className="rounded-md bg-[#f1f2f4] px-2 py-1 text-[11px] font-medium text-[#5a5f63]">
                Ctrl
              </kbd>
              <kbd className="rounded-md bg-[#f1f2f4] px-2 py-1 text-[11px] font-medium text-[#5a5f63]">
                K
              </kbd>
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
                className={cn(
                  "h-10 rounded-full px-5 text-[15px] font-medium transition-colors",
                  filter === item.id
                    ? "bg-primary text-white"
                    : "bg-[#f1f2f4] text-[#17181a] hover:bg-[#e7e9eb]"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <p className="mt-6 mb-1 text-[14px] font-semibold text-[#17181a]">
            {term ? "Results" : "Most used"}
          </p>

          <ul className="max-h-[52vh] overflow-y-auto">
            {results.map((entry) => (
              <li key={entry.title}>
                <Link
                  href={entry.href}
                  onClick={() => handleOpenChange(false)}
                  className="group flex items-center gap-4 rounded-[10px] py-3 transition-colors hover:bg-[#f7f8f9]"
                >
                  <span className="flex size-10 flex-none items-center justify-center rounded-[10px] bg-[#f1f2f4] text-[#3f4245]">
                    <entry.icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15.5px] font-semibold text-[#17181a]">
                      {entry.title}
                    </span>
                    {entry.subtitle && (
                      <span className="mt-0.5 block text-[14px] text-[#5a5f63]">
                        {entry.subtitle}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="size-5 flex-none text-[#a9adb1] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>

          {results.length === 0 && (
            <p className="py-6 text-center text-[14px] text-[#8b9096]">
              Nothing matches “{query}”. Try a trade, a product or a page name.
            </p>
          )}

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#eef0f1] pt-5">
            <p className="text-[15px] text-[#5a5f63]">Need help finding something?</p>
            <button
              type="button"
              onClick={() => {
                handleOpenChange(false);
                onAskAi?.();
              }}
              className="inline-flex h-11 flex-none items-center gap-2 rounded-full bg-primary px-5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Sparkles className="size-4" />
              Ask AI
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
