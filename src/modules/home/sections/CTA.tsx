import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";

export default function CTA() {
  return (
    <section className="section-space">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[18px] bg-[#0a0e1c] px-6 py-10 sm:px-8 sm:py-12 lg:px-[58px] lg:py-[64px]">
          <div className="pointer-events-none absolute top-0 right-0 size-[420px] translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[560px]">
              <p className="text-[11px] font-semibold tracking-[1.1px] text-primary uppercase">
                Book a visit
              </p>
              <h2 className="mt-4 text-[34px] leading-[40.8px] font-semibold tracking-[-0.884px] text-white sm:text-[38px]">
                One team for the whole property, <span className="text-primary">booked today</span>
              </h2>
              <p className="mt-4 max-w-[520px] text-[16px] leading-[26.25px] text-[rgba(255,255,255,0.56)]">
                Electrical, plumbing, painting, cleaning and repairs under one roof. Tell us what
                needs doing and we will confirm the price before we start.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0 lg:flex-col xl:flex-row">
              <Link
                href={ROUTES.APPOINTMENT}
                className="inline-flex justify-center rounded-full bg-primary px-[30px] py-[14px] text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Book a technician
              </Link>
              <Link
                href={ROUTES.SERVICE}
                className="inline-flex justify-center rounded-full border border-white/20 px-[30px] py-[14px] text-[15px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Browse services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
