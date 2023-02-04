import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Dashboard, Forum, AccountBox, Handyman } from "@mui/icons-material";
import logo from "../images/helpfun-logo.png";

export default function Navbar() {
  const styles = {
    backgroundColor: "#34E0A1",
  };
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <img className="navbar-logo-icon" alt="" src={logo} />
          <span className="logo-icon-name">HelpFun</span>
        </div>
        <div className="navbar-elements">
          <Link className="navbar-element navbar-home" to="/">
            <Dashboard className="nav-bar-icon" />
          </Link>

          <Link className="navbar-element navbar-home" to="/community">
            <Forum className="nav-bar-icon" />
          </Link>
          <Link className="navbar-element navbar-home" to="/login">
            <AccountBox className="nav-bar-icon" />
          </Link>
          <Link className="navbar-element navbar-home" to="/community">
            <Handyman className="nav-bar-icon" />
          </Link>
        </div>
        <div className="navbar-profile"></div>
      </div>
    </div>
  );
}
