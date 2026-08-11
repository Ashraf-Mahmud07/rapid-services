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
          <div key={index} className="w-full px-10 text-start">
            <div className="mb-2 text-4xl font-bold tracking-tight text-primary">{stat.value}</div>
            <div className="text-sm font-medium text-[#737373]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
