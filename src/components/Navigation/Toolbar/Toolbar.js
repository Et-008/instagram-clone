import React from "react";
import "./Toolbar.css";
import NavItems from "../NavItems/NavItems";

let toolbar = (props) => {
  return (
    <div className="Toolbar">
      <div className="Tools">
        <div className="InstaIcon">
          <p>
            <i>Instacam</i>
          </p>
          {/*<img className="Logo" alt="Home" src={Icons.Instagram} />*/}
        </div>
        <input className="SearchBar" type="text" placeholder="search"></input>
        <nav className="ToolBarNavigationItems">
          <NavItems />
        </nav>
      </div>
    </div>
  );
};

export default toolbar;
