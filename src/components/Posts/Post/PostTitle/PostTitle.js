import React from "react";
import "./PostTitle.css";

let title = (props) => {
  return (
    <div className="PostTitle">
      <div className="UserIcon">
        <img className="smallImg" alt="Title" src={props.dp} />
      </div>
      <div className="UserId">
        <h6>{props.userName}</h6>
        {props.location && props.location !== "" ? (
          <p>
            {props.location}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default title;
