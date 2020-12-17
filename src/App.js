import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthRoutes from './containers/Router/AuthRouter';
import Router from "./containers/Router/Router";

function App() {
  let [authenticated, setAuthenticated] = useState(false);
  let [user, setUser] = useState({});

  let authHandler = (userDetails) => {
    setUser(userDetails);
    setAuthenticated(true);
  };

  let logoutHandler = () => {
    setAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {authenticated ? <Router User={user} Logout={logoutHandler} /> : <AuthRoutes AuthStatus={authHandler} /> }
      </div>
    </BrowserRouter>
  );
}

export default App;
