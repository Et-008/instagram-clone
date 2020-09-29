import React from "react";
import Layout from "../../components/Layout/Layout";
import Home from "../Home/Home";
import { Route } from "react-router-dom";

let router = (props) => {
  return (
    <Layout>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/Messenger" exact render={() => "Messenger"} />
      <Route path="/Explore" exact render={() => "Explore"} />
      <Route path="/Profile" exact render={() => "Profile"} />
      <Route path="/Saved" exact render={() => "Saved"} />
    </Layout>
  );
};

export default router;
