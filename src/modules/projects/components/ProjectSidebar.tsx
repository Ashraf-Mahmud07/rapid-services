import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { projectCategories } from "../constants/mock-projects";

interface ProjectSidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function ProjectSidebar({ activeTab, onTabChange }: ProjectSidebarProps) {
  return (
    <div className="flex w-full flex-shrink-0 flex-col border-b border-gray-100 bg-[#f8f9fa] py-6 lg:h-[630px] lg:w-[280px] lg:self-start lg:border-r lg:border-b-0 lg:py-8">
      <div className="mb-4 flex-shrink-0 px-6 text-[11px] font-bold tracking-widest text-gray-400 uppercase lg:mb-6 lg:px-8">
        Project Categories
      </div>

      <div className="hide-scrollbar flex min-h-0 w-full flex-1 gap-1.5 overflow-x-auto scroll-smooth px-4 lg:flex-col lg:overflow-y-auto">
        {projectCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeTab === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onTabChange(category.id)}
              className={`flex w-full cursor-pointer items-center gap-3.5 rounded-xl px-3 py-2.5 text-left text-[15px] font-medium whitespace-nowrap transition-all duration-200 ${
                isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div
                className={`flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                  isActive ? "bg-white/25" : "bg-white"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`h-[18px] w-[18px] transition-colors ${isActive ? "text-white" : "text-primary"}`}
                    strokeWidth={isActive ? 2 : 1.5}
                  />
                )}
              </div>
              {category.title}
              {isActive && (
                <ArrowRight className="ml-auto hidden h-4 w-4 opacity-100 lg:block" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex-shrink-0 px-6 pt-4 lg:mt-auto">
        <p className="mb-3 text-[13px] leading-relaxed text-gray-500">
          Not sure which project you need?
          <br />
          Describe the problem instead.
        </p>
        <Link
          href={ROUTES.CONTACT}
          className="group flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Talk to us{" "}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
