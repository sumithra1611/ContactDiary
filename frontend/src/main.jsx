import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  WelcomePage,
  HomePage,
  CreatePage,
  ContactsPage,
  EditPage
} from "./pages/index.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        
        <Route path="/home" element={<HomePage />} />
        <Route path="/newcontact" element={<CreatePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
