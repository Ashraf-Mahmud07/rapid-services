"use client";

import { CheckIcon } from "../icons/CheckIcon";

export default function ApplicationSubmitted() {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <div className="flex size-[74px] animate-[pop_0.4s_ease] items-center justify-center rounded-full bg-[#22B14C] shadow-xs">
        <CheckIcon className="size-[34px] text-white" />
      </div>
      <p className="mt-[22px] text-[13px] font-semibold tracking-[2px] text-[#00A99D] uppercase">
        CONFIRMED
      </p>
      <h3 className="mt-3 text-[24px] font-medium text-[#0E0E0E] sm:text-[32px]">
        Application received
      </h3>
      <p className="mt-3 max-w-[409px] text-center font-inter text-[16px] leading-[100%] font-normal text-[#5B5B5B]">
        Rapid team reviews every application within five business days — you’ll hear from us either
        way.
      </p>
    </div>
  );
}
