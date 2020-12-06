import React, { Component } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

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

  render() {
    return this.state.newUser ? (
      <Signup
        OldUser={this.LoginSignupHandler}
        AuthenticationStatus={this.props.AuthStatus}
      />
    ) : (
      <Login
        NewUser={this.LoginSignupHandler}
        AuthenticationStatus={this.props.AuthStatus}
      />
    );
  }
}

export default Auth;
