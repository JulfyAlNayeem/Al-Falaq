import React from "react";
import { MdColorLens } from "react-icons/md";
import { cardClass, iconColor, themeImg } from "../../constant/index";
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

import { Drawer } from "@mui/material";
import { useChatContext } from "../../context-reducer/ChatContext";
export default function ThemeButton() {
  const [open, setOpen] = React.useState(false);
  const {themeIndex}  = useChatContext();
  const style = {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <button onClick={() => setOpen(true)} className= {`${iconColor[themeIndex.value]} text-2xl`}>
        <MdColorLens  />
      </button>
      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          height: 400,
          "& .MuiDrawer-paper": {
            background: "transparent",
          },
        }}
      >
        <div className={`${cardClass[themeIndex.value]} p-3 space-y-4 rounded-b-3xl`}>
          <div className="between">
            <p className="text-sm">Customize your chat</p>
            <MdCancel
              className=" cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          {themeImg.map((theme, index) => (
            <div
              className="between cursor-pointer"
              onClick={() => {
                themeIndex.setValue(index), setOpen(false);
              }}
            >
              <div className="flex items-center gap-2">
                <button className="size-11 rounded-full  shadow-md shadow-gray-900 center ">
                  <img
                    src={theme.theme}
                    className="size-11 rounded-full  mx-1 "
                    alt="theme"
                  />
                </button>
                <p className="text-sm">{theme.title}</p>
              </div>
              {themeIndex === index ? <TiTick className="" /> : null}
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
}
