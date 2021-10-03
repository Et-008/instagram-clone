import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
// import Icons from "../../../../assets/Icons/Icons";
import { BsHeart, BsBookmark } from "react-icons/bs";
import {RiChat3Line} from 'react-icons/ri'
import { FiSend } from "react-icons/fi";
import "./PostReactions.css";

let PostReaction = (props) => {
  let [HeartClasses, setHeartClasses] = useState("");
  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    if (props.isLiked && HeartClasses === "") {
      Like();
    }
    // eslint-disable-next-line
  }, [props.isLiked]);

  let Like = () => {
    if (HeartClasses === "") {
      setHeartClasses("Liked");
    }
    if (HeartClasses === "Liked") {
      setHeartClasses("");
      props.SetDisliked();
    }
  };
  return (
    <div className="PostReactions">
      <div className="ReactionIconsDiv">
        {/* <div id="heart" onClick={() => Like()} className={HeartClasses}></div> */}
        <div onClick={() => Like()} className={`ReactionIcons ${HeartClasses}`}>
          {/* {HeartClasses === "Liked" ? <FcLike /> : <BsHeart />} */}
          <BsHeart />
        </div>
        <div className="ReactionIcons">
          <RiChat3Line />
        </div>
        <div className="ReactionIcons">
          <FiSend />
        </div>
        <div
          onClick={() => {
            setBookmark(!bookmark);
            props.BookmarkImage();
          }}
          className={`ReactionIcons IconsRight ${bookmark && "Bookmarked"}`}
        >
          {/* {bookmark === true ? <FcBookmark /> : <BsBookmark />} */}
          <BsBookmark />
        </div>
      </div>
      <div className="ReactionStatus">
        <p>
          {HeartClasses === "Liked" ? props.NoOfLikes + 1 : props.NoOfLikes}{" "}
          Likes
        </p>
      </div>
    </div>
  );
};

export default PostReaction;
