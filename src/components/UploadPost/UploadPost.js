import React, { useState } from "react";
import "./UploadPost.css";

let UploadPost = () => {
  let [Img, setImg] = useState([]);
  let Upload = (event) => {
    let SelectedImages = event.target.files;
    let ArrayofImages = [];
    for (var i = 0; i < SelectedImages.length; i++) {
      ArrayofImages.push(
        <img
          className="UploadPreview"
          alt="https://www.transparenttextures.com/patterns/brushed-alum.png"
          src={URL.createObjectURL(SelectedImages[i])}
        />
      );
    }
    if (ArrayofImages.length) {
      setImg(ArrayofImages);
    }
  };
  return (
    <div className="Upload">
      {Img.length ? (
        Img
      ) : (
        <label for="file-upload" className="UploadSelect">
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={Upload}
          ></input>
        </label>
      )}

      <label className="UploadInput">
        Title
        <input type="text"></input>
      </label>
      <button type="button" onClick={alert("Hola")} className="UploadInput">Post</button>
    </div>
  );
};

export default UploadPost;
