"use client";

import { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { FlagIcon } from "@/shared/assets/icons";
import { LANGUAGES } from "@/shared/constants/languages";
import { cn } from "@/shared/utils/cn";

export default function LanguageSelector() {
  const [selected, setSelected] = useState(LANGUAGES[0].code);
  const current = LANGUAGES.find((language) => language.code === selected) ?? LANGUAGES[0];

  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="listbox"
        className="flex items-center gap-2 text-white"
        onClick={(event) => event.currentTarget.focus()}
      >
        <FlagIcon code={current.code} className="size-6 flex-none rounded-full" />
        <span className="text-[15px] font-semibold uppercase">{current.code}</span>
        <ChevronDownIcon className="size-4 transition-transform group-hover:rotate-180" />
      </button>

      {/* pt-3 keeps the panel touching the trigger so the hover intent survives the gap */}
      <div className="invisible absolute top-full right-0 z-50 pt-3 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="w-[284px] rounded-xl bg-white p-4 shadow-[0_18px_40px_rgba(10,17,40,0.18)]">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-[11px] font-bold tracking-[1px] text-[#17181a] uppercase">
              Choose language
            </span>
            <span className="text-[11px] whitespace-nowrap text-[#8b9096]">
              {LANGUAGES.length} available
            </span>
          </div>

          <ul className="grid grid-cols-2 gap-2" role="listbox" aria-label="Choose language">
            {LANGUAGES.map((language) => {
              const isSelected = language.code === selected;
              return (
                <li key={language.code} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => setSelected(language.code)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg border px-2.5 py-2 text-start text-[13px] transition-colors",
                      isSelected
                        ? "border-primary bg-primary/5 font-medium text-[#17181a]"
                        : "border-[#EDEFF1] text-[#3f4245] hover:border-[#d5d8da]"
                    )}
                  >
                    <FlagIcon code={language.code} className="size-5 flex-none rounded-full" />
                    <span className="truncate">{language.label}</span>
                    {isSelected && (
                      <span className="ms-auto flex size-4 flex-none items-center justify-center rounded-full bg-primary">
                        <CheckIcon className="size-2.5 text-white" strokeWidth={3} />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
