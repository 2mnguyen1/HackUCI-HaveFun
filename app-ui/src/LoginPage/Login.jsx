import React, { useState, useEffect } from "react";
import "./Login.css";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <>
      <div className="login-main">
        <div className="login-input">
          <div className="login-logo">
            <img
              src="https://media.discordapp.net/attachments/795161297121574932/1071291088414986280/H-removebg-preview.png"
              alt=""
            />
            <h1>HaveFun</h1>
          </div>

          {!isSignUp && (
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <h1>Login</h1>

              <input className="login-box" type="text" placeholder="Username" />
              <input
                className="login-box"
                type="password"
                placeholder="Password"
              />

              <button className="login-btn" type="submit">
                + LOGIN
              </button>
              <button
                className="signup-btn"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                }}
              >
                SIGN UP!
              </button>
            </form>
          )}

          {isSignUp && (
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <h1>Sign Up</h1>

              <input className="login-box" type="text" placeholder="Username" />
              <input
                className="login-box"
                type="password"
                placeholder="Password"
              />

              <input
                className="login-box"
                type="password"
                placeholder="Confirm Password"
              />

              <button
                className="signup-btn"
                type="submit"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                }}
              >
                SIGN UP!
              </button>

              <button
                className="signup-btn back-btn"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                }}
              >
                BACK
              </button>
            </form>
          )}
        </div>
        <div className="login-pic">
          <img
            src="https://media.discordapp.net/attachments/795161297121574932/1071306318620663868/DALL_E_2023-02-03_20.21_1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
