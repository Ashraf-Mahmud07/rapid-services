// "use client";

// import { ChevronRight, Volume2, VolumeX } from "lucide-react";
// import * as React from "react";

// import { Link } from "@/i18n/navigation";
// import { ROUTES } from "@/shared/constants/routes";

// const STATS = [
//   { value: "20+", label: "Projects Completed" },
//   { value: "17+", label: "Years Experience" },
//   { value: "120+", label: "Happy Clients" },
// ];

// export default function HomeHero() {
//   const videoRef = React.useRef<HTMLVideoElement>(null);
//   const [isMuted, setIsMuted] = React.useState(false);

//   React.useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleVolumeChange = () => setIsMuted(video.muted);
//     video.addEventListener("volumechange", handleVolumeChange);

//     video.muted = false;
//     video.play().catch(() => {
//       video.muted = true;
//       video.play().catch(() => {
//         // Even muted autoplay failed (rare) - leave it paused; the poster
//         // frame still shows.
//       });
//     });

//     return () => {
//       video.removeEventListener("volumechange", handleVolumeChange);
//     };
//   }, []);

//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     const nextMuted = !video.muted;
//     video.muted = nextMuted;

//     // Unmuting is a genuine user gesture, so this is a reliable place to
//     // retry unmuted playback if the initial autoplay attempt was blocked.
//     if (!nextMuted) {
//       video.play().catch(() => {
//         // If it still fails, just leave it muted rather than fighting the browser.
//         video.muted = true;
//       });
//     }
//   };

//   return (
//     <section className="relative isolate flex min-h-140 items-center overflow-hidden lg:min-h-228.75">
//       <video
//         ref={videoRef}
//         loop
//         playsInline
//         preload="auto"
//         poster="/images/careers-hero.jpg"
//         aria-hidden="true"
//         disablePictureInPicture
//         controlsList="nodownload noplaybackrate"
//         className="absolute inset-0 -z-10 h-full w-full object-cover"
//       >
//         <source src="/hero-background.mp4" type="video/mp4" />
//       </video>
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,10,12,0.94)_0%,rgba(8,10,12,0.82)_38%,rgba(8,10,12,0.45)_62%,rgba(8,10,12,0.25)_100%)]"
//       />

//       <div className="container-page pt-32 pb-14 lg:pt-40 lg:pb-20">
//         <p className="inline-flex rounded-md border border-primary px-4 py-2.5 text-eyebrow font-semibold text-primary uppercase">
//           Trusted Waterproofing Expert
//         </p>

//         <h1 className="mt-6 max-w-[15ch] text-[clamp(2.25rem,6.1vw,5.85rem)] leading-[1.02] font-bold tracking-[-0.045em] text-white">
//           Rapid Contracting
//         </h1>

//         <p className="mt-6 text-[clamp(1.375rem,2.2vw,2.125rem)] leading-[1.24] font-bold tracking-[-0.01em] text-white">
//           Contracting &amp;
//           <br />
//           Waterproofing <span className="text-primary">Excellence</span>
//         </p>

//         <p className="mt-6 max-w-180 border-s-[3px] border-primary ps-5 text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-[2.15] text-white/80 italic">
//           Combining technical expertise with superior craftsmanship, we provide durable cost
//           effective solutions that safeguard properties, enhance performance and deliver long term
//           value for our clients.
//         </p>

//         <div className="mt-6 flex flex-wrap gap-3.5">
//           <button
//             type="button"
//             onClick={toggleMute}
//             aria-pressed={!isMuted}
//             className="inline-flex h-14 cursor-pointer items-center gap-2.5 rounded-full bg-primary px-8 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
//           >
//             {isMuted ? "Unmute Video" : "Mute Video"}
//             {isMuted ? (
//               <VolumeX className="size-4.5" strokeWidth={2} />
//             ) : (
//               <Volume2 className="size-4.5" strokeWidth={2} />
//             )}
//           </button>
//           <Link
//             href={ROUTES.PROJECT}
//             className="inline-flex h-14 items-center gap-2.5 rounded-full border border-primary px-8 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
//           >
//             Explore Projects
//             <ChevronRight className="size-[18px]" strokeWidth={2.2} />
//           </Link>
//         </div>

//         <dl className="mt-8 flex flex-wrap items-center gap-y-6">
//           {STATS.map((stat, index) => (
//             <div
//               key={stat.label}
//               className={
//                 index === 0
//                   ? "pe-8 sm:pe-12"
//                   : "border-s border-white/25 ps-8 pe-8 sm:ps-12 sm:pe-12"
//               }
//             >
//               <dt className="sr-only">{stat.label}</dt>
//               <dd>
//                 <span className="block text-[clamp(1.75rem,2.4vw,2.25rem)] leading-none font-bold text-white">
//                   {stat.value}
//                 </span>
//                 <span className="mt-2.5 block text-[13px] tracking-[0.09em] text-white/80 uppercase">
//                   {stat.label}
//                 </span>
//               </dd>
//             </div>
//           ))}
//         </dl>
//       </div>
//     </section>
//   );
// }

"use client";

import { ChevronRight, Volume2, VolumeX } from "lucide-react";
import * as React from "react";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";

const STATS = [
  { value: "20+", label: "Projects Completed" },
  { value: "17+", label: "Years Experience" },
  { value: "120+", label: "Happy Clients" },
];

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
        // Even muted autoplay failed (rare) - leave it paused; the poster
        // frame still shows.
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
    <section className="relative isolate flex min-h-140 items-center overflow-hidden lg:min-h-228.75">
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

      <div className="container-page pt-32 pb-14 lg:pt-40 lg:pb-20">
        <p className="inline-flex rounded-md border border-primary px-4 py-2.5 text-eyebrow font-semibold text-primary uppercase">
          Trusted Waterproofing Expert
        </p>

        <h1 className="mt-6 max-w-[15ch] text-[clamp(2.25rem,6.1vw,5.85rem)] leading-[1.02] font-bold tracking-[-0.045em] text-white">
          Rapid Contracting
        </h1>

        <p className="mt-6 text-[clamp(1.375rem,2.2vw,2.125rem)] leading-[1.24] font-bold tracking-[-0.01em] text-white">
          Contracting &amp;
          <br />
          Waterproofing <span className="text-primary">Excellence</span>
        </p>

        <p className="mt-6 max-w-180 border-s-[3px] border-primary ps-5 text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-[2.15] text-white/80 italic">
          Combining technical expertise with superior craftsmanship, we provide durable cost
          effective solutions that safeguard properties, enhance performance and deliver long term
          value for our clients.
        </p>

        <div className="mt-6 flex flex-wrap gap-3.5">
          <button
            type="button"
            onClick={toggleMute}
            aria-pressed={!isMuted}
            className={`relative inline-flex h-14 cursor-pointer items-center gap-2.5 rounded-full bg-primary px-8 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 ${
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
            className="inline-flex h-14 items-center gap-2.5 rounded-full border border-primary px-8 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore Projects
            <ChevronRight className="size-[18px]" strokeWidth={2.2} />
          </Link>
        </div>

        <dl className="mt-8 flex flex-wrap items-center gap-y-6">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={
                index === 0
                  ? "pe-8 sm:pe-12"
                  : "border-s border-white/25 ps-8 pe-8 sm:ps-12 sm:pe-12"
              }
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[clamp(1.75rem,2.4vw,2.25rem)] leading-none font-bold text-white">
                  {stat.value}
                </span>
                <span className="mt-2.5 block text-[13px] tracking-[0.09em] text-white/80 uppercase">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
