import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/header/Navbar";
import ChatRoom from "./components/chatroom/ChatRoom";

const Links = () => {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ct/:id" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Links;
