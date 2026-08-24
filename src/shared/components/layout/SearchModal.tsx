"use client";

import {
  Briefcase,
  Building2,
  ChevronRight,
  ClipboardList,
  Factory,
  Home,
  Mic,
  Package,
  Phone,
  Search,
  Store,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import * as React from "react";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";

type Entry = {
  title: string;
  href: string;
  icon: LucideIcon;
};

/**
 * Items exactly matching Figma node 606:18527 under "Most used"
 * along with core site destinations for search.
 */
const ENTRIES: Entry[] = [
  {
    title: "Homeowners",
    href: ROUTES.INDUSTRY + "?tab=homeowners",
    icon: Home,
  },
  {
    title: "Landlords",
    href: ROUTES.INDUSTRY + "?tab=landlords",
    icon: Building2,
  },
  {
    title: "Property managers",
    href: ROUTES.INDUSTRY + "?tab=offices",
    icon: ClipboardList,
  },
  {
    title: "Retail & hospitality",
    href: ROUTES.INDUSTRY + "?tab=retail",
    icon: Store,
  },
  {
    title: "Services",
    href: ROUTES.SERVICE,
    icon: Wrench,
  },
  {
    title: "Products",
    href: ROUTES.PRODUCT,
    icon: Package,
  },
  {
    title: "Projects",
    href: ROUTES.PROJECT,
    icon: Building2,
  },
  {
    title: "Industries",
    href: ROUTES.INDUSTRY,
    icon: Factory,
  },
  {
    title: "Careers",
    href: ROUTES.CAREER,
    icon: Briefcase,
  },
  {
    title: "Contact us",
    href: ROUTES.CONTACT,
    icon: Phone,
  },
];

export default function SearchModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAskAi?: () => void;
}) {
  const [query, setQuery] = React.useState("");

  const term = query.trim().toLowerCase();
  const matches = ENTRIES.filter((entry) => {
    return !term || entry.title.toLowerCase().includes(term);
  });

  // Default to the 4 "Most used" entries from Figma design, or matching results when typing
  const results = term ? matches : matches.slice(0, 4);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setQuery("");
    }
    onOpenChange(next);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-100 animate-[fadeIn_0.18s_ease] bg-[rgba(20,22,24,0.55)]" />
        <DialogPrimitive.Content
          aria-label="Search"
          className="fixed top-[120px] left-1/2 z-100 w-[calc(100vw-32px)] max-w-[720px] -translate-x-1/2 animate-[modalIn_0.2s_ease] rounded-[16px] bg-white p-6 shadow-[0_28px_70px_rgba(10,17,40,0.28)] focus:outline-none"
        >
          <DialogPrimitive.Title className="sr-only">Search Rapid Services</DialogPrimitive.Title>

          {/* Search Input Bar (Figma: 672x40px, rounded, search icon left, mic icon right) */}
          <div className="flex h-[42px] w-full items-center justify-between rounded-[10px] border border-[#E5E7EB] bg-[#F8F9FA] px-3.5 transition-all focus-within:border-primary focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20">
            <div className="flex flex-1 items-center gap-2.5">
              <Search className="size-[18px] flex-none text-[#5A5F63]" strokeWidth={2} />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search..."
                aria-label="Search"
                className="w-full bg-transparent text-[14.5px] text-[#111827] outline-none placeholder:text-[#9CA3AF]"
              />
            </div>
            <button
              type="button"
              aria-label="Voice search"
              className="flex size-7 flex-none items-center justify-center rounded-full text-primary transition-opacity hover:opacity-80 focus:outline-none"
            >
              <Mic className="size-5" />
            </button>
          </div>

          {/* Section Heading */}
          <p className="mt-5 mb-3 text-[15px] font-semibold text-[#111827]">
            {term ? "Results" : "Most used"}
          </p>

          {/* List items (Figma: Homeowners, Landlords, Property managers, Retail & hospitality) */}
          <ul className="max-h-[55vh] space-y-2.5 overflow-y-auto">
            {results.map((entry) => (
              <li key={entry.title}>
                <Link
                  href={entry.href}
                  onClick={() => handleOpenChange(false)}
                  className="group flex items-center justify-between rounded-[10px] p-1 transition-colors hover:bg-[#F8F9FA]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-10 flex-none items-center justify-center rounded-[10px] bg-[#E6F7F6] text-primary transition-transform group-hover:scale-105">
                      <entry.icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <span className="text-[15px] font-medium text-[#111827]">{entry.title}</span>
                  </div>
                  <ChevronRight className="size-5 flex-none text-[#6B7280] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>

          {results.length === 0 && (
            <p className="py-6 text-center text-[14px] text-[#8b9096]">
              Nothing matches “{query}”. Try a trade, a product or a page name.
            </p>
          )}

          {/* AI Section hidden as requested */}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
