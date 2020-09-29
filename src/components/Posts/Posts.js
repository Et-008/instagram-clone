import React from "react";
import Images from "../../assets/Images/Images";
import Post from "./Post/Post";
import "./Posts.css";

let posts = (props) => {
  let postswithimages = [];
  Images.map((image) => {
    postswithimages.push(<Post key={image} ImageSource={image} />);
  });
  return <div className="Posts">{postswithimages}</div>;
};

export default posts;
