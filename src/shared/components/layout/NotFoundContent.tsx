import { ArrowLeft } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function NotFoundContent() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col overflow-x-hidden font-poppins">
      <Navbar variant="solid" />

      <main className="flex flex-1 items-center">
        <div className="container-page flex flex-col items-center gap-10 py-16 sm:py-20 lg:flex-row lg:justify-center lg:gap-15 lg:py-28">
          <div className="relative aspect-[360/341] w-full max-w-[400px] shrink-0">
            <Image
              src="/Error-Page.png"
              alt=""
              aria-hidden="true"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 400px"
              className="object-contain"
            />
          </div>
          <div className="w-full max-w-[420px] text-center lg:text-start">
            <p className="text-[64px] leading-[49px] font-bold tracking-[-2px] text-primary sm:text-[76px] lg:text-[90px]">
              404
            </p>
            <h1 className="tracking[-1.2px] mt-3 text-[30px] font-semibold text-[#0D1B2A] sm:text-[38px] lg:text-[40px]">
              Page Not Found
            </h1>
            <p className="mt-4 text-[16px] leading-[24px] font-normal text-[#555555] sm:text-[17px]">
              The link you&apos;re trying to access is probably broken, or the page has been
              removed.
            </p>

            <Link
              href={ROUTES.HOME}
              className="mt-[21px] inline-flex items-center gap-2.5 pb-2 text-[13px] font-semibold tracking-[0.8px] text-primary uppercase transition-colors hover:text-[#0E504C]"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to home page
            </Link>
          </div>
          ``
        </div>
      </main>

      <Footer />
    </div>
  );
}
