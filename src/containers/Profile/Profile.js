import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";
import { Row, Col, Container, Tabs, Tab } from "react-bootstrap";
import { IoSettingsOutline } from "react-icons/io5";
import PlaceHolderProfilePic from "../../assets/Images/download.png";
import Collections from "../../components/profile/collections/collections";
import Photos from "../../components/profile/collections/photos";
import EditProfile from "../../components/profile/edit-profile/edit-profile";
import UpdateFirebase from "../../constants/updateFirebase";
import ViewPic from "../../components/profile/view-pic/view-pic";

let Profile = (props) => {
  const [myProfile, setMyProfile] = useState();
  const [othersProfile, setOthersProfile] = useState();
  const [savedPhotos, setSavedPhotos] = useState([]);
  const [likedImages, setLikedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isPhotosLoading, setIsPhotosLoading] = useState(true);
  const [editTabOpen, setEditTabOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState("");

  useEffect(() => {
    if (props.OthersProfile) {
      setIsLoading(true);
      axios
        .get(
          `https://api.unsplash.com/users/${props.User.displayName}/?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY`
        )
        .then((res) => {
          setOthersProfile(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      UpdateFirebase.getSavedPosts(props.User.uid, savedPhotosHandler);
      UpdateFirebase.getLikedPosts(props.User.uid, likedPhotosHandler);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    UpdateFirebase.getUserData(props.User.uid, setMyProfile);
  }, [editTabOpen]);

  function savedPhotosHandler(image) {
    let savedPhotoArray = savedPhotos;
    savedPhotoArray.push(image);
    setSavedPhotos(savedPhotoArray);
  }

  function likedPhotosHandler(image) {
    let likedPhotoArray = likedImages;
    likedPhotoArray.push(image);
    setLikedImages(likedPhotoArray);
  }

  function toggleEdit() {
    setEditTabOpen(!editTabOpen);
  }

  function openImage(imageUrl) {
    setClickedImage(imageUrl);
  }

  function closeImage() {
    setClickedImage("");
  }

  if (props.OthersProfile) {
    return !isLoading ? (
      <>
        {clickedImage !== "" ? (
          <ViewPic ImageUrl={clickedImage} CloseView={closeImage} />
        ) : null}
        <div className="Profile">
          <Container>
            <div className="ProfileDetails">
              <Row>
                <Col xs={3}>
                  <div className="ProfilePic">
                    <img
                      alt="ProfilePic"
                      src={othersProfile.profile_image.large}
                    />
                  </div>
                </Col>
                <Col xs={9}>
                  <div className="Right">
                    <p className="UserName">{othersProfile.username}</p>
                    <div className="Connections">
                      <p>
                        <span>{othersProfile.total_collections}</span>{" "}
                        Collections
                      </p>
                      <p>
                        <span>{othersProfile.followers_count}</span> Followers
                      </p>
                      <p>
                        <span>{othersProfile.following_count}</span> Following
                      </p>
                      <p>
                        <span>{othersProfile.photos.length}</span> Photos
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="Bio">
                <Col sm={3}></Col>
                <Col>
                  <div>
                    <h3>{othersProfile.name}</h3>
                    <p>
                      {othersProfile.badge !== null &&
                        othersProfile.badge.title}
                    </p>
                    <p>{othersProfile.bio !== null && othersProfile.bio}</p>
                    <p>
                      <a href={othersProfile.links.html}>
                        {othersProfile.links.html}
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <Tabs
              defaultActiveKey="collections"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="collections" title="Collections">
                {othersProfile.total_collections > 0 ? (
                  <Collections
                    OpenImage={(ImageUrl) => openImage(ImageUrl)}
                    userName={othersProfile.username}
                  />
                ) : (
                  <div className="Empty-State">
                    <span>No Images Available</span>
                    <a href="https://www.freepik.com/vectors/data">
                      Data vector created by stories - www.freepik.com
                    </a>
                  </div>
                )}
              </Tab>
              <Tab eventKey="photos" title="Photos">
                {othersProfile.photos.length > 0 ? (
                  <Photos
                    OpenImage={(ImageUrl) => openImage(ImageUrl)}
                    userName={othersProfile.username}
                  />
                ) : (
                  <div className="Empty-State">
                    <span>No Images Available</span>
                    <a href="https://www.freepik.com/vectors/data">
                      Data vector created by stories - www.freepik.com
                    </a>
                  </div>
                )}
              </Tab>
            </Tabs>
          </Container>
        </div>
      </>
    ) : (
      <div className="lds-dual-ring"></div>
    );
  }
  return (
    <>
      <div className="Profile MyProfile">
        {clickedImage !== "" ? (
          <ViewPic ImageUrl={clickedImage} CloseView={closeImage} />
        ) : null}
        {editTabOpen ? (
          <EditProfile
            myProfileData={myProfile}
            userId={props.User.uid}
            toggleEdit={toggleEdit}
          />
        ) : null}
        <Container>
          <div className="ProfileDetails">
            <Row>
              <Col xs={3}>
                <div className="ProfilePic">
                  <img alt="ProfilePic" src={PlaceHolderProfilePic} />
                </div>
              </Col>
              <Col xs={9}>
                <div className="Right">
                  <p className="UserName">{props.User.displayName}</p>
                  <button onClick={toggleEdit}>
                    <IoSettingsOutline /> Edit profile
                  </button>
                  <div className="Connections">
                    <p>
                      <span>0</span> Collections
                    </p>
                    <p>
                      <span>0</span> Followers
                    </p>
                    <p>
                      <span>0</span> Following
                    </p>
                    <p>
                      <span>0</span> Photos
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            {myProfile && myProfile !== null ? (
              <Row className="Bio">
                <Col sm={3}></Col>
                <Col>
                  <div>
                    {myProfile.name ? <h3>{myProfile.name}</h3> : null}
                    {/* <p>
                    {othersProfile.badge !== null && othersProfile.badge.title}
                  </p> */}
                    {myProfile.bio !== null ? <p>{myProfile.bio}</p> : null}
                    {/* <p>
                    <a href={othersProfile.links.html}>
                      {othersProfile.links.html}
                    </a>
                  </p> */}
                  </div>
                </Col>
              </Row>
            ) : null}
          </div>
          <Tabs
            defaultActiveKey="saved"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="saved" title="Saved">
              {savedPhotos ? (
                <div className="GrideView Images">
                  <Row>
                    {savedPhotos.map((photo, i) => {
                      return (
                        <Col key={i} lg={4}>
                          <div>
                            <img
                              onClick={() => openImage(photo.url)}
                              className="Image"
                              src={photo.url}
                              alt="Loading"
                            />
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              ) : (
                <div className="Empty-State">
                  <span>No Images Available</span>
                  <a href="https://www.freepik.com/vectors/data">
                    Data vector created by stories - www.freepik.com
                  </a>
                </div>
              )}
            </Tab>
            <Tab eventKey="liked" title="Liked">
              {likedImages ? (
                <div className="GrideView Images">
                  <Row>
                    {likedImages.map((photo, i) => {
                      return (
                        <Col key={i} lg={4}>
                          <div>
                            <img
                              onClick={() => openImage(photo.url)}
                              className="Image"
                              src={photo.url}
                              alt="Loading"
                            />
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              ) : (
                <div className="Empty-State">
                  <span>No Images Available</span>
                  <a href="https://www.freepik.com/vectors/data">
                    Data vector created by stories - www.freepik.com
                  </a>
                </div>
              )}
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default Profile;
