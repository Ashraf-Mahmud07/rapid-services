import { cn } from "@/shared/utils/cn";
import { AedSymbolIcon } from "../assets/icons";

interface SalaryRangeProps {
  low: string;
  high: string;
  className?: string;
  /** Sizing/alignment of the AED symbol so it matches the surrounding type. */
  symbolClassName?: string;
}

export default function SalaryRange({
  low,
  high,
  className,
  symbolClassName = "h-[11px] align-[-1px] me-0.5",
}: SalaryRangeProps) {
  const symbol = <AedSymbolIcon className={cn("inline-block w-auto", symbolClassName)} />;

  return (
    <span className={className}>
      {symbol}
      {low} – {symbol}
      {high}
    </span>
  );
}
