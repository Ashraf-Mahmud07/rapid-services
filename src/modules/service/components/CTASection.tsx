import { Link } from "@/i18n/navigation";

export default function CTASection() {
  return (
    <div className="container-page pb-16 md:pb-24">
      <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-xl bg-[#0A365C] p-6 sm:p-8 md:flex-row md:gap-8 md:p-12 lg:p-16">
        <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/5 blur-3xl"></div>

        <div className="relative z-10 md:max-w-xl">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Book a visit for this week.
          </h2>
          <p className="text-base leading-relaxed text-white/70">
            Tell us what needs doing. You&apos;ll get a fixed quote the same day and a two-hour
            arrival window.
          </p>
        </div>

        <div className="relative z-10 flex w-full shrink-0 flex-col gap-4 sm:flex-row md:w-auto">
          <Link
            href="/appointment"
            className="rounded-full bg-primary px-6 py-3.5 text-center font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Book a technician
          </Link>
          <a
            href="tel:7185550142"
            className="rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-center font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            (718) 555-0142
          </a>
        </div>
      </div>
    </div>
  );
}
