import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDarkContext } from "./Darkcontext";

export default (props) => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const { darkHandler } = useDarkContext();
  darkHandler(isDarkMode);
  console.log(isDarkMode);

  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={50} />
  );
};
