import React, { useState } from "react";
import "./Login.css";

let Login = (props) => {
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");

  let clicked = (e) => {
    let LoginDetails = {
      name: Name,
      email: Email,
      password: Password
    };
    props.firebase.existingUser(LoginDetails.email, LoginDetails.password)
    .then(user => console.log("Signed in as : ", user))
    .catch(err => console.error("Login error : " + err));
    return props.AuthenticationStatus(LoginDetails);
  };
  return (
    <div className="Login_Signup_Container">
      <h3>Login</h3>
      <div className="Login-Form">
        <input
          className="Input_Areas"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Name"
          required
        ></input>
        <input
          className="Input_Areas"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="Email-Id"
          required
        ></input>
        <input
          className="Input_Areas"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        ></input>
        <button
          disabled={Name && Email && Password ? false : true}
          onClick={clicked}
        >
          Login
        </button>
      </div>
      <h5>
        Don't have an account?{" "}
        <span style={{ cursor: "pointer" }} onClick={props.NewUser}>
          Sign-up
        </span>
      </h5>
    </div>
  );
};

export default Login;
