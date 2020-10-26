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
        <PostTitle dp={this.props.displaypic} userName={this.props.userName} location={this.props.location} />
        <PostImage ImageSource={this.props.ImageSource} />
        <PostReactions NoOfLikes={this.props.Likes} />
        <Comments
          PostSource={this.props.ImageSource}
          NoOfComments={0}
        />
        <hr />
        <NewComment />
      </div>
    );
  }
}

export default Post;
