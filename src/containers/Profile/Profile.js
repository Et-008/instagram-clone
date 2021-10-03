import React, { useState } from "react";
import "./Profile.css";
import axios from "axios";
import { Row, Col, Container, Tabs, Tab } from "react-bootstrap";
import { IoSettingsOutline } from "react-icons/io5";
import PlaceHolderProfilePic from "../../assets/Images/download.png";
import { useEffect } from "react/cjs/react.development";
import EmptyState from "../../assets/Images/empty-state.jpg";
import Collections from "../../components/profile/collections/collections";
import Photos from "../../components/profile/collections/photos";
import EditProfile from "../../components/profile/edit-profile/edit-profile";

let Profile = (props) => {
  const [othersProfile, setOthersProfile] = useState();
  const [photos, setPhotos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isPhotosLoading, setIsPhotosLoading] = useState(true);
  const [editTabOpen, setEditTabOpen] = useState(false);

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
    }
  }, []);

  useEffect(() => {
    if (!isLoading && othersProfile.photos.length > 0) {
      setIsPhotosLoading(true);
      axios
        .get(
          `https://api.unsplash.com/users/${othersProfile.username}/photos?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY`
        )
        .then((photos) => {
          console.log(photos);
          setPhotos(photos.data);
          setIsPhotosLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [isLoading]);

  function toggleEdit() {
    setEditTabOpen(!editTabOpen);
  }

  if (props.OthersProfile) {
    return !isLoading ? (
      <>
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
                  <Collections userName={othersProfile.username} />
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
                  <Photos userName={othersProfile.username} />
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
        {editTabOpen ? <EditProfile userId={props.User.uid} toggleEdit={toggleEdit} /> : null}
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
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Profile;
