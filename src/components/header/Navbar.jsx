import React, { useState } from "react";
import { HiViewGrid } from "react-icons/hi";
import { HiOutlineViewGrid } from "react-icons/hi";

import chatActive from "../../assets/icons/chatactive.svg";
import chatIcon from "../../assets/icons/chatIcon.svg";
import ActivePersonList from "../drawer/ActivePersonList";
import {iconColor, theme} from '../../constant/index'
import Headroom from "react-headroom";
import ThemeButton from "./ThemeButton";
import { useChatContext } from "../../context-reducer/ChatContext";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [activePersons, setActivePersons] = useState(false);
  const {themeIndex} = useChatContext();
  return (
    // <Headroom>
      <nav
        className={ `${theme[themeIndex.value]}
        } fixed top-0 transition duration-700 py-1 shadow-lg w-full lg:w-[70%] md:w-[65%] sm:w-[70%] between px-5 z-20  px-5 max-w-[970px] rounded-b-3xl`}
      >
        <Link to={'/'}>
        <img src={chatIcon} alt="logo" className=" w-16 py-2" />
        </Link>

        <section className="w-fit flex items-center text-2xl gap-2">
          
          <ActivePersonList open={activePersons} setOpen={setActivePersons} />
         <ThemeButton />
         
        </section>
      </nav>
    // </Headroom>
  );
}
