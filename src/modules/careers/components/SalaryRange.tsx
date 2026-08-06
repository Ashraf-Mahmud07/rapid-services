import Image from "next/image";

import { cn } from "@/shared/utils/cn";

interface SalaryRangeProps {
  low: string;
  high: string;
  className?: string;
  symbolClassName?: string;
}

export default function SalaryRange({
  low,
  high,
  className,
  symbolClassName = "h-[11px] align-[-1px] me-0.5",
}: SalaryRangeProps) {
  const symbol = (
    <Image
      src="/icons/aed-symbol.svg"
      alt="AED"
      width={18}
      height={16}
      className={cn("inline-block w-auto", symbolClassName)}
    />
  );

  return (
    <span className={className}>
      {symbol}
      {low} – {symbol}
      {high}
    </span>
  );
}
