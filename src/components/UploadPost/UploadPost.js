import React, { useState } from 'react';
import './UploadPost.css';

let UploadPost = () => {
    let [Img, setImg] = useState(<img className="UploadPreview" src={"https://www.transparenttextures.com/patterns/brushed-alum.png"} />);
    let Upload = (event) => {
        let SelectedImages = event.target.files;
        let ArrayofImages = [];
        console.log(SelectedImages);
        for (var i=0; i<SelectedImages.length; i++) {
            ArrayofImages.push(<img className="UploadPreview" src={URL.createObjectURL(SelectedImages[i])} />)
        };
        setImg(ArrayofImages);
    }
    return (
    <div className="Upload">
        {Img}
        <label for="file-upload" className="UploadInput">Select Upload Files
            <input id="file-upload" type="file" multiple onChange={Upload}></input>
        </label>
    </div>
    )
}

export default UploadPost;