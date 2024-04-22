import { Button } from "@mui/material";
import React from "react";
import { LuMessageSquarePlus, LuMessagesSquare } from "react-icons/lu";
import { useChatContext } from "../../context-reducer/ChatContext";
import { iconColor } from "../../constant";

export default function ChatListNavbar() {
  const { themeIndex } = useChatContext();

  return (
    <div className={`${iconColor[themeIndex.value]} between py-1`}>
      <div className="flex items-center">
        <p className={` w-full p-2 mb-2 font-bold text-2xl rounded-md`}>
          Chats
        </p>
        <LuMessagesSquare className="text-3xl" />
      </div>
      <Button sx={{ borderRadius:10}}>
      <LuMessageSquarePlus className={` ${iconColor[themeIndex.value]} text-2xl cursor-pointer`} />
      </Button>
    </div>
  );
}
