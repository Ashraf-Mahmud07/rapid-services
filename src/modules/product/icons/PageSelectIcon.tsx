export default function PageSelectIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={"block h-3.5 w-3.5 max-w-none " + className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#737373" strokeWidth="1.16667" />
    </svg>
  );
}
