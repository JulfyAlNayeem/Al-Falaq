import React from "react";
import { BsSendFill } from "react-icons/bs";
import { useChatContext } from "../../context-reducer/ChatContext";

export default function QuickLessonSendButton({lessonDescription}) {
    const {message} = useChatContext();

    const addNewMessage = (msg) => {
      const newMessage = {
        id: 20,
        username: "Jabir",
        status: "student",
        message:msg,
        img: null,
      };
  
      const updatedMessages = [...message.value, newMessage];
      message.setValue(updatedMessages);
    };

  return (
    <div>
      <button className=" text-blue-500" onClick={()=>addNewMessage(lessonDescription)}>
        <BsSendFill />
      </button>
    </div>
  );
}
