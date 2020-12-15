import React from "react";
import { Link } from "react-router-dom";
import * as Routes from "../../../constants/routes";
import "./Toolbar.css";
import NavItems from "../NavItems/NavItems";

let toolbar = (props) => {
  return (
    <div className="Toolbar">
      <div className="Tools">
        <div className="InstaIcon">
          <p>
            <Link to={Routes.Home}>
              <i>Instacam</i>
            </Link>
          </p>
        </div>
        <input className="SearchBar" type="text" placeholder="search"></input>
        <div className="MobileFloatIcon">
          <p>O=</p>
          <p title="Logout" onClick={props.Logout}>
            =>
          </p>
        </div>
        <nav className="ToolBarNavigationItems">
          <NavItems />
        </nav>
        <button className="LogoutButton" onClick={props.Logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default toolbar;
