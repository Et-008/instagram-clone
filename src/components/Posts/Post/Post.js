import React, { Component } from "react";
import PostTitle from "./PostTitle/PostTitle";
import PostReactions from "./PostReactions/PostReactions";
import PostImage from "./PostImage/PostImage";
import Comments from "./Comments/Comments";
import NewComment from "../Post/Comments/NewComment/NewComment";
import "./Post.css";

class Post extends Component {
  state = {
    value: "",
    postButtonStatus: false
  };
  render() {
    return (
      <div className="Post">
        <PostTitle />
        <PostImage ImageSource={this.props.ImageSource} />
        <PostReactions NoOfLikes={Math.floor(Math.random() * 1000)} />
        <Comments
          PostSource={this.props.ImageSource}
          NoOfComments={Math.floor(Math.random() * 10)}
        />
        <hr />
        <NewComment />
      </div>
    );
  }
}

export default Post;
