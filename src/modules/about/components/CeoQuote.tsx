import Image from "next/image";

/**
 * The reference quote talks about reselling consumer electronics and names a
 * co-founder who appears nowhere else on the site — clearly carried over from
 * the template it was built on. The layout is reproduced exactly; the words are
 * Rapid's own trade. Swap the quote and bio for the CEO's real copy when you
 * have it.
 */
export default function CeoQuote() {
  return (
    <section className="section-space">
      <div className="container-page">
        <div className="grid gap-8 rounded-[14px] surface-wash p-6 sm:p-9 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-14 lg:p-12">
          <div className="relative aspect-square w-full overflow-hidden rounded-[10px] lg:aspect-[290/340]">
            <Image
              src="/images/about/ceo.png"
              alt="Mohammed Jahangir Alam"
              fill
              sizes="(max-width: 1024px) 100vw, 290px"
              className="object-cover"
            />
          </div>

          <figure className="flex flex-col justify-center">
            <figcaption className="text-eyebrow font-semibold text-primary uppercase">
              From the CEO
            </figcaption>

            <blockquote className="mt-4 text-[clamp(1.125rem,1.9vw,1.6rem)] leading-[1.34] font-semibold tracking-[-0.015em] text-ink">
              &ldquo;We would rather quote the whole job honestly than win it cheap and come back
              for the rest later. That has cost us work. It is still the best decision this company
              has made.&rdquo;
            </blockquote>

            <p className="mt-5 max-w-[720px] text-[14.5px] leading-[1.7] text-body-soft">
              Mohammed Jahangir Alam founded Rapid in 2009 after years on the tools across the
              Emirates. He still reviews the pricing on every major job and reads the customer
              feedback one morning a week.
            </p>

            <div className="mt-6 border-t border-black/10 pt-5">
              <p className="text-[15px] font-semibold text-ink">Mohammed Jahangir Alam</p>
              <p className="mt-0.5 text-[13.5px] text-body-soft">
                Co-founder &amp; Chief Executive Officer
              </p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
