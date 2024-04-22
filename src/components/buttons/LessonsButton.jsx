import { BsFileBreakFill } from "react-icons/bs";

import { Drawer } from "@mui/material";
import React, { useState } from "react";
import LessonSplitter from "../chatroom/LessonSplitter";
import { PiBookOpenTextFill } from "react-icons/pi";
import { TbBooks } from "react-icons/tb";
import QuickLesson from "../lesson/QuickLesson";
import { useChatContext } from "../../context-reducer/ChatContext";
import { iconColor, borderColor, secondColor } from "../../constant";

const drawerBleeding = 56;

const LessonsButton = () => 
  {
    const [open, setOpen] = useState(false);
    const { themeIndex } = useChatContext();

    const container =
      window !== undefined ? () => window().document.body : undefined;
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const [visible, setVisible] = useState(1);
    return (
      <>
        <div className={` ${iconColor[themeIndex.value]} text-[${borderColor[themeIndex.value]}]  chatIcon border-r-2 ml-2 cursor-pointer`} onClick={() => setOpen(true)}>
          <PiBookOpenTextFill className=" " />
        </div>
        <div>
          <Drawer
            anchor={"bottom"}
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
              ".MuiPaper-root": {
                height: `calc(80% - ${drawerBleeding}px)`,
                overflow: "visible",
                // background:"#020617",
  
                background: secondColor[themeIndex.value],
                borderTopRightRadius: "25px",
                borderTopLeftRadius: "25px",
                px: 1,
                py: 2,
              },
            }}
          >
            <div className="w-full between text-blue-400 mb-5">
              <button
                className={`${
                  visible === 1
                    ? "border-b-2 text-blue-600  border-blue-600"
                    : "border-b-transparent"
                } ` }
                onClick={() => setVisible(1)}
                style={{borderColor:borderColor[themeIndex.value]}}
              >
                <PiBookOpenTextFill className={`${iconColor[themeIndex.value]} text-2xl`} />
              </button>

              <div className="flex items-center ">
                <button
                className={`${
                  visible === 2
                    ? "border-b-2 text-blue-600  border-blue-600"
                    : "border-b-transparent"
                } ` }
                onClick={() => setVisible(2)}
                style={{borderColor:borderColor[themeIndex.value]}}
              >
                <TbBooks className={`${iconColor[themeIndex.value]} text-2xl`} />
              </button>
              
              <button
                className={`${
                  visible === 3
                    ? "border-b-2 text-blue-600  border-blue-600"
                    : "border-b-transparent"
                } pb-0.5` }
                onClick={() => setVisible(3)}
                style={{borderColor:borderColor[themeIndex.value]}}
              >
                <BsFileBreakFill className={`${iconColor[themeIndex.value]} text-xl `} />
              </button>
              </div>
            </div>
            {/* {visible === 3 ? <LessonSplitter />:null} */}
            {visible === 1 ? (
              <QuickLesson setVisible={setVisible}/>
            ) : visible === 3 ? (
              <LessonSplitter />
            ) : null}
          </Drawer>
        </div>
      </>
    );
  }
  

export default LessonsButton
