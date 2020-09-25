import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

let layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <div>{props.children}</div>
    </Aux>
  );
};

export default layout;
