export default function ViewListIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={"block h-4 w-4 max-w-none " + className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66406 4H13.3307M2.66406 8H13.3307M2.66406 12H13.3307"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
    </svg>
  );
}
