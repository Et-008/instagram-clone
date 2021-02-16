import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import Aux from "../../../hoc/Aux"
import "./Login.css";

let Login = (props) => {
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [LoginError, setLoginError] = useState(null);

  let clicked = (e) => {
    let LoginDetails = {
      name: Name,
      email: Email,
      password: Password
    };
    props.firebase.existingUser(LoginDetails.email, LoginDetails.password)
    .then(user => {
      if(user.code) {
        let error_message = null;
        if(user.code === "auth/invalid-email") {
          error_message = "The Mail id you entered is incorrect"
        }
        else if(user.code === "auth/user-not-found") {
          error_message = "This Mail id does not belong to a user account, please signup"
        }
        else if(user.code === "auth/wrong-password") {
          error_message = "The Mail id and Password does not match"
        }
        else {
          error_message = user.message;
        }
        console.log(user.code);
        console.log(user.message);
        setLoginError(error_message);
      }
      else {
        console.log("Signed in as : ", user)
        return props.AuthenticationStatus(LoginDetails);
      }
    })
    .catch(err => console.error("Login error : " + err));
  };
  return (
    <Aux>
      <input
        className="Input_Areas"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        placeholder="Username"
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
      <Button
        Disabled={Name && Email && Password ? false : true}
        Clicked={clicked} Color={"Blue"} BtnType={"button"}
      >
        Login
      </Button>
      {LoginError ? <h6 className="Error_Display" >{LoginError}</h6> : null}
      <h5>
        Don't have an account?{" "}
        <span className="Link" style={{ cursor: "pointer" }} onClick={props.NewUser}>
          Sign-up
        </span>
      </h5>
    </Aux>
  );
};

export default Login;
