import React from "react";
import NavItem from "./NavItem/NavItem";
import Images from "../../../assets/Images/Images";
import "./NavItems.css";

let navitems = (props) => {
  return (
    <ul className="NavItems">
      <NavItem>
        <img alt="Icon" className="Icon WebsiteView" src={Images.Home} />
      </NavItem>
      <NavItem>
        <img alt="Icon" className="Icon WebsiteView" src={Images.Messenger} />
      </NavItem>
      <NavItem>
        <img alt="Icon" className="Icon WebsiteView" src={Images.Compass} />
      </NavItem>
      <NavItem>
        <img alt="Icon" className="Icon WebsiteView" src={Images.Heart} />
      </NavItem>
      <NavItem>
        <img alt="Icon" className="Icon WebsiteView" src={Images.User} />
      </NavItem>
    </ul>
  );
};

export default navitems;
