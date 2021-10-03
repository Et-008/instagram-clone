import React from "react";
import { Route } from "react-router-dom";
import * as Routes from "../../constants/routes";
import Layout from "../../components/Layout/Layout";
import UploadPost from "../../components/UploadPost/UploadPost";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

let Router = (props) => {
  return (
    <Layout Logout={props.Logout}>
      <Route
        path={Routes.Home}
        exact
        render={() => <Home User={props.user} />}
      />
      <Route path={Routes.Messenger} exact render={() => "Messenger"} />
      <Route path={Routes.Compass} exact render={() => "Explore"} />
      <Route path={Routes.Like} exact render={() => "Notifications"} />
      <Route path={Routes.Upload} exact render={() => <UploadPost />} />
      <Route
        path={Routes.MyProfile}
        exact
        render={() => <Profile User={props.user} />}
      />
      <Route
        path={`${Routes.OthersProfile}/:userName`}
        exact
        render={properties => {
          return <Profile OthersProfile User={{displayName: properties.match.params.userName}} />;
        }}
      />
    </Layout>
  );
};

export default Router;
