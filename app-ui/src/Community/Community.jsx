import React from "react";
import "./Community.css";

export default function Community() {
  return (
    <div className="community-container">
      <div className="community-posting">
        <h3>Post your work here!</h3>
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
        <h1>How has the Community helped?</h1>
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
  );
}
