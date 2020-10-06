import React from "react";
import Images from "../../assets/Images/Images";
import Post from "./Post/Post";
import Aux from "../../hoc/Aux";
import "./Posts.css";

let posts = (props) => {
  let postswithimages = [];
  Images.map((image) => {
    postswithimages.push(<Post key={image} ImageSource={image} />);
  });
  return (
    <Aux>
      <div className="Posts">{postswithimages}</div>
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
};

export default posts;
