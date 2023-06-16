import React from "react";
import ReactDOM from "react-dom";
import { ItemContextProvider } from "./components/store/item-context";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
