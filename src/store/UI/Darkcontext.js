import React, { useContext, useState } from "react";
const Darkcontext = React.createContext();

export const DarkContextProvider = ({ children }) => {
  const [dark, setDark] = useState();

  const darkHandler = (arg) => {
    setDark(arg);
  };

  return (
    <Darkcontext.Provider value={{ darkHandler, dark }}>
      {children}
    </Darkcontext.Provider>
  );
};

export const useDarkContext = () => {
  return useContext(Darkcontext);
};
