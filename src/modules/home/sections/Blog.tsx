import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { FEATURED_POST, HOME_POSTS } from "../data/home.data";

export default function Blog() {
  return (
    <section className="bg-[#E6FAF8] py-14 lg:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <span className="text-[12px] font-bold tracking-[0.14em] text-primary uppercase">
              From the blog
            </span>
            <h2 className="mt-2 text-[32px] leading-[1.2] font-bold tracking-tight text-[#0E0E0E] sm:text-[38px] lg:text-[42px]">
              Insights on <span className="text-primary">precision &amp; quality</span>
            </h2>
          </div>
          <div className="shrink-0">
            <Link
              href={ROUTES.BLOG}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
            >
              View All Blogs
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-7 lg:mt-12 lg:grid-cols-2">
          {/* Featured Post Card */}
          <article className="flex flex-col justify-between rounded-[20px] bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg sm:p-7">
            <div>
              <p className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-[0.12em] text-primary uppercase">
                  {FEATURED_POST.category}
                </span>
                <span className="text-[11px] text-[#737373]">·</span>
                <span className="text-[11px] font-medium text-[#737373]">{FEATURED_POST.date}</span>
              </p>

              <h3 className="mt-3 text-[20px] leading-[1.3] font-bold text-[#0E0E0E] sm:text-[22px]">
                {FEATURED_POST.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.65] text-[#737373] sm:text-[14.5px]">
                {FEATURED_POST.description}
              </p>
            </div>

            <div className="relative my-6 aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-neutral-100">
              <Image
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <Link
              href={ROUTES.BLOG}
              className="flex h-12 w-full items-center justify-center rounded-full bg-primary text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
            >
              Read more
            </Link>
          </article>

          {/* Right Column List Cards */}
          <ul className="flex flex-col gap-4 sm:gap-4.5">
            {HOME_POSTS.map((post, index) => (
              <li key={`${post.title}-${index}`}>
                <Link
                  href={ROUTES.BLOG}
                  className="group flex items-center gap-4 rounded-[16px] bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:p-4.5"
                >
                  <div className="relative aspect-[140/95] w-[120px] flex-none overflow-hidden rounded-[12px] bg-neutral-100 sm:w-[140px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="140px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-[#737373]">{post.date}</span>
                      <span className="text-[11px] text-[#737373]">·</span>
                      <span className="text-[11px] font-bold tracking-[0.1em] text-primary uppercase">
                        {post.category}
                      </span>
                    </p>
                    <h3 className="mt-1 line-clamp-1 text-[15.5px] font-bold text-[#0E0E0E] transition-colors group-hover:text-primary sm:text-[16.5px]">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[13px] leading-[1.5] text-[#737373]">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
