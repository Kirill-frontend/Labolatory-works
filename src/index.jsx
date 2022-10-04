import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Lab01 } from "./pages/Lab01";
import { Navbar } from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lab01" element={<Lab01 />} />
      </Routes>
    </BrowserRouter>
  </>
);
