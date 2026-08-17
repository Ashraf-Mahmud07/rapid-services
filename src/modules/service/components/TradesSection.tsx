"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { tabData, trades } from "../constants/mock-services";
import TradeSidebar from "./TradeSidebar";
import TradeContentArea from "./TradeContentArea";

const DEFAULT_TAB = "waterproofing";
const VALID_TAB_IDS = trades.map((trade) => trade.id);

function resolveTab(tabParam: string | null): string {
  if (tabParam && VALID_TAB_IDS.includes(tabParam)) {
    return tabParam;
  }
  return DEFAULT_TAB;
}

export default function TradesSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTab = resolveTab(searchParams.get("tab"));
  const activeItem = searchParams.get("item");

  function handleTabChange(tabId: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);
    params.delete("item"); // Clear item when switching tabs

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function handleItemChange(itemId: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (itemId) {
      params.set("item", itemId);
    } else {
      params.delete("item");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const activeData = tabData[activeTab] || tabData[DEFAULT_TAB];

  return (
    <div className="container-page py-10 md:py-16">
      <div className="flex min-h-[550px] lg:h-[630px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white lg:flex-row shadow-sm">
        <TradeSidebar activeTab={activeTab} onTabChange={handleTabChange} />
        <TradeContentArea 
          activeData={activeData} 
          activeItem={activeItem} 
          onItemChange={handleItemChange} 
        />
      </div>
    </div>
  );
}
