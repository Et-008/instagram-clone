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
    // eslint-disable-next-line
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

  const UserContext = createContext(null);

  // console.log("arun authStatus", UserContext);
  // console.log("arun authStatus", AuthStatus);

  return (
    <BrowserRouter>
      <div className="App">
        {AuthStatus === null ? (
          <div style={{ background: "black" }} className="lds-dual-ring"></div>
        ) : AuthStatus ? (
          <UserContext.Provider value={user}>
            <Router Logout={logoutHandler} user={user} />
          </UserContext.Provider>
        ) : (
          <AuthRoutes />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
