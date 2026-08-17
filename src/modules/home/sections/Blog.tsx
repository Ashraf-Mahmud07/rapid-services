import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { FEATURED_POST, HOME_POSTS } from "../data/home.data";

const META = "text-[11px] tracking-[0.06em] text-body-soft uppercase";

export default function Blog() {
  return (
    <section className="section-space">
      <div className="container-narrow">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold tracking-[0.13em] text-primary uppercase">
              From the blog
            </p>
            <h2 className="mt-2.5 text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.21] font-bold tracking-[-0.026em] text-ink">
              Insights on <span className="text-primary">precision &amp; quality</span>
            </h2>
          </div>
          <Link
            href={ROUTES.BLOG}
            className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            View All Blogs
          </Link>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          {/* Featured — copy above the image, full-width action beneath it. */}
          <article className="flex flex-col rounded-[6px] bg-panel p-5">
            <p className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.1em] text-primary uppercase">
                {FEATURED_POST.category}
              </span>
              <span className="text-[11px] text-body-soft">·</span>
              <span className="text-[11px] text-body-soft">{FEATURED_POST.date}</span>
            </p>

            <h3 className="mt-3 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.3] font-semibold text-primary">
              {FEATURED_POST.title}
            </h3>
            <p className="mt-3 text-[13px] leading-[1.6] text-body-soft">
              {FEATURED_POST.description}
            </p>

            <div className="relative mt-4 aspect-[376/213] w-full overflow-hidden rounded-[4px]">
              <Image
                src={FEATURED_POST.image}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <Link
              href={ROUTES.BLOG}
              className="mt-4 flex h-11 items-center justify-center rounded-[6px] bg-primary text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Read more
            </Link>
          </article>

          <ul className="flex flex-col gap-3">
            {HOME_POSTS.map((post) => (
              <li key={post.title}>
                <Link
                  href={ROUTES.BLOG}
                  className="group flex gap-4 rounded-[6px] bg-panel p-3.5 transition-colors hover:bg-[#eef0f1]"
                >
                  <span className="relative aspect-[124/86] w-31 flex-none overflow-hidden rounded-[4px]">
                    <Image
                      src={post.image}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="124px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className={META}>{post.date}</span>
                      <span className={META}>·</span>
                      <span className={META}>{post.category}</span>
                    </span>
                    <span className="mt-1 block text-[14.5px] leading-[1.35] font-semibold text-ink transition-colors group-hover:text-primary">
                      {post.title}
                    </span>
                    <span className="mt-1.5 block text-[12.5px] leading-[1.55] text-body-soft">
                      {post.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
