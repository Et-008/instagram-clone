import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import Icons from "../../../assets/Icons/Icons";
import "./NavItems.css";
import * as Routes from "../../../constants/routes";

let navitems = (props) => {
  return (
    <ul className="NavItems">
      <NavItem>
        <Link to={Routes.Home}>
          <img alt="Icon" className="Icon" src={Icons.Home} />
        </Link>
      </NavItem>
      <NavItem view={"WebsiteView"}>
        <Link to={Routes.Messenger}>
          <img alt="Icon" className="Icon" src={Icons.Messenger} />
        </Link>
      </NavItem>
      <NavItem>
        <Link to={Routes.Compass}>
          <img alt="Icon" className="Icon" src={Icons.Compass} />
        </Link>
      </NavItem>
      <NavItem view={"MobileView"}>
        <Link to={Routes.Upload}>
          <img alt="Icon" className="Icon" src={Icons.Plus} />
        </Link>
      </NavItem>
      <NavItem>
        <Link to={Routes.Like}>
          <img alt="Icon" className="Icon" src={Icons.Heart} />
        </Link>
      </NavItem>
      <NavItem>
        <Link to={Routes.Profile}>
          <img alt="Icon" className="Icon" src={Icons.User} />
        </Link>
      </NavItem>
    </ul>
  );
};

export default navitems;
