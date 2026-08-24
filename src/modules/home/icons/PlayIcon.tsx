interface IconProps {
  className?: string;
}

export default function PlayIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5.14v13.72a1 1 0 001.555.832l11-6.86a1 1 0 000-1.664l-11-6.86A1 1 0 008 5.14z" />
    </svg>
  );
}
