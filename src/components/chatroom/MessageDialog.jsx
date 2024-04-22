import React from "react";
import { accordionDetails, borderColor, cardClass, secondColor } from "../../constant";
import Dialog from "@mui/material/Dialog";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import SelectButton from "../buttons/SelectButton";
import { useMemo } from "react";
import { useChatContext } from "../../context-reducer/ChatContext";

const MessageDialog = ({ open, handleClose, userMessages, textRef }) => {
  const openPopover = open;
  const anchorEl = textRef.current;

  const { themeIndex } = useChatContext();

  return (
    <Popover
      open={openPopover}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      slotProps={{
        paper: { style: { backgroundColor: accordionDetails[themeIndex.value] } }, // Change the color here
      }}
    >
      <div className={` center flex-col gap-1 w-[140px] py-3 `}>
        <Button
          sx={{
            fontSize: "0.70rem",
            color: "white",
            width: 140,
          }}
          size="medium"
          variant="text"
        >
          Note
        </Button>
        <SelectButton userMessages={userMessages} textRef={textRef} />
        <Button
          sx={{
            fontSize: "0.70rem",
            color: "white",
            width: 140,
          }}
          size="medium"
          variant="text"
        >
          Reply
        </Button>
        <Button
          sx={{
            fontSize: "0.70rem",
            color: "white",
            width: 140,
          }}
          size="large"
          variant="text"
        >
          edit
        </Button>
        <Button
          sx={{
            fontSize: "0.70rem",
            color: "white",
            // backgroundColor: borderColor[themeIndex.value],
            width: 140,
          }}
          size="medium"
          variant="text"
        >
          Delete
        </Button>
      </div>
    </Popover>
  );
};

export default MessageDialog;
