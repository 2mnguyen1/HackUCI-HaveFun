import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Navbar from "./Navbar/Navbar"
import LeftMainPage from "./LeftMainPage/LeftMainPage";


export default function App() {
  return (
    <div>
      <div>
          <Navbar />
          <LeftMainPage />
      </div>
    
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
