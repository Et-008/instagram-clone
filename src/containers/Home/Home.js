import React from "react";
import Layout from "../../components/Layout/Layout";
import FixedBoard from "../../components/FixedBoard/FixedBoard";
import Posts from "../../components/Posts/Posts";
import "./Home.css";

let home = (props) => {
  return (
    <Layout>
      <div className="MainPage">
        <div className="Feed">
          <header className="Status">StatusBar</header>
          <Posts />
        </div>
        <div className="SideContent">
          <FixedBoard />
        </div>
      </div>
    </Layout>
  );
};

export default home;
