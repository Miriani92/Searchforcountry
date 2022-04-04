import React from "react";
import ReactDOM from "react-dom";
import { CountryContextProvider } from "./store/Store";
import { DarkContextProvider } from "./store/UI/Darkcontext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DarkContextProvider>
      <CountryContextProvider>
        <App />
      </CountryContextProvider>
    </DarkContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
