import { Blog } from "../types/blogs.types";
import blog1Image from "@/modules/blogs/assets/1.jpg";
import blog2Image from "@/modules/blogs/assets/2.jpg";
import blog3Image from "@/modules/blogs/assets/3.jpg";
import blog4Image from "@/modules/blogs/assets/4.jpg";
import project1Image from "@/shared/assets/png/projects1.jpg";
import blogImage from "@/shared/assets/png/blog.jpg";

export const featuredBlogs: Blog[] = [
  {
    id: "f1",
    category: "Inspection",
    date: "Aug 17, 2026",
    readTime: "4 min",
    title: "Ensuring Quality with Comprehensive Inspection Services",
    description:
      "Inspection services are crucial for maintaining safety, quality, and compliance across industries. From vendor checks to factory audits, thorough inspections help identify risks early.",
    image: blog1Image,
    isFeatured: true,
  },
  {
    id: "f2",
    category: "Force & Torque",
    date: "Aug 12, 2026",
    readTime: "6 min",
    title: "Precision Matters: Force Torque Testing Solutions",
    description:
      "Force and torque measurement is vital for industrial efficiency and safety. Our services include calibration of torque wrenches, gauges, and other precision equipment.",
    image: blog2Image,
    isFeatured: true,
  },
];

export const listBlogs: Blog[] = [
  {
    id: "l1",
    category: "Process Control Instrumentation",
    date: "Aug 7, 2026",
    readTime: "6 min",
    title: "Advanced Process Control Instrumentation for Industrial Efficiency",
    description:
      "Process control instrumentation monitors and regulates critical processes accurately. Pressure, temperature, flow, and level transmitters help maintain operational stability. Safety devices...",
    image: blog3Image,
  },
  {
    id: "l2",
    category: "Electrical & Electronics",
    date: "Aug 2, 2026",
    readTime: "4 min",
    title: "Electrical & Electronics Testing for Reliable Operations",
    description:
      "Accurate testing of electrical and electronic systems prevents failures and ensures safety. Digital & analogue multimeters, high-voltage testers, and power supplies are calibrated to meet...",
    image: blog4Image,
  },
  {
    id: "l3",
    category: "Cleaning",
    date: "Jun 30, 2026",
    readTime: "3 min",
    title: "A deep clean checklist landlords actually accept",
    description:
      "The eleven items inspectors look for, in the order a professional crew works through them. Learn the insider strategies that guarantee your property passes its final walkthrough on the very first attempt, saving you time and dispute costs.",
    image: project1Image,
  },
  {
    id: "l4",
    category: "Painting",
    date: "Jun 23, 2026",
    readTime: "5 min",
    title: "Getting a finish that survives the handover",
    description:
      "Two coats is not a spec. What we actually agree with clients before a brush comes out, and why it saves a repaint. Discover how proper surface preparation and specific material choices dictate the true longevity of your interior spaces.",
    image: blogImage,
  },
  {
    id: "l5",
    category: "Repairs",
    date: "Jun 18, 2026",
    readTime: "5 min",
    title: "Hairline cracks: when to fill and when to call",
    description:
      "A quick way to tell settling from movement, without guessing at it. We outline the exact structural warning signs that mean you need a professional assessment versus the minor cosmetic blemishes you can safely handle yourself.",
    image: project1Image,
  },
  {
    id: "l6",
    category: "Flooring",
    date: "Jun 11, 2026",
    readTime: "7 min",
    title: "Epoxy floors in working plant rooms",
    description:
      "Downtime is the real cost. How we phase a pour so the room keeps running while the floor goes down. Step-by-step guidance on industrial floor coatings that provide maximum durability while minimizing operational disruption in critical facilities.",
    image: blogImage,
  },
];

export const defaultBlogDetail: Blog = {
  id: "future-of-design",
  category: "Design",
  date: "Aug 06, 2026",
  readTime: "10 min",
  title: "The Future of Modern Product Design",
  description: "Where technology meets intuition, simplicity, and long-term value.",
  image: blogImage,
  content: [
    {
      heading: "Design Is Becoming Invisible",
      text: [
        "Modern product design is moving toward invisibility. The best products no longer demand attention through complexity — they integrate naturally into daily life. Interfaces are cleaner, materials feel more refined, and interactions are increasingly intuitive.",
        'Instead of overwhelming users with features, modern design focuses on clarity. Every button, surface, and interaction has a reason to exist. If something does not add value, it is removed. This shift is redefining what "premium" truly means.',
      ],
    },
    {
      heading: "Function Over Decoration",
      text: [
        "Aesthetic appeal still matters, but decoration alone is no longer enough. The future belongs to products that combine visual simplicity with purposeful engineering. Clean lines, balanced proportions, and thoughtful material choices now reflect performance and reliability.",
        "Design is no longer just about how something looks — it is about how it behaves. Responsiveness, tactile feedback, weight distribution, and ergonomics all contribute to the overall experience. The most successful products are those that feel right from the first interaction.",
      ],
    },
    {
      heading: "Sustainability and Longevity",
      text: [
        "Modern product design is increasingly driven by long-term thinking. Consumers expect durability, repairability, and sustainable production processes. Brands are responding with modular components, higher-quality materials, and more responsible manufacturing methods.",
        "Longevity is becoming a core design principle. Instead of designing for rapid replacement cycles, companies are creating products meant to last. Timeless design and dependable performance are replacing short-term trends.",
      ],
    },
    {
      heading: "Seamless Ecosystems",
      text: [
        "Products no longer exist in isolation. The future of design lies in ecosystems where devices communicate effortlessly. Wireless integration, synchronized software updates, and unified user experiences are shaping how technology fits into everyday life.",
        "This interconnected approach reduces friction and enhances efficiency. When products work together seamlessly, they create a smoother, more cohesive experience that feels natural rather than technical.",
      ],
    },
    {
      heading: "Human-Centered Innovation",
      text: [
        "At its core, modern product design is returning to human needs. Technology should adapt to people — not the other way around. Simplicity, accessibility, and emotional connection are becoming as important as raw performance.",
        "The future of product design is not louder or more complicated. It is smarter, more intentional, and deeply focused on improving real-life experiences. In this evolution, less truly becomes more — and design becomes a tool for clarity rather than distraction.",
      ],
    },
  ],
};

export function getBlogById(id: string): Blog {
  const allBlogs = [...featuredBlogs, ...listBlogs];
  const found = allBlogs.find((item) => item.id === id);
  return found || defaultBlogDetail;
}
