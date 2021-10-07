import React from "react";
import "./view-pic.css";
import PopupWindow from "../../UI/popup/popup";
import { Col, Row } from "react-bootstrap";
import PostImage from "../../Posts/Post/PostImage/PostImage";
import PostReaction from "../../Posts/Post/PostReactions/PostReactions";

let ViewPic = (props) => {
  return (
    <>
      <PopupWindow padding="0 0" ClosePopup={props.CloseView}>
        <div className="View-Pic">
          <Row>
            <Col xs={6}>
              <PostImage ImageSource={props.ImageUrl} />
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
