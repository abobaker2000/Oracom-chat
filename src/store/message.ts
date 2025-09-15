import { IMessage } from "@/interface";
import { atom } from "jotai";

export const MessagesAtom = atom<IMessage[] | null>(null);
