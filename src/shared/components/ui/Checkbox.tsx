"use client";

import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/shared/utils/cn";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {
  label?: string;
  error?: string;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <CheckboxPrimitive.Root
            ref={ref}
            id={id}
            data-slot="checkbox"
            className={cn(
              "peer relative flex size-4 shrink-0 items-center justify-center border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground",
              error && "border-destructive aria-invalid:border-destructive",
              className
            )}
            {...props}
          >
            <CheckboxPrimitive.Indicator
              data-slot="checkbox-indicator"
              className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
            >
              <CheckIcon />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          {label && (
            <label
              htmlFor={id}
              className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              {label}
            </label>
          )}
        </div>
        {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
