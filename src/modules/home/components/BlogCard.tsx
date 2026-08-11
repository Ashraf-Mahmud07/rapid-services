import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}

export default function BlogCard({
  title,
  description,
  category,
  date,
  image,
  featured = false,
}: BlogCardProps) {
  return (
    <article
      className={`overflow-hidden rounded-md border border-[#efefef] bg-[#fafafa] ${
        featured ? "flex flex-col" : "grid gap-4 md:grid-cols-[170px_1fr]"
      }`}
    >
      <div className={`${featured ? "relative h-[300px]" : "relative h-[157px]"} overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 170px"}
          className="object-cover"
        />
      </div>

      <div
        className={`${featured ? "flex flex-1 flex-col px-[24px] pt-[20px] pb-[24px]" : "flex flex-col justify-center px-[10px] py-[12px] pr-[16px]"}`}
      >
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#a3a3a3]">
          <span className="font-semibold tracking-[0.6px] text-primary uppercase">{category}</span>
          <span>·</span>
          <span>{date}</span>
        </div>

        <h3
          className={`mt-3 font-medium tracking-[-0.256px] text-[#0e0e0e] ${
            featured
              ? "text-[24px] leading-[30.72px] text-primary"
              : "text-[16px] leading-[21.12px]"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-2 text-[14.5px] leading-[23.2px] text-[#737373] ${featured ? "max-w-[520px]" : "text-[12.5px] leading-[19.38px]"}`}
        >
          {description}
        </p>

        {featured ? (
          <a
            href="#"
            className="mt-6 inline-flex w-fit rounded-md bg-primary px-[22px] py-[12px] text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Read More
          </a>
        ) : null}
      </div>
    </article>
  );
}
