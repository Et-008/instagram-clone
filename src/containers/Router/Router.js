import React from "react";
import Layout from "../../components/Layout/Layout";
import UploadPost from "../../components/UploadPost/UploadPost";
// import Login from "../Auth/Login/Login";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import { Route } from "react-router-dom";
import * as Routes from "../../constants/routes";

let router = (props) => {
  return (
    <Layout>
      <Route path={Routes.Home} exact render={() => <Home />} />
      <Route path={Routes.Messenger} exact render={() => "Messenger"} />
      <Route path={Routes.Compass} exact render={() => "Explore"} />
      <Route path={Routes.Upload} exact render={() => <UploadPost />} />
      <Route path={Routes.Profile} exact render={() => <Profile />} />
      {/* <Route path="/Saved" exact render={() => "Saved"} />
      <Route path="/Login" exact render={() => "Login"} />
      <Route path="/SignUp" exact render={() => "Signup"} /> */}
    </Layout>
  );
};

export default router;
