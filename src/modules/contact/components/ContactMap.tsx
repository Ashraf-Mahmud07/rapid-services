import { CONTACT_MAP } from "../data/contact.data";

export default function ContactMap() {
  return (
    <section className="mt-6 overflow-hidden rounded-[14px] border border-[#bfe3dd] sm:mt-8 lg:mt-[34px]">
      <div className="relative">
        <iframe
          title={CONTACT_MAP.title}
          src={CONTACT_MAP.embedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[320px] w-full border-0 sm:h-[420px] lg:h-[520px]"
        />

        {/* Brand pin and address card composited over the embed. The pin tip and
            the card are anchored to the centre of the map, which is where the
            embed geocodes the address to. */}
        <div className="pointer-events-none absolute inset-0">
          <svg
            width="38"
            height="50"
            viewBox="0 0 24 32"
            fill="none"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full drop-shadow-[0_3px_6px_rgba(0,0,0,0.28)]"
          >
            <path
              d="M12 0C5.373 0 0 5.373 0 12c0 8.4 12 20 12 20s12-11.6 12-20C24 5.373 18.627 0 12 0z"
              fill="#00A79D"
            />
            <circle cx="12" cy="12" r="4.4" fill="#fff" />
          </svg>

          <div className="absolute top-1/2 left-1/2 mt-3 -translate-x-1/2 rounded-md bg-white px-8 py-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            <p className="mb-2.5 text-[17px] font-semibold text-primary">Address</p>
            <address className="text-sm leading-[1.85] font-normal text-[#3f4245] not-italic">
              {CONTACT_MAP.addressLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
