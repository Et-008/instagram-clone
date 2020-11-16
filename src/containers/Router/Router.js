import React from "react";
import Layout from "../../components/Layout/Layout";
import UploadPost from "../../components/UploadPost/UploadPost";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import { Route } from "react-router-dom";

let router = (props) => {
  return (
    <Layout>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/Messenger" exact render={() => "Messenger"} />
      <Route path="/Explore" exact render={() => "Explore"} />
      <Route path="/Upload" exact render={() => <UploadPost/>} />
      <Route path="/Profile" exact render={() => <Profile />} />
      <Route path="/Saved" exact render={() => "Saved"} />
      <Route path="/Auth" exact render={() => "Auth"} />
    </Layout>
  );
};

export default router;
