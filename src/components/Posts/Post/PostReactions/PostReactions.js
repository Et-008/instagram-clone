import React, { useState } from "react";
import Icons from "../../../../assets/Icons/Icons";
import "./PostReactions.css";

let PostReaction = (props) => {
  let [HeartClasses, setHeartClasses] = useState("ReactionIconsHeart");
  let Like = () => {
    if (HeartClasses == "ReactionIconsHeart") {
      setHeartClasses("Liked");
    }
    if (HeartClasses == "Liked") {
      setHeartClasses("ReactionIconsHeart");
    }
  };
  return (
    <div className="PostReactions">
      <div className="ReactionIconsDiv">
        <div id="heart" onClick={() => Like()} className={HeartClasses}></div>
        <img className="ReactionIcons" alt="Comments" src={Icons.Comments} />
        <img className="ReactionIcons" alt="Messenger" src={Icons.Messenger} />
        <img
          className="ReactionIcons IconsRight"
          alt="Bookmark"
          src={Icons.Bookmark}
        />
      </div>
      <div className="ReactionStatus">
        <p>{props.NoOfLikes} Likes</p>
      </div>
    </div>
  );
};

export default PostReaction;
