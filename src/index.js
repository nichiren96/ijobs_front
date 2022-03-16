import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MainProvider } from "./providers/main_provider";

ReactDOM.render(
  <MainProvider>
    <App />
  </MainProvider>,
  document.getElementById("root")
);
