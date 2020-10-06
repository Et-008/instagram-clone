import React from "react";
import "./Profile.css";

let profile = (props) => {
  return (
    <div>
      <div className="Profile">
        <div className="ProfileDetails">
          <img alt="ProfilePic" />
          <p>
            <a className="UserName" href="/Profile">
              user name
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default profile;
