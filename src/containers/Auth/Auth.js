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
            onChange={() => props.Namechanged()}
            type="text"
            required
          ></input>
        </label>
        <label className="Input_Label">
          Passwordsvsdvs:
          <input
            className="Input_Areas"
            value={props.Password}
            onChange={() => props.PasswordChanged()}
            type="password"
            required
          ></input>
        </label>
      </form>
      <button
        disabled={props.Name && props.Password ? false : true}
        onClick={() => props.Authentication()}
      >
        Login
      </button>
    </div>
  );
};

export default authentication;
