import React, { memo, useEffect, useRef, useState } from "react";
import { cardClass } from "../../constant";
import Message from "../chatroom/Message";
import ChatEmojiCard from "./ChatEmojiCard";
import { useChatContext } from "../../context-reducer/ChatContext";
import UserNameTag from "./UserNameTag";

const ChatCard = ({
  messageId,
  otherClasses,
  userMessages,
  username,
  emoji,
}) => {
  const messagesEndRef = useRef(null);
  const { themeIndex, message, names } = useChatContext();
  const [userNames, setUserNames] = useState();

  console.log(names, username);
  useEffect(() => {
    scrollToBottom();
  }, [userMessages]);

  // Function to scroll to the bottom of the message container
  if (username === names.value) {
    console.log("Bismillah");
  }
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        className={`${
          otherClasses ? "items-end justify-end" : "items-start justify-start"
        }  
        mt-10 flex w-full `}

        // ${names.value === username ? "mt-0.5" : "mt-10"}
      >
        {!otherClasses && (
          <>
            <UserNameTag
              username={username}
              otherClasses={otherClasses}
              position="top"
            />
          </>
        )}

        {userMessages ? (
          <Message otherClasses={otherClasses} userMessages={userMessages} />
        ) : null}

        {emoji ? <ChatEmojiCard Emoji={emoji} /> : null}

        {otherClasses && (
          <>
            <UserNameTag
              username={username}
              otherClasses={otherClasses}
              position="bottom"
            />
          </>
        )}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default memo(ChatCard);
