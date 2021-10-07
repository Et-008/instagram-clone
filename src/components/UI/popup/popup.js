import React from "react";
import "./popup.css";
import Backdrop from '../Backdrop/Backdrop'

let ViewPic = (props) => {
  return (
    <div className="Popup-Background">
      <Backdrop onClick={props.ClosePopup} />
      <div style={{padding: props.padding}} className="PopupWindow">{props.children}</div>
    </div>
  );
};

export default ViewPic;
