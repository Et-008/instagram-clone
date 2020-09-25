import React from "react";
import NavItem from "./NavItem/NavItem";
import "./NavItems.css";

let navitems = (props) => {
  return (
    <ul className="NavItems">
      <NavItem>H</NavItem>
      <NavItem>T</NavItem>
      <NavItem>E</NavItem>
      <NavItem>O</NavItem>
      <NavItem>P</NavItem>
    </ul>
  );
};

export default navitems;
