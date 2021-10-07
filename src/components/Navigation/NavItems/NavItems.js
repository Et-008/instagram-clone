import React from "react";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";
import Icons from "../../../assets/Icons/Icons";
import "./NavItems.css";
import * as Routes from "../../../constants/routes";

let navitems = (props) => {
  function toTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <ul className="NavItems">
      <NavItem>
        <Link onClick={toTheTop} to={Routes.Home}>
          <img alt="Icon" className="Icon" title="Home" src={Icons.Home} />
        </Link>
      </NavItem>
      {/* <NavItem view={"WebsiteView"}>
        <Link to={Routes.Messenger}>
          <img
            alt="Icon"
            className="Icon"
            title="Messenger"
            src={Icons.Messenger}
          />
        </Link>
      </NavItem> */}
      {/* <NavItem>
        <Link to={Routes.Compass}>
          <img
            alt="Icon"
            className="Icon"
            title="Explore"
            src={Icons.Compass}
          />
        </Link>
      </NavItem> */}
      <NavItem view={"MobileView"}>
        <Link to={Routes.Upload}>
          <img alt="Icon" className="Icon" title="Upload" src={Icons.Plus} />
        </Link>
      </NavItem>
      {/* <NavItem>
        <Link to={Routes.Like}>
          <img
            alt="Icon"
            className="Icon"
            title="Notifications"
            src={Icons.Heart}
          />
        </Link>
      </NavItem> */}
      <NavItem>
        <Link to={Routes.MyProfile}>
          <img alt="Icon" className="Icon" title="Profile" src={Icons.User} />
        </Link>
      </NavItem>
      <NavItem>
        <FaPowerOff className="Icon" onClick={props.Logout} />
      </NavItem>
    </ul>
  );
};

export default navitems;
