import React, { useEffect, useState } from "react";
import "./Post.css";
import testingImage from "../../images/testing.png";
import { format } from "timeago.js";
import axios from "axios";
import Comments from "./Comments";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";

export default function Posts(post) {
  const [username, setUsername] = useState("");
  const [isComment, setIsComment] = useState(false);
  const [likeNumbers, setLikeNumbers] = useState(post.post.like);
  const [person, setPerson] = useState({});
  const [comments, setComments] = useState("");
  const [commentsArray, setCommentsArray] = useState(post.post.comments);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        `http://localhost:3001/api/post/username/${post.post.userId}`
      );
      setUsername(data.username);
      setPerson(data);
    }
    getData();
  }, []);

  async function likePost() {
    await axios.put(`http://localhost:3001/api/post/${post.post._id}/like`);
    setLikeNumbers(likeNumbers + 1);
  }

  async function uploadComments(e) {
    setCommentsArray(prev => {return [...prev, comments]});
    e.preventDefault();
    await axios.post(
      `http://localhost:3001/api/post/${post.post._id}/comments`,
      {
        newcomments: comments,
      }
    );
  }

  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="user-post-top">
          {person.profilePicture ? (
            <img
              className="user-post-top-img"
              src={person.profilePicture}
              alt=""
            />
          ) : (
            <NoAccountsIcon className="user-post-top-img" />
          )}
          <div className="user-post-top-intro">
            <div className="user-post-name">
              {username ? username : "Anonymous"}
            </div>
            <div className="user-post-time">{format(post.post.createdAt)}</div>
          </div>
        </div>
        <div className="user-post-description">
          {`Title: ${post.post.title} ${post.post.description}`}
        </div>
        <img
          className="user-post-image"
          src={post.post.picture ? post.post.picture : testingImage}
          alt=""
        />
        <div>
          <button onClick={likePost} className="user-post-button">
            👍 {likeNumbers}{" "}
          </button>
          <button
            className="user-post-button"
            onClick={() => {
              setIsComment(!isComment);
            }}
          >
            💭
          </button>
        </div>

        {isComment && (
          <Comments
            uploadComments={uploadComments}
            setComments={setComments}
            commentsArray={commentsArray}
          />
        )}
      </div>
    </div>
  );
}
