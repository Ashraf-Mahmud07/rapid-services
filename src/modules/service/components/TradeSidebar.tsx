import { ArrowRight, Headphones } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { trades } from "../constants/mock-services";

interface TradeSidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TradeSidebar({ activeTab, onTabChange }: TradeSidebarProps) {
  return (
    <div className="flex w-full flex-shrink-0 flex-col border-b border-gray-100 bg-[#F8F8F8] pt-6 lg:h-full lg:w-[280px] lg:self-start lg:border-r lg:border-b-0 lg:pt-8 xl:w-[320px]">
      <div className="mb-4 flex-shrink-0 px-6 text-[11px] font-bold tracking-widest text-gray-400 uppercase lg:mb-6 lg:px-8">
        Trades
      </div>

      <div className="flex custom-scrollbar min-h-0 w-full flex-1 gap-1.5 overflow-x-auto scroll-smooth px-4 pr-2 lg:flex-col lg:overflow-y-auto">
        {trades.map((trade) => {
          const Icon = trade.icon;
          const isActive = activeTab === trade.id;

          return (
            <button
              key={trade.id}
              onClick={() => onTabChange(trade.id)}
              className={`flex w-full cursor-pointer items-center gap-3.5 rounded-xl px-3 py-2.5 text-left text-[15px] font-medium whitespace-nowrap transition-all duration-200 ${
                isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div
                className={`flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                  isActive ? "bg-white/25" : "bg-white"
                }`}
              >
                <Icon
                  className={`h-[18px] w-[18px] transition-colors ${isActive ? "text-white" : "text-primary"}`}
                  strokeWidth={isActive ? 2 : 1.5}
                />
              </div>
              {trade.label}
              {isActive && <ArrowRight className="ml-auto hidden h-4 w-4 opacity-100 lg:block" />}
            </button>
          );
        })}
      </div>

      <div className="mt-6 w-full flex-shrink-0 lg:mt-auto">
        <div className="flex h-full flex-col justify-center bg-primary p-6 text-white lg:min-h-[248px] lg:p-8">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <Headphones className="h-5 w-5 text-white" />
          </div>
          <h4 className="mb-3 text-[17px] leading-tight font-bold text-white">
            Not sure which trade you need?
          </h4>
          <p className="mb-5 text-[13px] leading-relaxed text-white/90">
            Describe the problem instead.
          </p>
          <Link
            href={ROUTES.CONTACT}
            className="group inline-flex items-center text-[13px] font-semibold text-white underline underline-offset-4 transition-colors hover:text-white/80"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </div>
  );
}
