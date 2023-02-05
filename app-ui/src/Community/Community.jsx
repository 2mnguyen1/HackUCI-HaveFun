import React, { useState, useEffect } from "react";
import "./Community.css";
import axios from "axios";
import Countdown from "react-countdown";
import Navbar from "../Navbar/Navbar";
import MemePosts from "../components/memePosts/MemePosts";

export default function Community({ user }) {
  const date = new Date();
  const [word, setWord] = useState("future");

  async function getData() {
    try {
      const results = await axios.get(
        `https://random-word-api.herokuapp.com/word`
      );
      // setWord(results.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const [imageURL, setImageURL] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState(user._id);

  async function createMeme() {
    await axios.post("http://localhost:3001/api/meme/creating/", {
      userId: userId,
      picture: imageURL,
      description: desc,
    });
  }

  const [allMemes, setAllMemes] = useState([]);
  useEffect(() => {
    async function getMemes() {
      const data = await axios.get("http://localhost:3001/api/meme/getMemes");
      setAllMemes(data.data);
    }
    getMemes();
  }, []);
  const components = allMemes.map((meme) => {
    return <MemePosts meme={meme} />;
  });

  return (
    <div>
      <Navbar user={user} />
      <div className="community-container">
        <div className="community-posting">
          <h1>Word of the Day</h1>

          <div className="wotd">
            <h1>{word}</h1>
          </div>
          <h3>Post your Meme here!</h3>
          <form action="" onSubmit={createMeme}>
            <p>Image URL</p>
            <input
              className="img-btn"
              placeholder="URL"
              onChange={(e) => setImageURL(e.target.value)}
              value={imageURL}
              required
            ></input>
            <p>Description</p>
            <textarea
              className="meme-textarea"
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              placeholder="Write!"
              required
            />
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
          <div className="posts-item-container">{components}</div>
        </div>
      </div>
    </div>
  );
}
