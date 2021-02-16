import React from "react";
import './Button.css'

export default function Button (props) {
    let Button_classes = "Button " + props.Color;
    return <button type={props.BtnType} className={Button_classes} onClick={props.Clicked} disabled={props.Disabled}>{props.children}</button>
}