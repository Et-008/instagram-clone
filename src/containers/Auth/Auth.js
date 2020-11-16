import React from "react";
import "./Auth.css";

let authentication = (props) => {
  return (
    <div className="Login_Signup_Container">
      Login to Continue
      <form className="Login-Form">
        <label className="Input_Label">
          Name:
          <input
            className="Input_Areas"
            value={props.Name}
            onChange={(event) => props.Namechanged(event)}
            type="text"
            required
          ></input>
        </label>
        <label className="Input_Label">
          Passwordsvsdvs:
          <input
            className="Input_Areas"
            value={props.Password}
            onChange={(event) => props.PasswordChanged(event)}
            type="password"
            required
          ></input>
        </label>
      </form>
      <button
        disabled={props.Name && props.Password ? false : true}
        onClick={(event) => props.Authentication(event)}
      >
        Login
      </button>
    </div>
  );
};

export default authentication;
