import React, { useState } from "react";
import ChatRoom from "../components/chatroom/ChatRoom";
import ChatList from "../components/chatlist/ChatList";
import WelcomePage from "../components/other/WelcomePage";

export default function Home() {
  const [chatRoomVisibility, setChatRoomVisibility] = useState(false);

  return (
    <main className="flex items-center">
      <div className="w-full md:w-[35%] sm:w-[45%]">
        <ChatList
          chatRoomVisibility={chatRoomVisibility}
          setChatRoomVisibility={setChatRoomVisibility}
        />
      </div>
      <WelcomePage />
    </main>
  );
}
