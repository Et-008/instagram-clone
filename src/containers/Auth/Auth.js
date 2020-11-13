import React from "react";
import "./Auth.css";

let authentication = (props) => {
  return (
    <div className="Login_Signup">
      Login to Continue
      <form className="Login-Form">
        <label>
          Name :{" "}
          <input
            value={props.Name}
            onChange={() => props.Namechanged()}
            type="text"
            required
          ></input>
        </label>
        <label>
          Password :{" "}
          <input
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
