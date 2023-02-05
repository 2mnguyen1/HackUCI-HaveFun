import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Login({ setUser, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function getData(e) {
    e.preventDefault();
    try {
      const results = await axios.post("http://localhost:3001/api/auth/login", {
        username: username,
        password: password,
      });
      setUser(results.data);
      window.localStorage.setItem("MY-USER", JSON.stringify(results.data));
    } catch (err) {
      console.log(err);
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

          <form action="" onSubmit={getData}>
            <h1>Login</h1>

            <input
              className="login-box"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="login-box"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div>
              <button className="login-btn" type="submit">
                + LOGIN
              </button>
              <Link to="/register">
                <button className="signup-btn">SIGN UP!</button>
              </Link>
            </div>
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
