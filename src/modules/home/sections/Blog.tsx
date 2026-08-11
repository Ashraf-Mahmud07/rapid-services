import BlogCard from "../components/BlogCard";

const featuredPost = {
  title: "Advanced Waterproofing: Protecting Concrete from Harsh Climates",
  description:
    "Learn how specialized membrane applications and chemical coatings can extend the lifespan of your building's foundation by preventing moisture intrusion and surface damage.",
  category: "Waterproofing",
  date: "Mar 12, 2026",
  image: "/images/blog/blueprint-review.jpg",
  featured: true,
};

const posts = [
  {
    title: "Structural Restoration: Reviving Heritage Buildings",
    description:
      "A deep dive into the techniques used to reinforce older structures without compromising their original architectural integrity.",
    category: "Project Management",
    date: "Feb 25, 2026",
    image: "/images/services/electrical-installation.jpg",
  },
  {
    title: "Essential Maintenance Tips for Luxury Swimming Pools",
    description:
      "Keep your pool crystal clear with these professional chemical balancing and filtration tips.",
    category: "Maintenance Dept",
    date: "Feb 15, 2026",
    image: "/images/projects/move-out-clean.jpg",
  },
];

export default function Blog() {
  return (
    <section className="section-space">
      <div className="container-narrow">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-semibold tracking-[1.44px] text-primary uppercase">
              From the blog
            </p>
            <h2 className="mt-2 text-[44px] leading-[normal] font-semibold tracking-[-1.408px] text-[#0e0e0e] sm:text-[40px]">
              Insights on <span className="text-primary">precision & quality</span>
            </h2>
          </div>

          <a
            href="#"
            className="text-[15px] font-medium text-[#0e0e0e] transition-opacity hover:opacity-80"
          >
            View All
          </a>
        </div>

        <div className="mt-8 grid gap-[16px] xl:grid-cols-[1.05fr_0.95fr]">
          <BlogCard {...featuredPost} />

          <div className="flex flex-col gap-[16px]">
            {posts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
