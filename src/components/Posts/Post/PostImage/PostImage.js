import React from "react";
import './PostImage.css'

let postImage = (props) => {
  return <img className="PostImage" onDoubleClick={props.DoubleClick} alt="Oops" src={props.ImageSource} />;
};

export default postImage;
