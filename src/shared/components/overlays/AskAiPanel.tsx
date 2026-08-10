"use client";

import { ArrowRightToLine, ArrowUpRight, Mic, PenSquare, ScrollText } from "lucide-react";
import Image from "next/image";
import { Dialog as DialogPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/shared/utils/cn";

type Message = { id: number; from: "user" | "ai"; text: string; at: string };

/**
 * Ask AI. The reference is populated with another product's assistant — domains,
 * hosting, email accounts — so the layout and interaction are reproduced and the
 * content is Rapid's.
 *
 * Static by design: there is no model behind this and none is planned. Answers
 * are a fixed set of questions the business already answers on the FAQ and
 * service pages, matched on keywords. Editing the copy below is the whole
 * maintenance story — add a Q&A pair and it works.
 */
const TOPICS = ["Services", "Products", "Projects", "Careers"] as const;
type Topic = (typeof TOPICS)[number];

/** Question → answer, grouped by the topic pill that surfaces it. */
const ANSWERS: Record<Topic, { q: string; keys: string[]; a: string }[]> = {
  Services: [
    {
      q: "Which trades do you cover?",
      keys: ["trade", "cover", "service", "what do you do"],
      a: "We cover electrical, plumbing, painting, cleaning, repairs, and heating & cooling — one team across all six.",
    },
    {
      q: "How soon can someone come out?",
      keys: ["soon", "when", "visit", "book", "appointment", "available"],
      a: "Most jobs are booked within 24 hours, with a two-hour arrival window rather than a full-day wait.",
    },
    {
      q: "Do you charge for a quote?",
      keys: ["quote", "price", "cost", "callout", "charge", "fee"],
      a: "Quotes are free and fixed. We assess the job, give you a price, and that price is what you pay — no callout fee.",
    },
    {
      q: "What if something goes wrong after the visit?",
      keys: ["guarantee", "warranty", "wrong", "after", "fix"],
      a: "Every visit carries a 90-day workmanship guarantee, and we return at no cost if anything slips.",
    },
  ],
  Products: [
    {
      q: "What do you supply?",
      keys: ["supply", "product", "part", "equipment", "stock"],
      a: "We supply and fit parts, tools and equipment used on our own jobs. Browse the catalogue from the Product menu.",
    },
    {
      q: "Do you fit what you sell?",
      keys: ["fit", "install", "installation"],
      a: "Yes — anything in the catalogue can be supplied and fitted by our own certified technicians.",
    },
  ],
  Projects: [
    {
      q: "What sort of projects do you take on?",
      keys: ["project", "work", "portfolio", "example", "sector", "industry"],
      a: "Residential, commercial, industrial, aviation, civil and government work across the UAE — over 400 completed jobs since 2009.",
    },
    {
      q: "Do you work with landlords and offices?",
      keys: ["landlord", "office", "agency", "facility", "contract"],
      a: "Yes. Landlords, agencies and facility teams book us on contract as well as job by job.",
    },
  ],
  Careers: [
    {
      q: "Are you hiring?",
      keys: ["hiring", "job", "career", "role", "vacancy", "apply"],
      a: "We usually are. Open roles and the application form are on the Careers page.",
    },
  ],
};

const ALL = Object.values(ANSWERS).flat();

/** The empty state lists two starters, as the reference does. */
const SUGGESTIONS = ["Book a technician visit", "Get a fixed price for a job"];

function reply(question: string): string {
  const q = question.toLowerCase();
  const hit = ALL.find((entry) => entry.keys.some((key) => q.includes(key)));
  if (hit) return hit.a;
  return "I can help with services, pricing, booking a visit, or finding a past project. Ask away — or use the contact page to reach the team directly.";
}

export default function AskAiPanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [tab, setTab] = React.useState<"chat" | "history">("chat");
  const [topic, setTopic] = React.useState<Topic>(TOPICS[0]);
  const [draft, setDraft] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([]);
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

  return (
    <DialogPrimitive.Root open={open} onOpenChange={close}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-100 animate-[fadeIn_0.18s_ease] bg-[rgba(20,22,24,0.45)]" />
        <DialogPrimitive.Content
          className={cn(
            "fixed inset-x-0 bottom-0 z-100 flex h-[88dvh] animate-[modalIn_0.22s_ease] flex-col rounded-t-[16px] bg-white shadow-[0_28px_70px_rgba(10,17,40,0.3)] focus:outline-none",
            "sm:inset-x-auto sm:top-[132px] sm:right-11 sm:bottom-11 sm:h-auto sm:w-[400px] sm:rounded-[14px]"
          )}
        >
          <DialogPrimitive.Title className="sr-only">Ask AI</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Ask a question about Rapid Services.
          </DialogPrimitive.Description>

          <div className="flex items-center justify-between gap-3 border-b border-[#eef0f1] px-4 py-3">
            <div className="flex rounded-full bg-[#f1f2f4] p-0.5">
              {(["chat", "history"] as const).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTab(id)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-[13px] font-medium capitalize transition-colors",
                    tab === id ? "bg-white text-[#17181a] shadow-sm" : "text-[#5a5f63]"
                  )}
                >
                  {id}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 text-[#5a5f63]">
              <button
                type="button"
                aria-label="Transcript"
                className="flex size-8 items-center justify-center rounded-lg hover:bg-[#f1f2f4]"
              >
                <ScrollText className="size-4" />
              </button>
              <button
                type="button"
                aria-label="New chat"
                onClick={() => setMessages([])}
                className="flex size-8 items-center justify-center rounded-lg hover:bg-[#f1f2f4]"
              >
                <PenSquare className="size-4" />
              </button>
              <DialogPrimitive.Close
                aria-label="Close"
                className="flex size-8 items-center justify-center rounded-lg hover:bg-[#f1f2f4]"
              >
                <ArrowRightToLine className="size-4" />
              </DialogPrimitive.Close>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {tab === "history" ? (
              <p className="mt-10 text-center text-[14px] text-[#8b9096]">
                Past conversations will appear here.
              </p>
            ) : messages.length === 0 ? (
              <div className="flex h-full flex-col">
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <Image
                    src="/images/logo.png"
                    alt=""
                    width={2633}
                    height={1904}
                    className="mb-3 h-10 w-auto"
                  />
                  <p className="text-[16px] font-semibold text-[#17181a]">Hello 👋</p>
                  <p className="mt-1 text-[14px] text-[#5a5f63]">How can I help you today?</p>
                </div>
                <ul className="mt-6 border-t border-[#eef0f1]">
                  {[...SUGGESTIONS, ANSWERS[topic][0].q].map((item) => (
                    <li key={item} className="border-b border-[#eef0f1]">
                      <button
                        type="button"
                        onClick={() => send(item)}
                        className="flex w-full items-center gap-2.5 py-3 text-left text-[14px] text-[#17181a] hover:text-primary"
                      >
                        <ArrowUpRight className="size-4 flex-none text-[#8b9096]" />
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "max-w-[85%]",
                      message.from === "user" ? "self-end" : "self-start"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-2xl px-3.5 py-2.5 text-[14px] leading-[1.55]",
                        message.from === "user"
                          ? "bg-primary/12 text-[#17181a]"
                          : "bg-[#f5f6f7] text-[#17181a]"
                      )}
                    >
                      {message.text}
                    </div>
                    <p
                      className={cn(
                        "mt-1 text-[11px] text-[#9aa0a6]",
                        message.from === "user" ? "text-right" : "text-left"
                      )}
                    >
                      {message.at}
                    </p>
                  </div>
                ))}

                <p className="mt-2 text-[12px] font-semibold text-[#5a5f63]">Quick actions</p>
                <div className="flex flex-col items-start gap-2">
                  {ANSWERS[topic].map((entry) => (
                    <button
                      key={entry.q}
                      type="button"
                      onClick={() => send(entry.q)}
                      className="rounded-full bg-primary/10 px-3.5 py-2 text-left text-[13px] text-[#17181a] transition-colors hover:bg-primary/20"
                    >
                      {entry.q}
                    </button>
                  ))}
                </div>
                <div ref={endRef} />
              </div>
            )}
          </div>

          <div className="border-t border-[#eef0f1] px-4 pt-3 pb-4">
            <div className="mb-2.5 flex flex-wrap gap-1.5">
              {TOPICS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTopic(item)}
                  className={cn(
                    "rounded-full px-3 py-1 text-[12.5px] transition-colors",
                    topic === item
                      ? "border border-primary text-primary"
                      : "border border-transparent text-[#5a5f63] hover:text-[#17181a]"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                send(draft);
              }}
              className="flex items-end gap-2 rounded-xl border border-[#e7e9eb] p-2"
            >
              <textarea
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    send(draft);
                  }
                }}
                rows={2}
                placeholder="Ask AI anything..."
                aria-label="Ask AI anything"
                className="min-w-0 flex-1 resize-none bg-transparent px-1.5 py-1 text-[14px] text-[#17181a] outline-none placeholder:text-[#9aa0a6]"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex size-9 flex-none items-center justify-center rounded-full border border-[#e7e9eb] text-[#5a5f63] transition-colors hover:border-primary hover:text-primary"
              >
                <Mic className="size-4" />
              </button>
            </form>
            <p className="mt-2 text-center text-[11.5px] text-[#9aa0a6]">
              AI can make mistakes. Double-check replies.
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
