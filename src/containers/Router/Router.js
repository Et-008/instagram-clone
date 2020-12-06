import React, { useState } from "react";
import { Route } from "react-router-dom";
import * as Routes from "../../constants/routes";
import Authentication from "../Auth/Auth";
import Layout from "../../components/Layout/Layout";
import UploadPost from "../../components/UploadPost/UploadPost";
// import Login from "../Auth/Login/Login";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

let router = (props) => {
  let [authenticated, setAuthenticted] = useState(false);
  let [user, setUser] = useState({});

  let authHandler = (userDetails) => {
    setUser(userDetails);
    setAuthenticted(true);
  };
  let logoutHandler = () => {
    setAuthenticted(false);
  };

  return authenticated ? (
    <Layout Logout={logoutHandler}>
      <Route path={Routes.Home} exact render={() => <Home User={user} />} />
      <Route path={Routes.Messenger} exact render={() => "Messenger"} />
      <Route path={Routes.Compass} exact render={() => "Explore"} />
      <Route path={Routes.Upload} exact render={() => <UploadPost />} />
      <Route
        path={Routes.Profile}
        exact
        render={() => <Profile User={user} />}
      />
    </Layout>
  ) : (
    <div>
      <Authentication AuthStatus={authHandler} />
    </div>
  );
};

export default router;
