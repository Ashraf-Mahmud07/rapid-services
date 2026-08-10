import Image from "next/image";

/** Mission left, photograph centred, vision right-aligned against it. */
export default function MissionVision() {
  return (
    <section className="section-space">
      <div className="container-page">
        <div className="grid items-center gap-10 rounded-[14px] surface-wash p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_380px_minmax(0,1fr)] lg:gap-12 lg:p-14">
          <div>
            <h2 className="border-b border-primary/35 pb-3 text-[17px] font-bold tracking-[0.06em] text-primary uppercase">
              Our Mission
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.75] text-body-soft">
              We price the whole job before we start and judge every decision on whether the repair
              still holds in five years — not on what is quickest to close today.
            </p>
          </div>

          <div className="relative order-first aspect-[380/255] w-full overflow-hidden rounded-[8px] lg:order-none">
            <Image
              src="/images/about/mission-vision.jpg"
              alt="Two technicians working on a plant room installation"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
          </div>

          <div className="lg:text-end">
            <h2 className="border-b border-primary/35 pb-3 text-[17px] font-bold tracking-[0.06em] text-primary uppercase">
              Our Vision
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.75] text-body-soft">
              We want workmanship to be measurable. So we publish what we track — how often we
              return to a job, how fast we arrive, and how many jobs close on the first visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
