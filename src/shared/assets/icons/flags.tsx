import type { SVGProps } from "react";

/**
 * Simplified flag marks sized for a ~20px circular crop, where fine detail
 * (coats of arms, scripts) is not legible. Swap in exact artwork if needed.
 */
const FLAGS: Record<string, React.ReactNode> = {
  en: (
    <>
      <rect width="24" height="24" fill="#012169" />
      <path d="M0 0l24 24M24 0L0 24" stroke="#fff" strokeWidth="5" />
      <path d="M0 0l24 24M24 0L0 24" stroke="#C8102E" strokeWidth="3" />
      <path d="M12 0v24M0 12h24" stroke="#fff" strokeWidth="8" />
      <path d="M12 0v24M0 12h24" stroke="#C8102E" strokeWidth="4.8" />
    </>
  ),
  es: (
    <>
      <rect width="24" height="24" fill="#AA151B" />
      <rect y="6" width="24" height="12" fill="#F1BF00" />
    </>
  ),
  fr: (
    <>
      <rect width="24" height="24" fill="#fff" />
      <rect width="8" height="24" fill="#002395" />
      <rect x="16" width="8" height="24" fill="#ED2939" />
    </>
  ),
  de: (
    <>
      <rect width="24" height="8" fill="#111" />
      <rect y="8" width="24" height="8" fill="#DD0000" />
      <rect y="16" width="24" height="8" fill="#FFCE00" />
    </>
  ),
  it: (
    <>
      <rect width="24" height="24" fill="#fff" />
      <rect width="8" height="24" fill="#008C45" />
      <rect x="16" width="8" height="24" fill="#CD212A" />
    </>
  ),
  pt: (
    <>
      <rect width="24" height="24" fill="#DA291C" />
      <rect width="10" height="24" fill="#046A38" />
      <circle cx="10" cy="12" r="3.6" fill="#FFE900" />
      <circle cx="10" cy="12" r="2.1" fill="#DA291C" />
    </>
  ),
  zh: (
    <>
      <rect width="24" height="24" fill="#EE1C25" />
      <path d="M5.6 4l.9 2.7h2.8L7 8.4l.9 2.7-2.3-1.7-2.3 1.7.9-2.7-2.3-1.7h2.8z" fill="#FFDE00" />
      <circle cx="11.4" cy="4.2" r="0.9" fill="#FFDE00" />
      <circle cx="13.6" cy="6.4" r="0.9" fill="#FFDE00" />
      <circle cx="13.6" cy="9.4" r="0.9" fill="#FFDE00" />
      <circle cx="11.4" cy="11.5" r="0.9" fill="#FFDE00" />
    </>
  ),
  ja: (
    <>
      <rect width="24" height="24" fill="#fff" />
      <circle cx="12" cy="12" r="6.4" fill="#BC002D" />
    </>
  ),
  ar: (
    <>
      <rect width="24" height="24" fill="#006C35" />
      <rect x="4" y="9" width="16" height="1.7" rx="0.85" fill="#fff" />
      <rect x="4" y="13.6" width="16" height="1.2" rx="0.6" fill="#fff" />
    </>
  ),
  hi: (
    <>
      <rect width="24" height="8" fill="#FF9933" />
      <rect y="8" width="24" height="8" fill="#fff" />
      <rect y="16" width="24" height="8" fill="#138808" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="#000080" strokeWidth="0.9" />
      <circle cx="12" cy="12" r="0.8" fill="#000080" />
    </>
  ),
};

interface FlagIconProps extends SVGProps<SVGSVGElement> {
  code: string;
}

export function FlagIcon({ code, ...props }: FlagIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {FLAGS[code] ?? FLAGS.en}
    </svg>
  );
}
