export default function StatsSection() {
  const stats = [
    { value: "340+", label: "Jobs completed this year" },
    { value: "6", label: "Project types" },
    { value: "4 days", label: "Average project length" },
    { value: "98%", label: "Satisfaction rate" },
  ];

  return (
    <div className="relative z-20 container-page mt-12 mb-8">
      <div className="flex flex-col items-center justify-between gap-y-8 divide-gray-200 rounded-lg border border-gray-100 bg-[#f8f9fa] px-6 py-8 md:flex-row md:divide-x">
        {stats.map((stat, index) => (
          <div key={index} className="w-full px-10 text-start">
            <div className="mb-2 text-4xl font-bold tracking-tight text-primary">{stat.value}</div>
            <div className="text-sm font-medium text-body-soft">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
