"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/utils/cn";
import type { LegalDocument } from "../types/legal.types";

export default function LegalDocumentView({ document }: { document: LegalDocument }) {
  const t = useTranslations("legal");
  const { sections, callout } = document;
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const headingRefs = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    headingRefs.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === activeId)
  );

  return (
    <div className="mx-auto max-w-[1588px] px-10 pt-14 pb-24 max-[600px]:px-5">
      <div className="grid grid-cols-[285px_1fr] gap-10 max-[960px]:grid-cols-1">
        <div>
          <aside className="sticky top-6 rounded-xl border border-[#ededed] bg-white p-5 max-[960px]:static">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="m-0 text-base font-semibold text-[#1a1a1a]">{t("index")}</h2>
              <span className="text-xs text-[#9a9a9a]">
                {activeIndex + 1} / {sections.length}
              </span>
            </div>

            <div className="mt-3 mb-4 h-0.5 w-full overflow-hidden rounded-full bg-[#f0f0f0]">
              <div
                className="h-full rounded-full bg-brand transition-[width] duration-300"
                style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
              />
            </div>

            <ol className="m-0 list-none space-y-0.5 p-0">
              {sections.map((section, index) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "flex gap-2 rounded-lg px-2.5 py-2 text-[13px] leading-[1.45] transition-colors",
                        isActive
                          ? "bg-[#DAFAF8] font-medium text-brand"
                          : "text-[#8a8a8a] hover:text-[#3a3a3a]"
                      )}
                    >
                      <span className="w-5 flex-none tabular-nums">{index + 1}.</span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </aside>
        </div>

        <div>
          {sections.map((section, index) => (
            <section key={section.id} className="mb-12 last:mb-0">
              <h2
                id={section.id}
                ref={(node) => {
                  if (node) headingRefs.current.set(section.id, node);
                  else headingRefs.current.delete(section.id);
                }}
                className="m-0 scroll-mt-24 text-2xl font-semibold text-[#1a1a1a]"
              >
                {index + 1}. {section.title}
              </h2>

              {section.blocks.map((block) => (
                <div key={block.heading ?? block.body.slice(0, 32)}>
                  {block.heading && (
                    <h3 className="mt-6 mb-2 text-sm font-semibold text-[#1a1a1a]">
                      {block.heading}
                    </h3>
                  )}
                  <p
                    className={cn(
                      "mb-0 text-sm leading-[1.75] text-[#6a6a6a]",
                      block.heading ? "mt-0" : "mt-4"
                    )}
                  >
                    {block.body}
                  </p>
                </div>
              ))}

              {index === sections.length - 1 && (
                <div className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-xl bg-[#f7f7f7] p-7">
                  <div>
                    <p className="m-0 text-[15px] font-semibold text-[#1a1a1a]">{callout.title}</p>
                    <p className="mt-1.5 mb-0 max-w-105 text-[13px] leading-[1.6] text-[#8a8a8a]">
                      {callout.body}
                    </p>
                  </div>
                  <Link
                    href={callout.href}
                    className="flex h-10 flex-none items-center justify-center rounded-full bg-primary px-6 text-[13px] font-semibold text-white transition-opacity hover:opacity-95"
                  >
                    {t(callout.actionLabelKey)}
                  </Link>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
