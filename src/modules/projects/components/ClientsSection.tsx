import { cn } from "@/shared/utils/cn";
import Image from "next/image";
import asusLogo from "@/modules/home/assets/images/asus.png";
import lenovoLogo from "@/modules/home/assets/images/lenovo.png";
import siemensLogo from "@/modules/home/assets/images/siemens.png";
import sonyLogo from "@/modules/home/assets/images/sony.png";

const logos = [
  sonyLogo,
  lenovoLogo,
  siemensLogo,
  asusLogo,
  lenovoLogo,
  sonyLogo,
  lenovoLogo,
  siemensLogo,
  sonyLogo,
];

export default function ClientsSection() {
  return (
    <section className="my-14 w-full bg-[#0A365C] py-10 md:my-20 md:py-16">
      <div className="container-page flex flex-col items-center">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-[24px] font-semibold text-white md:text-[26px]">
            Our Valuable Clients
          </h2>
          <p className="text-[13px] text-white/70">
            The partners of our success, whose dreams have
            <br />
            become a reality
          </p>
        </div>

        {/* Logos Row */}
        <div className="flex w-full items-center justify-between overflow-hidden">
          {logos.map((logo, index) => {
            const isActive = index === 4; // Center item
            return (
              <div
                key={index}
                className={cn(
                  "flex shrink-0 items-center justify-center rounded-full bg-white",
                  isActive
                    ? "h-[110px] w-[110px] border-[3px] border-primary shadow-[0_0_20px_rgba(8,178,156,0.2)] md:h-[150px] md:w-[150px]"
                    : "h-[85px] w-[85px] md:h-[110px] md:w-[110px]"
                )}
              >
                <div className="relative flex h-[40%] w-[70%] items-center justify-center">
                  <Image
                    src={logo}
                    alt="Company logo"
                    fill
                    className={cn("object-contain", isActive ? "opacity-100" : "opacity-40")}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
