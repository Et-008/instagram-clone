import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

const Photos = (props) => {
  const [photos, setPhotos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/users/${props.userName}/photos/?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY`
      )
      .then((res) => {
        setPhotos(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.userName]);

  return isLoading ? (
    <div className="lds-dual-ring"></div>
  ) : (
    <div className="GrideView Images">
      <Row>
      {photos.map((photo) => {
          return (
            <Col lg={4}>
              <div>
                <img
                  onClick={() => props.OpenImage(photo.urls.full)}
                  className="Image"
                  src={photo.urls.full}
                  alt="Loading"
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Photos;
