import React, { useState, useEffect } from "react";
import "./MemeGenerator.css";
import Navbar from "../Navbar/Navbar";

export default function Meme({ user }) {
  const [memes, setMemes] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  return (
    <div>
      <Navbar user={user} id={user._id} />

      <div className="meme">
        <h1>Make Your Meme!</h1>
        <div className="meme-input">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={topText}
            onChange={(e) => {
              setTopText(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={bottomText}
            onChange={(e) => {
              setBottomText(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="form--input"
            name="imgUrl"
            value={imgUrl}
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
          />
        </div>
        <div className="meme-generated">
          <h2 className="top">{topText}</h2>
          <img
            src={
              imgUrl === ""
                ? "https://media.discordapp.net/attachments/688278789566103604/1071719517551595540/image.png"
                : imgUrl
            }
            className="meme--image"
          />

          <h2 className="bot">{bottomText}</h2>
        </div>
      </div>
    </div>
  );
}
