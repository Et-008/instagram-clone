import React, { Component } from "react";
import PostTitle from "./PostTitle/PostTitle";
import PostReactions from "./PostReactions/PostReactions";
import PostImage from "./PostImage/PostImage";
import Comments from "./Comments/Comments";
import "./Post.css";

class Post extends Component {
  state = {
    value: "",
    postButtonStatus: false
  };
  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="Post">
        <PostTitle />
        <PostImage ImageSource={this.props.ImageSource} />
        <PostReactions NoOfLikes={Math.floor(Math.random() * 1000)}/>
        <Comments
          PostSource={this.props.ImageSource}
          NoOfComments={Math.floor(Math.random() * 10)}
        />
        <hr />
        <div className="NewComment">
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChangeHandler}
            placeholder="Add Comments Here..."
          />
          <button
            disabled={this.state.value ? false : true}
            onClick={() => {
              return alert(this.state.value);
            }}
          >
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default Post;
