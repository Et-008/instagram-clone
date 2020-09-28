import React, { useState } from "react";
import Images from "../../../assets/Images/Images";
import "./Post.css";

let Post = (props) => {
  let postButtonStatus = false;
  let [value, setValue] = useState()
  let onChangeHandler = (e) => {
    setValue(e.target.value)
  }
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
        <input type="textarea" value={value} onChange={onChangeHandler} placeholder="Add Comments Here..." />
        <button disabled={value ? false : true} onClick={() => {return alert(value)}} >Post</button>
      </div>
    </div>
  );
};

export default Post;
