import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const raw = localStorage.getItem("theme-storage");

if (raw) {
  try {
    const parsed = JSON.parse(raw);
    const theme = parsed?.state?.theme;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {
    console.error("Failed to parse theme from localStorage", e);
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
