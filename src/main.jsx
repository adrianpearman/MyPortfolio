// NPM Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
// Importing SCSS Styling
// import "./assets/styles/index.scss";
import "./assets/styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
