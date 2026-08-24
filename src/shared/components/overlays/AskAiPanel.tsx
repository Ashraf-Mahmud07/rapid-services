"use client";

import { ArrowRightToLine, ArrowUpRight, Mic, PenSquare, ScrollText, Send } from "lucide-react";
import Image from "next/image";
import { Dialog as DialogPrimitive } from "radix-ui";
import * as React from "react";

import { SUGGESTIONS, TOPICS } from "@/shared/constants/ask-ai.constants";
import { useAskAi } from "@/shared/hooks/useAskAi";
import { cn } from "@/shared/utils/cn";

export default function AskAiPanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const {
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
    answers,
  } = useAskAi({ open, onOpenChange });

  return (
    <DialogPrimitive.Root open={open} onOpenChange={close}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-100 animate-[fadeIn_0.18s_ease] bg-[rgba(20,22,24,0.45)]" />
        <DialogPrimitive.Content
          className={cn(
            "fixed inset-x-0 bottom-0 z-100 flex h-[88dvh] max-h-[714px] animate-[modalIn_0.22s_ease] flex-col rounded-t-[16px] bg-white shadow-[0_28px_70px_rgba(10,17,40,0.3)] focus:outline-none",
            "sm:inset-x-auto sm:top-[81px] sm:right-11 sm:bottom-11 sm:h-auto sm:w-[398px] sm:rounded-[16px]"
          )}
        >
          <DialogPrimitive.Title className="sr-only">Ask AI</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Ask a question or select a topic.
          </DialogPrimitive.Description>

          {/* Header Bar (Figma: 398x46px) */}
          <div className="flex items-center justify-between border-b border-[#EEF0F1] px-4 py-2.5">
            <div className="flex items-center rounded-full bg-[#F1F2F4] p-1">
              {(["chat", "history"] as const).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTab(id)}
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-1.5 text-[13px] font-medium capitalize transition-all duration-200",
                    tab === id
                      ? "bg-[#00A79D] text-white shadow-xs"
                      : "text-[#5A5F63] hover:text-[#111827]"
                  )}
                >
                  {id === "chat" ? "Chat" : "History"}
                </button>
              ))}
            </div>

            {/* Action Buttons (Transcript, New Chat, Close) */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="View history"
                onClick={() => setTab((t) => (t === "chat" ? "history" : "chat"))}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full text-[#111827] transition-colors hover:bg-[#F1F2F4]"
              >
                <ScrollText className="size-4.5" />
              </button>
              <button
                type="button"
                aria-label="New chat"
                onClick={startNewChat}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full text-[#111827] transition-colors hover:bg-[#F1F2F4]"
              >
                <PenSquare className="size-4.5" />
              </button>
              <DialogPrimitive.Close
                aria-label="Close panel"
                className="flex size-9 cursor-pointer items-center justify-center rounded-full text-[#111827] transition-colors hover:bg-[#F1F2F4]"
              >
                <ArrowRightToLine className="size-5" />
              </DialogPrimitive.Close>
            </div>
          </div>

          {/* Body Content Area */}
          <div className="flex flex-1 flex-col overflow-y-auto px-4 py-4">
            {tab === "history" ? (
              <div className="flex flex-col gap-2">
                {history.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => loadHistoryItem(item)}
                    className="flex cursor-pointer items-center justify-between rounded-[12px] p-3 text-left transition-colors hover:bg-[#F8F9FA]"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3 pr-2">
                      <div className="flex size-9 flex-none items-center justify-center rounded-full bg-[#E4FFFD] p-1.5">
                        <Image
                          src="/images/logo.png"
                          alt=""
                          width={2633}
                          height={1904}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                      <span className="truncate text-sm font-medium text-[#111827]">
                        {item.snippet}
                      </span>
                    </div>
                    <span className="flex-none text-xs text-[#8E8E93]">{item.timeAgo}</span>
                  </button>
                ))}
              </div>
            ) : messages.length === 0 ? (
              <div className="flex flex-1 flex-col justify-between">
                {/* Center logo & greeting (Figma: Hello BD EXPERT 👋) */}
                <div className="flex flex-1 flex-col items-center justify-center py-6 text-center">
                  <div className="flex size-18 items-center justify-center rounded-full bg-[#F5F6F7] p-2 shadow-xs">
                    <Image
                      src="/images/logo.png"
                      alt="Rapid"
                      width={2633}
                      height={1904}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-[18px] font-bold text-[#111827]">Hello BD EXPERT 👋</h3>
                  <p className="mt-1 text-sm font-normal text-[#5A5F63]">
                    How can I help you today?
                  </p>
                </div>

                {/* Suggested Questions List */}
                <div className="mt-auto">
                  <div className="divide-y divide-[#EEF0F1] border-t border-[#EEF0F1]">
                    {SUGGESTIONS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => send(item)}
                        className="group flex w-full cursor-pointer items-center gap-3 py-3 text-left transition-colors"
                      >
                        <ArrowUpRight className="size-4.5 flex-none text-[#111827] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span className="text-sm font-medium text-[#111827] group-hover:text-[#00A79D]">
                          {item}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 py-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex max-w-[85%] flex-col",
                      message.from === "user" ? "items-end self-end" : "items-start self-start"
                    )}
                  >
                    <div
                      className={cn(
                        "px-4 py-2.5 text-sm leading-relaxed",
                        message.from === "user"
                          ? "rounded-[16px] rounded-tr-xs bg-[#E4FFFD] font-normal text-[#00A79D]"
                          : "rounded-[16px] rounded-tl-xs bg-[#F5F6F7] text-[#111827]"
                      )}
                    >
                      {message.text}
                    </div>
                    <span className="mt-1 text-[11px] text-[#8E8E93]">{message.at}</span>
                  </div>
                ))}

                {/* Quick actions section (matching node 3107:9411) */}
                <div className="mt-2 flex flex-col items-start gap-2 border-t border-[#EEF0F1] pt-3">
                  <p className="text-xs font-semibold text-[#5A5F63]">Quick actions</p>
                  <div className="flex w-full flex-col items-start gap-2">
                    {answers.map((entry) => (
                      <button
                        key={entry.q}
                        type="button"
                        onClick={() => send(entry.q)}
                        className="cursor-pointer rounded-full bg-[#E4FFFD] px-4 py-2 text-left text-xs font-medium text-[#111827] transition-colors hover:bg-[#D0FAF7]"
                      >
                        {entry.q}
                      </button>
                    ))}
                  </div>
                </div>
                <div ref={endRef} />
              </div>
            )}
          </div>

          {/* Footer & Input Area */}
          <div className="px-4 pt-1 pb-4">
            {/* Category Filter Pills */}
            <div className="mb-3 flex scrollbar-none items-center gap-2 overflow-x-auto py-0.5">
              {TOPICS.map((item) => {
                const isActive = topic === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTopic(item)}
                    className={cn(
                      "cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-150",
                      isActive
                        ? "border border-[#00A79D] bg-[#E4FFFD] text-[#00A79D]"
                        : "border border-transparent bg-transparent text-[#333333] hover:text-[#00A79D]"
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Input Box (Figma rounded box with mic icon button) */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                send(draft);
              }}
              className="relative flex flex-col justify-between rounded-[20px] border border-[#E5E7EB] bg-[#F8F9FA] p-3.5 transition-all focus-within:border-[#00A79D] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#00A79D]/20"
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
                className="h-[88px] w-full resize-none bg-transparent pr-12 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
              />
              <button
                type="submit"
                aria-label={draft.trim() ? "Send message" : "Voice input"}
                className="absolute right-3.5 bottom-3.5 flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#00A79D] bg-white text-[#00A79D] transition-colors hover:bg-[#00A79D] hover:text-white"
              >
                {draft.trim() ? <Send className="size-4" /> : <Mic className="size-4" />}
              </button>
            </form>

            <p className="mt-2 text-center text-[12px] text-[#8E8E93]">
              AI can make mistakes. Double-check replies.
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
