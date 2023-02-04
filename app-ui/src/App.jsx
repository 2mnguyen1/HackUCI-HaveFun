import React from "react";
import { BrowserRouter, Routes, Route, r } from "react-router-dom";
import Login from "./LoginPage/Login";
import Navbar from "./Navbar/Navbar";
import LeftMainPage from "./LeftMainPage/LeftMainPage";
import RightMainPage from "./RightMainPage/RightMainPage";
import Community from "./Community/Community";
import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/main"
            element={
              <div>
                <div className="home-page">
                  <LeftMainPage />
                  <RightMainPage />
                </div>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
