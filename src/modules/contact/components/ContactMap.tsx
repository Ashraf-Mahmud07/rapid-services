import { CONTACT_MAP } from "../data/contact.data";

export default function ContactMap() {
  return (
    <section className="mt-6 overflow-hidden rounded-xl sm:mt-8 lg:mt-10">
      <div className="relative">
        <iframe
          title={CONTACT_MAP.title}
          src={CONTACT_MAP.embedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-80 w-full border-0 sm:h-105 lg:h-160"
        />

        {/* The embed is queried as a single place, so its own marker sits with its
            tip on the centre of the frame. The address card is anchored to that
            same centre, which hangs it directly under the pin. */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 mt-2 -translate-x-1/2 rounded-[4px] bg-white px-6 py-4 text-center shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
            <address className="text-[13px] leading-[1.9] font-normal text-[#3c4043] not-italic">
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
