import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Register from "./Register/Register";
import Navbar from "./Navbar/Navbar";
import LeftMainPage from "./LeftMainPage/LeftMainPage";
import RightMainPage from "./RightMainPage/RightMainPage";
import Community from "./Community/Community";
import "./App.css";

export default function App() {
  const [user, setUser] = useState();

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="home-page">
                  <LeftMainPage />
                  <RightMainPage />
                </div>
              </div>
            }
          />

          <>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
          </>

          {user && <Route path="/community" element={<Community />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
