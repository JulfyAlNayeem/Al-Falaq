import React from 'react'
import { useChatContext } from '../../context-reducer/ChatContext';
import img1 from "../../assets/avatar/avt9.svg";
import { cardClass } from '../../constant';

const UserNameTag =  ({ username, otherClasses, position }) => {
    const {themeIndex } = useChatContext();

  return (
    <>
      <div className="m-2 mt-2 ring-offset-1 ring-1 ring-gray-400 rounded-full bg-gradient-to-r from-[#00a7ffff] to-[#fff20059] min-w-fit">
        <img src={img1} className="size-6" alt="" />
      </div>
      <p
        className={`${otherClasses ? `${otherClasses}` : null} ${
          cardClass[themeIndex.value]
        } absolute ${
          position === "top"
            ? "left-0 -top-[25px] rounded-l-xl rounded-t-xl"
            : "right-0 -bottom-[25px] rounded-r-xl rounded-tl-none"
        } text-xs p-1 px-2`}
      >
        {username}
      </p>
    </>
  );
}

export default UserNameTag
