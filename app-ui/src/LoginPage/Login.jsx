import React from "react";
import "./Login.css";

export default function Login() {
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

          <form action="">
            <h1>Login/Register</h1>

            <input className="login-box" type="text" placeholder="Username" />
            <input
              className="login-box"
              type="password"
              placeholder="Password"
            />
            <button className="login-btn" type="submit">
              + LOGIN
            </button>
          </form>
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
