"use client";

import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/i18n/navigation";
import { projectCategories, bookingSteps } from "../constants/mock-projects";
import ProjectSidebar from "./ProjectSidebar";
import ProjectContentArea from "./ProjectContentArea";

const DEFAULT_TAB = projectCategories.length > 0 ? projectCategories[0].id : "";
const VALID_TAB_IDS = projectCategories.map((c) => c.id);

function resolveTab(tabParam: string | null): string {
  if (tabParam && VALID_TAB_IDS.includes(tabParam)) {
    return tabParam;
  }
  return DEFAULT_TAB;
}

export default function ProjectsSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTab = resolveTab(searchParams.get("tab"));
  const activeItem = searchParams.get("item");

  function handleTabChange(tabId: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);
    params.delete("item");
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

  const activeData = projectCategories.find((c) => c.id === activeTab) || projectCategories[0];

  if (!activeData) {
    return (
      <div className="container-page py-10 md:py-16 text-center text-gray-500">
        No projects available at the moment.
      </div>
    );
  }

  return (
    <div className="container-page py-10 md:py-16">
      <div className="flex min-h-[550px] lg:h-[630px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white lg:flex-row shadow-sm">
        <ProjectSidebar activeTab={activeTab} onTabChange={handleTabChange} />
        <ProjectContentArea 
          activeData={activeData} 
          activeItem={activeItem} 
          onItemChange={handleItemChange} 
        />
      </div>

      {/* How Booking Works (Static Full Width Bottom) */}
      <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-white p-6 pt-10 md:p-8 lg:p-10 shadow-sm">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 text-[11px] font-bold tracking-widest text-primary uppercase">
              How Booking Works
            </div>
            <h2 className="text-[26px] font-bold tracking-tight text-gray-900 md:text-[28px]">
              How a booking works, from call to guarantee
            </h2>
          </div>
          <div className="mb-1.5 text-[13px] leading-relaxed text-gray-500 xl:max-w-[220px] xl:text-right">
            The same four steps whether it is one socket or a full property.
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {bookingSteps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-lg border border-gray-100 bg-[#f8f9fa] p-5 lg:p-6"
            >
              <div className="mb-4 text-[10px] font-bold tracking-widest text-primary">
                {item.step}
              </div>
              <h4 className="mb-2.5 text-[15px] font-bold text-gray-900">{item.title}</h4>
              <p className="text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
