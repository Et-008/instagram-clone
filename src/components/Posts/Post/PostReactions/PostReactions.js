import React, { useEffect, useState } from "react";
// import Icons from "../../../../assets/Icons/Icons";
import { BsHeart, BsBookmark } from "react-icons/bs";
import { RiChat3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import "./PostReactions.css";
import UpdateFirebase from "../../../../constants/updateFirebase";

let PostReaction = (props) => {
  // console.log(props);
  const [savedImages, setSavedImages] = useState([]);
  const [isSavedImage, setIsSavedImage] = useState(false);
  const [isLikedImage, setIsLikedImage] = useState(false);
  const [likedImages, setLikedImages] = useState([]);

  
  useEffect(() => {
    UpdateFirebase.getSavedPosts(props.UserId, (image) =>
      savedPhotosHandler(image)
    );
    UpdateFirebase.getLikedPosts(props.UserId, (image) =>
      likedPhotosHandler(image)
    );
  }, []);

  useEffect(() => {
    let imgStatus =
      likedImages.length > 0 &&
      likedImages.find((likedImage) => {
        return likedImage.id === props.ImageId;
      });
    setIsLikedImage(imgStatus);
  }, [likedImages]);

  useEffect(() => {
    let imgStatus =
      savedImages.length > 0 &&
      savedImages.find((savedPhoto) => {
        return savedPhoto.id === props.ImageId;
      });
    setIsSavedImage(imgStatus);
  }, [savedImages]);

  function savedPhotosHandler(image) {
    let savedPhotoArray = [...savedImages];
    savedPhotoArray.push(image);
    setSavedImages(savedPhotoArray);
  }

  function likedPhotosHandler(image) {
    let likedPhotoArray = [...likedImages];
    likedPhotoArray.push(image);
    setLikedImages(likedPhotoArray);
  }

  let Like = () => {
    if (!isLikedImage) {
      UpdateFirebase.likePosts(props.UserId, props.ImageId, props.ImageSource)
    }
  };

  let Save = () => {
    if (!isSavedImage) {
      UpdateFirebase.bookmarkPosts(props.UserId, props.ImageId, props.ImageSource)
    }
  };

  return (
    <div className="PostReactions">
      <div className="ReactionIconsDiv">
        {/* <div id="heart" onClick={() => Like()} className={HeartClasses}></div> */}
        <div onClick={Like} className={`ReactionIcons ${isLikedImage && "Liked"}`}>
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
          onClick={Save}
          className={`ReactionIcons IconsRight ${isSavedImage && "Bookmarked"}`}
        >
          {/* {bookmark === true ? <FcBookmark /> : <BsBookmark />} */}
          <BsBookmark />
        </div>
      </div>
      <div className="ReactionStatus">
        <p>
          {isSavedImage ? props.NoOfLikes + 1 : props.NoOfLikes}{" "}
          Likes
        </p>
      </div>
    </div>
  );
};

export default PostReaction;
