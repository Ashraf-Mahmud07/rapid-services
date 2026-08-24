import * as React from "react";

import { cn } from "@/shared/utils/cn";

export interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, placeholder, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    if (label) {
      return (
        <div className="relative w-full">
          <div className="relative">
            <textarea
              id={inputId}
              ref={ref}
              data-slot="textarea"
              placeholder={placeholder || " "}
              className={cn(
                "peer h-[138px] w-full resize-none rounded-[20px] border border-gray-200/80 bg-[#F8F9FA] p-5 text-[15px] text-[#111827] placeholder-transparent transition-all outline-none focus:border-[#00A99D] focus:bg-white focus:ring-1 focus:ring-[#00A99D] disabled:cursor-not-allowed disabled:opacity-50",
                error && "border-red-500 focus:border-red-500 focus:ring-red-500",
                className
              )}
              {...props}
            />
            <label
              htmlFor={inputId}
              className="pointer-events-none absolute top-5 left-4 text-[15px] text-gray-400 transition-all duration-200 ease-in-out peer-focus:-top-2.5 peer-focus:scale-90 peer-focus:rounded-sm peer-focus:bg-white peer-focus:px-1.5 peer-focus:font-medium peer-focus:text-[#00A99D] peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:rounded-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:text-gray-600"
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
        <textarea
          id={inputId}
          ref={ref}
          data-slot="textarea"
          placeholder={placeholder}
          className={cn(
            "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm",
            error && "border-destructive focus-visible:border-destructive",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
