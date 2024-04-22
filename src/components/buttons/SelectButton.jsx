import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { useChatContext } from "../../context-reducer/ChatContext";
import { borderColor, secondColor } from "../../constant";

export default function SelectButton({ userMessages, textRef }) {
  const { themeIndex } = useChatContext();

  const handleButtonClick = () => {
    const node = textRef.current; // Get the node from the ref

    if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(node);
      range.select();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      console.warn("Could not select text in node: Unsupported browser.");
    }
  };
  return (
    <>
      <Button
        sx={{
          fontSize: "0.70rem",
          color: "white",
          // backgroundColor: borderColor[themeIndex.value],
          width: 140,
        }}
        size="medium"
        variant="text"
        onClick={handleButtonClick}
      >
        Select
      </Button>
    </>
  );
}
