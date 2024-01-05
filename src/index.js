import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Signup from "./pages/signup/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Signup />
  
);