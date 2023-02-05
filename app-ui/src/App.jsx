import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./LoginPage/Login";
import Register from "./Register/Register";
import Navbar from "./Navbar/Navbar";
import LeftMainPage from "./LeftMainPage/LeftMainPage";
import RightMainPage from "./RightMainPage/RightMainPage";
import Community from "./Community/Community";
import "./App.css";
import useToken from "./useToken";

export default function App() {
  const { token, setToken } = useToken();

  const [user, setUser] = useState();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !user ? (
                <Login setUser={setUser} setToken={setToken} />
              ) : (
                <div>
                  <div>
                    <Navbar />
                  </div>
                  <div className="home-page">
                    <LeftMainPage user={user} />
                    <RightMainPage user={user} />
                  </div>
                </div>
              )
            }
          />
          {/* {!user ? (
            <Route
              path="/"
              element={<Login setUser={setUser} setToken={setToken} />}
            />
          ) : (
            <Route
              path="/main"
              element={
                <div>
                  <div>
                    <Navbar />
                  </div>
                  <div className="home-page">
                    <LeftMainPage user={user} />
                    <RightMainPage user={user} />
                  </div>
                </div>
              }
            />
          )} */}

          {/* <Route
            path="/login"
            element={<Login setUser={setUser} setToken={setToken} />}
          /> */}
          <Route path="/register" element={<Register />} />
          {user && <Route path="/community" element={<Community />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
