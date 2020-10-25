import React from "react";
import "./PostTitle.css";

let title = (props) => {
  return (
    <div className="PostTitle">
      <div className="UserIcon">
        <img className='DP' src={props.dp} />
      </div>
      <div className="UserId">
        <p>
          <strong>{props.userName}</strong>
          <br></br>location
        </p>
      </div>
    </div>
  );
};

export default title;
