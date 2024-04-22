import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsArrowDown, BsSendFill } from "react-icons/bs";
import "../../custom.css";
import { useChatContext } from "../../context-reducer/ChatContext";
import { FaChevronRight } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import QuickLessonSendButton from "../buttons/QuickLessonSendButton";
import { TiChevronRightOutline } from "react-icons/ti";
import { accordionDetails, accordionSummaryOne, accordionSummaryTwo, borderColor, secondColor } from "../../constant";
export default function QuickLesson({ lessonName, subLessonName, lesson, setVisible }) {
  const { splittedLessons,themeIndex } = useChatContext();
  const { value, prevState } = splittedLessons;

  if (prevState.length === 0) {
    return (
      <div className="center flex-col w-full h-full font-semibold text-gray-200">
        <p className=" font-semibold text-gray-200">
          You have no quick lessons.
        </p>
        <button className={` bg-[$] text-sm  p-2 rounded-md mt-2`} style={{background:borderColor[themeIndex.value]}} onClick={()=>setVisible(2)}>
          Add Quick Lesson
        </button>
      </div>
    );
  }
  return (
    <div className=" overflow-y-scroll h-full ">
      {prevState.map((prevStateArray, i) =>
        prevStateArray.map((lesson, index) => (
          <div className="w-full mb-2">
            <Accordion
              style={{
                margin: 0,
                padding: 0,
                paddingRight: 5,
                paddingLeft: 5,
                background: accordionSummaryOne[themeIndex.value],
                borderRadius: 10,
              }}
            >
              <AccordionSummary
                expandIcon={
                  <TiChevronRightOutline  className="text-gray-200" />
                }
                aria-controls="panel2-content"
                id="panel2-header"
                style={{
                  margin: 0,
                  padding: 0,
                  border: "1px",
                  borderColor: "whitesmoke",
                }}
                sx={{
                  flexDirection: "row-reverse",
                  background: accordionSummaryOne[themeIndex.value],
                  borderRadius: 3,
                  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    transform: "rotate(90deg)",
                  },
                }}
              >
                <p className=" text-gray-100">{lesson.lessonName}</p>
              </AccordionSummary>
              <AccordionDetails style={{ margin: 0, padding: 0 }}>
                {lesson.lessonParts.map((lessonDescription, idx) => (
                  <div className="relative" key={idx}>
                      <div className="absolute  top-3 right-3 z-10 flex items-center gap-4 text-lg">
                          <button className=" text-red-600 text-xl">
                            <MdOutlineDeleteSweep />
                          </button>

                          <button className=" text-green-500 text-xl">
                            <CiEdit />
                          </button>
                         <QuickLessonSendButton lessonDescription={lessonDescription}/>
                        </div>
                    <Accordion
                      style={{
                        margin: 0,
                        padding: 0,
                        paddingLeft: 5,
                        background: accordionSummaryTwo[themeIndex.value],
                        borderRadius: 10,
                        marginBottom: 5,
                      }}
                    >
                      <AccordionSummary
                        className=" "
                        expandIcon={
                          <TiChevronRightOutline className="text-gray-200" />
                        }
                        aria-controls="panel2-content"
                        id="panel2-header"
                        style={{ margin: 0, padding: 0 }}
                        sx={{
                          flexDirection: "row-reverse",
                          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
                            {
                              transform: "rotate(90deg)",
                            },
                        }}
                      >
                        <p className=" text-gray-100 ">Part {idx + 1}</p>
                      
                      </AccordionSummary>

                      <AccordionDetails
                        style={{
                          margin: 0,
                          padding: 10,
                          background:accordionDetails[themeIndex.value],
                          borderRadius: 10,
                        }}
                      >
                        <p className="text-gray-200">{lessonDescription}</p>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
        ))
      )}
    </div>
  );
}
