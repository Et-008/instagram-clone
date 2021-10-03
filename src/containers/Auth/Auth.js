import React, { Component } from "react";
import FirebaseContext from "../../components/Firebase/FirebaseContext";
import './Auth.css';
import Login from "./Login/Login";
import Signup from "./Signup/Sign-up";
import Images from '../../assets/Images/Images';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: false,
      imageNumber: 1,
    };
  }

  imageChangeHandler = () => {
    setInterval(this.nextImage, 3000);
  }

  nextImage = () => {
    let currentNumber = this.state.imageNumber;
    if(currentNumber < 4) {
      this.setState({imageNumber: currentNumber + 1})
    }
    else {
      this.setState({imageNumber: 1})
    }
  }

  LoginSignupHandler = () => {
    let newUserState = this.state.newUser;
    this.setState({ newUser: !newUserState });
  };

  AuthenticationHandler = (Details) => {
    console.log(Details);
    this.props.Authenticated();
  };

  render() {
    return (
      <div className="Login_Signup_Page">
        <div className="Login">
          <div onLoad={this.imageChangeHandler} className="Mobile_Shapes">
            <img src={Images[0]} alt="Loading..."></img>
          </div>
          <div className="Mobile_Shapes">
            <img src={Images[this.state.imageNumber]} alt="Loading..."></img>
          </div>
        </div>
      <div className="Login_Signup_Container">
        <div className="Login_Signup_Form">
          <h4>Instacam</h4>
          {this.state.newUser ? (
          <FirebaseContext.Consumer>
            {firebase => <Signup firebase={firebase} OldUser={this.LoginSignupHandler} AuthenticationStatus={this.AuthenticationHandler} />
            }
            </FirebaseContext.Consumer>
          ) : (
          <FirebaseContext.Consumer>
            {firebase => <Login firebase={firebase} NewUser={this.LoginSignupHandler} AuthenticationStatus={this.AuthenticationHandler} />
            }
          </FirebaseContext.Consumer>
          )}
        </div>
      </div>
    </div>
  )
  }
}

export default Auth;
