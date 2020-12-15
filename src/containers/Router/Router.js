import React, { useState } from "react";
import { Route } from "react-router-dom";
import * as Routes from "../../constants/routes";
import Authentication from "../Auth/Auth";
import Layout from "../../components/Layout/Layout";
import UploadPost from "../../components/UploadPost/UploadPost";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

let router = (props) => {
  let [authenticated, setAuthenticated] = useState(false);
  let [user, setUser] = useState({});

  let authHandler = (userDetails) => {
    setUser(userDetails);
    setAuthenticated(true);
  };

  let logoutHandler = () => {
    setAuthenticated(false);
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
