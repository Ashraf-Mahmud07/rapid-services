import type { HistoryItem, Topic, TopicAnswer } from "@/shared/types/ask-ai.types";
import { TOPICS } from "@/shared/types/ask-ai.types";

export { TOPICS };

export const ANSWERS: Record<Topic, TopicAnswer[]> = {
  Domains: [
    {
      q: "Register a New Domain Name",
      keys: ["register", "domain", "new", "buy", "name"],
      a: "You can register a new domain name instantly from our domain search page.",
    },
    {
      q: "Start Domain Transfer",
      keys: ["transfer", "domain", "move", "switch"],
      a: "Transferring your domain is quick and seamless. Enter your authorization code to get started.",
    },
    {
      q: "How do I set up my website?",
      keys: ["setup", "website", "build", "create"],
      a: "Our automated installer sets up WordPress or custom HTML sites in just a few clicks.",
    },
  ],
  VPS: [
    {
      q: "What VPS plans do you offer?",
      keys: ["vps", "server", "plan", "hosting", "cloud"],
      a: "We offer high-performance NVMe cloud VPS servers with full root access and scalable resources.",
    },
    {
      q: "Can I upgrade my server later?",
      keys: ["upgrade", "scale", "ram", "cpu"],
      a: "Yes, you can upgrade CPU, RAM, and storage instantly without downtime from your control panel.",
    },
  ],
  Account: [
    {
      q: "How to manage my account?",
      keys: ["account", "profile", "password", "login"],
      a: "You can update your personal information, security settings, and billing profiles in the account dashboard.",
    },
    {
      q: "I need help with my email account.",
      keys: ["email", "mail", "mailbox", "imap", "smtp"],
      a: "You can create business email accounts in cPanel or connect via Webmail/Outlook anytime.",
    },
  ],
  Payments: [
    {
      q: "What payment methods are supported?",
      keys: ["payment", "card", "pay", "invoice", "billing"],
      a: "We support Visa, Mastercard, AMEX, PayPal, and bank transfers.",
    },
  ],
};

export const INITIAL_HISTORY: HistoryItem[] = [
  {
    id: "hist-1",
    snippet: "AI: Hello! How can I help you with",
    timeAgo: "4min",
    messages: [
      { id: 1, from: "user", text: "Hello", at: "15:11" },
      { id: 2, from: "ai", text: "Hello! How can I help you with Hostinger today?", at: "15:11" },
    ],
  },
  {
    id: "hist-2",
    snippet: "AI: Hello! How can I help you with Hostinger",
    timeAgo: "2d",
    messages: [
      { id: 1, from: "user", text: "Domain transfer status", at: "2 days ago" },
      {
        id: 2,
        from: "ai",
        text: "Hello! How can I help you with Hostinger services?",
        at: "2 days ago",
      },
    ],
  },
  {
    id: "hist-3",
    snippet: "AI: Hello! How can I help you today?",
    timeAgo: "2d",
    messages: [
      { id: 1, from: "user", text: "VPS specs", at: "2 days ago" },
      { id: 2, from: "ai", text: "Hello! How can I help you today?", at: "2 days ago" },
    ],
  },
];

export const SUGGESTIONS = ["Register a New Domain Name", "Start Domain Transfer"];

const ALL = Object.values(ANSWERS).flat();

export function reply(question: string): string {
  const q = question.toLowerCase();
  const hit = ALL.find((entry) => entry.keys.some((key) => q.includes(key)));
  if (hit) return hit.a;
  return "I can help with domain registration, transfers, hosting, or billing questions. Ask away!";
}
