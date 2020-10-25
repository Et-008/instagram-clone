import React from "react";
import NavItem from "./NavItem/NavItem";
import Icons from "../../../assets/Icons/Icons";
import "./NavItems.css";

let navitems = (props) => {
  return (
    <ul className="NavItems">
      <NavItem>
        <a href="/">
          <img alt="Icon" className="Icon WebsiteView" src={Icons.Home} />
        </a>
      </NavItem>
      <NavItem>
        <a href="/Messenger">
          <img alt="Icon" className="Icon WebsiteView" src={Icons.Messenger} />
        </a>
      </NavItem>
      <NavItem>
        <a href="/Explore">
          <img alt="Icon" className="Icon WebsiteView" src={Icons.Compass} />
        </a>
      </NavItem>
      <NavItem>
        <a href='/'>
          <img alt="Icon" className="Icon WebsiteView" src={Icons.Heart} />
        </a>
      </NavItem>
      <NavItem>
        <a href="/Profile">
          <img alt="Icon" className="Icon WebsiteView" src={Icons.User} />
        </a>
      </NavItem>
    </ul>
  );
};

export default navitems;
