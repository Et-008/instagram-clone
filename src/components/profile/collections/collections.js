import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

const Collections = (props) => {
  const [collections, setCollections] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCollection();
    // eslint-disable-next-line
  }, [props.userName]);

  function getCollection() {
    axios
      .get(
        `https://api.unsplash.com/users/${props.userName}/collections/?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY`
      )
      .then((res) => {
        // console.log("rerendered");
        setCollections(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  // let getCollection = useMemo(() => {
  //   axios
  //     .get(
  //       `https://api.unsplash.com/users/${props.userName}/collections/?client_id=htn3ZJRkveEujzltUO7_r9bkczF-sy-SYLFEmZNkPhY`
  //     )
  //     .then((res) => {
  //       console.log("rerendered")
  //       setCollections(res.data);
  //       setIsLoading(false);
  //       return res.data;
  //     })
  //     .catch((err) => console.log(err));
  // }, [props.userName]);

  return isLoading ? (
    <div className="lds-dual-ring"></div>
  ) : (
    <div className="GrideView Images">
      <Row>
        {collections.map((coll, i) => {
          return (
            <Col lg={4}>
              <div>
                <img
                  onClick={() => props.OpenCollection(coll.id)}
                  className="Image"
                  src={coll.cover_photo.urls.full}
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

export default Collections;
