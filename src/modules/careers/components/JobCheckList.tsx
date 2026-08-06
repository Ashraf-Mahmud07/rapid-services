import { cn } from "@/shared/utils/cn";

interface JobCheckListProps {
  items: string[];
  className?: string;
}

export default function JobCheckList({ items, className }: JobCheckListProps) {
  return (
    <ul className={cn("m-0 list-none p-0", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3.5 py-2.75">
          <span className="mt-px flex size-6 flex-none items-center justify-center rounded-full bg-[#E5FFFD]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17l-5-5"
                stroke="#00A79D"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[15px] leading-normal text-[#3f4245]">{item}</span>
        </li>
      ))}
    </ul>
  );
}
