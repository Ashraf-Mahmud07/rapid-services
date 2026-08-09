import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { Clock, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    label: "Address",
    value: "Industrial Area No 5, Sharjah, UAE",
    icon: MapPin,
  },
  {
    label: "Call us",
    value: "+971 56 440 6456",
    href: "tel:+971564406456",
    icon: Phone,
  },
  {
    label: "Hours",
    value: "Sat–Thu: 8:00 am – 9:00 pm",
    icon: Clock,
  },
];

export default function Contact() {
  return (
    <section className="section-space">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-[60px]">
          <div className="max-w-[560px]">
            <p className="text-[11px] font-semibold tracking-[1.1px] text-primary uppercase">
              Get in touch
            </p>
            <h2 className="mt-4 text-[34px] leading-[41px] font-semibold tracking-[-0.884px] text-[#0e0e0e] sm:text-[38px]">
              Tell us what needs doing, <span className="text-primary">we quote the same day</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-[24.65px] text-[#737373]">
              Send us the details of the job or call the workshop directly. You get a fixed price
              and a two-hour arrival window before anyone is booked in.
            </p>

            <div className="mt-8 grid gap-[14px] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const content = (
                  <>
                    <span className="flex size-[46px] flex-none items-center justify-center rounded-[6px] bg-primary text-white">
                      <Icon className="size-[22px]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold tracking-[1.1px] text-[#a3a3a3] uppercase">
                        {detail.label}
                      </span>
                      <span className="mt-1 block text-[14.5px] leading-[22px] text-[#0e0e0e]">
                        {detail.value}
                      </span>
                    </span>
                  </>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="flex items-center gap-4 rounded-[6px] border border-[#efefef] bg-[#fafafa] px-[18px] py-[16px] transition-colors hover:border-primary/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="flex items-center gap-4 rounded-[6px] border border-[#efefef] bg-[#fafafa] px-[18px] py-[16px]"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-[18px] bg-[#0a0e1c] px-[28px] py-[36px] sm:px-[38px] sm:py-[46px]">
            <h3 className="max-w-[320px] text-[26px] leading-[32px] font-semibold tracking-[-0.52px] text-white">
              Request a fixed quote
            </h3>
            <p className="mt-4 max-w-[360px] text-[14.5px] leading-[24.65px] text-[rgba(255,255,255,0.56)]">
              Describe the problem and we will tell you which trade you need, what it costs and when
              we can be there.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={ROUTES.CONTACT}
                className="inline-flex justify-center rounded-full bg-primary px-[24px] py-[12px] text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Send a request
              </Link>
              <a
                href="tel:+971564406456"
                className="inline-flex justify-center rounded-full border border-white/20 px-[24px] py-[12px] text-[15px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                +971 56 440 6456
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
