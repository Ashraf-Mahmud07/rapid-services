import type { ProjectCategory, BookingStep, Project } from "../types/projects.types";
import { Building2, Zap, Wrench, HardHat, Flame, Truck, Factory, Coffee } from "lucide-react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

export const projectCategories: ProjectCategory[] = [
  {
    id: "civil",
    title: "Civil",
    icon: Building2,
    badge: "CIVIL",
    projects: [
      {
        id: "pumping-station",
        title: "Pumping Station",
        shortDesc: "Water Infrastructure",
        image: img1,
        content: [
          {
            type: 1,
            title: "Project Overview",
            description: "Pumping Station located in Makkah, Saudi Arabia.",
          },
          {
            type: 2,
            title: "Project Details",
            description: "Key information and metrics for this project:",
            bullets: [
              { label: "Project Type:", text: "Water Infrastructure" },
              { label: "Project Awarding Authority:", text: "DEWA" },
              { label: "Project Value:", text: "45,500,000.00 SAR" },
              { label: "Location:", text: "Makkah, Saudi Arabia" },
            ],
          },
        ],
        gallery: [img1, img2, img3],
      },
    ],
  },
  {
    id: "electrical",
    title: "Electrical",
    icon: Zap,
    badge: "ELECTRICAL",
    projects: [],
  },
  {
    id: "mechanical",
    title: "Mechanical",
    icon: Wrench,
    badge: "MECHANICAL",
    projects: [],
  },
  {
    id: "construction",
    title: "Construction",
    icon: HardHat,
    badge: "CONSTRUCTION",
    projects: [
      {
        id: "falcon-city",
        title: "GRP & Fiberglass Waterproofing",
        shortDesc: "Integrated Protection Shield",
        image: img2,
        content: [
          {
            type: 1,
            title: "Integrated Protection Shield: A Guide to Waterproofing & Structural Solutions",
            description:
              "Waterproofing is the fundamental pillar for preserving the lifespan of any building. At Taj Alrahmah, we don't just offer insulation; we provide integrated protection systems that guarantee a permanent end to leaks and corrosion. Here is a detailed explanation of the cutting-edge waterproofing technologies we provide:",
          },
          {
            type: 2,
            title: "GRP & Fiberglass Lining",
            description:
              'Known as the "King of Insulation" due to its superior strength. It consists of glass fibers embedded in specialized resins to form an incredibly tough and solid layer.',
            bullets: [
              {
                label: "Primary Applications:",
                text: "Lining potable (drinking) water tanks, roofs highly exposed to water, and chemical drainage channels.",
              },
              {
                label: "Competitive Advantage:",
                text: "It provides a single, seamless, joint-free layer that lasts for decades. It is completely safe for health and water storage (Food Grade).",
              },
            ],
          },
          {
            type: 2,
            title: "Bitumen Membrane Waterproofing",
            description:
              "The most common and reliable system for protecting foundations and roofs. It relies on reinforced bituminous rolls installed using heat (torch-applied).",
            bullets: [
              {
                label: "Primary Applications:",
                text: "Insulation of foundations, concrete bases, bathrooms, and kitchens.",
              },
              {
                label: "Competitive Advantage:",
                text: "High flexibility in handling minor structural movements and excellent resistance to ground moisture and humidity.",
              },
            ],
          },
          {
            type: 2,
            title: "Epoxy Floor Coating",
            description:
              "A protection and beautification system for concrete floors, transforming them into a smooth, hard, and liquid-resistant surface.",
            bullets: [
              {
                label: "Primary Applications:",
                text: "Car parks, warehouses, factories, and laboratories.",
              },
              {
                label: "Competitive Advantage:",
                text: "High resistance to oils and chemicals, extreme ease of cleaning, and a professional aesthetic appearance.",
              },
            ],
          },
        ],
        gallery: [img2, img4, img5],
      },
      {
        id: "al-saaf-residential",
        title: "Al Saaf Residential",
        shortDesc: "Boundary Wall Construction",
        image: img3,
        content: [
          {
            type: 1,
            title: "Project Overview",
            description: "Al Saaf Residential located in Makkah, Saudi Arabia.",
          },
          {
            type: 2,
            title: "Project Details",
            description: "Key information and metrics for this project:",
            bullets: [
              { label: "Project Type:", text: "Boundary Wall Construction" },
              { label: "Project Awarding Authority:", text: "SEPCOII" },
              { label: "Project Value:", text: "57,631,881.00 SAR" },
              { label: "Location:", text: "Makkah, Saudi Arabia" },
            ],
          },
        ],
        gallery: [img3, img1, img4],
      },
      {
        id: "baniyas-north-phase",
        title: "Baniyas North Phase",
        shortDesc: "Boundary Wall Construction",
        image: img4,
        content: [
          {
            type: 1,
            title: "Project Overview",
            description: "Baniyas North Phase located in Makkah, Saudi Arabia.",
          },
          {
            type: 2,
            title: "Project Details",
            description: "Key information and metrics for this project:",
            bullets: [
              { label: "Project Type:", text: "Boundary Wall Construction" },
              { label: "Project Awarding Authority:", text: "SEPCOII" },
              { label: "Project Value:", text: "57,631,881.00 SAR" },
              { label: "Location:", text: "Makkah, Saudi Arabia" },
            ],
          },
        ],
        gallery: [img4, img2, img1],
      },
      {
        id: "al-jada-development",
        title: "Al Jada Development",
        shortDesc: "Boundary Wall Construction",
        image: img5,
        content: [
          {
            type: 1,
            title: "Project Overview",
            description: "Al Jada Development located in Makkah, Saudi Arabia.",
          },
          {
            type: 2,
            title: "Project Details",
            description: "Key information and metrics for this project:",
            bullets: [
              { label: "Project Type:", text: "Boundary Wall Construction" },
              { label: "Project Awarding Authority:", text: "SEPCOII" },
              { label: "Project Value:", text: "57,631,881.00 SAR" },
              { label: "Location:", text: "Makkah, Saudi Arabia" },
            ],
          },
        ],
        gallery: [img5, img3, img2],
      },
      {
        id: "emaar-south-parkside",
        title: "Emaar South - Parkside",
        shortDesc: "Boundary Wall Construction",
        image: img1,
        content: [
          {
            type: 1,
            title: "Project Overview",
            description: "Emaar South - Parkside located in Makkah, Saudi Arabia.",
          },
          {
            type: 2,
            title: "Project Details",
            description: "Key information and metrics for this project:",
            bullets: [
              { label: "Project Type:", text: "Boundary Wall Construction" },
              { label: "Project Awarding Authority:", text: "SEPCOII" },
              { label: "Project Value:", text: "57,631,881.00 SAR" },
              { label: "Location:", text: "Makkah, Saudi Arabia" },
            ],
          },
        ],
        gallery: [img1, img5, img4],
      },
      {
        id: "dubai-investment-park",
        title: "Dubai Investment Park",
        shortDesc: "Boundary Wall Construction",
        image: img2,
        content: [
          {
            type: 1,
            title: "Project Overview",
            description: "Dubai Investment Park located in Makkah, Saudi Arabia.",
          },
          {
            type: 2,
            title: "Project Details",
            description: "Key information and metrics for this project:",
            bullets: [
              { label: "Project Type:", text: "Boundary Wall Construction" },
              { label: "Project Awarding Authority:", text: "SEPCOII" },
              { label: "Project Value:", text: "57,631,881.00 SAR" },
              { label: "Location:", text: "Makkah, Saudi Arabia" },
            ],
          },
        ],
        gallery: [img2, img1, img5],
      },
      {
        id: "sharjah-sustainable-city",
        title: "Sharjah Sustainable City",
        shortDesc: "Boundary Wall Construction",
        image: img3,
        content: [
          {
            type: 1,
            title: "Project Overview",
            description: "Sharjah Sustainable City located in Makkah, Saudi Arabia.",
          },
          {
            type: 2,
            title: "Project Details",
            description: "Key information and metrics for this project:",
            bullets: [
              { label: "Project Type:", text: "Boundary Wall Construction" },
              { label: "Project Awarding Authority:", text: "SEPCOII" },
              { label: "Project Value:", text: "57,631,881.00 SAR" },
              { label: "Location:", text: "Makkah, Saudi Arabia" },
            ],
          },
        ],
        gallery: [img3, img4, img1],
      },
    ],
  },
  {
    id: "oil-and-gas",
    title: "Oil and Gas",
    icon: Flame,
    badge: "ENERGY",
    projects: [],
  },
  {
    id: "transportation",
    title: "Transportation",
    icon: Truck,
    badge: "TRANSPORT",
    projects: [
      {
        id: "al-maktoum-airport",
        title: "Al Maktoum Airport",
        shortDesc: "Boundary Wall Construction",
        image: img4,
        content: [
          {
            type: 1,
            title: "Project Overview",
            description: "Al Maktoum Airport located in Makkah, Saudi Arabia.",
          },
          {
            type: 2,
            title: "Project Details",
            description: "Key information and metrics for this project:",
            bullets: [
              { label: "Project Type:", text: "Boundary Wall Construction" },
              { label: "Project Awarding Authority:", text: "SEPCOII" },
              { label: "Project Value:", text: "57,631,881.00 SAR" },
              { label: "Location:", text: "Makkah, Saudi Arabia" },
            ],
          },
        ],
        gallery: [img4, img5, img3],
      },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    badge: "INDUSTRIAL",
    projects: [],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: Coffee,
    badge: "HOSPITALITY",
    projects: [],
  },
];

export const bookingSteps: BookingStep[] = [
  {
    step: "STEP 1",
    title: "Tell us the job",
    desc: "A short call or form. Photos help, but we will ask the right questions either way.",
  },
  {
    step: "STEP 2",
    title: "Fixed quote, same day",
    desc: "We price the work, not the hours. That number is what appears on the invoice.",
  },
  {
    step: "STEP 3",
    title: "Booked with a window",
    desc: "Same-week slots, a two-hour arrival window and the name of your technician.",
  },
  {
    step: "STEP 4",
    title: "Signed off and guaranteed",
    desc: "Photo report on completion and 90 days of cover on all workmanship.",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  for (const category of projectCategories) {
    const project = category.projects.find((p) => p.id === id);
    if (project) {
      return project;
    }
  }
  return undefined;
};
