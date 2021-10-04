import React, { Component } from "react";
import PostTitle from "./PostTitle/PostTitle";
import PostReactions from "./PostReactions/PostReactions";
import PostImage from "./PostImage/PostImage";
import Comments from "./Comments/Comments";
import NewComment from "../Post/Comments/NewComment/NewComment";
import "./Post.css";
import { Link } from "react-router-dom";

class Post extends Component {
  state = {
    value: "",
    postButtonStatus: false,
    likes: this.props.Likes,
    isLiked: false,
  };
  render() {
    return (
      <div className="Post">
        <Link
          to={{
            pathname: `/account/${this.props.profileName}`,
          }}
        >
          <PostTitle
            dp={this.props.displaypic}
            userName={this.props.userName}
            location={this.props.location}
          />
        </Link>
        <PostImage DoubleClick={() => {
          this.setState({...this.state, isLiked: true})
          }} ImageSource={this.props.ImageSource} />
        <PostReactions
          NoOfLikes={this.state.likes}
          ImageId={this.props.ImageId}
          UserId={this.props.UserId}
          ImageSource={this.props.ImageSource}
        />
        <Comments PostSource={this.props.ImageSource} NoOfComments={0} />
        <hr />
        <NewComment />
      </div>
    );
  }
}

export default Post;
