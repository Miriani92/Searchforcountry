import React from "react";
import ReactDOM from "react-dom";
import { CountryContextProvider } from "./store/Store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
