import React from "react";
import "./PostTitle.css";

let title = (props) => {
  return (
    <div className="PostTitle">
      <div className="UserIcon">
        <img className='DP' alt="Title" src={props.dp} />
      </div>
      <div className="UserId">
        <p>
          <strong>{props.userName}</strong>
          <br></br>{props.location}
        </p>
      </div>
    </div>
  );
};

export default title;
