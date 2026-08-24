import { cn } from "@/shared/utils/cn";

interface JobCheckListProps {
  items: string[];
  className?: string;
}

export default function JobCheckList({ items, className }: JobCheckListProps) {
  return (
    <ul className={cn("m-0 flex list-none flex-col gap-3 p-0", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex size-5 flex-none items-center justify-center rounded-full bg-[#00A99D] text-white">
            <svg
              className="size-3"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[15px] leading-relaxed text-[#374151]">{item}</span>
        </li>
      ))}
    </ul>
  );
}
