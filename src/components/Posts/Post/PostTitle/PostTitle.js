import React from "react";
import "./PostTitle.css";

let title = (props) => {
  return (
    <div className="PostTitle">
      <div className="UserIcon">
        <p>:-)</p>
      </div>
      <div className="UserId">
        <p>
          <strong>DP, user.name</strong>
          <br></br>location
        </p>
      </div>
    </div>
  );
};

export default title;
