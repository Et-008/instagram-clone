import React from "react";
import "./Post.css";

let post = (props) => {
  return (
    <div className="Post">
      <div>
        <text>( )</text>
      </div>
      <div>
        <p>
          <strong>DP, user.name</strong>
          <br></br>location
        </p>
      </div>
      <img className="PostImage" alt="Image" src="" />
      <i>Like, comment, share</i>
      <p>Comments...</p>
      <p>Comments...</p>
      <p>Comments...</p>
      <div className="NewComment">
        <input type="textarea" placeholder="Add Comments Here..." />
        <button>Post</button>
      </div>
    </div>
  );
};

export default post;
