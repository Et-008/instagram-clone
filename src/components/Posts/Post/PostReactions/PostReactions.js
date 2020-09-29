import React from "react";
import Icons from "../../../../assets/Icons/Icons";
import "./PostReactions.css";

let PostReaction = (props) => {
  return (
    <div className="PostReactions">
      <div className="ReactionIconsDiv">
        <img className="Icon ReactionIcons" alt="Heart" src={Icons.Heart} />
        <img
          className="Icon ReactionIcons"
          alt="Comments"
          src={Icons.Comments}
        />
        <img
          className="Icon ReactionIcons"
          alt="Messenger"
          src={Icons.Messenger}
        />
        <img
          className="Icon ReactionIcons IconsRight"
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
