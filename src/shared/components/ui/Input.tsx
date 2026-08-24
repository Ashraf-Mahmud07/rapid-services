import * as React from "react";

import { cn } from "@/shared/utils/cn";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, id, placeholder, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    if (label) {
      return (
        <div className="relative w-full">
          <div className="relative">
            <input
              id={inputId}
              ref={ref}
              type={type}
              data-slot="input"
              placeholder={placeholder || " "}
              className={cn(
                "peer h-[54px] w-full rounded-[24px] border border-gray-200/80 bg-[#F8F9FA] px-5 text-[15px] text-[#282b34] placeholder-transparent transition-all outline-none focus:border-[#00A99D] focus:bg-white focus:ring-1 focus:ring-[#00A99D] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                error && "border-red-500 focus:border-red-500 focus:ring-red-500",
                className
              )}
              {...props}
            />
            <label
              htmlFor={inputId}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[15px] text-gray-400 transition-all duration-200 ease-in-out peer-focus:-top-2 peer-focus:translate-y-0 peer-focus:scale-90 peer-focus:rounded-sm peer-focus:bg-white peer-focus:px-1.5 peer-focus:font-medium peer-focus:text-[#00A99D] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:rounded-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:text-gray-600"
            >
              {label}
            </label>
          </div>
          {error && <p className="mt-1 pl-3 text-xs text-red-500">{error}</p>}
        </div>
      );
    }

    return (
      <div className="w-full">
        <input
          id={inputId}
          type={type}
          data-slot="input"
          placeholder={placeholder}
          className={cn(
            "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm",
            error &&
              "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
