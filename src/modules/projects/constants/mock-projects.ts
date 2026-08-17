import type { ProjectCategory, BookingStep } from "../types/projects.types";
import project1Image from "@/shared/assets/png/projects1.jpg";
import { Building2, Zap, Wrench, HardHat, Flame, Truck, Factory, Coffee } from "lucide-react";

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
        image: project1Image,
        content: [
          { type: 1, title: "Project Overview", description: "Pumping Station located in Makkah, Saudi Arabia." },
          { type: 2, title: "Project Details", description: "Key information and metrics for this project:", bullets: [
            { label: "Project Type:", text: "Water Infrastructure" },
            { label: "Project Awarding Authority:", text: "DEWA" },
            { label: "Project Value:", text: "45,500,000.00 SAR" },
            { label: "Location:", text: "Makkah, Saudi Arabia" }
          ]}
        ],
        gallery: [project1Image, project1Image, project1Image]
      }
    ]
  },
  {
    id: "electrical",
    title: "Electrical",
    icon: Zap,
    badge: "ELECTRICAL",
    projects: []
  },
  {
    id: "mechanical",
    title: "Mechanical",
    icon: Wrench,
    badge: "MECHANICAL",
    projects: []
  },
  {
    id: "construction",
    title: "Construction",
    icon: HardHat,
    badge: "CONSTRUCTION",
    projects: [
      {
        id: "falcon-city",
        title: "Falcon City",
        shortDesc: "Boundary Wall Construction",
        image: project1Image,
        content: [
          { type: 1, title: "Project Overview", description: "Falcon City located in Makkah, Saudi Arabia." },
          { type: 2, title: "Project Details", description: "Key information and metrics for this project:", bullets: [
            { label: "Project Type:", text: "Boundary Wall Construction" },
            { label: "Project Awarding Authority:", text: "SEPCOII" },
            { label: "Project Value:", text: "57,631,881.00 SAR" },
            { label: "Location:", text: "Makkah, Saudi Arabia" }
          ]}
        ],
        gallery: [project1Image, project1Image, project1Image]
      },
      {
        id: "al-saaf-residential",
        title: "Al Saaf Residential",
        shortDesc: "Boundary Wall Construction",
        image: project1Image,
        content: [
          { type: 1, title: "Project Overview", description: "Al Saaf Residential located in Makkah, Saudi Arabia." },
          { type: 2, title: "Project Details", description: "Key information and metrics for this project:", bullets: [
            { label: "Project Type:", text: "Boundary Wall Construction" },
            { label: "Project Awarding Authority:", text: "SEPCOII" },
            { label: "Project Value:", text: "57,631,881.00 SAR" },
            { label: "Location:", text: "Makkah, Saudi Arabia" }
          ]}
        ],
        gallery: [project1Image, project1Image, project1Image]
      },
      {
        id: "baniyas-north-phase",
        title: "Baniyas North Phase",
        shortDesc: "Boundary Wall Construction",
        image: project1Image,
        content: [
          { type: 1, title: "Project Overview", description: "Baniyas North Phase located in Makkah, Saudi Arabia." },
          { type: 2, title: "Project Details", description: "Key information and metrics for this project:", bullets: [
            { label: "Project Type:", text: "Boundary Wall Construction" },
            { label: "Project Awarding Authority:", text: "SEPCOII" },
            { label: "Project Value:", text: "57,631,881.00 SAR" },
            { label: "Location:", text: "Makkah, Saudi Arabia" }
          ]}
        ],
        gallery: [project1Image, project1Image, project1Image]
      },
      {
        id: "al-jada-development",
        title: "Al Jada Development",
        shortDesc: "Boundary Wall Construction",
        image: project1Image,
        content: [
          { type: 1, title: "Project Overview", description: "Al Jada Development located in Makkah, Saudi Arabia." },
          { type: 2, title: "Project Details", description: "Key information and metrics for this project:", bullets: [
            { label: "Project Type:", text: "Boundary Wall Construction" },
            { label: "Project Awarding Authority:", text: "SEPCOII" },
            { label: "Project Value:", text: "57,631,881.00 SAR" },
            { label: "Location:", text: "Makkah, Saudi Arabia" }
          ]}
        ],
        gallery: [project1Image, project1Image, project1Image]
      },
      {
        id: "emaar-south-parkside",
        title: "Emaar South - Parkside",
        shortDesc: "Boundary Wall Construction",
        image: project1Image,
        content: [
          { type: 1, title: "Project Overview", description: "Emaar South - Parkside located in Makkah, Saudi Arabia." },
          { type: 2, title: "Project Details", description: "Key information and metrics for this project:", bullets: [
            { label: "Project Type:", text: "Boundary Wall Construction" },
            { label: "Project Awarding Authority:", text: "SEPCOII" },
            { label: "Project Value:", text: "57,631,881.00 SAR" },
            { label: "Location:", text: "Makkah, Saudi Arabia" }
          ]}
        ],
        gallery: [project1Image, project1Image, project1Image]
      },
      {
        id: "dubai-investment-park",
        title: "Dubai Investment Park",
        shortDesc: "Boundary Wall Construction",
        image: project1Image,
        content: [
          { type: 1, title: "Project Overview", description: "Dubai Investment Park located in Makkah, Saudi Arabia." },
          { type: 2, title: "Project Details", description: "Key information and metrics for this project:", bullets: [
            { label: "Project Type:", text: "Boundary Wall Construction" },
            { label: "Project Awarding Authority:", text: "SEPCOII" },
            { label: "Project Value:", text: "57,631,881.00 SAR" },
            { label: "Location:", text: "Makkah, Saudi Arabia" }
          ]}
        ],
        gallery: [project1Image, project1Image, project1Image]
      },
      {
        id: "sharjah-sustainable-city",
        title: "Sharjah Sustainable City",
        shortDesc: "Boundary Wall Construction",
        image: project1Image,
        content: [
          { type: 1, title: "Project Overview", description: "Sharjah Sustainable City located in Makkah, Saudi Arabia." },
          { type: 2, title: "Project Details", description: "Key information and metrics for this project:", bullets: [
            { label: "Project Type:", text: "Boundary Wall Construction" },
            { label: "Project Awarding Authority:", text: "SEPCOII" },
            { label: "Project Value:", text: "57,631,881.00 SAR" },
            { label: "Location:", text: "Makkah, Saudi Arabia" }
          ]}
        ],
        gallery: [project1Image, project1Image, project1Image]
      }
    ]
  },
  {
    id: "oil-and-gas",
    title: "Oil and Gas",
    icon: Flame,
    badge: "ENERGY",
    projects: []
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
        image: project1Image,
        content: [
          { type: 1, title: "Project Overview", description: "Al Maktoum Airport located in Makkah, Saudi Arabia." },
          { type: 2, title: "Project Details", description: "Key information and metrics for this project:", bullets: [
            { label: "Project Type:", text: "Boundary Wall Construction" },
            { label: "Project Awarding Authority:", text: "SEPCOII" },
            { label: "Project Value:", text: "57,631,881.00 SAR" },
            { label: "Location:", text: "Makkah, Saudi Arabia" }
          ]}
        ],
        gallery: [project1Image, project1Image, project1Image]
      }
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    badge: "INDUSTRIAL",
    projects: []
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: Coffee,
    badge: "HOSPITALITY",
    projects: []
  }
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
