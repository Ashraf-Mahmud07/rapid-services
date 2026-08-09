import { Blog } from "../types/blogs.types";
import project1Image from "@/shared/assets/png/projects1.jpg";
import blogImage from "@/shared/assets/png/blog.jpg";

export const featuredBlogs: Blog[] = [
  {
    id: "f1",
    category: "Plumbing",
    date: "Jul 28, 2026",
    readTime: "4 min",
    title: "The five leaks worth fixing before winter",
    description:
      "Most water damage we see started as a drip somebody stopped noticing. Here is what to check before the first freeze, and which of them you can handle yourself.",
    image: project1Image,
    isFeatured: true,
  },
  {
    id: "f2",
    category: "Plumbing",
    date: "Jul 28, 2026",
    readTime: "4 min",
    title: "The five leaks worth fixing before winter",
    description:
      "Most water damage we see started as a drip somebody stopped noticing. Here is what to check before the first freeze, and which of them you can handle yourself.",
    image: project1Image,
    isFeatured: true,
  },
];

export const listBlogs: Blog[] = [
  {
    id: "l1",
    category: "Electrical",
    date: "Jul 14, 2026",
    readTime: "6 min",
    title: "What a socket that feels warm is telling you",
    description: "Heat at the faceplate is rarely the socket itself. A short guide to what sits.",
    image: project1Image,
  },
  {
    id: "l2",
    category: "Electrical",
    date: "Jul 14, 2026",
    readTime: "6 min",
    title: "What a socket that feels warm is telling you",
    description: "Heat at the faceplate is rarely the socket itself. A short guide to what sits.",
    image: project1Image,
  },
  {
    id: "l3",
    category: "Cleaning",
    date: "Jun 30, 2026",
    readTime: "3 min",
    title: "A deep clean checklist landlords actually accept",
    description:
      "The eleven items inspectors look for, in the order a professional crew works through them.",
    image: project1Image,
  },
  {
    id: "l4",
    category: "Cleaning",
    date: "Jun 30, 2026",
    readTime: "3 min",
    title: "A deep clean checklist landlords actually accept",
    description:
      "The eleven items inspectors look for, in the order a professional crew works through them.",
    image: project1Image,
  },
  {
    id: "l5",
    category: "Repairs",
    date: "Jun 18, 2026",
    readTime: "5 min",
    title: "Hairline cracks: when to fill and when to call",
    description: "A quick way to tell settling from movement, without guessing at it.",
    image: project1Image,
  },
  {
    id: "l6",
    category: "Repairs",
    date: "Jun 18, 2026",
    readTime: "5 min",
    title: "Hairline cracks: when to fill and when to call",
    description: "A quick way to tell settling from movement, without guessing at it.",
    image: project1Image,
  },
];

export const blogDetailMock: Blog = {
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
