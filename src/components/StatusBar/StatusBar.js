import React from "react";
import "./StatusBar.css";
import Status from "./Status/Status";

let statusBar = (props) => {
  let NoOfStatus = [];
  for (let i = 0; i < 45; i++) {
    NoOfStatus.push(<Status key={i} />);
  }
  return <div className="StatusBar">{NoOfStatus}</div>;
};

export default statusBar;
