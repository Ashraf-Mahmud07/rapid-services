import { CERTIFICATES, CERTIFICATION_INTRO } from "../data/certification.data";
import CertificateCard from "./CertificateCard";

export default function CertificationCredentials() {
  return (
    <section className="pt-14 sm:pt-16 lg:pt-20">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
        <div>
          <p className="mb-3.5 text-xs font-semibold tracking-[1.5px] text-primary uppercase">
            {CERTIFICATION_INTRO.eyebrow}
          </p>
          <h2 className="max-w-[480px] text-[26px] leading-[1.25] font-bold text-[#17181a] sm:text-[30px] lg:text-[34px]">
            {CERTIFICATION_INTRO.title}
          </h2>
        </div>
        <p className="max-w-[340px] text-[13px] leading-[1.7] text-[#8b9096] lg:text-end">
          {CERTIFICATION_INTRO.description}
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {CERTIFICATES.map((certificate) => (
          <CertificateCard key={certificate.code} certificate={certificate} />
        ))}
      </div>
    </section>
  );
}
