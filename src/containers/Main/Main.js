import React from "react";
import Layout from "../../components/Layout/Layout";
import FixedBoard from "../../components/FixedBoard/FixedBoard";
import "./Main.css";

let main = (props) => {
  return (
    <Layout>
      <div className="MainPage">
        <div className="Feed">
          <header className="Status">StatusBar</header>
          <main className="Posts">props.children</main>
        </div>
        <div className="SideContent">
          <FixedBoard />
        </div>
      </div>
    </Layout>
  );
};

export default main;
