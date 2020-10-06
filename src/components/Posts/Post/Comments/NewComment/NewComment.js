import React, { useState } from "react";
import "./NewComment.css";

let NewComment = (props) => {
  let [inputValue, setInputValue] = useState("");
  return (
    <div className="NewComment">
      <input
        type="text"
        placeholder={"Add comments here..."}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        disabled={inputValue ? false : true}
        onClick={() => {
          return alert(inputValue);
        }}
      >
        Post
      </button>
    </div>
  );
};

export default NewComment;
