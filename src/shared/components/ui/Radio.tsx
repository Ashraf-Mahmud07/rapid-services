"use client";

import { cn } from "@/shared/utils/cn";
import { forwardRef } from "react";

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, options, value, onChange, error, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-2", className)}>
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              option.disabled && "cursor-not-allowed opacity-50"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              disabled={option.disabled}
              className="h-4 w-4 border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
            />
            {option.label}
          </label>
        ))}
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
