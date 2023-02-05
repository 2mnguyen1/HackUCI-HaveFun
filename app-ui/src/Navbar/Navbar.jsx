import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Dashboard,
  Forum,
  AccountBox,
  Handyman,
  ExitToApp,
} from "@mui/icons-material";
import logo from "../images/helpfun-logo.png";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import axios from "axios";

export default function Navbar({ user, id }) {
  const styles = {
    backgroundColor: "#34E0A1",
  };
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");
  const [imgPopUp, setImgPopUp] = useState(false);

  async function uploadPic() {
    await axios.post(`http://localhost:3001/api/post/profilePic/${id}`, {
      profilePicture: imgUrl,
    });
  }

  function signOut() {
    localStorage.removeItem("MY-USER");
    navigate("/");
    window.location.reload();
  }
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
          {/* <Link className="navbar-element navbar-home" to="/login">
            <AccountBox className="nav-bar-icon" />
          </Link> */}
          <Link className="navbar-element navbar-home" to="/generator">
            <Handyman className="nav-bar-icon" />
          </Link>
        </div>
        <div
          className="navbar-elements-pics"
          onClick={() => {
            setImgPopUp(!imgPopUp);
          }}
        >
          {user?.profilePicture ? (
            <img className="navbar-profile" alt="" src={user?.profilePicture} />
          ) : (
            <NoAccountsIcon sx={{ fontSize: 50 }} className="no-account-icon" />
          )}
          <button className="sign-out" onClick={signOut}>
            <ExitToApp className="nav-bar-icon" />
          </button>
        </div>
        {imgPopUp && (
          <div className="img-popup2">
            <h1>Put Your Image URL Here!</h1>
            <input
              type="text"
              onChange={(e) => {
                setImgUrl(e.target.value);
              }}
              placeholder="URL"
              value={imgUrl}
            />
            <img
              className="popup-img"
              src={
                imgUrl === ""
                  ? "https://media.discordapp.net/attachments/688278789566103604/1071710018623246346/image.png"
                  : imgUrl
              }
              alt=""
            />
            <div className="popup-btn">
              <button
                onClick={() => {
                  setImgPopUp(false);
                }}
              >
                X
              </button>
              <button
                onClick={() => {
                  uploadPic();
                  setImgPopUp(false);
                }}
              >
                ✔️
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
