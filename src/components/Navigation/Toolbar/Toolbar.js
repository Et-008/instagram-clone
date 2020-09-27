import React from "react";
import "./Toolbar.css";
import NavItems from "../NavItems/NavItems";
//import SearchIcon from '../../../assets/Search.png'
import Images from "../../../assets/Images/Images";

let toolbar = (props) => {
  return (
    <div className="Toolbar">
      <div className="Tools">
        <div>
          <img className="Logo" alt="Home" src={Images.Instagram} />
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
