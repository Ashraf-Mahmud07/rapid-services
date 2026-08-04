"use client";

import { cn } from "@/shared/utils/cn";
import { useCallback, useRef, type InputHTMLAttributes, type KeyboardEvent } from "react";

export interface OtpInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "type"
> {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

function OtpInput({
  length = 6,
  value,
  onChange,
  error,
  className,
  disabled,
  ...props
}: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = useCallback(
    (index: number, char: string) => {
      if (!/^\d?$/.test(char)) return;
      const newValue = value.split("");
      newValue[index] = char;
      const joined = newValue.join("").slice(0, length);
      onChange(joined);
      if (char && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [value, length, onChange]
  );

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !value[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [value]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
      onChange(pasted);
    },
    [length, onChange]
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2" dir="ltr">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] ?? ""}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-md border border-input bg-background text-center text-lg font-semibold ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            {...props}
          />
        ))}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

OtpInput.displayName = "OtpInput";

export { OtpInput };
