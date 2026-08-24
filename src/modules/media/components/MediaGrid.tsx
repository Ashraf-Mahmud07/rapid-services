"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

import { MEDIA_IMAGES, MEDIA_VIDEOS } from "../data/media.data";

export default function MediaGrid() {
  const [activeTab, setActiveTab] = useState<"photo" | "video">("photo");
  const [index, setIndex] = useState(-1);

  // Convert imported images to lightbox slide format
  const photoSlides = MEDIA_IMAGES.map((img) => ({ src: img.src, alt: img.alt }));

  // The active slides based on the tab
  const slides = activeTab === "photo" ? photoSlides : MEDIA_VIDEOS;

  return (
    <div className="container-page py-10 md:py-16">
      {/* Header & Tabs */}
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="flex items-center border-l-[3px] border-primary pl-4 text-[26px] font-bold text-primary md:text-[28px]">
            Media
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-gray-500">
            Waterproofing is the fundamental pillar for preserving the lifespan of any building. At
            Taj Alrahmah, we don&apos;t just offer insulation;
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("photo")}
            className={`cursor-pointer rounded-full px-8 py-2.5 text-[14px] font-medium transition-colors ${
              activeTab === "photo"
                ? "bg-primary text-white"
                : "bg-primary/10 text-primary hover:bg-primary/20"
            }`}
          >
            Photo
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`cursor-pointer rounded-full px-8 py-2.5 text-[14px] font-medium transition-colors ${
              activeTab === "video"
                ? "bg-primary text-white"
                : "bg-primary/10 text-primary hover:bg-primary/20"
            }`}
          >
            Video
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
        {activeTab === "photo"
          ? MEDIA_IMAGES.map((img, i) => (
              <div
                key={img.id}
                onClick={() => setIndex(i)}
                className="group relative col-span-1 aspect-video cursor-pointer overflow-hidden rounded-xl bg-gray-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            ))
          : MEDIA_VIDEOS.map((vid, i) => (
              <div
                key={vid.id}
                onClick={() => setIndex(i)}
                className="group relative col-span-1 aspect-video cursor-pointer overflow-hidden rounded-xl bg-gray-900"
              >
                <video
                  src={vid.sources[0].src}
                  preload="metadata"
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/30">
                  <div className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="size-6 text-white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Video]}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(8px)" },
        }}
        video={{
          autoPlay: true,
          controls: true,
          loop: true,
        }}
      />
    </div>
  );
}
