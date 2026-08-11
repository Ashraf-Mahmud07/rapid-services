import React from "react";

export default function StatsSection() {
  const stats = [
    { value: "6", label: "Trades in one team" },
    { value: "42", label: "Licensed technicians" },
    { value: "24h", label: "Emergency response" },
    { value: "90 days", label: "Workmanship guarantee" },
  ];

  return (
    <div className="relative z-20 container-page mt-12 mb-8">
      <div className="flex flex-col items-center justify-between gap-y-8 divide-gray-200 rounded-lg border border-gray-100 bg-[#f8f9fa] px-6 py-8 md:flex-row md:divide-x">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center"
          >
            <div className="mb-2 text-4xl font-bold tracking-tight text-gray-900">{stat.value}</div>
            <div className="text-sm font-medium text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
