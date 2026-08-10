import Image from "next/image";

/**
 * Client logos shown in the "Trusted by" rail.
 *
 * These are PLACEHOLDERS — invented names with generated wordmarks, not real
 * clients. To swap in the genuine article, replace the file at `logo` in
 * public/images/brands/ and update `name`. Nothing else needs to change:
 * the layout sizes by height and centres, so any reasonable aspect ratio
 * works. See public/images/brands/README.md.
 */
const brands = [
  { name: "Northgate Living", logo: "/images/brands/northgate.png" },
  { name: "Harbour Estates", logo: "/images/brands/harbour.png" },
  { name: "Bluecrest Facilities", logo: "/images/brands/bluecrest.png" },
  { name: "Vantage Property", logo: "/images/brands/vantage.png" },
  { name: "Kingsway Group", logo: "/images/brands/kingsway.png" },
  { name: "Meridian Homes", logo: "/images/brands/meridian.png" },
];

export default function Brands() {
  return (
    <section className="section-space">
      <div className="container mx-auto">
        <div className="rounded-[6px] border border-[#efefef] bg-[#fafafa] px-[24px] py-[28px] lg:px-[40px]">
          <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div className="max-w-[260px]">
              <p className="text-[11px] font-semibold tracking-[1.1px] text-primary uppercase">
                Trusted by
              </p>
              <p className="mt-3 text-[16px] leading-[24px] font-medium text-[#0e0e0e]">
                Landlords, agencies and facility teams book us on contract.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-[14px] sm:grid-cols-3">
              {brands.map((brand) => (
                <li
                  key={brand.name}
                  className="flex min-h-[62px] items-center justify-center rounded-[6px] border border-[#efefef] bg-white px-[14px]"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={200}
                    height={62}
                    className="h-9.5 w-auto opacity-70 transition-opacity hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
