import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/custom.css"
import "./index.css";
import Router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
