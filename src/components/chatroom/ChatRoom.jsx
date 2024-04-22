import React, { useEffect, useState } from "react";
import Chat from "../card/Chat";
import "../../custom.css";
import ChatActions from "./ChatActions";
import Navbar from "../header/Navbar";
import { useChatContext } from "../../context-reducer/ChatContext";
import { miniThemeBg, themeBg } from "../../constant";
import groupMessages from "../../assets/data/groupmessages.json";
import ChatList from "../chatlist/ChatList";

const ChatRoom = () => {
  const { message, themeIndex } = useChatContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [themeBackground, setThemeBackground] = useState(themeBg);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const getBackgroundImage = () => {
    if (windowWidth <= 1065) {
      setThemeBackground(miniThemeBg);
    } else {
      setThemeBackground(themeBg);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getBackgroundImage();
  }, [windowWidth, themeBg, miniThemeBg]);

  const styles = {
    container: {
      backgroundImage: `url(${themeBackground[themeIndex.value]})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      overflow: "hidden",
    },
  };

  return (
    <div className="between">
      <section className="w-full md:w-[35%] sm:w-[45%] sm:block hidden">
        <ChatList />
      </section>

      <section
        className="relative w-full lg:w-[80%] sm:w-[65%] h-screen  overflow-hidden"
        style={styles.container}
      >
        <Navbar />

        <div className="sm:pb-20 mt-20  pb-12  overflow-y-scroll h-[67%] px-5 ">
          {groupMessages.map((message) => (
            <div key={message.id}>
              <Chat
                messageId={message.id}
                userId={message.userId}
                username={message.username}
                status={message.status}
                userMessages={message.message}
              />
            </div>
          ))}

          {message.value.map((message, index) => (
            <div key={index}>
              <Chat
                messageId={message.id}
                username={message.username}
                status={message.status}
                userMessages={message.message}
                emoji={message.img}
              />
            </div>
          ))}
        </div>

        <section className="w-full pt-20">
          <ChatActions />
        </section>
      </section>
    </div>
  );
}


export default ChatRoom
