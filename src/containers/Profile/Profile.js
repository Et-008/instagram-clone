import React, { useState } from "react";
import "./Profile.css";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import PlaceHolderProfilePic from "../../assets/Images/download.png";
import { useEffect } from "react/cjs/react.development";
import EmptyState from "../../assets/Images/empty-state.jpg"

let Profile = (props) => {
  const [othersProfile, setOthersProfile] = useState();
  const [photos, setPhotos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isPhotosLoading, setIsPhotosLoading] = useState(true);

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

  if (props.OthersProfile) {
    return !isLoading ? (
      <>
        <div className="Profile">
          <div className="ProfileDetails">
            <img alt="ProfilePic" src={othersProfile.profile_image.large} />
            <div className="Right">
              <p className="UserName">{othersProfile.username}</p>
              <div className="Connections">
                <p>
                  <span>{othersProfile.total_collections}</span> Collections
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
              <div className="Bio">
                <h3>{othersProfile.name}</h3>
                <p>{othersProfile.bio !== null && othersProfile.bio}</p>
                <p>
                  <a href={othersProfile.links.html}>
                    {othersProfile.links.html}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {isPhotosLoading ? (
          othersProfile.photos.length > 0 ? (
            <div className="lds-dual-ring"></div>
          ) : (
            <div className="Empty-State">
              {/* <img src={EmptyState} alt="Empty" /> */}
              <span>No Images Available</span>
              <a href="https://www.freepik.com/vectors/data">
                Data vector created by stories - www.freepik.com
              </a>
            </div>
          )
        ) : (
          <div className="GrideView Images">
            <Row>
              {photos.map((photo) => {
                return (
                  <Col lg={4}>
                    <img
                      className="Image"
                      src={photo.urls.full}
                      alt="Loading"
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
      </>
    ) : (
      <div className="lds-dual-ring"></div>
    );
  }
  return (
    <div className="Profile">
      <div className="ProfileDetails">
        <img alt="ProfilePic" src={PlaceHolderProfilePic} />
        <p className="UserName">{props.User.displayName}</p>
      </div>
    </div>
  );
};

export default Profile;
