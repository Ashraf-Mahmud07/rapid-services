import type { SVGProps } from "react";

export function UploadIcon({
  className = "size-4 text-gray-500",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 11V3M8 3L4.5 6.5M8 3L11.5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 13.5H13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
