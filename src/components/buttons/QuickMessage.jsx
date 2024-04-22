import { BsFileBreakFill } from "react-icons/bs";
import { IoIosBookmarks } from "react-icons/io";

import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import LessonSplitter from "../chatroom/LessonSplitter";
import { GiBookshelf } from "react-icons/gi";
import { PiBookOpenTextFill, PiBooksFill } from "react-icons/pi";
import { TbBooks } from "react-icons/tb";
import QuickLesson from "../lesson/QuickLesson";
import QuickMessageSingleButton from "./QuickMessageSingleButton";
import { useChatContext } from "../../context-reducer/ChatContext";
import { iconColor, secondColor } from "../../constant";

const drawerBleeding = 56;

export default function QuickMessage() {
  const [visible, setVisible] = useState(1);
  const [open, setOpen] = useState(false);
  const {themeIndex} = useChatContext();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <button
        className={`${iconColor[themeIndex.value]} chatIcon`}
        onClick={() => setOpen(true)}
      >
       
        <BiMessageSquareDetail className="  " />
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
              // background:"#020617",

              background:secondColor[themeIndex.value],
              borderTopRightRadius: "25px",
              borderTopLeftRadius: "25px",
              p: 2,
            },
          }}
        >
          <div className="w-full grid lg:grid-cols-12 md:grid-cols-8 grid-cols-3 gap-2 text-blue-400 mb-5 overflow-y-scroll overflow-x-auto">
            <QuickMessageSingleButton/>
          </div>
         
        </Drawer>
      </div>
    </>
  );
}
