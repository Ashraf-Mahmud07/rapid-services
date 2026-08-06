"use client";

interface ShareButtonProps {
  title: string;
  className?: string;
}

export default function ShareButton({ title, className }: ShareButtonProps) {
  async function onShare() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
    } catch {
      /*nothing to recover from */
    }
  }

  return (
    <button type="button" onClick={onShare} className={className}>
      Share
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
        <circle cx="18" cy="5" r="2.6" />
        <circle cx="6" cy="12" r="2.6" />
        <circle cx="18" cy="19" r="2.6" />
        <path d="M8.3 13.3l7.4 4.4M15.7 6.3l-7.4 4.4" />
      </svg>
    </button>
  );
}
