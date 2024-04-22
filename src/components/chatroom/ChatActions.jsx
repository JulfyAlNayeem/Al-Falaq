import React, { memo, useState } from "react";
import ControlMessage from "./ControlMessage";
import QuickMessage from "../buttons/QuickMessage";
import EmojiButton from "../buttons/EmojiButton";
import { useChatContext } from "../../context-reducer/ChatContext";
import { chatActionBg } from "../../constant";

const ChatActions = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const { themeIndex } = useChatContext();

  return (
    <div className={`${chatActionBg[themeIndex.value]} w-full lg:w-[70%] md:w-[65%] sm:w-[70%] py-3   fixed bottom-0 backdrop-blur-sm flex items-end gap-1 z-20  px-5 max-w-[970px] rounded-t-3xl`}>
      {showButtons && inputValue === "" && (
        <>
          {/* <button className="chatIcon">
            <FaRegImage />
          </button>
          <button className="chatIcon">
            <MdSettingsVoice />
          </button> */}
          <EmojiButton />
          <QuickMessage />
        </>
      )}
      <ControlMessage
        inputValue={inputValue}
        setInputValue={setInputValue}
        setShowButtons={setShowButtons}
      />
    </div>
  );
};

export default memo(ChatActions);
