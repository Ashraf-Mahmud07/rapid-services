import type { ReactNode } from "react";
import { ROUTES } from "@/shared/constants/routes";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const LINK_COLUMNS = [
  {
    title: "INDUSTRY",
    links: [
      { label: "Retail", href: ROUTES.INDUSTRY },
      { label: "Logistics", href: ROUTES.INDUSTRY },
      { label: "Hospitality", href: ROUTES.INDUSTRY },
      { label: "Manufacturing", href: ROUTES.INDUSTRY },
      { label: "Healthcare", href: ROUTES.INDUSTRY },
      { label: "Oil and Gas", href: ROUTES.INDUSTRY },
      { label: "Education", href: ROUTES.INDUSTRY },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Waterproofing", href: ROUTES.SERVICE },
      { label: "Swimming Pools", href: ROUTES.SERVICE },
      { label: "Electrical", href: ROUTES.SERVICE },
      { label: "Plumbing", href: ROUTES.SERVICE },
      { label: "Tiling", href: ROUTES.SERVICE },
      { label: "Plastering", href: ROUTES.SERVICE },
      { label: "Painting", href: ROUTES.SERVICE },
    ],
  },
  {
    title: "PROJECTS",
    links: [
      { label: "Civil", href: ROUTES.PROJECT },
      { label: "Electrical", href: ROUTES.PROJECT },
      { label: "Mechanical", href: ROUTES.PROJECT },
      { label: "Construction", href: ROUTES.PROJECT },
      { label: "Oil and Gas", href: ROUTES.PROJECT },
      { label: "Transportation", href: ROUTES.PROJECT },
      { label: "Hospitality", href: ROUTES.PROJECT },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Home", href: ROUTES.HOME },
      { label: "About Us", href: ROUTES.ABOUT },
      { label: "Products", href: ROUTES.PRODUCT },
      { label: "Career", href: ROUTES.CAREER },
      { label: "Media", href: ROUTES.MEDIA },
      { label: "Blogs", href: ROUTES.BLOG },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: ROUTES.PRIVACY },
  { label: "Terms & Conditions", href: ROUTES.TERMS },
  { label: "Cookie Policy", href: ROUTES.COOKIE_POLICY },
];

export const SOCIAL_LINKS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.3-1.3 1.5-1.3H16V5.6c-.3 0-1.2-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8v2.8h2.4V21z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        className="size-4"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M6.9 8.7H4.2V20h2.7zM5.6 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2M20 13.5c0-2.9-1.6-4.3-3.7-4.3-1.7 0-2.5.9-2.9 1.6V8.7H10.7V20h2.7v-6c0-1.3.6-2.1 1.8-2.1s1.6.8 1.6 2.1v6H20z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2m0 1.8a8.2 8.2 0 0 1 0 16.4 8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8m-3.3 4c-.2 0-.5 0-.7.4l-.5 1c-.3.7 0 1.6.2 2a9 9 0 0 0 3.8 3.7c1.2.5 1.9.5 2.5.3.4-.1 1-.5 1.2-1s.2-.9.1-1l-1.5-.8c-.2 0-.4-.1-.6.1l-.7.8c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-2.9-2.7c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3 0-.5l-.6-1.2c-.1-.2-.2-.2-.4-.2z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M21.6 8.2a2.5 2.5 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8M10.2 14.7V9.3L14.8 12z" />
      </svg>
    ),
  },
];

export const CONTACT_DETAILS: { icon: ReactNode; lines: { text: string; href?: string }[] }[] = [
  {
    icon: <MapPin className="size-4" />,
    lines: [{ text: "Industrial Area No 5," }, { text: "Sharjah, UAE" }],
  },
  {
    icon: <Phone className="size-4" />,
    lines: [
      { text: "+971 56 440 6456", href: "tel:+971564406456" },
      { text: "+971 55 763 6994", href: "tel:+971557636994" },
    ],
  },
  {
    icon: <Mail className="size-4" />,
    lines: [
      { text: "info@tajalrahmah.com", href: "mailto:info@tajalrahmah.com" },
      { text: "tajalrahmah@gmail.com", href: "mailto:tajalrahmah@gmail.com" },
    ],
  },
  {
    icon: <Clock className="size-4" />,
    lines: [
      { text: "Sat – Thu, 8:00 am – 9:00 pm" },
      { text: "Break 1:30 – 3:30 pm · Friday closed" },
    ],
  },
];
