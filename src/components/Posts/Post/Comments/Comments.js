import React from "react";
import Comment from "./Comment/Comment";
import "./Comments.css";

let comments = (props) => {
  let totalComments = [];
  for (let i = 0; i < props.NoOfComments; i++) {
    totalComments.push(<Comment key={props.PostSource + i} />);
  }
  return <div className="Comments">{totalComments}</div>;
};

export default comments;
