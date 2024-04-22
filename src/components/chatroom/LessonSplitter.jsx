import React, { useEffect, useRef, useState } from "react";
import { useChatContext } from "../../context-reducer/ChatContext";
import { LuSplitSquareHorizontal } from "react-icons/lu";
import { borderColor, chatInputBg, iconColor } from "../../constant";

export default function LessonSplitter({}) {
  const [splitLesson, setSplitLesson] = useState("");
  const [lessonTitle, setLessonTitle] = useState("");
  const inputRef = useRef();
  const { splittedLessons, themeIndex} = useChatContext();


  const handleTitleChange = (event) => {
    setLessonTitle(event.target.value);
  };

  const handleLessonChange = (event) => {
    setSplitLesson(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let lessonTitleAndParts = [
      { lessonName: lessonTitle, lessonParts: splitLesson.split("//") },
    ];

    const formattedData = lessonTitleAndParts.map((item) => ({
      lessonName: item.lessonName,
      lessonParts: item.lessonParts,
    }));
    splittedLessons.setValue(formattedData);
    setSplitLesson("");
    setLessonTitle("");
  };

  useEffect(() => {
    inputRef.current.focus();
}, []);
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full gap-2">
        <input
          type="text"
          className={`chatBox ${chatInputBg[themeIndex.value]} ${iconColor[themeIndex.value]} h-10 mb-3`}
          value={lessonTitle}
          ref={inputRef}
          onChange={handleTitleChange}
          placeholder="Lesson's title."
        />
        <textarea
  
  className={`chatBox ${chatInputBg[themeIndex.value]} ${iconColor[themeIndex.value]} h-72`}
          value={splitLesson}
          onChange={handleLessonChange}
          placeholder="Split your lesson"
        />

        {splitLesson ? (
          <button
            type="submit"
            className={` bg-gradient-to-tl from-[#00a7ffff] to-[#fff20059] disable text-sm px-4 rounded-lg    text-gray-200   p-2 w-fit center gap-1 font-semibold`}
          >
            Split <LuSplitSquareHorizontal className="text-lg" />
          </button>
        ) : (
          <div
            className={` text-sm  rounded-lg text-gray-200 p-2 px-4 w-fit  center gap-1 font-semibold`} style={{background:borderColor[themeIndex.value]}}
          >
            Split <LuSplitSquareHorizontal className="text-lg" />
          </div>
        )}
      </form>
    </>
  );
}
