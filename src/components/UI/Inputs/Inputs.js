import React from "react";

export const TextInput = (props) => (
  <input
    value={props.value}
    placeholder={props.placeholder}
    onChange={(e) => props.onChange(e.target.value)}
    className="Input_Areas"
    type="text"
  />
);

export const TextArea = (props) => (
  <textarea
    value={props.value}
    placeholder={props.placeholder}
    onChange={(e) => props.onChange(e.target.value)}
    className="Text_Areas"
    type="text"
  />
);

export const ImageInput = (props) => (
  <input
    ref={props.ref}
    type="file"
    name="image"
    accept="image/gif, image/jpeg, image/png, image/svg, image/jpg"
    style={props.style}
    className={props.className}
  />
);