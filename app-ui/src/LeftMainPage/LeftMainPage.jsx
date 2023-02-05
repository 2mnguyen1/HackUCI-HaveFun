import React, { useState, useEffect } from "react";
import "./LeftMainPage.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Posts from "../components/posts/Posts";
import axios from "axios";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";

export default function LeftMainPage(user) {
  const [allPosts, setAllPosts] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [isImgPopUp, setIsImgPopUp] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await axios.get("http://localhost:3001/api/post/timeline/");
      setAllPosts(data.data);
    }
    getData();
  }, []);

  const components = allPosts.map((post) => {
    return <Posts post={post} />;
  });

  const [postDescription, setpostDescription] = useState("");

  async function createPost() {
    const data = await axios.post("http://localhost:3001/api/post/posting", {
      userId: user.user._id,
      description: postDescription,
      picture: imgUrl,
    });
  }
  return (
    <div className="left-main-container">
      <form action="" onSubmit={createPost}>
        {isImgPopUp && (
          <div className="img-popup">
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
                  setIsImgPopUp(false);
                }}
              >
                X
              </button>
              <button
                onClick={() => {
                  setIsImgPopUp(false);
                }}
              >
                ✔️
              </button>
            </div>
          </div>
        )}
        <div className="left-main-wrapper">
          <div className="left-main-posting">
            <div className="post-top">
              {user.user.profilePicture ? (
                <img
                  className="post-top-img"
                  src={user.user.profilePicture}
                  alt=""
                />
              ) : (
                <NoAccountsIcon sx={{ fontSize: 40 }} />
              )}

              <input
                type="text"
                className="post-top-input"
                id="lname"
                name="lname"
                placeholder="Share your Fun!!"
                onChange={(e) => {
                  setpostDescription(e.target.value);
                }}
              ></input>
            </div>
            <div className="post-bottom">
              <div className="upload-icon">
                <AddPhotoAlternateIcon
                  className="upload-icon-mt"
                  onClick={() => {
                    setIsImgPopUp(true);
                  }}
                />
                <button className="post-bottom-button" type="submit">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>{components.reverse()}</div>
    </div>
  );
}
