import { IMessage } from "@/interface";
import { Message } from "./message";

export const ChatItem = (props: IMessage) => {
  return (
    <div
      className={`flex ${
        props.role === "user" ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
          props.role === "user"
            ? "bg-[#eaf4ff] text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        <Message text={props.content} chatType={"text"} />
        <div className="text-xs text-gray-600 mt-1 text-right"></div>
      </div>
    </div>
  );
};
