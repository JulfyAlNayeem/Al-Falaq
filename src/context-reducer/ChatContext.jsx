import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  // Custom hook
  function useCustomState(initialValue) {
    const [value, setValue] = useState(initialValue);
    const [prevState, setPrevState] = useState([]);

    const updateValue = (newValue) => {
      setPrevState((prev) => [...prev, newValue]);
      setValue(newValue);
    };
    return { value, setValue: updateValue, prevState };
  }

  const message = useCustomState([]);
  const splittedLessons = useCustomState([]);
  const image = useCustomState(null);
  const names = useCustomState("");
  const themeIndex = useCustomState(0);


  const state = {
    message,
    splittedLessons,
    image,
    names,
    themeIndex
  };

  return <ChatContext.Provider value={state}>{children}</ChatContext.Provider>;
};

const useChatContext = () => {
  return useContext(ChatContext);
};

export { ChatProvider, useChatContext };
