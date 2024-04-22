import { Drawer } from "@mui/material";
import React, { useState } from "react";
import emoji from "../../assets/icons/smiledark.svg";

import EmojiImageSingleButton from "./EmojiImageSingleButton";
import { AiFillMeh } from "react-icons/ai";
import { BsEmojiLaughingFill, BsFillEmojiGrinFill } from "react-icons/bs";
import Smiley from "./Smiley";
import { iconColor,  secondColor } from "../../constant";
import { useChatContext } from "../../context-reducer/ChatContext";

const drawerBleeding = 56;

export default function EmojiButton() {
  const [open, setOpen] = useState(false);
  const {themeIndex} = useChatContext();
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [visible, setVisible] = useState(1);
  return (
    <>

      <button className={` ${iconColor[themeIndex.value]} chatIcon`} onClick={() => setOpen(true)}>
        <Smiley/>
        {/* <img src={emoji} className="size-7" alt="" /> */}
      </button>
      <div>
        <Drawer
          anchor={"bottom"}
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            ".MuiPaper-root": {
              height: `calc(50% - ${drawerBleeding}px)`,
              overflow: "visible",
              background: secondColor[themeIndex.value],
              borderTopRightRadius: "25px",
              borderTopLeftRadius: "25px",
              p: 2,
            },
          }}
        >
          <div className="w-full grid grid-cols-8 lg:grid-cols-12 text-blue-400 mb-5">
            <div className=" text-yellow-400 text-lg col-span-full  mb-5 center gap-2">
            <button className=" border-b-2 border-blue-400 pb-1"><img className=" size-5 " src={emoji} alt="emoji" /></button>
              <button className=" border-b-2 border-blue-400 pb-1">
              <BsEmojiLaughingFill  className=" bg-[#a64a26] rounded-full" />
              </button>

            </div>
            
            <EmojiImageSingleButton />
          </div>
        </Drawer>
      </div>
    </>
  );
}
