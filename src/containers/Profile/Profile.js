import React from "react";
import "./Profile.css";

let Profile = (props) => {
  return (
    <div>
      <h1>In Progress</h1>
      <div className="Profile">
        <div className="ProfileDetails">
          <img alt="ProfilePic" />
          <p className="UserName">{props.User.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
