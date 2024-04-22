
import React, { memo, useEffect, useRef, useState } from "react";
import { borderColor, cardClass, secondColor } from "../../constant";
import SelectButton from "../buttons/SelectButton";
import { useMemo } from "react";
import { useChatContext } from "../../context-reducer/ChatContext";
import MessageDialog from "./MessageDialog";

const Message = ({ otherClasses, userMessages, userImage }) => {
  const [open, setOpen] = useState(false);
  const { themeIndex } = useChatContext();
  const textRef = useRef();
  const [pressTimer, setPressTimer] = useState(null);

  useEffect(() => {
    const handleTouchMove = () => {
      clearTimeout(pressTimer);
    };

    // Add event listener for touchmove when the component mounts
    document.addEventListener('touchmove', handleTouchMove);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [pressTimer]);

    const handleTouchStart  = () => {
      setPressTimer(setTimeout(handleLongPress, 500)); // Adjust the delay as needed for your long press duration
    };
  
    const handleTouchEnd  = () => {
      clearTimeout(pressTimer);
    };
  
    useEffect(() => {
      return () => {
         (pressTimer);
      };
    }, [pressTimer]);

;

  const handleLongPress = () => {
    setOpen(true)
  };

  // const handleClick = (event) => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        ref={textRef}
        // onClick={handleClick}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`${
          otherClasses ? `${otherClasses}` : "rounded-r-xl rounded-b-xl"
        } ${cardClass[themeIndex.value]} p-3 max-w-[70%] w-fit text-sm`}
        
      >
        {/* <LongPressButton  onLongPress={handleLongPress}></LongPressButton> */}
        {userMessages ? <div className="text-start">{userMessages}</div> : null}

        {userImage ? <img src={userImage} className="" alt="" /> : null}
      </button>
<MessageDialog open={open} handleClose={handleClose} setOpen={setOpen}  userMessages={userMessages} textRef={textRef}/>
    </>
  );
};

export default memo(Message);
