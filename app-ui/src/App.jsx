import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";

export default function App() {
  return (
      <div>
    <div>
        <Navbar />
    </div>
  
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
