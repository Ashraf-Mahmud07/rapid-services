import { ROUTES } from "@/shared/constants/routes";
import type { LegalDocument } from "../types/legal.types";

export const PRIVACY_POLICY: LegalDocument = {
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          body: "This policy explains how Rapid handles personal information across our website, mobile apps, retail stores, and support channels. It applies whether you buy something, create an account, or simply browse.",
        },
        {
          body: "We collect the least we need to run the shop well, we never sell personal information, and every choice described here can be changed from your account at any time.",
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      blocks: [
        {
          heading: "2.1 Information You Give Us",
          body: "Your name, email, phone number, shipping and billing addresses, and any details you add to an order or a warranty claim. If you contact support, we keep the conversation so the next agent has context.",
        },
        {
          heading: "2.2 Payment Information",
          body: "Card numbers are captured by our PCI-DSS certified payment processor and never stored on Rapid systems. We retain only the card brand, the last four digits, and the authorisation result.",
        },
        {
          heading: "2.3 Automatically Collected Data",
          body: "Device type, browser, operating system, approximate location from IP, referring page, and how you move through the catalogue. Here is the full picture:",
        },
        {
          heading: "2.4 Data From Partners",
          body: "Carriers send us delivery status, our financing partner confirms instalment eligibility, and payment networks flag fraud signals. We receive outcomes, not underlying financial records.",
        },
      ],
    },
    {
      id: "how-we-use-your-data",
      title: "How We Use Your Data",
      blocks: [
        {
          heading: "3.1 Fulfilling Your Order",
          body: "Processing payment, arranging delivery, handling returns and warranty claims, and sending the transactional emails that go with them. This use is necessary to perform our contract with you.",
        },
        {
          heading: "3.2 Improving The Store",
          body: "Aggregated analytics tell us which pages confuse people, which filters go unused, and where checkout drops off. Reports we act on contain no identifying detail.",
        },
        {
          heading: "3.3 Marketing & Personalisation",
          body: "Product recommendations and email campaigns run on consent only. Unsubscribing takes one click and never affects order or warranty communications.",
        },
      ],
    },
    {
      id: "cookies-tracking",
      title: "Cookies & Tracking",
      blocks: [
        {
          heading: "4.1 Essential Cookies",
          body: "These keep you signed in, remember your cart, and protect checkout against fraud. They cannot be switched off without breaking the site.",
        },
        {
          heading: "4.2 Analytics Cookies",
          body: "First-party measurement of traffic and page performance, retained for 14 months and never shared with advertisers.",
        },
        {
          heading: "4.3 Managing Preferences",
          body: "The cookie banner appears on first visit and can be reopened any time from the footer. Declining non-essential cookies leaves full shopping functionality intact.",
        },
      ],
    },
    {
      id: "sharing-disclosure",
      title: "Sharing & Disclosure",
      blocks: [
        {
          heading: "5.1 Service Providers",
          body: "Carriers, payment processors, cloud hosting, and our support desk act as processors under contract. They may use your data only to deliver the service we asked for.",
        },
        {
          heading: "5.2 Legal Requirements",
          body: "We disclose data when compelled by valid legal process, and we notify affected customers unless the law forbids it.",
        },
        {
          heading: "5.3 We Do Not Sell Data",
          body: "Rapid has never sold or rented personal information, and does not share it for cross-context behavioural advertising.",
        },
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      blocks: [
        {
          body: "Order records are kept for seven years to meet tax and warranty obligations. Support transcripts are kept for two years, analytics for fourteen months, and marketing preferences until you withdraw consent. Closed accounts are anonymised within 30 days.",
        },
      ],
    },
    {
      id: "your-rights-choices",
      title: "Your Rights & Choices",
      blocks: [
        {
          body: "Wherever you live, you can request a copy of your data, correct it, delete it, restrict processing, or object to marketing. Requests are answered within 30 days at no cost.",
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      blocks: [
        {
          body: "Traffic is encrypted with TLS 1.3, data at rest with AES-256. Access to customer records is role-based, logged, and reviewed quarterly. We run annual third-party penetration tests and notify regulators and affected customers within 72 hours of any confirmed breach.",
        },
      ],
    },
    {
      id: "international-transfers",
      title: "International Transfers",
      blocks: [
        {
          body: "Our primary infrastructure sits in the United States. Where data moves out of the EEA or the UK, we rely on Standard Contractual Clauses plus supplementary technical measures, and we publish the list of sub-processors on request.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      blocks: [
        {
          body: "Rapid is not intended for anyone under 16 and we do not knowingly collect their data. If a parent or guardian tells us a child has created an account, we delete it and any associated records immediately.",
        },
      ],
    },
    {
      id: "changes-to-this-policy",
      title: "Changes To This Policy",
      blocks: [
        {
          body: "Material changes are announced by email and shown as a banner on the site 30 days before taking effect. Older versions stay available so you can see exactly what changed and when.",
        },
      ],
    },
    {
      id: "contact-our-privacy-team",
      title: "Contact Our Privacy Team",
      blocks: [],
    },
  ],
  callout: {
    title: "Want a copy of your data, or want it gone?",
    body: "privacy@rapid.com · Data Protection Officer, 500 Howard St, San Francisco, CA 94105",
    actionLabelKey: "makeRequest",
    href: ROUTES.CONTACT,
  },
};
