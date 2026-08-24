export type Message = {
  id: number;
  from: "user" | "ai";
  text: string;
  at: string;
};

export type HistoryItem = {
  id: string;
  snippet: string;
  timeAgo: string;
  messages: Message[];
};

export const TOPICS = ["Domains", "VPS", "Account", "Payments"] as const;
export type Topic = (typeof TOPICS)[number];

export type TopicAnswer = {
  q: string;
  keys: string[];
  a: string;
};
