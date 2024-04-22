import React, { memo } from "react";
import quickMessage from "../../assets/data/quickmessage.json";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useChatContext } from "../../context-reducer/ChatContext";
import { FiPlus } from "react-icons/fi";
import { Button } from "@mui/material";
import { accordionSummaryOne, borderColor } from "../../constant";

const QuickMessageSingleButton = () => {
  const { message,themeIndex,names } = useChatContext();

  const addNewMessage = (msg) => {
    const newMessage = {
      id: 20,
      username: "Muhammad",
      status: "teacher",
      message: msg,
      img: null,
    };

    const updatedMessages = [...message.value, newMessage];

    message.setValue(updatedMessages);
    names.setValue("Muhammad")
  };

  return (
    <>
      {quickMessage.map((data) => (
        <div
          className="  text-sm  rounded-full mb-2 between pl-2 pr-2"
          key={data.id}
          style={{backgroundColor:accordionSummaryOne[themeIndex.value]}}
        >
          <Button sx={{ borderRadius:10, color:borderColor[themeIndex.value], }}
            className="py-2 w-full truncate"
            onClick={()=>addNewMessage(data.message)}
          >
            {data.title}
          </Button>

          <BsThreeDotsVertical className=" text-xs cursor-pointer" />
        </div>
        
      ))}

      <div className=" ">
        <Button sx={{ borderRadius:10, bgcolor:accordionSummaryOne[themeIndex.value]}}  className=" bg-[#121c30ff] text-sm  rounded-full min-w-[103px] min-h-[36px] w-full center ">
          <FiPlus className="text-green-400 size-6 "/>
        </Button>
      </div>
    </>
  );
}


export default memo(QuickMessageSingleButton)
