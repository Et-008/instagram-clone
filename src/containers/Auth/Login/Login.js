import React, { useState } from "react";
import "./Login.css";

let Login = (props) => {
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  return (
    <div className="Login_Signup_Container">
      Login to Continue
      <form className="Login-Form">
        <label className="Input_Label">
          Name:
          <input
            className="Input_Areas"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            required
          ></input>
        </label>
        <label className="Input_Label">
          Email-id:
          <input
            className="Input_Areas"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            required
          ></input>
        </label>
        <label className="Input_Label">
          Password:
          <input
            className="Input_Areas"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          ></input>
        </label>
        <button
          disabled={Name && Email && Password ? false : true}
          onClick={() => {
            let LoginDetails = {
              name: Name,
              email: Email,
              Password: Password
            };
            return props.AuthenticationStatus(LoginDetails);
          }}
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account? <span onClick={props.NewUser}>Sign-up</span>
      </p>
    </div>
  );
};

export default Login;
