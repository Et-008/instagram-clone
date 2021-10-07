import React from "react";
import axios from "axios";
import Post from "./Post/Post";
import Aux from "../../hoc/Aux";
import "./Posts.css";

class Posts extends React.Component {
  state = {
    postWithImages: [],
    images: [],
    collections: [],
    collectionData: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/collections/?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY"
      )
      .then((response) => {
        this.setState({...this.state, collections: response.data });
        if (this.state.collections) {
          let Arr = [];
          this.state.collections.map((collection) => {
            axios
              .get(
                "https://api.unsplash.com/collections/" +
                  collection.id +
                  "/photos/?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY"
              )
              .then((res) => {
                let data = {
                  collectionId: collection.id,
                  collection: res,
                };
                Arr.push(data);
                if (Arr.length > 9) {
                  this.setState({...this.state, collectionData: Arr });
                }
              });
            return true;
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    this.state.collectionData.map((data) => {
      var result = this.state.collections.find((obj) => {
        return obj.id === data.collectionId;
      });
      data.collection.data.map((image, i) => {
        this.state.postWithImages.push(
          <Post
            key={image.id + i + new Date().getMilliseconds()}
            ImageSource={image.urls.full}
            displaypic={result.user.profile_image.small}
            location={result.user.location}
            userName={result.user.first_name + " " + result.user.last_name}
            profileName={result.user.username}
            Likes={image.likes}
            ImageId={image.id}
            UserId={this.props.User.uid}
          />
        );
        return true;
      });
      return true;
    });
    return (
      <Aux>
        <div className="Posts">
          {this.state.postWithImages.length ? (
            this.state.postWithImages
          ) : (
            <div className="lds-dual-ring"></div>
            // <Post
            //   ImageSource={
            //     "https://i.pinimg.com/originals/3a/7e/77/3a7e77196fc3bdcac8807c1c736a3d0f.jpg"
            //   }
            //   displaypic={
            //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7FfWrqJ5ro7SdxlBsnmCo_mwrnRly5mHUg&usqp=CAU"
            //   }
            //   location={"No Place"}
            //   userName="Network Error"
            //   Likes="0"
            // />
          )}
        </div>
        <div className="Footer">
          <div>
            About, Help, Press, Contact, API, Jobs, Privacy
            <br></br> Terms, Locations
          </div>
          <hr />
          <footer>
            <strong>
              <i>Project by Arun ET</i>
            </strong>
          </footer>
        </div>
      </Aux>
    );
  }
}

export default Posts;
