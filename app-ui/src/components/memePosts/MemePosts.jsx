import axios from "axios";
import React, { useState, useEffect } from "react";
import "./memePosts.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ({ meme }) {
  const [username, setUsername] = useState();
  const [likeCount, setLikeCount] = useState(meme.like);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    async function getUsername() {
      const { data } = await axios.get(
        `http://localhost:3001/api/post/username/${meme.userId}`
      );
      setUsername(data.username);
    }
    getUsername();
  });

  async function likeAMeme() {
    await axios.put(`http://localhost:3001/api/meme/liking/${meme._id}`);
    setLikeCount((prev) => ++prev);
    setIsClick((prev) => !prev);
  }

  return (
    <div className="post-wrapper">
      <div id="posts-item">
        <img
          className="posts-item-img"
          alt=""
          src={
            meme.picture
              ? meme.picture
              : "https://th.bing.com/th/id/R.62d6f2ff829d7063e4281f7e59db7987?rik=UgzJAgN52ZfQnQ&riu=http%3a%2f%2fwww.drodd.com%2fimages11%2fmeme-faces1.png&ehk=DgWm8ubcWcUDHeSS0I7MeAPtDphp3mkssvAyPQ7Xll0%3d&risl=&pid=ImgRaw&r=0"
          }
        />
        <p>✔️ This is discription{meme.description}</p>

        <div className="meme-author">@{username}</div>
      </div>
      <div className="post-item-like">
        {
          <FavoriteIcon
            className="heart-icon"
            color={isClick ? "success" : ""}
            onClick={likeAMeme}
          />
        }
        <span>{likeCount}</span>
      </div>
    </div>
  );
}
