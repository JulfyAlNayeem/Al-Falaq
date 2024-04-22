import React from "react";
import PersonCard from "../card/PersonCard";
import { iconColor, miniThemeBg, theme, themeBg } from "../../constant";
import ChatListNavbar from "./ChatListNavbar";
import SearchBox from "./SearchBox";
import { useChatContext } from "../../context-reducer/ChatContext";
import { Link } from "react-router-dom";

export default function ChatList() {
  const { themeIndex } = useChatContext();

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Banana",
    "Orange",
    "Banana",
    "Orange",
    "Banana",
    "Orange",
    "Banana",
    "Orange",
  ];
  const styles = {
    container: {
      backgroundImage: `url(${miniThemeBg[themeIndex.value]})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      overflow: "hidden",
    },
  };

  return (
    <main
      className={` ${iconColor[themeIndex.value]} relative w-full  h-screen p-5 overflow-hidden  border-r`}
      style={styles.container}
    >
      <div className="h-screen overflow-y-auto ">
        <ChatListNavbar />
        <SearchBox />

        <div className=" overflow-y-scroll h-[64%] ">
          {items.map((item, index) => (
            <div
              className="w-full"
              
            >
              <Link to={`/ct/${index}`}>
              <PersonCard />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
    </main>
  );
}
