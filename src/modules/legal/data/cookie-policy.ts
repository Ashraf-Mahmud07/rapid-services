import { ROUTES } from "@/shared/constants/routes";
import type { LegalDocument } from "../types/legal.types";

/**
 * PLACEHOLDER COPY — for layout only.
 *
 * The cookie-policy reference in /figma-pages carries Terms & Conditions body
 * text and names another company, so none of it could be used. The structure
 * below is a realistic cookie policy so the template can be judged visually;
 * the wording has NOT been reviewed by anyone qualified and must be replaced
 * before launch. Nothing here should be treated as a legal commitment.
 */
export const COOKIE_POLICY: LegalDocument = {
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          body: "This placeholder describes how Rapid would use cookies and similar technologies across the website and booking flow. It is here so the page layout can be reviewed and is not final wording.",
        },
        {
          body: "A cookie is a small text file a site stores on your device so it can remember something between visits — for example which language you chose, or that you are part-way through a booking.",
        },
      ],
    },
    {
      id: "categories",
      title: "Categories We Use",
      blocks: [
        {
          heading: "2.1 Strictly Necessary",
          body: "These keep the site working: holding your session, remembering items in an enquiry, and protecting forms against abuse. They cannot be switched off, because the site would not function without them.",
        },
        {
          heading: "2.2 Preferences",
          body: "These remember choices you have made, such as your language selection, so you are not asked again on every visit.",
        },
        {
          heading: "2.3 Analytics",
          body: "These help us understand which pages are used and where people get stuck, reported in aggregate rather than tied to you individually.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "Third-Party Cookies",
      blocks: [
        {
          body: "Some cookies are set by services we embed rather than by us — for example an embedded map or video player. Those providers publish their own policies, and we link to them where the service appears.",
        },
      ],
    },
    {
      id: "managing",
      title: "Managing Cookies",
      blocks: [
        {
          body: "You can clear or block cookies from your browser settings at any time. Blocking the strictly necessary category will stop parts of the site working, including the booking and quote forms.",
        },
        {
          body: "Most browsers also offer a private or incognito mode, which discards cookies when the window closes.",
        },
      ],
    },
    {
      id: "retention",
      title: "How Long They Last",
      blocks: [
        {
          body: "Session cookies are discarded as soon as you close the browser. Persistent cookies stay for a defined period so a preference survives between visits; the exact durations will be listed here once the final policy is approved.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes To This Policy",
      blocks: [
        {
          body: "If the cookies we use change, this page is updated and the revision date changes with it. Material changes will be flagged on the site rather than made quietly.",
        },
      ],
    },
  ],
  callout: {
    title: "Questions about cookies?",
    body: "Our team can explain what is set and why, and help you change your preferences.",
    actionLabelKey: "contactSupport",
    href: ROUTES.CONTACT,
  },
};
