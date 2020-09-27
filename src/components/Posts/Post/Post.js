import React from "react";
import Images from "../../../assets/Images/Images";
import "./Post.css";

let post = (props) => {
  return (
    <div className="Post">
      <div>
        <p>( )</p>
      </div>
      <div>
        <p>
          <strong>DP, user.name</strong>
          <br></br>location
        </p>
      </div>
      <img className="PostImage" alt="Image" src="" />
      <div>
        <div>
          <img className="Icon" alt="Heart" src={Images.Heart} />
          <img className="Icon" alt="Comments" src={Images.Comments} />
          <img className="Icon" alt="Messenger" src={Images.Messenger} />
        </div>
        <img className="Icon" alt="Bookmark" src={Images.Bookmark} />
      </div>
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
