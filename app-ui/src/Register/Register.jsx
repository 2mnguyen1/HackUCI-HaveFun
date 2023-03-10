import React, { useState, useEffect, useRef } from "react";
import "../LoginPage/Login";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [createPhoto, setCreatePhoto] = useState("");
  const navigate = useNavigate;

  async function createData(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/auth/register", {
        username: createUsername,
        password: createPassword,
        profilePicture: createPhoto,
      });
      navigate("/");
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }
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
          <form action="" onSubmit={createData}>
            <h1>Sign Up</h1>

            <input
              className="login-box"
              type="text"
              placeholder="Username"
              onChange={(e) => setCreateUsername(e.target.value)}
              required
            />
            <input
              className="login-box"
              type="password"
              placeholder="Password"
              onChange={(e) => setCreatePassword(e.target.value)}
              required
            />

            <input
              className="login-box"
              type="text"
              placeholder="Avatar URL"
              onChange={(e) => setCreatePhoto(e.target.value)}
              required
            />

            <button className="signup-btn" type="submit">
              SIGN UP!
            </button>
          </form>

          <Link to="/">
            <button className="signup-btn back-btn"> Back</button>{" "}
          </Link>
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
