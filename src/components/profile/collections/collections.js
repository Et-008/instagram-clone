import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

const Collections = (props) => {
  const [collections, setCollections] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/users/${props.userName}/collections/?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY`
      )
      .then((res) => {
        setCollections(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.userName]);

  return isLoading ? (
    <div className="lds-dual-ring"></div>
  ) : (
    <div className="GrideView Images">
      <Row>
        {collections.map((coll) => {
          return (
            <Col lg={4}>
              <div>
                <img
                  className="Image"
                  src={coll.cover_photo.urls.full}
                  alt="Image Loading"
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Collections;
