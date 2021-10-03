import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import AuthRoutes from "./containers/Router/AuthRouter";
import Router from "./containers/Router/Router";
// import FirebaseContext from "./components/Firebase/FirebaseContext";
import "./App.css";

function App() {
  let firebaseApp = getAuth();
  let [user, setUser] = useState();
  let [AuthStatus, setAuthStatus] = useState();

  useEffect(() => {
    // let userData = async () => {
      getUserData();
    // }
  });

  function getUserData() {
    onAuthStateChanged(firebaseApp, (user) => {
      if (user) {
        setUser(user)
      } else {
        console.log("no user Found");
      }
      authHandler();
    });
  }

  let authHandler = () => {
    // AuthStatus !== localStorage.getItem("authStatus") && setAuthStatus(localStorage.getItem("authStatus"));
    setAuthStatus(localStorage.getItem("authStatus"));
  };

  let logoutHandler = () => {
    // localStorage.getItem("authStatus") === null && setAuthStatus("");
    signOut(firebaseApp)
      .then(() => {
        localStorage.removeItem("authStatus");
        setAuthStatus("");
        window.history.pushState('home', 'login/signup', '/');
      })
      .catch((err) => console.log(err));
  };

  console.log("App.js Auth status", AuthStatus);

  return (
    <BrowserRouter>
      <div className="App">
        {AuthStatus === ("LoggedIn" || "SignedUp") ? (
          <Router Logout={logoutHandler} user={user} />
        ) : (
          <AuthRoutes Authenticated={authHandler} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
