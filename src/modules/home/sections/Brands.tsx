const brands = [
  "Northgate Living",
  "Harbour Estates",
  "Bluecrest Facilities",
  "Vantage Property",
  "Kingsway Group",
  "Meridian Homes",
];

export default function Brands() {
  return (
    <section className="section-space">
      <div className="container mx-auto px-4">
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
                  key={brand}
                  className="flex min-h-[62px] items-center justify-center rounded-[6px] border border-[#efefef] bg-white px-[14px] text-center text-[13px] leading-[18px] font-semibold tracking-[0.2px] text-[#8a8a8a] transition-colors hover:text-[#0e0e0e]"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
