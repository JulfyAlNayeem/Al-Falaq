import React, { memo, useEffect, useRef, useState } from "react";
import { MdOutlineSend } from "react-icons/md";
import { useChatContext } from "../../context-reducer/ChatContext";
import LessonsButton from "../buttons/LessonsButton";
import { chatInputBg, iconColor, borderColor } from "../../constant";

const ControlMessage = ({ setShowButtons, inputValue, setInputValue }) => {
  const inputRef = useRef();
  const { message, themeIndex, names } = useChatContext();

  useEffect(() => {
    // Add event listener to handle clicks outside the textarea
    document.body.addEventListener("click", handleClickOutside);

    // Cleanup: Remove event listener when component unmounts
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    const input = inputRef.current; // Access the textarea element using ref
    input.style.height = "37px"; // Reset height to auto
    setInputValue(event.target.value);

    if (event.target.value === "") {
      input.style.height = "37px"; // Set height to default when input is empty
    } else {
      input.style.height = `${input.scrollHeight}px`; // Set height based on content
    }
  };
  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowButtons(true);
    } else {
      setShowButtons(false);
    }
  };

  const handleSubmit = (e) => {
    const input = inputRef.current;

    e.preventDefault();
    // message.setValue(inputValue);
    addNewMessage();
    setInputValue("");

    input.style.height = "37px";
    inputRef.current.focus();
  };

  const addNewMessage = () => {
    if (inputValue) {
      const newMessage = {
        id: null,
        username: 'Imran',
        status: 'Student',
        message: inputValue,
        img: null,
      };

      const updatedMessages = [...message.value, newMessage];
      message.setValue(updatedMessages);
      names.setValue("Imran")
    }
  };
  return (
    <form onSubmit={handleSubmit} className="between w-full  ">
      <textarea
        className={`chatBox min-h-[37px] pt-1 transition-transform duration-1000${iconColor[themeIndex.value]} ${chatInputBg[themeIndex.value]}`}
        value={inputValue}
        ref={inputRef}
        required
        onChange={handleChange}
        placeholder="Write your message"
      />

      {inputValue ? (
        <button
          type="submit"
          className={` bg-gradient-to-tl from-[#00a7ffff] to-[#fff20059] disable text-xl rounded-lg    text-gray-200   p-2 min-w-fit ml-2`}
        >
          <MdOutlineSend />
        </button>
      ) : (
        <LessonsButton />
      )}
    </form>
  );
};

export default memo(ControlMessage);
