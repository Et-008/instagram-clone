import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

let layout = (props) => {
  return (
    <Aux>
      <Toolbar Logout={props.Logout} />
      <div className="Children">{props.children}</div>
    </Aux>
  );
};

export default layout;
