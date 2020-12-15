import React, { Component } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Sign-up";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: false
    };
  }

  LoginSignupHandler = () => {
    let newUserState = this.state.newUser;
    this.setState({ newUser: !newUserState });
  };

  AuthenticationHandler = (Details) => {
    console.log(Details);
    this.props.AuthStatus(Details);
  };

  render() {
    return this.state.newUser ? (
      <Signup
        OldUser={this.LoginSignupHandler}
        AuthenticationStatus={this.AuthenticationHandler}
      />
    ) : (
      <Login
        NewUser={this.LoginSignupHandler}
        AuthenticationStatus={this.AuthenticationHandler}
      />
    );
  }
}

export default Auth;
