"use client";

import { ChevronRight, Volume2, VolumeX } from "lucide-react";
import * as React from "react";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";

export default function HomeHero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(false);
  const [wasAutoplayBlocked, setWasAutoplayBlocked] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVolumeChange = () => setIsMuted(video.muted);
    video.addEventListener("volumechange", handleVolumeChange);

    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      setWasAutoplayBlocked(true);
      video.play().catch(() => {
        // Even muted autoplay failed - leave it paused; poster shows.
      });
    });

    return () => {
      video.removeEventListener("volumechange", handleVolumeChange);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setWasAutoplayBlocked(false);
    if (!nextMuted) {
      video.play().catch(() => {
        video.muted = true;
      });
    }
  };

  const showAutoplayHint = wasAutoplayBlocked && isMuted;

  return (
    <section className="relative isolate flex min-h-[600px] items-center overflow-hidden lg:min-h-[750px] xl:min-h-[850px]">
      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        poster="/images/careers-hero.jpg"
        aria-hidden="true"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,10,12,0.94)_0%,rgba(8,10,12,0.82)_38%,rgba(8,10,12,0.45)_62%,rgba(8,10,12,0.25)_100%)]"
      />

      <div className="container-page pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[990px]">
          {/* Eyebrow Badge */}
          <div className="inline-flex rounded-md border border-white/20 bg-white/10 px-4 text-[11px] leading-[29px] font-semibold tracking-[0.14em] text-white uppercase sm:text-[12px]">
            Trusted waterproofing expert
          </div>

          {/* Main Headings */}
          <h1 className="mt-5 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.04] font-bold tracking-tight text-white">
            TAJ AL <span className="text-primary">RAHMAN</span>
          </h1>

          <p className="mt-3 text-[clamp(1.35rem,2.8vw,2.25rem)] leading-[1.15] font-bold tracking-tight text-white uppercase">
            Contracting &amp; Waterproofing <span className="text-primary">Excellence</span>
          </p>

          {/* Left Border Quote */}
          <p className="mt-6 max-w-[848px] border-s-4 border-primary ps-5 text-[clamp(0.9375rem,1.15vw,1.25rem)] leading-[1.85] text-white/60 italic">
            Combining technical expertise with superior craftsmanship, we provide durable cost
            effective solutions that safeguard properties, enhance performance and deliver long term
            value for our clients.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 sm:gap-5">
            <button
              type="button"
              onClick={toggleMute}
              aria-pressed={!isMuted}
              className={`relative inline-flex h-12 cursor-pointer items-center gap-2.5 rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98] sm:h-13 sm:px-8 ${
                showAutoplayHint ? "animate-pulse ring-4 ring-primary/40" : ""
              }`}
            >
              {showAutoplayHint && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/50"
                />
              )}
              {isMuted ? "Unmute Video" : "Mute Video"}
              {isMuted ? (
                <VolumeX className="size-4.5" strokeWidth={2} />
              ) : (
                <Volume2 className="size-4.5" strokeWidth={2} />
              )}
            </button>
            <Link
              href={ROUTES.PROJECT}
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98] sm:h-13 sm:px-8"
            >
              Explore Projects
              <ChevronRight className="size-[18px]" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
