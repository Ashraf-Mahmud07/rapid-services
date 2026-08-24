interface IconProps {
  className?: string;
}

export default function WhyChooseUsCheckIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3334 4L6.00008 11.3333L2.66675 8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
