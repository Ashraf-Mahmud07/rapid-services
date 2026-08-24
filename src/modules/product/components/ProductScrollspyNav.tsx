"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const navItems = [
  { key: "overview", targetId: "product-overview" },
  { key: "specifications", targetId: "product-specifications" },
  { key: "reviews", targetId: "product-ratings" },
];

export default function ProductScrollspyNav() {
  const t = useTranslations("product");
  const [activeId, setActiveId] = useState<string>("product-overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.targetId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(targetId);
    }
  };

  return (
    <div className="sticky top-0 left-0 z-20 mb-6 w-full border-b border-solid border-[#f2f2f2] bg-white/95 pt-3 pb-0 backdrop-blur-md sm:mb-8 sm:pt-4">
      <nav className="no-scrollbar flex items-center gap-1 overflow-x-auto sm:gap-2">
        {navItems.map((item) => {
          const isActive = activeId === item.targetId;

          return (
            <button
              key={item.targetId}
              type="button"
              onClick={() => handleNavClick(item.targetId)}
              className={`relative cursor-pointer px-3 pt-2 pb-3 text-[15px] font-medium whitespace-nowrap transition-colors sm:px-5 sm:pb-4 sm:text-[15px] ${
                isActive ? "font-semibold text-primary" : "text-[#737373] hover:text-[#0e0e0e]"
              }`}
            >
              {t(item.key)}
              {isActive && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary transition-all" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
