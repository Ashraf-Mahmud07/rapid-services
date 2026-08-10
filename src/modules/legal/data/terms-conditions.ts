import { ROUTES } from "@/shared/constants/routes";
import type { LegalDocument } from "../types/legal.types";

export const TERMS_CONDITIONS: LegalDocument = {
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          body: "Welcome to Rapid. By accessing or using our website, apps, or services, you agree to these Terms & Conditions. If you do not agree with any part of them, please do not use the site.",
        },
        {
          body: "These terms apply to every customer and visitor across the United States and Canada, and to all international visitors browsing our catalogue. We may update them from time to time; the version in force is the one published here on the date of your order.",
        },
      ],
    },
    {
      id: "use-of-website",
      title: "Use of Website",
      blocks: [
        {
          heading: "2.1 Eligibility",
          body: "You must be at least 18 years old to make purchases or create an account on Rapid. By using the platform you confirm that the information you provide is accurate, current, and lawfully yours to share.",
        },
        {
          heading: "2.2 Account Registration",
          body: "Some features — order history, warranty claims, saved configurations — require an account. You are responsible for keeping your login credentials confidential and for all activity that happens under your account.",
        },
        {
          heading: "2.3 User Responsibilities",
          body: "You agree not to misuse the site, attempt fraudulent purchases, scrape pricing at scale, resell products as authorised inventory, or violate any applicable cyber, consumer, or export law.",
        },
      ],
    },
    {
      id: "orders-payments",
      title: "Orders & Payments",
      blocks: [
        {
          heading: "3.1 Order Acceptance",
          body: "Placing an order is an offer to buy, not a completed contract. The contract forms when we send your shipping confirmation. We may decline or cancel an order in cases of pricing error, suspected fraud, or stock shortfall — and we refund in full when we do.",
        },
        {
          heading: "3.2 Pricing & Currency",
          body: "All prices are shown in US dollars and include applicable sales tax where required. Canadian orders show duties and taxes calculated at checkout, before payment.",
        },
        {
          heading: "3.3 Payment Methods",
          body: "We accept major credit and debit cards, Apple Pay, Google Pay, and instalment plans via our financing partner. Payment is captured when your order ships, except for pre-orders, which are authorised at purchase.",
        },
      ],
    },
    {
      id: "shipping-delivery",
      title: "Shipping & Delivery",
      blocks: [
        {
          heading: "4.1 Delivery Timeline",
          body: "Standard delivery is 3–5 business days; express is 1–2. Timelines start from dispatch, not from order placement, and exclude weekends and public holidays.",
        },
        {
          heading: "4.2 Shipping Charges",
          body: "Shipping is free on orders over $29. Below that, a flat $4.95 applies. Express shipping is charged at checkout and is free for Platinum members.",
        },
        {
          heading: "4.3 Delivery Verification",
          body: "Orders over $500 require a signature. If nobody is available, the courier makes two further attempts before returning the parcel to us for a refund of the item value.",
        },
      ],
    },
    {
      id: "returns-refunds",
      title: "Returns & Refunds",
      blocks: [
        {
          heading: "5.1 Return Eligibility",
          body: "Most items can be returned within 30 days of delivery in their original condition with all accessories. Opened software, earbud hygiene items, and custom-configured builds are excluded unless faulty. Full detail lives on our returns page.",
        },
        {
          heading: "5.2 Refund Processing",
          body: "Returns ship free on a prepaid label. Once the item reaches our warehouse and passes inspection, refunds are issued to the original payment method within 3–5 business days.",
        },
      ],
    },
    {
      id: "warranty",
      title: "Warranty",
      blocks: [
        {
          body: "Every device carries a 2-year Rapid warranty covering manufacturing defects, in addition to any manufacturer warranty. Accidental damage, liquid ingress, and unauthorised repair are not covered. See warranty terms for the claim process.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      blocks: [
        {
          body: "All site content — text, imagery, product photography, logos, and code — belongs to Rapid or its licensors. You may not reproduce, republish, or use it commercially without written permission. Brand names shown belong to their respective owners.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      blocks: [
        {
          body: "To the extent permitted by law, Rapid is not liable for indirect or consequential loss, including lost data or lost profit arising from product use. Our total liability for any claim is limited to the amount you paid for the product concerned. Nothing here limits rights you hold under consumer protection law.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      blocks: [
        {
          body: "These terms are governed by the laws of the State of California. Disputes will first be addressed through good-faith negotiation with our support team, and failing that, in the courts of San Francisco County.",
        },
      ],
    },
    {
      id: "contact-us",
      title: "Contact Us",
      blocks: [],
    },
  ],
  callout: {
    title: "Questions about these terms?",
    body: "Ask anything on the contact support page for more details",
    actionLabelKey: "contactSupport",
    href: ROUTES.PRIVACY,
  },
};
