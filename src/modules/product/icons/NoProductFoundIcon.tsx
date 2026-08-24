export default function NoProductFoundIcon({ className = "size-16" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.75 22.5C18.5825 22.5 22.5 18.5825 22.5 13.75C22.5 8.91751 18.5825 5 13.75 5C8.91751 5 5 8.91751 5 13.75C5 18.5825 8.91751 22.5 13.75 22.5Z"
        stroke="#BBBBBB"
        strokeWidth="1.25"
      />
      <path d="M26.25 26.25L20.875 20.875" stroke="#BBBBBB" strokeWidth="1.25" />
    </svg>
  );
}
