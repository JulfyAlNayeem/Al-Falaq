import React, { memo } from "react";
import { emoji } from "../../constant/index.js";
import IconButton from "@mui/material/IconButton";
import { useChatContext } from "../../context-reducer/ChatContext.jsx";
  
  const EmojiImageSingleButton = () => {
   const { message , names} = useChatContext();

  const addNewMessage = (img) => {
    const newMessage = {
      id: 20,
      username: "Jabir",
      status: "student",
      message:null,
      img: img,
    };

    const updatedMessages = [...message.value, newMessage];
    message.setValue(updatedMessages);
    names.setValue("Jabir")
  };

  return (
    <>
      {emoji.map((emoji, index) => (
        <IconButton
          size="small"
          className=""
          key={index}
          onClick={() => addNewMessage(emoji.img)}
        >
          <img src={emoji.img} className="size-8" alt="" />
        </IconButton>
      ))}
    </>
  );
}

  
  export default memo(EmojiImageSingleButton)
  