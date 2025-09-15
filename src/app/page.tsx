import { Chat } from "@/components";

export default function Home() {
  return (
    <div className="bg-[#f8fafc] rounded-2xl p-2 md:p-5 w-full h-full flex flex-col">
      <div className="flex-1 h-[80vh] overflow-hidden">
        <Chat />
      </div>
    </div>
  );
}
