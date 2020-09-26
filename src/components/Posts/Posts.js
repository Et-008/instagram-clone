import React from "react";
import Post from "./Post/Post";
import "./Posts.css";

let posts = (props) => {
  return (
    <div className="Posts">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default posts;
