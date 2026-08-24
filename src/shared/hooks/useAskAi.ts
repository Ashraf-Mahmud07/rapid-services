import * as React from "react";

import { ANSWERS, INITIAL_HISTORY, reply, TOPICS } from "@/shared/constants/ask-ai.constants";
import type { HistoryItem, Message, Topic } from "@/shared/types/ask-ai.types";

type UseAskAiOptions = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function useAskAi({ open, onOpenChange }: UseAskAiOptions) {
  const [tab, setTab] = React.useState<"chat" | "history">("chat");
  const [topic, setTopic] = React.useState<Topic>(TOPICS[0]);
  const [draft, setDraft] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [history] = React.useState<HistoryItem[]>(INITIAL_HISTORY);
  const endRef = React.useRef<HTMLDivElement>(null);

  const now = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length, from: "user", text: value, at: now() },
      { id: prev.length + 1, from: "ai", text: reply(value), at: now() },
    ]);
    setDraft("");
  };

  const startNewChat = () => {
    setMessages([]);
    setDraft("");
    setTab("chat");
  };

  const loadHistoryItem = (item: HistoryItem) => {
    setMessages(item.messages);
    setTab("chat");
  };

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const close = (next: boolean) => {
    if (!next) {
      setMessages([]);
      setDraft("");
      setTab("chat");
    }
    onOpenChange(next);
  };

  return {
    tab,
    setTab,
    topic,
    setTopic,
    draft,
    setDraft,
    messages,
    history,
    endRef,
    send,
    startNewChat,
    loadHistoryItem,
    close,
    answers: ANSWERS[topic],
  };
}
