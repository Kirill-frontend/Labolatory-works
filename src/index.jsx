import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Lab01 } from "./pages/Lab01";
import { Lab02 } from "./pages/Lab02";
import { Lab03 } from "./pages/Lab03";
import { Lab04 } from './pages/Lab04';
import { Navbar } from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lab01" element={<Lab01 />} />
        <Route path="/lab02" element={<Lab02 />} />
        <Route path="/lab03" element={<Lab03 />} />
        <Route path="/lab04" element={<Lab04 />} />
      </Routes>
    </BrowserRouter>
  </>
);
