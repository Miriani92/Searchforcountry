import React from "react";
import { DarkContextProvider, useDarkContext } from "./store/UI/Darkcontext";
import Header from "./component/Header";
import Search from "./component/Search";
import Countries from "./component/Countries";
import "./Index.css";

function App() {
  const { dark } = useDarkContext();
  let darkStyle;
  if (dark) {
    darkStyle = { background: "#333", color: "white", minHeight: "100vh" };
  } else {
    darkStyle = { background: "#eee", color: "black", minHeight: "100vh" };
  }

  return (
    <div style={darkStyle}>
      <Header />
      <Search />
      <Countries />
    </div>
  );
}

export default App;
