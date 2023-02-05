import React, { useState, useEffect } from "react";
import "./Community.css";
import axios from "axios";
import Countdown from "react-countdown";
import Navbar from "../Navbar/Navbar";

export default function Community() {
  const date = new Date();
  const [word, setWord] = useState("");

  async function getData() {
    try {
      const results = await axios.get(
        `https://random-word-api.herokuapp.com/word`
      );
      setWord(results.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="community-container">
        <div className="community-posting">
          <h1>Word of the Day</h1>
          {/* random generated word */}
          <div className="wotd">
            <h1>{word}</h1>
          </div>
          <h3>Post your Meme here!</h3>
          <form action="">
            <p>Image</p>
            <button className="img-btn">+</button>
            <p>Description</p>
            <textarea name="" id="" cols="30" rows="10" />
            <button className="form-btn" type="submit">
              + POST
            </button>
          </form>
        </div>
        <div className="community-posts">
          <h1>Today's Challenge</h1>
          <div className="community-time">
            <p>Submission Closes</p>
            <h1>
              <Countdown date={Date.now() + 77999999} />
            </h1>
          </div>
          <div className="posts-container">
            <div>
              <div className="posts-item">1</div>
              <p>✔️ I helped carry a table</p>
              <p>📍 Garden Grove</p>
            </div>
            <div>
              <div className="posts-item">2</div>
              <p>✔️ I helped carry a table</p>
              <p>📍 Garden Grove</p>
            </div>
            <div>
              <div className="posts-item">3</div>
              <p>✔️ I helped carry a table</p>
              <p>📍 Garden Grove</p>
            </div>
            <div>
              <div className="posts-item">4</div>
              <p>✔️ I helped carry a table</p>
              <p>📍 Garden Grove</p>
            </div>
            <div>
              <div className="posts-item">5</div>
              <p>✔️ I helped carry a table</p>
              <p>📍 Garden Grove</p>
            </div>
            <div>
              <div className="posts-item">6</div>
              <p>✔️ I helped carry a table</p>
              <p>📍 Garden Grove</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
