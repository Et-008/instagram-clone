import React, { useState } from "react";
import "./Signup.css";

let Signup = (props) => {
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Mobile, setMobile] = useState(" +91 ");
  let [Password, setPassword] = useState("");
  let [ConfirmPassword, setConfirmPassword] = useState("");

  let clicked = (e) => {
    let SignupDetails = {
      name: Name,
      email: Email,
      mobile: Mobile,
      password: Password,
      confirmPassword: ConfirmPassword
    };
    props.firebase.createNewUser(SignupDetails.email, SignupDetails.password)
    .then(user => console.log("Signed up as : " + user))
    .catch(err => console.error("Sign up error" + err))
    return props.AuthenticationStatus(SignupDetails);
  };
      return (
      <div className="Signup-Box">
        <h3>Sign up</h3>
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
          <div className="MobileNo">
            <input type="text" name="country" list="countrynames" />
            <datalist id="countrynames">
              <option value="India" />
              <option value="US" />
              <option value="China" />
            </datalist>
            <input
              className="Input_Areas"
              value={Mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="tel"
              pattern="[0-9]{10}"
              name="mobile"
              placeholder="Mobile number"
              maxLength="15"
              required
            />
          </div>
          <input
            className="Input_Areas"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          ></input>
          <input
            className="Input_Areas"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="ConfirmPassword"
            required
          ></input>
          <button
            disabled={
              Name && Email && Password && Password === ConfirmPassword
                ? false
                : true
            }
            onClick={clicked}
          >
            Sign-up
          </button>
        </div>
        <h5>
          Already have an account?{" "}
          <span style={{ cursor: "pointer" }} onClick={props.OldUser}>
            Login
          </span>
        </h5>
      </div>
  )
};

export default Signup;
