import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../../assets/Icons/Icons";
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
          <p><img className="Icon" alt="Search" src={Icons.Search} /></p>
          <p title="Logout" onClick={props.Logout}>
            <Link to={Routes.Home}>
              <img className="Icon" alt="Logout" src={Icons.Logout} />
            </Link>
          </p>
        </div>
        <nav className="ToolBarNavigationItems">
          <NavItems />
        </nav>
        <p title="Logout" onClick={props.Logout}>
          <Link to={Routes.Home}>
            <img className="Icon" alt="Logout" src={Icons.Logout} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default toolbar;
