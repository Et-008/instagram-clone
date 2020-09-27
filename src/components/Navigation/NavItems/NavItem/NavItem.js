import React from "react";
import "./NavItem.css";

let navitem = (props) => {
  return <li className="NavItem">{props.children}</li>;
};

export default navitem;
