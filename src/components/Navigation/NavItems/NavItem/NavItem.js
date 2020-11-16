import React from "react";
import "./NavItem.css";

let navitem = (props) => {
  let classes = ['NavItem', props.view]
  return <li className={classes.join(' ')}>{props.children}</li>;
};

export default navitem;
