import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Navbar from "./Navbar/Navbar"
import LeftMainPage from "./LeftMainPage/LeftMainPage";
import RightMainPage from "./RightMainPage/RightMainPage";
import "./App.css"

export default function App() {
  return (
    <div>
      <div>
          <Navbar />

          <div className="home-page">
            <LeftMainPage />
            <RightMainPage />
          </div>

      </div>
    
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
