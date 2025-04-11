import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { useThemeStore } from "./store/useThemeStore";

const theme = localStorage.getItem("trackforge-theme");
if (theme === `"dark"`) {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
