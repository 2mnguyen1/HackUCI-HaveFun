import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Navbar from "./Navbar/Navbar";
import LeftMainPage from "./LeftMainPage/LeftMainPage";
import Community from "./Community/Community";

export default function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<LeftMainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
