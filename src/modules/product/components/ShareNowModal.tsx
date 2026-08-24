"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkIcon from "../icons/LinkIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

interface ShareNowModalProps {
  shareUrl: string;
  onClose: () => void;
}

export default function ShareNowModal({ shareUrl, onClose }: ShareNowModalProps) {
  const t = useTranslations("product");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const socialShares = [
    {
      name: "Facebook",
      bgClass: "bg-[#e8f2ff] hover:bg-[#d6e7ff]",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: <FacebookIcon className="size-4 sm:size-[22px]" />,
    },
    {
      name: "Twitter",
      bgClass: "bg-[#e8f6fe] hover:bg-[#d0edfe]",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      icon: <TwitterIcon className="size-4 sm:size-[22px]" />,
    },
    {
      name: "Instagram",
      bgClass: "bg-[#fdf0f5] hover:bg-[#fadce7]",
      url: "#",
      onClick: handleCopy,
      icon: <InstagramIcon className="size-4 sm:size-[22px]" />,
    },
    {
      name: "WhatsApp",
      bgClass: "bg-[#eaf9f0] hover:bg-[#d5f3df]",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`,
      icon: <WhatsAppIcon className="size-4 sm:size-[22px]" />,
    },
    {
      name: "Telegram",
      bgClass: "bg-[#e6f3fa] hover:bg-[#d0e8f6]",
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`,
      icon: <TelegramIcon className="size-4 sm:size-[22px]" />,
    },
  ];

  return (
    <div className="flex flex-col gap-3 text-left sm:gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="mb-0 text-lg leading-none font-bold text-[#111827] sm:text-[24px]">
          {t("shareNow")}
        </h3>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
          className="flex size-7 cursor-pointer items-center justify-center rounded-full bg-[#f3f4f6] text-[#3a3d40] transition duration-150 outline-none hover:bg-[#e5e7eb] focus-visible:ring-2 focus-visible:ring-[#00a79d] sm:size-[34px]"
        >
          <X className="size-3.5 sm:size-[14px]" />
          <span className="sr-only">Close</span>
        </button>
      </div>

      <hr className="-mt-1 w-full border-t border-[#F3F4F6]" />

      {/* Share via */}
      <div className="flex flex-col gap-2 sm:gap-3.5">
        <p className="text-sm leading-none font-medium text-[#4b5563] sm:text-[16px]">
          {t("shareLinkVia")}
        </p>
        <div className="flex items-center justify-between gap-1.5 sm:gap-2.5">
          {socialShares.map((social) => {
            const isCustomClick = social.url === "#" && social.onClick;
            return (
              <a
                key={social.name}
                href={social.url}
                onClick={
                  isCustomClick
                    ? (e) => {
                        e.preventDefault();
                        social.onClick!();
                      }
                    : undefined
                }
                target={social.url !== "#" ? "_blank" : undefined}
                rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                className={`flex size-10 items-center justify-center rounded-full transition duration-150 ease-in-out hover:scale-105 active:scale-95 sm:size-[56px] ${social.bgClass}`}
                aria-label={`Share on ${social.name}`}
              >
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>

      {/* Or copy link */}
      <div className="flex flex-col gap-2 sm:gap-4">
        <p className="text-sm leading-none font-medium text-[#4b5563] sm:text-[16px]">
          {t("orCopyLink")}
        </p>
        <div className="flex items-center gap-2 rounded-[100px] border border-[#e5e7eb] bg-white py-1.5 pr-1.5 pl-3 focus-within:border-[#00a79d] focus-within:ring-1 focus-within:ring-[#00a79d]/25 sm:gap-3 sm:py-2 sm:pl-4">
          <LinkIcon className="size-4 shrink-0 text-[#9ca3af] sm:size-[18px]" />
          <span className="min-w-0 flex-1 overflow-hidden text-xs font-normal text-ellipsis whitespace-nowrap text-[#111827] sm:text-[15px]">
            {shareUrl}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleCopy();
            }}
            className={`min-w-[64px] cursor-pointer rounded-[100px] px-3 py-1.5 text-xs font-semibold text-white transition-all duration-150 select-none active:scale-95 sm:min-w-[80px] sm:px-5 sm:py-2.5 sm:text-[15px] ${
              copied ? "bg-emerald-600 hover:bg-emerald-700" : "bg-[#00a79d] hover:bg-[#008f86]"
            }`}
          >
            {copied ? t("copied") : t("copy")}
          </button>
        </div>
      </div>
    </div>
  );
}
