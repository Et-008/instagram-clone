import React, { useState } from "react";
import Auth from "../Auth/Auth";
import "./Profile.css";

let profile = (props) => {
  let [authenticated, setAuthenticted] = useState(false);
  let [Name, setName] = useState("");
  let [Password, setPassword] = useState("");
  let authenticate = () => {
    setAuthenticted(true);
  };
  let NameChangeHandler = () => {
    setName(event.target.value);
  };
  let PasswordChangeHandler = () => {
    setPassword(event.target.value);
  };
  return authenticated ? (
    <div>
      <h1>In Progress</h1>
      <div className="Profile">
        <div className="ProfileDetails">
          <img alt="ProfilePic" />
          <p>
            <a className="UserName" href="/Profile">
              {Name}
            </a>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <Auth
      Name={Name}
      Password={Password}
      Namechanged={(event) => NameChangeHandler()}
      PasswordChanged={(event) => PasswordChangeHandler()}
      Authentication={(event) => authenticate()}
    />
  );
};

export default profile;
