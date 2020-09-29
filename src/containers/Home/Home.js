import React from "react";
import FixedBoard from "../../components/FixedBoard/FixedBoard";
import Posts from "../../components/Posts/Posts";
import StatusBar from "../../components/StatusBar/StatusBar";
import "./Home.css";

let home = (props) => {
  return (
    <div className="MainPage">
      <div className="Feed">
        <StatusBar />
        <Posts />
      </div>
      <div className="SideContent">
        <FixedBoard />
      </div>
    </div>
  );
};

export default home;
