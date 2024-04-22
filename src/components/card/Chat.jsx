import React, { memo } from "react";
import ChatCard from "./ChatCard";
import ChatEmojiCard from "./ChatEmojiCard";

const Chat = ({ messageId, username, userMessages, status, emoji }) => {
  
  return (
    <>
      {status === "teacher" ? (
        <ChatCard
          messageId={messageId}
          username={username}
          userMessages={userMessages}
          emoji={emoji}
          otherClasses={"rounded-l-xl rounded-t-xl"}
        />
      ) : (
        <ChatCard
          messageId={messageId}
          username={username}
          userMessages={userMessages}
          emoji={emoji}
        />        
      )}
    </>
  );
};

export default memo(Chat);
