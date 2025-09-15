"use client";

import { ChatItem } from "./chat-item";
import { ChatInput } from "./input";
import { useAtomValue } from "jotai";
import { MessagesAtom } from "@/store";
import { NoDataSvg } from "../svg";
import { useEffect, useRef } from "react";

export const Chat = () => {
  const messages = useAtomValue(MessagesAtom);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col">
      <div className="h-[80vh] overflow-scroll">
        {messages ? (
          messages?.map((item, index) => (
            <ChatItem key={index} content={item.content} role={item.role} />
          ))
        ) : (
          <NoDataSvg />
        )}
        <div ref={bottomRef} />
      </div>
      <ChatInput />
    </div>
  );
};
