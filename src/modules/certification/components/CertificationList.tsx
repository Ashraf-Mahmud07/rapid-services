import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../data/certification.data";

export function CertificationList() {
  return (
    <div className="container-page pt-16 pb-4 md:pt-24 md:pb-8">
      {/* Header */}
      <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <div>
          <h2 className="flex max-w-md items-center border-l-[3px] border-primary pl-4 text-[24px] leading-tight font-bold text-[#0E0E0E] md:text-[28px]">
            Recognized by international
            <br />
            and local authorities
          </h2>
        </div>
        <p className="max-w-[420px] text-[13px] leading-relaxed text-[#45556C] md:text-right">
          Documentation for every certificate is available
          <br />
          on request for tenders, audits and client due diligence.
        </p>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-6 md:gap-8">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-[#133555] p-6 md:flex-row md:gap-10 md:p-8 lg:p-10"
          >
            {/* Left Image Box */}
            <div className="relative flex h-[260px] w-full shrink-0 items-center justify-center rounded-xl bg-white p-6 md:h-[280px] md:w-[320px] lg:w-[380px]">
              <Image
                src={cert.image}
                alt={cert.title}
                className="max-h-[160px] w-auto object-contain"
              />
              {/* Badge */}
              <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border-[2px] border-white bg-primary px-4 py-1.5 text-[10px] font-bold tracking-wider whitespace-nowrap text-white shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5" />
                DM Approved
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-1 flex-col pt-6 text-white md:pt-0">
              <div className="mb-4 flex w-fit items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-[9px] font-bold tracking-wider text-white/90 uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/90"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
                {cert.badge}
              </div>

              <h3 className="mb-4 text-2xl font-bold md:text-[28px]">{cert.title}</h3>

              <p className="mb-8 max-w-3xl text-[13px] leading-relaxed text-white/70 md:text-[14px]">
                {cert.description}
              </p>

              <div className="mt-auto flex items-center gap-4 rounded-xl bg-[#2A4C6B] px-5 py-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#2A4C6B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-[12px] font-medium text-white md:text-[13px]">
                  {cert.highlight}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
