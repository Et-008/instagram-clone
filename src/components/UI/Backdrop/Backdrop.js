import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./Backdrop.css";

export default function Backdrop (props) {
  return <div onClick={props.onClick} className="Backdrop"></div>;
};
