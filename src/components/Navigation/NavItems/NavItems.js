import React from "react";
import NavItem from "./NavItem/NavItem";
import Icons from "../../../assets/Icons/Icons";
import "./NavItems.css";

let navitems = (props) => {
  return (
    <ul className="NavItems">
      <NavItem>
        <a href="/">
          <img alt="Icon" className="Icon" src={Icons.Home} />
        </a>
      </NavItem>
      <NavItem view={"WebsiteView"}>
        <a href="/Messenger">
          <img alt="Icon" className="Icon" src={Icons.Messenger} />
        </a>
      </NavItem>
      <NavItem>
        <a href="/Explore">
          <img alt="Icon" className="Icon" src={Icons.Compass} />
        </a>
      </NavItem>
      <NavItem view={"MobileView"}>
        <a href="/Upload">
          <img alt="Icon" className="Icon" src={Icons.Plus} />
        </a>
      </NavItem>
      <NavItem>
        <a href='/'>
          <img alt="Icon" className="Icon" src={Icons.Heart} />
        </a>
      </NavItem>
      <NavItem>
        <a href="/Profile">
          <img alt="Icon" className="Icon" src={Icons.User} />
        </a>
      </NavItem>
    </ul>
  );
};

export default navitems;
