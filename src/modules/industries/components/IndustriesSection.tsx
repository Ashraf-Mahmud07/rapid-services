"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Home } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { industries, tabData, bookingSteps } from "../constants/mock-industries";

const CheckIconFilled = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" />
    <path
      d="M8 12.5L10.5 15L16 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("homeowners");

  const activeData = tabData[activeTab as keyof typeof tabData] || tabData["homeowners"];
  const ActiveIcon = industries.find((t) => t.id === activeTab)?.icon || Home;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16 lg:px-8">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {/* Top Section */}
        <div className="flex min-h-[550px] flex-col lg:flex-row">
          {/* Sidebar Tabs */}
          <div className="flex w-full flex-shrink-0 flex-col border-b border-gray-100 bg-[#f8f9fa] py-6 lg:h-[630px] lg:w-[280px] lg:self-start lg:border-r lg:border-b-0 lg:py-8">
            <div className="mb-4 flex-shrink-0 px-6 text-[11px] font-bold tracking-widest text-gray-400 uppercase lg:mb-6 lg:px-8">
              Who We Serve
            </div>

            <div className="hide-scrollbar flex min-h-0 w-full flex-1 gap-1.5 overflow-x-auto scroll-smooth px-4 lg:flex-col lg:overflow-y-auto">
              {industries.map((industry) => {
                const Icon = industry.icon;
                const isActive = activeTab === industry.id;

                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveTab(industry.id)}
                    className={`flex w-full cursor-pointer items-center gap-3.5 rounded-xl px-3 py-2.5 text-left text-[14px] font-medium whitespace-nowrap transition-all duration-200 ${
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
                    {industry.label}
                    {isActive && (
                      <ArrowRight className="ml-auto hidden h-4 w-4 opacity-100 lg:block" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex-shrink-0 px-6 pt-4 lg:mt-auto">
              <p className="mb-3 text-[13px] leading-relaxed text-gray-500">
                Not sure which applies?
                <br />
                Describe the job and we will tell you.
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

          {/* Content Area */}
          <div className="flex-1 border-b border-gray-100 bg-white p-6 md:p-8 lg:border-b-0 lg:p-10">
            {/* Header Row */}
            <div className="mb-8 flex flex-col justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center">
              <h2 className="flex items-center gap-3 text-[22px] font-bold text-gray-900">
                <span className="inline-block h-6 w-1 rounded-sm bg-primary"></span>
                {activeData.title}
              </h2>
            </div>

            {/* Description Section */}
            <div className="mb-8 flex flex-col items-start gap-5 md:mb-10 md:flex-row md:gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[14px] bg-[#e3f6f5] text-primary md:h-16 md:w-16">
                <ActiveIcon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <h3 className="mb-2.5 text-[17px] font-semibold text-gray-900">
                  {activeData.highlightTitle}
                </h3>
                <p className="max-w-4xl text-[14.5px] leading-relaxed text-gray-500">
                  {activeData.highlightDesc}
                </p>
              </div>
            </div>

            {/* Features and Benefits Grid */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              <div className="rounded-lg border border-gray-100 bg-[#f8f9fa] p-5 md:p-8">
                <h4 className="mb-5 text-[15px] font-bold text-gray-900">What we cover</h4>
                <ul className="space-y-4">
                  {activeData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14.5px] text-gray-600">
                      <CheckIconFilled className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-primary" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-gray-100 bg-[#f8f9fa] p-5 md:p-8">
                <h4 className="mb-5 text-[15px] font-bold text-gray-900">What you get</h4>
                <ul className="space-y-4">
                  {activeData.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14.5px] text-gray-600">
                      <CheckIconFilled className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-primary" />
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End of Top Section */}

        {/* How Booking Works (Static Full Width Bottom) */}
        <div className="bg-white p-6 pt-10 md:p-8 lg:p-10">
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
                <div className="mb-3 text-[10px] font-bold text-primary">{item.step}</div>
                <h3 className="mb-2 text-[14px] font-bold text-gray-900">{item.title}</h3>
                <p className="mt-auto text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
