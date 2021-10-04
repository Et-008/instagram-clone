import React, { useEffect, useRef, useState } from "react";
import "./edit-profile.css";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Backdrop from "../../UI/Backdrop/Backdrop";
import PlaceHolderProfilePic from "../../../assets/Images/download.png";
import { TextInput, TextArea } from "../../UI/Inputs/Inputs";
import Button from "../../UI/Button/Button";
import UpdateFirebase from "../../../constants/updateFirebase";

let EditProfile = (props) => {
  let imageUploadRef = useRef();
  const [name, setName] = useState(props.myProfileData.name);
  const [bio, setBio] = useState(props.myProfileData.bio);
  // const [imageUri, setImageUri] = useState();
  const [previewImage, setPreviewImage] = useState(null);
  const data = {
    name: name,
    bio: bio,
    // image: in-progress,
  };

  function submit() {
    // if(currentData && currentData !== null) {
    // let userData = UpdateFirebase.getUserData(props.userId)
    // console.log(userData)
    // let updatedData = {...userData}
    UpdateFirebase.writeUserData(props.userId, data, props.toggleEdit);
    // }
  }

  function openImageUpload() {
    imageUploadRef.current.click();
  }

  function updateImage() {
    let ImageFile = convertImageToUri(imageUploadRef.current.files[0]);
    axios({
        method: 'post',
        url: `${process.env.REACT_APP_GRAPHCMS}/upload`,
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_PAT}`,
        },
        data: ImageFile,
    })
  }

  function convertImageToUri(file) {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <Backdrop onClick={props.toggleEdit} />
      <div className="PopupWindow">
        <Row>
          <Col xs={3}>
            <div className="ProfilePic" onClick={openImageUpload}>
              {/* <ImageInput
                ref={imageUploadRef}
                style={{ display: "none" }} /> */}
              <input
                ref={imageUploadRef}
                type="file"
                name="image"
                onChange={updateImage}
                accept="image/gif, image/jpeg, image/png, image/svg, image/jpg"
                style={{ display: "none" }}
              />
              <img
                alt="ProfilePic"
                src={
                  previewImage !== null ? previewImage : PlaceHolderProfilePic
                }
              />
            </div>
          </Col>
          <Col>
            <TextInput value={name} placeholder="Name" onChange={(val) => setName(val)} />
            <TextArea value={bio} placeholder="Bio" onChange={(val) => setBio(val)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button Clicked={props.toggleEdit}>cancel</Button>
          </Col>
          <Col>
            <Button Clicked={submit} Color="Blue">
              save
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EditProfile;
