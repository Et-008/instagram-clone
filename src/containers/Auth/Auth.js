import React, { Component } from "react";
import FirebaseContext from "../../components/Firebase/FirebaseContext";
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
      <FirebaseContext.Consumer>
        {firebase => <Signup firebase={firebase} OldUser={this.LoginSignupHandler} AuthenticationStatus={this.AuthenticationHandler} />
        }
        </FirebaseContext.Consumer>
    ) : (
      <FirebaseContext.Consumer>
        {firebase => <Login firebase={firebase} NewUser={this.LoginSignupHandler} AuthenticationStatus={this.AuthenticationHandler} />
        }
      </FirebaseContext.Consumer>
    );
  }
}

export default Auth;
