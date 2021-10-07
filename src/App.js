import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import AuthRoutes from "./containers/Router/AuthRouter";
import Router from "./containers/Router/Router";
// import FirebaseContext from "./components/Firebase/FirebaseContext";
import "./App.css";

function App() {
  let firebaseApp = getAuth();
  let [user, setUser] = useState();
  let [AuthStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
    onAuthStateChanged(firebaseApp, (user) => {
      if (user) {
        setUser(user);
        setAuthStatus(true);
      } else {
        console.log("no user Found");
        setAuthStatus(false);
      }
    });
  }

  let logoutHandler = () => {
    signOut(firebaseApp)
      .then(() => {
        setAuthStatus(false);
        window.history.pushState("home", "login/signup", "/");
      })
      .catch((err) => console.log(err));
  };

  const userContext = console.log(
    "App.js Auth status",
    AuthStatus ? "Logged In" : "Failed"
  );

  console.log("arun authStatus", AuthStatus);

  return (
    <BrowserRouter>
      <div className="App">
        {AuthStatus === null ? (
          <div style={{background: "black"}} className="lds-dual-ring"></div>
        ) : AuthStatus ? (
          <Router Logout={logoutHandler} user={user} />
        ) : (
          <AuthRoutes />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
