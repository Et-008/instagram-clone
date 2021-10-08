import React, { useState, useEffect } from "react";
import axios from "axios";
import PopupWindow from "../../UI/popup/popup";
import { Col, Row } from "react-bootstrap";
import PostImage from "../../Posts/Post/PostImage/PostImage";
// import PostReaction from "../../Posts/Post/PostReactions/PostReactions";

let ViewPic = (props) => {
  const [collection, setCollection] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCollection();
    // eslint-disable-next-line
  }, [props.CollectionId]);

  function getCollection() {
    axios
      .get(
        `https://api.unsplash.com/collections/${props.CollectionId}?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY`
      )
      .then((res) => {
        setCollection(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <PopupWindow padding="0 0" ClosePopup={props.CloseView}>
        <div className="View-Pic">
          <Row>
            <Col xs={6}>
              {!isLoading ? collection.preview_photos.map((coll, i) => {
                return <PostImage key={i} ImageSource={coll.urls.full} />;
              }) : <div className="lds-dual-ring"></div> }
            </Col>
            <Col>
              {/* <PostReaction 
          NoOfLikes={}
          ImageId={}
          UserId={}
          ImageSource={}/> */}
            </Col>
          </Row>
        </div>
      </PopupWindow>
    </>
  );
};

export default ViewPic;
