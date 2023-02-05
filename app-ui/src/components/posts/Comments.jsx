import React, { useEffect, useState } from "react";
import "./Comments.css";

export default function Comments(prop) {
  console.log(prop);
  const commentsMap = prop.commentsArray
    .map((ele) => {
      return <div className="comments">{ele}</div>;
    })
    .reverse();
  return (
    <>
      <div className="comments-container">
        <form onSubmit={prop.uploadComments} method="get" className="infoForm">
          <input
            className="comment-input"
            onChange={(e) => {
              prop.setComments(e.target.value);
            }}
            type="text"
            id="commentinput"
            name="comments"
            required
          />
          <button className="comment-btn" type="submit">
            POST
          </button>
        </form>
        {commentsMap}
      </div>
    </>
  );
}
