import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import "./styles/main.css";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
