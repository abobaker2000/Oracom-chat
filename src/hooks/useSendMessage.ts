import { IMessage } from "@/interface";
import { MessagesAtom } from "@/store";
import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useAtom(MessagesAtom);

  const sendMessage = async (message: IMessage) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...(messages || []), message] }),
      });
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        const newMessages = [...(messages || []), message, data];
        setMessages(newMessages);
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, sendMessage };
};
